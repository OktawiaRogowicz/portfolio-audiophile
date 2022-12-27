import { FC } from "react";
import { styled } from "../../../styles/stitches";
import { SectionWrapper } from "../../SectionWrapper";
import { SiteConfiguration } from "../../../models/site-configuration";
import { BigHighlight } from "./BigHighlight";
import { MediumHighlight } from "./MediumHighlight";
import { SmallHighlight } from "./SmallHighlight";

const Root = styled("div", {
  display: "grid",
  gridTemplateRows: "560px 320px 320px",
  gap: "$48",
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
