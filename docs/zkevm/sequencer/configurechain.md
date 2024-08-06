
# Configure Your Blockchain

We will walk you through how you can use Yu Framework configure two types of blockchain, one is EVM compatible L2, the other is Starknet compatible L2.

## EVM Compatible L2

Here's how the 'EVM' tripod is configured. You can find details [here](https://github.com/reddio-com/reddio/blob/main/evm/eth.go).

```javascript

type Solidity struct {
	*tripod.Tripod
	ethState    *EthState
	cfg         *GethConfig
	stateConfig *config.Config
}

func newEVM(cfg *GethConfig) *vm.EVM {
	return vm.NewEVM(blockContext, txContext, 
    cfg.State, cfg.ChainConfig, cfg.EVMConfig)
}

func (s *Solidity) ExecuteTxn(ctx *context.WriteContext) (err error) {
	txReq := new(TxRequest)
	err = ctx.BindJson(txReq)

	vmenv := newEVM(cfg)
	vmenv.StateDB = pending_state.NewPendingState(s.ethState.stateDB)


	sender := vm.AccountRef(txReq.Origin)
	rules := cfg.ChainConfig.Rules(vmenv.Context.BlockNumber, 
    vmenv.Context.Random != nil, vmenv.Context.Time)

	if txReq.Address == zeroAddress {
		return executeContractCreation(txReq, ethstate, cfg, 
        vmenv, sender, rules)
	} else {
		return executeContractCall(txReq, ethstate, cfg, vmenv, 
        sender, rules)
	}
}

```
Next, import both the 'EVM' and 'POA' tripods into Yu's startup function:

```javascript
func main() {
	yuCfg := startup.InitDefaultKernelConfig()
	poaCfg := poa.DefaultCfg(0)
	gethCfg := evm.LoadEvmConfig(path)
	StartUpChain(yuCfg, poaCfg, gethCfg)
}
```

With that, a sequencer compatible with Solidity smart contracts is done. The overview diagram would roughly look like this:

![sequencerdiagram](/sequencer-diagram.png)

## Starknet Compatible L2

Similarly, let's take a closer look at the core logic of the "Cairo" tripod, with some details omitted for brevity, for detailed implementation, you can refer to [here](https://github.com/reddio-com/itachi/blob/main/cairo/cairo.go):

```rust
type Cairo struct {
    *tripod.Tripod
    cairoVM       vm.VM
    cairoState    *CairoState
}

func NewCairo(cairoVM  vm.VM,  cairoState  *CairoState) *Cairo {
    cairo :=  &Cairo{
        Tripod:  tripod.NewTripod(),
        cairoVM: cairoVM,
        cairoState: cairoState,
    }

    cairo.SetWritings(cairo.ExecuteTxn)
    return cairo
}

func (c *Cairo)  ExecuteTxn(ctx *context.WriteContext) error {
    tx := new(TxRequest)
    ctx.BindJson(tx)
    receipt , err := c.cairoVM.execute(c.cairoVM, c.cairoState, tx)
    if err != nil {
        return err
    }
    ctx.EmitExtra(receipt)
}
```

Next, import both the ‘Cairo’ and ‘POA’ tripods into Yu's startup function:

```rust
func main() {
    poaTripod := poa.NewPoa()
    cairoTripod := cairo.NewCairo(cairoVM, cairoState)
    startup.DefaultStartup(poaTripod, cairoTripod)
}
```

With that, a sequencer compatible with Cairo contracts is easily completed. 