import {
  HomeJoinContainer,
  HomeJoinDeals,
  HomeJoinLeftCard,
} from "./home-join.styles";

const HomeJoin = () => {
  return (
    <HomeJoinContainer>
      <HomeJoinLeftCard>
        <h2>Join Us</h2>
        <p>
          Ready to take your fitness journey to new heights? Join us at Ascend
          Fitness Centers and discover the difference our community can make.
          Whether you're looking to lose weight, build muscle, improve your
          endurance, or simply lead a healthier lifestyle, we're here to help
          you achieve your goals. Together, we'll ascend to new heights of
          health and wellness.
        </p>
      </HomeJoinLeftCard>
      <HomeJoinDeals>
        <div>first deal</div>
        <div>second deal</div>
        <div>third deal</div>
        <div>final deal</div>
      </HomeJoinDeals>
    </HomeJoinContainer>
  );
};

export default HomeJoin;
