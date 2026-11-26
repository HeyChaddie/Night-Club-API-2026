import Test from "./components/test";
import LatestVideo from "./components/homecomps/Latestvideo";
import Ejere from "./components/homecomps/Ejere";
import Sectionone from "./components/homecomps/Sectionone";
import Topheader from "./components/Topheader";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <LatestVideo />
      <Ejere />
      <Topheader />
      <Header />
      <Test />
      <Sectionone />
      <Footer />
    </>
  );
}
