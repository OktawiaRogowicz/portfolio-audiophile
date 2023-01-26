import { PortableTextProps } from "@portabletext/react/src";
import { ImageType } from "./image";

export type FooterType = {
  description: PortableTextProps["blocks"];
  copyright: PortableTextProps["blocks"];
  socialMedia: {
    logo: ImageType;
    href: string;
  }[];
};
