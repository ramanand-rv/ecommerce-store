export default {
    name: 'product',
    type: 'document',
    title: 'Products',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of Product'
        },
        {
            name: 'images',
            type: 'array',
            of: [{type: 'image'}],
            title: 'Product Image',
        },
        {
            name: 'description',
            type: 'text', 
            title: 'Description of Product'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product Slug',
            options: {
                source: 'name'
            }
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'price_id',
            title: 'Stripe Price ID',
            type: 'string'
        },
        {
            name: 'category',
            title: 'Product category',
            type: 'reference',
            to: [
                {
                    type: 'category'
                }
            ]
        }
    ],
}