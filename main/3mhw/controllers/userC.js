const client = require("../config");
const jwt = require("jsonwebtoken");

const loginController = async (req, res) => {
  try {
    const { login, password } = req.body;
    const checkUser = await client.query(
      "SELECT * FROM USERS WHERE LOGIN = $1",
      [login]
    );

    if (checkUser.rowCount <= 0) return res.send("User NOT FOUND");

    if (password != checkUser.rows[0].user_password) {
      return res.send("Incorrect password");
    }
    const token = await jwt.sign(
      { user_id: checkUser.rows[0].user_id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );
    res.send({ token });
  } catch (error) {}
};

const registerController = async (req, res) => {
  try {
    const { full_name, login, password } = req.body;
    const checkUser = await client.query(
      "SELECT * FROM USERS WHERE LOGIN = $1",
      [login]
    );
    if (checkUser.rowCount > 0) return res.send("User already exist");

    await client.query(
      "INSERT INTO USERS(full_name, login, user_password) VALUES($1, $2, $3) RETURNING *",
      [full_name, login, password],
      (err, results) => {
        res.send({ message: "succesfull registration" });
      }
    );
  } catch (error) {}
};

module.exports = { loginController, registerController };
