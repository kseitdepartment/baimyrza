const client = require('../config')

const getCategoryC = async(req, res) =>{
    try {
        await client.query(`SELECT C.CATEGORY_ID, C.TITLE, COUNT(P.PRODUCT_ID) AS PRODUCTS_QUANTITY 
        FROM CATEGORY AS C LEFT JOIN PRODUCTS AS P
        ON C.CATEGORY_ID = P.CATEGORY_ID
        GROUP BY C.CATEGORY_ID ORDER BY C.CATEGORY_ID ASC`, (err, result) =>{
            if(err) return res.send('Error')
            res.send({categories: result.rows})
        })
    } catch (error) {
        res.send('error')
    }
}

module.exports = {getCategoryC}