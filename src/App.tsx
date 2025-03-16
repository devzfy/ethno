import Navbar from './components/Navbar';
import FAQAccordion from './module/ui/Accordion';
import Banner from './module/ui/Banner';
import CurriculumSection from './module/ui/Curriculmn';
import Features from './module/ui/Feature';
import Gallery from './module/ui/Gallery';
import ConsultationRequest from './module/ui/Request';
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
    </div>
  );
}

export default App;
