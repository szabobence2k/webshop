const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, credentials: true }));

//stripe secret key
const stripe = require("stripe")("sk_test_51MoAb7F2lsjejWaj5oIBoh7YXhPvZBURaisD3I4LG1RPBJSSpu8eISwQoKKRMi26qyl5wqBNdvB6uEoYFSug8inW00EBdJjzop");

app.post("/checkout", async (req, res, next) => {

    try {
        const session = await stripe.checkout.sessions.create({
            shipping_address_collection: {allowed_countries: ['HU']},
            shipping_options: [
                {
                  shipping_rate_data: {
                    type: 'fixed_amount',
                    fixed_amount: {amount: 0, currency: 'huf'},
                    display_name: 'Ingyenes kiszállítás',
                    delivery_estimate: {
                      minimum: {unit: 'business_day', value: 5},
                      maximum: {unit: 'business_day', value: 7},
                    },
                  },
                },
                {
                    shipping_rate_data: {
                      type: 'fixed_amount',
                      fixed_amount: {amount: 150000, currency: 'huf'},
                      display_name: 'Szállítás futárszolgálattal',
                      delivery_estimate: {
                        minimum: {unit: 'business_day', value: 2},
                        maximum: {unit: 'business_day', value: 3},
                      },
                    },
                  },
              ],

            line_items: req.body.items.map((item) => ({
                price_data: {
                currency: 'huf',
                product_data: {
                    name: item.name,
                    images: [item.product],
                },
                unit_amount: item.price * 100,
            },
                quantity: item.quantity,
            })),
            mode: "payment",
            success_url: "http://localhost:4242/success.html",
            cancel_url: "http://localhost:4242/cancel.html",
        });

        res.status(200).json(session);
    }
    catch (error) {
        next(error);
    }
});

app.listen(4242, () => console.log('Stripe API is running on 4242'));
