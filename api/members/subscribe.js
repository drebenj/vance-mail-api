const middy = require("middy");
const { cors } = require("middy/middlewares");

const LIST_ID = process.env.MAILCHIMP_LIST_ID;
const API_KEY = process.env.MAILCHIMP_API_KEY;

const Mailchimp = require("mailchimp-api-v3");
const mailchimp = new Mailchimp(API_KEY);

const subscribe = async (req, res) => {
  const data = {
    email_address: req.body.email,
    status: "subscribed",
  };
  mailchimp
    .post(`/lists/${LIST_ID}/members`, data)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(err.status ? err.status : 400).json(err);
    });
};

const handler = middy(subscribe).use(cors());
module.exports = { handler };
