import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import { TextContextProvider } from "./context/textContext";
import { ImgContextProvider } from "./context/imgContext";

const App = () => {
  return(
    <div>
      <ImgContextProvider>
        <TextContextProvider>
          <Header />
          <Card />
          <Footer />
        </TextContextProvider>
      </ImgContextProvider>
    </div>
  );
}

export default App;
