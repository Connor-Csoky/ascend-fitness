import HomeAbout from "../../components/home-about/home-about.component";
import HomeHeader from "../../components/home-header/home-header.component";
import HomeJoin from "../../components/home-join/home-join.component";
import HomeWelcome from "../../components/home-welcome/home-welcome.component";
import HomeContact from "../../components/home-contact/home-contact.component";
const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeWelcome />
      <HomeAbout />
      <HomeJoin />
      <HomeContact />
    </>
  );
};

export default Home;
