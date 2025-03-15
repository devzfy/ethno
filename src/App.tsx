import Navbar from './components/Navbar';
import Banner from './module/ui/Banner';
import CurriculumSection from './module/ui/Curriculmn';
import Features from './module/ui/Feature';
import VideoPlayback from './module/ui/VideoPlayback';

function App() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Features />
      <VideoPlayback />
      <CurriculumSection />
    </div>
  );
}

export default App;
