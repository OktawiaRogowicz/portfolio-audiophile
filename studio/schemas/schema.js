import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './objects/blockContent'
import product from "./product";
import gallery from "./objects/gallery";
import string from "./locale/String";
import media from "./objects/media";
import category from "./category";

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
      category,
      product,
      gallery,
      blockContent,
      string,
      media,
  ])
})
