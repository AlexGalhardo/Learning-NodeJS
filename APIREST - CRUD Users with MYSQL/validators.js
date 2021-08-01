const db_connection = require("./db-connection").promise();
const { body, param, validationResult } = require("express-validator");

module.exports = {
  // User name and email Validation
  userInfo: [
    body("name", "The name must be of minimum 3 characters length")
      .optional()
      .isLength({ min: 3 })
      .trim()
      .unescape()
      .escape(),

    body("email", "Invalid email address")
      .optional()
      .trim()
      .unescape()
      .escape()
      .isEmail()
      .custom(async (value) => {
        // Checking that the email already in use or NOT
        const [row] = await db_connection.execute(
          "SELECT `email` FROM `users` WHERE `email`=?",
          [value]
        );
        if (row.length > 0) {
          return Promise.reject("E-mail already in use");
        }
      }),
  ],

  // User ID Validation
  userID: [param("id", "Invalid User ID").trim().isInt()],

  // Checking Validation Result
  result: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
};
