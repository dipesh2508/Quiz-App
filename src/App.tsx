import "./App.css";
import NavBar from "./components/navBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="fixed backdrop-blur-md top-44 left-0 h-full w-full -z-1"></div>
      <main className="background"></main>
    </>
  );
}

export default App;
