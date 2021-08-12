import "./App.css";
import List from "./components/List";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Input />
      <List></List>
    </div>
  );
}

export default App;
