import { HomeAboutSectionContainer } from "./home-about-section.styles";

const HomeAboutSection = ({ info: { header, paragraph } }) => {
  return (
    <HomeAboutSectionContainer>
      <h3>{header}</h3>
      <p>{paragraph}</p>
    </HomeAboutSectionContainer>
  );
};

export default HomeAboutSection;
