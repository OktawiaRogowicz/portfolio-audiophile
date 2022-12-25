// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import {
  MdCategory,
  MdOutlineSettings,
  MdShoppingBag,
  MdVerticalAlignBottom,
  MdVerticalAlignTop,
} from "react-icons/all";

export default () =>
  S.list()
    .title("Globals")
    .items([
      S.listItem()
        .title("Products")
        .icon(MdShoppingBag)
        .child(
          S.list()
            .title("Products")
            .items([
              S.documentTypeListItem("product")
                .title("All products")
                .icon(MdShoppingBag),
              S.documentTypeListItem("category")
                .title("All categories")
                .icon(MdCategory),
            ])
        ),
      S.listItem()
        .title("Site configuration")
        .icon(MdOutlineSettings)
        .child(
          S.list()
            .title("Site configuration")
            .items([
              S.listItem().title("Header").icon(MdVerticalAlignTop).child(
                S.document()
                  // .views(viewWithPreview)
                  .schemaType("header")
                  .documentId("header")
              ),
              S.listItem().title("Footer").icon(MdVerticalAlignBottom).child(
                S.document()
                  // .views(viewWithPreview)
                  .schemaType("footer")
                  .documentId("footer")
              ),
              S.listItem().title("Settings").icon(MdOutlineSettings).child(
                S.document()
                  // .views(viewWithPreview)
                  .schemaType("siteConfiguration")
                  .documentId("siteConfiguration")
              ),
            ])
        ),
    ]);
