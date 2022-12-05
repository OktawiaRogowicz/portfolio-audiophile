const Preview = ({ imageSrc }: { imageSrc: string }) => (
    <div
        style={{
            backgroundImage: imageSrc,
            width: '100%',
            height: '100%',
        }}
    />
)

export default {
    name: 'media',
    type: 'object',
    preview: {
        select: {
            title: 'image.asset.originalFilename',
            imageUrl: `image.asset.url`,
        },
        prepare(selection) {
            const { title, imageUrl } = selection
            return {
                title,
                media: <Preview imageSrc={imageUrl} />,
            }
        },
    },
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'overrideMobileImage',
            title: 'Override mobile image?',
            type: 'boolean',
            initialValue: false,
        },
        {
            name: 'mobileImage',
            title: 'Mobile image',
            type: 'image',
            hidden: ({ parent }) => parent?.overrideMobileImage === false,
            options: {
                hotspot: true
            }
        },
    ],
}
