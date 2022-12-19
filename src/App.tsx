import CreateTeam from "./components/CreateTeam/CreateTeam";
import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu/MainMenu";
import Services from "./components/Services/Services";
import WhyAreWe from "./components/WhyAreWe/WhyAreWe";

function App() {
  return (
    <div>
      <MainMenu />
      <Header />
      <Services />
      <WhyAreWe />
      <CreateTeam />
    </div>
  );
}

export default App;
