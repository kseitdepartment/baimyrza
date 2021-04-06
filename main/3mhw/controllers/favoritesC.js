const client = require("../config");

const getFavoritesC = async (req, res) => {
  try {
    const user_id = req.user.user_id;
    client.query(
      "SELECT * FROM FAVORITE WHERE USER_ID = $1",
      [user_id],
      (err, result) => {
        if (err) return res.send("Empty error");
        res.send({ favorites: result.rows });
      }
    );
  } catch (error) {
    res.send("Empty error");
  }
};


const addFavoritesC = async (req, res) => {
    try {
        const user_id = req.user.user_id;
        const {product_id} = req.body

        client.query('INSERT INTO FAVORITE VALUES($1, $2)', [user_id, product_id], (err, results) =>{
           if(err) return  res.send('Error')
           res.send('Succesfully added')
        })
    } catch (error) {
        res.send('Error')
    }
}

module.exports = { getFavoritesC, addFavoritesC };
