const LIST_ID = process.env.MAILCHIMP_LIST_ID;
const API_KEY = process.env.MAILCHIMP_API_KEY;

const Mailchimp = require("mailchimp-api-v3");
const mailchimp = new Mailchimp(API_KEY);

module.exports = async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
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
