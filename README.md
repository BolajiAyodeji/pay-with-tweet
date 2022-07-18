# pay-with-tweet

A demo Pay With Tweet external payment gateway. To get started and learn more about this demo, kindly read the comprehensive tutorial on [Commerce Layer's blog](#).

---

Update the `.env.template` file or add your credentials in a `.env` file:

```bash
CL_SHARED_SECRET=""
CL_TWITTER_ID=""
TW_BEARER_TOKEN=""
```

Start the local server:

```bash
npm run start
```

Start a ngrok HTTP tunnel listening for HTTP/HTTPS traffic on port 9000:

```bash
ngrok http 9000
```

Create a new payment gateway using the [CLI](https://github.com/commercelayer/commercelayer-cli):

```bash
cl res:create external_gateways -a \
    name="Pay With Tweet"
```

Create a payment method:

```bash
cl res:create payment_methods -a \
    payment_source_type="ExternalPayment" \
    currency_code="USD" \
    price_amount_cents=0 -r \
    market="FlqxGhKrFg" \
    payment_gateway="BkXMMsBDGa"
```

Create an external payment:

```bash
cl res:create external_payments -a \
    payment_source_token="testTokeN1234"
```

Create and place an order:

```bash
cl resources:update orders/GHrQkxDVPS -a _place=true
```
