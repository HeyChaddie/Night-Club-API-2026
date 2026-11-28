import Test from "../components/test";
import Header from "../components/Header";
import Booktableheader from "../components/bookingcomps/Booktableheader";
import { Footer } from "../components/Footer";

export default function bookingpage() {
  return (
    <>
      <Header />
      <Booktableheader />
      <Test />
      <Footer />
    </>
  );
}
