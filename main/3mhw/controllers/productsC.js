const client = require('../config')

const getProductC = async (req, res) =>{
    try {
        const category_id = req.params.id
        let products
        if(category_id){
            products = await client.query(`SELECT * FROM PRODUCTS WHERE CATEGORY_ID = $1`, [category_id])
            return res.send({products: products.rows})
        } else{
            products = await client.query(`SELECT * FROM PRODUCTS`)
            res.send({products: products.rows})
        }
    } catch (error) {
        res.send('Send Error')
    }
}

const addProductC = async(req, res) =>{
    try {
        const {category_id, title} = req.body
        await client.query(`
        INSERT INTO PRODUCTS (CATEGORY_ID, TITLE)
        VALUES($1, $2)`, [category_id, title], (err, results) =>{
            if(err) return res.send('Error add')
            return res.send('Succesufully add')
        } )
    } catch (error) {
        res.send('Error add product')
    }
}

const deleteProductC = async(req, res) =>{
    try {
        await client.query('DELETE FROM PRODUCTS WHERE PRODUCT_ID = $1', [req.params.id], (err) =>{
            if(err) return res.send('Delete error')
            res.send('Succesfully delete')
        })
    } catch (error) {
        // console.log(error)
        res.send('Delete error 2')
    }
}

module.exports = {getProductC, addProductC, deleteProductC}