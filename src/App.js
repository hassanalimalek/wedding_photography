import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import LandingCarousel from './components/landingCarousel';
import GeneralPhotos from './components/generalPhotos';
import SampleVideo from './components/sampleVideo';
import Pricing from './components/pricing';
import PicturePortfolio from './components/picturePorfolio';
import GetInTouchForm from './components/getInTouchForm';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <LandingCarousel />
      <GeneralPhotos />
      <SampleVideo />
      <PicturePortfolio />
      <Pricing />
      <GetInTouchForm />
      <Footer />
    </div>
  );
}

export default App;
