import React from 'react'

const normalRender = (props) => (
    <span style={{ color: 'gray' }}>{props.children}</span>
)

export default {
  name: 'blockContent',
  title: 'Test',
  type: 'array',
  preview: {
    select: {
      blocks: 'blocks',
    },
    prepare(value) {
      const block = (value.blocks || []).find(
          (block) => block._type === 'block',
      )
      return {
        title: block
            ? block.children
                .filter((child) => child._type === 'span')
                .map((span) => span.text)
                .join('')
            : 'No title',
      }
    },
  },
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {
          title: 'Normal',
          value: 'normal',
          blockEditor: {
            render: normalRender,
          },
        },
      ],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
      },
    },
  ],
}
