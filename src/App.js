import AvailableComponent from "./components/availableComponent/AvailableComponent";
import Navbar from "./components/homepageHeader/navbar/Navbar";
import TitleComponent from "./components/titleComponent/TitleComponent";
import VersatileFormat from "./components/versatileFormat/VersatileFormat";

const App = () => {
  return (
    <div>
      <Navbar />
      <TitleComponent />
      <AvailableComponent />
      <VersatileFormat />
    </div>
  );
};

export default App;
