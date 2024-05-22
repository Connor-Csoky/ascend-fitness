import { HomeAboutContainer } from "./home-about.styles";
import HomeAboutSection from "../home-about-section/home-about-section.component";

const aboutSectionInfo = [
  {
    id: 1,
    header: "Our Approach",
    paragraph:
      "Ascend Fitness Centers isn't just a gym—it's a community of like-minded individuals who share a passion for health and wellness. We provide a supportive environment where members of all fitness levels can thrive. Whether you're a beginner just starting your fitness journey or an experienced athlete seeking to push your limits, our expert team is here to help you every step of the way.",
  },
  {
    id: 2,
    header: "Our Facilities",
    paragraph:
      "Located in the heart of [City], our state-of-the-art facilities are designed to inspire and motivate. From our cutting-edge equipment to our diverse range of group fitness classes, we offer everything you need to achieve your fitness goals. Our spacious workout areas provide ample space for both individual training and group activities, while our locker rooms are equipped with modern amenities for your convenience.",
  },
  {
    id: 3,
    header: "Our Team",
    paragraph:
      "At Ascend Fitness Centers, our greatest asset is our team of passionate and experienced fitness professionals. From certified personal trainers to knowledgeable instructors, our staff is dedicated to providing personalized support and guidance to help you succeed. Whether you're looking for expert advice on nutrition, personalized workout plans, or motivation to stay on track, we're here to help you every step of the way.",
  },
];

const HomeAbout = () => {
  return (
    <HomeAboutContainer>
      {aboutSectionInfo.map((info) => (
        <HomeAboutSection key={info.id} info={info} />
      ))}
    </HomeAboutContainer>
  );
};

export default HomeAbout;
