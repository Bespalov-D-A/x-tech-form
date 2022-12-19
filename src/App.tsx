import CreateTeam from "./components/CreateTeam/CreateTeam";
import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu/MainMenu";
import Services from "./components/Services/Services";
import Technologies from "./components/Technologies/Technologies";
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
    </div>
  );
}

export default App;
