import { FC } from "react";
import { styled } from "../../../styles/stitches";
import { SectionWrapper } from "../../SectionWrapper";
import { SiteConfiguration } from "../../../models/site-configuration";
import { BigHighlight } from "./BigHighlight";
import { MediumHighlight } from "./MediumHighlight";
import { SmallHighlight } from "./SmallHighlight";

const Root = styled("div", {
  display: "grid",
  gap: "$48",
  gridAutoRows: "auto",
  // gridTemplateRows: "600px 320px px",
  // "@md": {
  //   gridTemplateRows: "720px 320px 320px",
  // },
  // "@lg": {
  //   gridTemplateRows: "560px 320px 320px",
  // },
});

export type SectionProductsFeaturedProps = {
  productsFeatured: SiteConfiguration["siteConfiguration"]["sectionProductsFeatured"];
};

export const SectionProductsFeatured: FC<SectionProductsFeaturedProps> = ({
  productsFeatured,
}) => {
  console.log("productsFeatured: ", productsFeatured);
  return (
    <SectionWrapper>
      <Root>
        <BigHighlight productsFeatured={productsFeatured} />
        <MediumHighlight productsFeatured={productsFeatured} />
        <SmallHighlight productsFeatured={productsFeatured} />
      </Root>
    </SectionWrapper>
  );
};
