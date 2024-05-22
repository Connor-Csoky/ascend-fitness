import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { HeaderImg, HomeHeaderContainer } from "./home-header.styles";
const HomeHeader = () => {
  return (
    <HomeHeaderContainer>
      <HeaderImg
        src="https://images.pexels.com/photos/7031705/pexels-photo-7031705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="headerImage"
      />
      <div>
        <h1>Ascend Fitness Centers</h1>
        <h2>- Reach New Heights -</h2>
        <div>
          <Button>Free Trial</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Sign Up</Button>
        </div>
      </div>
    </HomeHeaderContainer>
  );
};

export default HomeHeader;
