import Navbar from './components/Navbar';
import FAQAccordion from './module/ui/Accordion';
import Banner from './module/ui/Banner';
import ContactForm from './module/ui/Contact';
import ContactMap from './module/ui/ContactAdress';
import CurriculumSection from './module/ui/Curriculmn';
import Features from './module/ui/Feature';
import Footer from './module/ui/Footer';
import Gallery from './module/ui/Gallery';
import ConsultationRequest from './module/ui/Request';
import InfiniteImageMarquee from './module/ui/Slider';
import VideoPlayback from './module/ui/VideoPlayback';
import CareerBanner from './module/ui/YourCarer';

function App() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Features />
      <VideoPlayback />
      <ConsultationRequest />
      <CurriculumSection />
      <CareerBanner />
      <Gallery />
      <FAQAccordion />
      <InfiniteImageMarquee/>
      <ContactForm/>
      <ContactMap/>
      <Footer/>
    </div>
  );
}

export default App;
