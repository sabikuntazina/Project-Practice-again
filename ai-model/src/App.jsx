
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import ModelSection from "./components/ModelSection";

import NavBar from "./components/Navbar";
const getModels = async () => {
  const res = await fetch("https://cute-dolphin-69c57b.netlify.app/models.json");
  return res.json();
};
const modelsPromise = getModels();

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <ModelSection modelsPromise={modelsPromise}  ></ModelSection>
      <Footer></Footer>
    </>
  );
}

export default App;
