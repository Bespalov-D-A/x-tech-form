import CreateTeam from "./components/CreateTeam/CreateTeam";
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
    </div>
  );
}

export default App;
