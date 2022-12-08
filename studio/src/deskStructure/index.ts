// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Globals")
    .items([
      S.listItem()
        .title("Products")
        // .icon(MdAutoStories)
        .child(
          S.list()
            .title("Products")
            .items([
              S.documentTypeListItem("product").title("All products"),
              S.documentTypeListItem("category").title("All categories"),
            ])
        ),
      S.listItem()
        .title("Site configuration")
        // .icon(MdAutoStories)
        .child(
          S.list()
            .title("Site configuration")
            .items([
              S.listItem()
                .title("Header")
                // .icon(MdOutlineSettings)
                .child(
                  S.document()
                    // .views(viewWithPreview)
                    .schemaType("header")
                    .documentId("header")
                ),
              S.listItem()
                .title("Footer")
                // .icon(MdOutlineSettings)
                .child(
                  S.document()
                    // .views(viewWithPreview)
                    .schemaType("footer")
                    .documentId("footer")
                ),
              S.listItem()
                .title("Settings")
                // .icon(MdOutlineSettings)
                .child(
                  S.document()
                    // .views(viewWithPreview)
                    .schemaType("siteConfiguration")
                    .documentId("siteConfiguration")
                ),
            ])
        ),
    ]);
