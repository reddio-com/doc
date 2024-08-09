# Sign

When you are making a transfer, in payload there is a field called `signature`, this page covers how to create that signature.

Currently you can refer to [https://github.com/reddio-com/red-py-sdk/blob/main/redpysdk/starkex_utils.py#L46-L51](https://github.com/reddio-com/red-py-sdk/blob/main/redpysdk/starkex_utils.py#L46-L51) for reference.

**Python signature demo**

Helper functions

```python
from signature import FIELD_PRIME, pedersen_hash

def get_msg(
        instruction_type: int, vault0: int, vault1: int, amount0: int, amount1: int, token0: int,
        token1_or_pub_key: int, nonce: int, expiration_timestamp: int,
        hash=pedersen_hash, condition: Optional[int] = None) -> int:
    """
    Creates a message to sign on.
    """
    packed_message = instruction_type
    packed_message = packed_message * 2**31 + vault0
    packed_message = packed_message * 2**31 + vault1
    packed_message = packed_message * 2**63 + amount0
    packed_message = packed_message * 2**63 + amount1
    packed_message = packed_message * 2**31 + nonce
    packed_message = packed_message * 2**22 + expiration_timestamp
    if condition is not None:
        # A message representing a conditional transfer. The condition is interpreted by the
        # application.
        return hash(hash(hash(token0, token1_or_pub_key), condition), packed_message)

    return hash(hash(token0, token1_or_pub_key), packed_message)

def get_transfer_msg(
        amount: int, nonce: int, sender_vault_id: int, token: int, receiver_vault_id: int,
        receiver_public_key: int, expiration_timestamp: int,
        hash=pedersen_hash, condition: Optional[int] = None) -> int:
    """
    Transfer `amount` of `token` from `sender_vault_id` to `receiver_vault_id`.
    The transfer is conditional only if `condition` is given.
    """
    assert 0 <= sender_vault_id < 2**31
    assert 0 <= receiver_vault_id < 2**31
    assert 0 <= amount < 2**63
    assert 0 <= token < FIELD_PRIME
    assert 0 <= receiver_public_key < FIELD_PRIME
    assert 0 <= nonce < 2**31
    assert 0 <= expiration_timestamp < 2**22

    TRANSFER = 1
    CONDITIONAL_TRANSFER = 2
    instruction_type = CONDITIONAL_TRANSFER if condition else TRANSFER
    assert condition is None or 0 <= condition < FIELD_PRIME

    return get_msg(
        instruction_type, sender_vault_id, receiver_vault_id, amount, 0, token, receiver_public_key,
        nonce, expiration_timestamp, hash=hash, condition=condition)

def get_signature_local(data):
    private_key = data["sender_private_key"]
    data = {'amount': int(data["amount"]), 
            'nonce': int(data["nonce"]),
            'sender_vault_id': int(data["sender_vault_id"]),
            'token': int(data["asset_id"],16),
            'receiver_vault_id': int(data["receiver_vault_id"]),
            'receiver_public_key': int(data["receiver"],16),
            'expiration_timestamp': int(data["expiration_timestamp"])}
    transfer_msg = get_transfer_msg(**data)
    r, s = sign(transfer_msg, int(private_key,16))
    return hex(r), hex(s)

def get_transfer_data(data):
    r, s = get_signature_local(data)
    original_transfer_data = {}
    original_transfer_data['amount'] = data['amount']
    original_transfer_data['nonce'] = int(data['nonce'])
    original_transfer_data['vault_id'] = data['sender_vault_id']
    original_transfer_data['receiver_vault_id'] = data['receiver_vault_id']
    original_transfer_data['stark_key'] = data["stark_key"]
    original_transfer_data['receiver'] = data["receiver"]
    original_transfer_data['signature'] = {"r": r, "s": s}
    original_transfer_data['asset_id'] = data['asset_id']
    original_transfer_data['expiration_timestamp'] = int(data['expiration_timestamp'])
    return original_transfer_data

```

Actual sign logic, your payload is ready on `transfer_data` variable.

```python
quantum = 1
asset_id =  hex(get_asset_id(token_type, contract, quantum, tokenID))
vault_id = get_vault_id(sender_starkkey, asset_id)
receiver_vault_id = get_vault_id(receiver, asset_id)
nonce = get_nonce(sender_starkkey)
data = {}
data['asset_id'] = str(asset_id)
data['receiver_vault_id'] = str(receiver_vault_id)
data['sender_vault_id'] = str(vault_id)
data['nonce'] = str(nonce)
data['sender_private_key'] = str(stark_private_key)
data['amount'] = "1"
data['receiver'] = str(receiver)
data['expiration_timestamp'] = str(expiration_timestamp)
data['stark_key'] = str(sender_starkkey)

transfer_data = get_transfer_data(data)
```