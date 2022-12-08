import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./objects/blockContent";
import product from "./product";
import gallery from "./objects/gallery";
import string from "./locale/String";
import media from "./objects/media";
import category from "./category";
import siteConfiguration from "./siteConfiguration";
import header from "./header";
import footer from "./footer";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    siteConfiguration,
    header,
    footer,
    category,
    product,
    gallery,
    blockContent,
    string,
    media,
  ]),
});
