import FeaturedEvents from "./components/homecomps/FeaturedEvents";
import Test from "./components/test";
import Recentblogs from "./components/homecomps/Recentblogs";
import Maingallery from "./components/homecomps/Maingallery";
import LatestVideo from "./components/homecomps/Latestvideo";
import Ejere from "./components/homecomps/Ejere";
import Sectionone from "./components/homecomps/Sectionone";
import Topheader from "./components/Topheader";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Topheader />
      <Header />
      <Test />
      <Sectionone />
      <FeaturedEvents />
      <Maingallery />
      <LatestVideo />
      <Ejere />
      <Recentblogs />
      <Footer />
    </>
  );
}
