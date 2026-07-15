import Navbar from "./components/layout/Navbar";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import ServiceCards from "./components/ServiceCards";
import Announcement from "./components/Announcement";
import ProfileRT from "./components/ProfileRT";
import Gallery from "./components/Gallery";
import Finance from "./components/Finance";
import Structure from "./components/Structure";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Navbar />
      <Hero />
      <Statistics />
      <ServiceCards />
      <Announcement />
      <ProfileRT />
      <Gallery />
      <Finance />
      <Structure />
      <Footer />
    </main>
  );
}