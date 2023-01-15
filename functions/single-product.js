require('dotenv').config()

const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.AIR_TABLE_API })
    .base(process.env.AIR_TABLE_BASE)
    .table(process.env.AIR_TABLE)

exports.handler = async (event, context, cb) => {
    const { id } = event.queryStringParameters
    if (id) {
        let product = await airtable.retrieve(id)
        if (product.error) {
            return {
                statusCode: 404,
                body: `no product with id : ${id}`
            }
        }
        product = { id: product.id, ...product.fields }
        return {
            statusCode: 200,
            body: JSON.stringify(product),
        }
    }
    return {
        statusCode: 400,
        body: 'Please provide product id',
    }
}