import "./App.css";
import NavBar from "./components/navBar";
import Quiz from "./components/quiz";

function App() {
  return (
    <>
      <NavBar />
      <div className="fixed backdrop-blur-md top-44 left-0 h-full w-full fix-it"></div>
      <main className="background grid place-items-center">
        <Quiz />
      </main>
    </>
  );
}

export default App;
