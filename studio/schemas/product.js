import {DEFAULT_LOCALE_ID} from "./locale/String";

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'media',
        },
        {
            name: 'productDescription',
            title: 'Product description',
            type: 'blockContent',
        },
        {
            name: 'featuresDescription',
            title: 'Features description',
            type: 'blockContent',
        },
        {
            name: 'inTheBox',
            title: 'In the box',
            type: 'array',
            of: [
                {
                    name: 'item',
                    title: 'In the box item',
                    type: 'object',
                    preview: {
                        select: {
                            title: `title.${DEFAULT_LOCALE_ID}`,
                            subtitle: 'quantity',
                        }
                    },
                    fields: [
                        {
                            name: 'quantity',
                            title: 'Quantity',
                            type: 'number',
                        },
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'localeString',
                        },
                    ]
                },
            ],
        },
        {
            name: 'gallery',
            title: 'Gallery',
            type: 'gallery',
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image'
        }
    }
}
