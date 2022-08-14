export default {
    name: 'pin',
    title: "Pin",
    type: 'document',
    fields: [
        {
            name: 'title',
            title: "Title",
            type: 'string',
        },
        {
            name: 'about',
            title: "About",
            type: 'string',
        },
        {
            name: 'description',
            title: "Description",
            type: 'url',
        },
        {
            name: 'category',
            title: "Category",
            type: 'string',
        },
        {
            name: 'image',
            title: "Image",
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'userId',
            title: "UserId",
            type: 'string',
        },
        {
            name: 'postedBy',
            title: "PostedBy",
            type: 'string',
        },

    ]
}