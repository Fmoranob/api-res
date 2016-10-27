'use strict'

const express = require( 'express' )
const bodyParser = require( 'body-parser' )

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/product', (req, res) => {
	res.send(200, {products: []})
})

app.get('/api/product/:productId', (req, res) => {
	let productId = req.params.productoId

	Product.findById(productId, (err, product) {
		if (err) return res.status(500).send({message: `Error al realizar la pretición: ${err}`})
		if (!product) return res.status(404).send({message: 'El producto no existe'})

		res.status(200).send({ product })
	})
})

app.post('/api/product', (req, res) => {
	console.log(req.body)
	res.status(200).send({message: 'El producto se ha recibido'})
})

app.put('/api/product/:productId', (req, res) => {

})

app.delete('/api/product/:productId', (req, res) => {

})

app.listen(port, () => {
	console.log(`API REST corriendo en http://localhost:${port}`)
})