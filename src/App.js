import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/navbar";
import LandingCarousel from "./components/landingCarousel";
import GeneralPhotos from "./components/generalPhotos";
import SampleVideo from "./components/sampleVideo";
import Pricing from "./components/pricing";
import PicturePortfolio from "./components/picturePorfolio";
import GetInTouchForm from "./components/getInTouchForm";
import Footer from "./components/footer";
import ScrollUpBtn from "./components/scrollUpBtn";

function App(props) {
  useEffect(() => {
    props.hideLoader();
  });

  return (
    <div>
      <Navbar />
      <LandingCarousel />
      <GeneralPhotos />
      <SampleVideo />
      <PicturePortfolio />
      {/* <Pricing /> */}
      <GetInTouchForm />
      <Footer />
      <ScrollUpBtn />
    </div>
  );
}

export default App;
