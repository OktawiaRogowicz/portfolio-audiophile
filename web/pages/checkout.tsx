import { Container } from "../libraries/components/Container";
import GoBackButton from "../libraries/components/Buttons/GoBackButton";
import { CheckoutContainer } from "../libraries/components/CheckoutPage/CheckoutContainer";

const Checkout = () => {
  return (
    <Container backgroundColor={"gray"}>
      <GoBackButton />
      <CheckoutContainer />
    </Container>
  );
};

export default Checkout;
