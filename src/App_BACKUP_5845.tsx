import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu/MainMenu";
import Btn from "./components/common/Btn/Btn";

function App() {
  return (
    <div>
      <MainMenu />
      <Header />
      <h1>Hello world</h1>
      <Btn title="Узнать условия" pRight={50} pLeft={50} primary={true}/>
    </div>
  );
}

export default App;
