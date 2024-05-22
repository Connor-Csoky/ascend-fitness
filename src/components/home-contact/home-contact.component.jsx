import {
  HomeContactBottom,
  HomeContactContainer,
  HomeContactTop,
  HalfInput,
  FullInput,
  Input,
} from "./home-contact.styles";
import Button from "../button/button.component";

const HomeContact = () => {
  return (
    <HomeContactContainer>
      <h2>Contact Us</h2>
      <HomeContactTop>
        <HalfInput type="text" placeholder="Name" />
        <HalfInput type="text" placeholder="Email" />
      </HomeContactTop>
      <HomeContactBottom>
        <Input type="text" placeholder="Phone Number" />
        <FullInput type="text" placeholder="Comment" />
      </HomeContactBottom>
      <Button>Submit</Button>
    </HomeContactContainer>
  );
};

export default HomeContact;
