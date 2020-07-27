const LIST_ID = process.env.MAILCHIMP_LIST_ID;
const API_KEY = process.env.MAILCHIMP_API_KEY;

const Mailchimp = require("mailchimp-api-v3");
const mailchimp = new Mailchimp(API_KEY);

function getMembers(req, res) {
  mailchimp
    .get(
      `/lists/${LIST_ID}/members?fields=members.id,members.email_address,members.status`
    )
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      res.status(err.status ? err.status : 400).json(err);
    });
}

module.exports = getMembers;
