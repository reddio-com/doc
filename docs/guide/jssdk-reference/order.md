# Order
## Place an order on Reddio.


**Parameters**

---
<strong style='color:red'>*</strong>**amount** <strong style='color:#8792a2'>string</strong>

The amount you wish to buy/sell.

---

<strong style='color:red'>*</strong>**amount_buy**  <strong style='color:#8792a2'>string</strong>

The amount you wish to buy/sell, for buyer it's the token you wish to buy, for seller it's the price you want to sell.

---
<strong style='color:red'>*</strong>**amount_sell** <strong style='color:#8792a2'>string</strong>

The amount you wish to buy/sell, for buyer it's the currency you wish to give for the token.

---
<strong style='color:red'>*</strong>**token_buy** <strong style='color:#8792a2'>string</strong>

For buyer, it's token you wish to buy, for seller it's the amount currency you wish to sell.

---
<strong style='color:red'>*</strong>**token_sell** <strong style='color:#8792a2'>string</strong>

For seller, it's token you wish to sell, for buyer it's the amount currency you wish to give for the token.

---
<strong style='color:red'>*</strong>**base_token** <strong style='color:#8792a2'>string</strong>

For seller it's the currency used for selling the token.

---
<strong style='color:red'>*</strong>**vault_id_buy** <strong style='color:#8792a2'>string</strong>

For buyers, it’s the vault ID used to pay.

---
<strong style='color:red'>*</strong>**vault_id_sell** <strong style='color:#8792a2'>string</strong>

For sellers, it’s the vault ID used to sell.

---
<strong style='color:red'>*</strong>**expiration_timestamp** <strong style='color:#8792a2'>int64</strong>

Expiration timestamp.

---
<strong style='color:red'>*</strong>**nonce** <strong style='color:#8792a2'>int64</strong>

The nonce for account_id.

---
<strong style='color:red'>*</strong>**signature** <strong style='color:#8792a2'>struct</strong>

The signature for the transaction, can be calculated by [https://github.com/reddio-com/red-py-sdk](https://github.com/reddio-com/red-py-sdk).

---
<strong style='color:red'>*</strong>**account_id** <strong style='color:#8792a2'>string</strong>

The account_id.

---
<strong style='color:red'>*</strong>**direction** <strong style='color:#8792a2'>int</strong>

The direction for transaction, 0 is for ASK, 1 is for BID.

---
<strong style='color:red'>*</strong>**fee_info** <strong style='color:#8792a2'>struct</strong>

The currency used for order.

```jsx
POST /v1/order
```

Seller example

```jsx
curl https://api-dev.reddio.com/v1/order -H 'content-type: application/json' -d \
'{
   "amount":"1",
   "amount_buy":"1000",
   "amount_sell":"1",
   "token_buy":"0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
   "price":"1000",
   "token_sell":"0x400fcfa0889b788c49ecdbe90b494b4dc692532467466b88c1179779096a163",
   "quote_token":"0x400fcfa0889b788c49ecdbe90b494b4dc692532467466b88c1179779096a163",
   "base_token":"0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
   "vault_id_buy":"21535787",
   "vault_id_sell":"21639066",
   "expiration_timestamp":4194303,
   "nonce":52,
   "signature":{
      "r":"0x54a0add087576b75244236dc2d53befdaacd5e5bb01dd988f7b34d7349844e7",
      "s":"0x38c262afd2a0132759cd3c7eb37c52107bf29aa0438a7832c5be7cdbc7a9849"
   },
   "account_id":"0x13b314ccfe334151abc7e1ab50c4c5d77f8941777d1616cb381d9d9b2273bdb",
   "direction":0,
   "fee_info":{
        "fee_limit":5,
        "token_id":"0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
        "source_vault_id":21535787
        }
}'
```

Buyer example

```jsx
curl https://api-dev.reddio.com/v1/order -H 'content-type: application/json' -d \
'{
   "amount":"1",
   "amount_buy":"1",
   "amount_sell":"1000",
   "token_buy":"0x400fcfa0889b788c49ecdbe90b494b4dc692532467466b88c1179779096a163",
   "price":"1000",
   "token_sell":"0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
   "quote_token":"0x400fcfa0889b788c49ecdbe90b494b4dc692532467466b88c1179779096a163",
   "base_token":"0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
   "vault_id_buy":"21648107",
   "vault_id_sell":"21433994",
   "expiration_timestamp":4194303,
   "nonce":52,
   "signature":{
      "r":"0x4d308e89375fb3d6eaea836aa6615f6e52a4842da3b2d2de73b53996da7e082",
      "s":"0x2d532e42c43756a179496245c124acf082418081f0b3f94522e9bc5fc0f914"
   },
   "account_id":"0x3d2161b60487fb223760e586efaf70004ddc018b53b8cdb39cb75ef4b4e25f7",
   "direction":1,
   "fee_info":{
	"fee_limit":5,
	"token_id":"0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
	"source_vault_id":21433994
	}
}'
```