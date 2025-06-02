import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import OurService from "./Components/OurService";
import ContactUs from "./contactus/page";
import Properties from "./Components/Properties"
export default function Home() {
  return (
    <div className="bg-[#]">
      <Navbar />
      <Hero />
      <Properties/>
      <OurService />
      <div className="py-10">
        <ContactUs />
      </div>
    </div>
  );
}
