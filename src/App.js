import "./App.css";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Ratings from "./components/Ratings";
import Section from "./components/Section";

const ratingInfo = [
  {
    id: "1",
    image: "images/motionarteffect-img2.png",
    ratingImage: "images/motionarteffect-img4.png",
    score: "4.5",
    reviews: 9,
  },
  {
    id: "2",
    image: "images/motionarteffect-img1.png",
    ratingImage: "images/motionarteffect-img4.png",
    score: "4.4",
    reviews: 6,
  },
  {
    id: "3",
    image: "images/motionarteffect-img3.png",
    ratingImage: "images/motionarteffect-img4.png",
    score: "4.2",
    reviews: 8,
  },
];
function App() {
  return (
    <div className=" bg-darkVoilet font-sora w-screen min-h-screen">
      <Home />
      <Ratings ratingInfo={ratingInfo} />
      <Section />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
