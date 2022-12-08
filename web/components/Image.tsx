import { urlFor } from "../sanity";

const Image = ({ image }) => {
  return (
    <div>
      <img src={urlFor(image).auto("format")} />
    </div>
  );
};

export default Image;
