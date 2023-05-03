import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import Content from "./Content";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Header />
            <Search />
            <Content />
            <Forecast />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
