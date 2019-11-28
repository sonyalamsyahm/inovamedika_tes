const jwt = require("jsonwebtoken");

const model = require("../models");
const user = model.user;

exports.login = (req, res) => {
  const { username, password } = req.body;

  user
    .findOne({
      where: {
        username,
        password
      }
    })
    .then(login => {
      console.log(login);
      if (login) {
        const token = jwt.sign({ login }, process.env.ACCESS_SECRET_KEY);
        res.json({
          userid: login.id,
          username: login.name,
          email: login.email,
          code: 200,
          token
        });
      } else {
        res.status(422).json({
          message: "Bad Request",
          code: 422
        });
      }
    })
    .catch(error => console.log(error));
};
