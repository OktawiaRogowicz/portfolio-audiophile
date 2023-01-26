export type ImageType = {
  overrideMobileImage: boolean;
  image: SanityImageType;
  mobileImage: SanityImageType;
};

export type SanityImageType = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};
