import Community from "./components/Community/Community";
import CreateTeam from "./components/CreateTeam/CreateTeam";
import EventComp from "./components/Event/Event";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu/MainMenu";
import ProcessFind from "./components/ProcessFind/ProcessFind";
import Services from "./components/Services/Services";
import Technologies from "./components/Technologies/Technologies";
import WhereFind from "./components/WhereFind/WhereFind";
import WhyAreWe from "./components/WhyAreWe/WhyAreWe";

function App() {
  return (
    <div>
      <MainMenu />
      <Header />
      <Services />
      <WhyAreWe />
      <CreateTeam />
      <Technologies />
      <WhereFind />
      <ProcessFind />
      <Community />
      <EventComp />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
