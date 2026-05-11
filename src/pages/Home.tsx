import Hero from "../components/hero/Hero";
import DonateVotingSection from "../components/body/Donate";
import EndorsementsPage from "../components/body/Endorsements";
import EndImages from "../components/body/EndImages";

const Home = () => {
  return (
    <div>
      <Hero />
      <DonateVotingSection />
      <EndImages />
      <EndorsementsPage />
    </div>
  );
};

export default Home;
