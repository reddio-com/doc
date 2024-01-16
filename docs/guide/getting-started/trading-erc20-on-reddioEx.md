# Introduction

ReddioEx actively supports ERC20 token exchanges. If you're looking to trade ERC20 tokens, begin your journey with our comprehensive guide. Carefully curated to enhance your trading experience, it's the ideal starting point for your ERC20 token exchange endeavors.

Here is a step by step guide to go through ERC20 token exchanges
1. Identifying Your Trading Pair: Initially, you are required to establish your trading token pair, using the ERC20 address as crucial parameters.
2. Exploring the Pair Depth: Proceed to examine the depth of your chosen pair. This step ensures that sufficient depth is present for your trading process.
3. Order Placement: Upon verifying the depth, go ahead and place your order. The flexibility of Reddio's system allows for hassle-free execution of this step.
4. Order Result Consultation: If necessary, Reddio empowers you to query your order’s result. This ensures transparency and grants you direct oversight over your trading activities.

## Identifying Your Trading Pair
Mirroring conventional exchanges, each transaction necessitates two types of tokens: a base token and a quote token. Jointly, they form what's referred to as a 'token pair'.
We use base_contract and quote_contract as parameter

## Exploring the Pair Depth
ReddioEx provides depth API to query the particular pair
here is an example
`https://api-dev.reddio.com/v1/depth?base_contract=0x46e90d58815Fc5A9132c6eBBF77909ab7ACf2667&quote_contract=0x22fd56249e4C60541e85E597Fc564AfE1170F6D7`

it returns like
```
{
  "status": "OK",
  "error": "",
  "error_code": 0,
  "data": {
    "bids": [
      [
        "5",
        "302"
      ],
      [
        "2",
        "100"
      ]
    ],
    "asks": null
  }
}
```

You can view the data field, the first is bids, every element on bids or asks is an array, the first element is price, the second is volume， in this demo, the market has 302 token sell for 5, and 100 token sell for 2.

After you have the depth. Next you can exchange your token to another token

