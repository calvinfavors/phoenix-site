import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ThankYou from './pages/ThankYou';
import BathroomRemodeling from './pages/services/BathroomRemodeling';
import KitchenRemodeling from './pages/services/KitchenRemodeling';
import BasementRemodeling from './pages/services/BasementRemodeling';
import CustomHomeConstruction from './pages/services/CustomHomeConstruction';
import RoofingServices from './pages/services/RoofingServices';
import DeckInstallation from './pages/services/DeckInstallation';
import PoolConstruction from './pages/services/PoolConstruction';
import Kennesaw from './pages/areas/Kennesaw';
import Marietta from './pages/areas/Marietta';
import Atlanta from './pages/areas/Atlanta';
import Smyrna from './pages/areas/Smyrna';
import Newnan from './pages/areas/Newnan';
import CherokeeCounty from './pages/areas/CherokeeCounty';
import Alpharetta from './pages/areas/Alpharetta';
import Milton from './pages/areas/Milton';
import Roswell from './pages/areas/Roswell';
import Woodstock from './pages/areas/Woodstock';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import GalleryPage from './pages/GalleryPage';
import HomeBuilderWoodstock from './pages/blog/HomeBuilderWoodstock';
import DeckRepairWoodstock from './pages/blog/DeckRepairWoodstock';
import KitchenBathroomRemodeling from './pages/blog/KitchenBathroomRemodeling';
import RoofReplacementWoodstock from './pages/blog/RoofReplacementWoodstock';
import NewConstructionKennesaw from './pages/blog/NewConstructionKennesaw';
import BathroomRemodelingMarietta from './pages/blog/BathroomRemodelingMarietta';
import KitchenRemodelingRoswell from './pages/blog/KitchenRemodelingRoswell';
import BathroomRemodelingAlpharetta from './pages/blog/BathroomRemodelingAlpharetta';
import KitchenRemodelingKennesaw from './pages/blog/KitchenRemodelingKennesaw';
import BathroomRemodelingSmyrna from './pages/blog/BathroomRemodelingSmyrna';
import KitchenRemodelingMarietta from './pages/blog/KitchenRemodelingMarietta';
import BathroomRemodelingMilton from './pages/blog/BathroomRemodelingMilton';
import KitchenBathroomCanton from './pages/blog/KitchenBathroomCanton';
import KitchenRemodelingAcworth from './pages/blog/KitchenRemodelingAcworth';
import BathroomRemodelingAtlanta from './pages/blog/BathroomRemodelingAtlanta';
import KitchenBathroomWoodstock from './pages/blog/KitchenBathroomWoodstock';
import BathroomRemodelingCherokeeCounty from './pages/blog/BathroomRemodelingCherokeeCounty';
import KitchenRemodelingSandySprings from './pages/blog/KitchenRemodelingSandySprings';
import MasterBathRemodelingMetroAtlanta from './pages/blog/MasterBathRemodelingMetroAtlanta';
import KitchenBathroomContractorNorthGeorgia from './pages/blog/KitchenBathroomContractorNorthGeorgia';
import HousePaintingWoodstock from './pages/blog/HousePaintingWoodstock';
import HousePaintingMarietta from './pages/blog/HousePaintingMarietta';
import HousePaintingAlpharetta from './pages/blog/HousePaintingAlpharetta';
import HousePaintingRoswell from './pages/blog/HousePaintingRoswell';
import HousePaintingMetroAtlanta from './pages/blog/HousePaintingMetroAtlanta';
import HomeConstructionCherokeeCounty from './pages/blog/HomeConstructionCherokeeCounty';
import HomeConstructionMarietta from './pages/blog/HomeConstructionMarietta';
import HomeConstructionAlpharetta from './pages/blog/HomeConstructionAlpharetta';
import HomeConstructionRoswell from './pages/blog/HomeConstructionRoswell';
import HomeConstructionMetroAtlanta from './pages/blog/HomeConstructionMetroAtlanta';
import BathroomRemodelingWoodstock from './pages/blog/BathroomRemodelingWoodstock';
import ShowerRemodelingWoodstock from './pages/blog/ShowerRemodelingWoodstock';
import BasementRemodelingWoodstock from './pages/blog/BasementRemodelingWoodstock';
import BasementFinishingWoodstock from './pages/blog/BasementFinishingWoodstock';
import BathroomRemodelingCanton from './pages/blog/BathroomRemodelingCanton';
import BasementRemodelingRoswell from './pages/blog/BasementRemodelingRoswell';
import BathroomRemodelingAlpharettaNew from './pages/blog/BathroomRemodelingAlpharettaNew';
import BathroomRemodelingMariettaNew from './pages/blog/BathroomRemodelingMariettaNew';
import BasementRemodelingMarietta from './pages/blog/BasementRemodelingMarietta';
import BasementRemodelingAlpharetta from './pages/blog/BasementRemodelingAlpharetta';
import SpringKitchenRemodelingWoodstock from './pages/blog/SpringKitchenRemodelingWoodstock';
import SpringKitchenRemodelingMarietta from './pages/blog/SpringKitchenRemodelingMarietta';
import SpringKitchenRemodelingAlpharetta from './pages/blog/SpringKitchenRemodelingAlpharetta';
import SummerBasementFAQ from './pages/blog/SummerBasementFAQ';
import SummerPartyBasementFAQ from './pages/blog/SummerPartyBasementFAQ';
import BasementWoodstockFAQ from './pages/blog/BasementWoodstockFAQ';
import HomeRemodelingWoodstockFAQ from './pages/blog/HomeRemodelingWoodstockFAQ';
import GeneralContractorWoodstock from './pages/blog/GeneralContractorWoodstock';
import RoofingWoodstockGA from './pages/blog/RoofingWoodstockGA';
import DeckKitchenWoodstockGA from './pages/blog/DeckKitchenWoodstockGA';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/bathroom-remodeling-in-woodstock-ga" element={<BathroomRemodeling />} />
            <Route path="/kitchen-remodeling-in-woodstock-ga" element={<KitchenRemodeling />} />
            <Route path="/basement-remodeling-in-woodstock-ga" element={<BasementRemodeling />} />
            <Route path="/home-construction-in-woodstock-ga" element={<CustomHomeConstruction />} />
            <Route path="/roofing-in-woodstock-ga" element={<RoofingServices />} />
            <Route path="/deck-installation-and-repair-in-woodstock-ga" element={<DeckInstallation />} />
            <Route path="/pool-construction-in-woodstock-ga" element={<PoolConstruction />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/atlanta" element={<Atlanta />} />
            <Route path="/kennesaw" element={<Kennesaw />} />
            <Route path="/marietta" element={<Marietta />} />
            <Route path="/smyrna" element={<Smyrna />} />
            <Route path="/newnan" element={<Newnan />} />
            <Route path="/cherokee-county" element={<CherokeeCounty />} />
            <Route path="/alpharetta" element={<Alpharetta />} />
            <Route path="/milton" element={<Milton />} />
            <Route path="/roswell" element={<Roswell />} />
            <Route path="/woodstock" element={<Woodstock />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog/choosing-the-right-home-builder-woodstock-ga" element={<HomeBuilderWoodstock />} />
            <Route path="/blog/deck-repair-installation-guide-woodstock" element={<DeckRepairWoodstock />} />
            <Route path="/blog/kitchen-bathroom-remodeling-trends-2026" element={<KitchenBathroomRemodeling />} />
            <Route path="/blog/roof-replacement-woodstock-ga" element={<RoofReplacementWoodstock />} />
            <Route path="/blog/new-construction-kennesaw-smyrna" element={<NewConstructionKennesaw />} />
            <Route path="/blog/bathroom-renovations-woodstock-marietta" element={<BathroomRemodelingMarietta />} />
            <Route path="/blog/kitchen-remodeling-roswell" element={<KitchenRemodelingRoswell />} />
            <Route path="/blog/bathroom-remodeling-alpharetta" element={<BathroomRemodelingAlpharetta />} />
            <Route path="/blog/kitchen-remodeling-kennesaw" element={<KitchenRemodelingKennesaw />} />
            <Route path="/blog/bathroom-remodeling-smyrna" element={<BathroomRemodelingSmyrna />} />
            <Route path="/blog/kitchen-remodeling-marietta" element={<KitchenRemodelingMarietta />} />
            <Route path="/blog/bathroom-remodeling-milton" element={<BathroomRemodelingMilton />} />
            <Route path="/blog/kitchen-bathroom-remodeling-canton" element={<KitchenBathroomCanton />} />
            <Route path="/blog/kitchen-remodeling-acworth" element={<KitchenRemodelingAcworth />} />
            <Route path="/blog/bathroom-remodeling-atlanta" element={<BathroomRemodelingAtlanta />} />
            <Route path="/blog/kitchen-bathroom-remodeling-woodstock" element={<KitchenBathroomWoodstock />} />
            <Route path="/blog/bathroom-remodeling-cherokee-county" element={<BathroomRemodelingCherokeeCounty />} />
            <Route path="/blog/kitchen-remodeling-sandy-springs" element={<KitchenRemodelingSandySprings />} />
            <Route path="/blog/master-bath-remodeling-metro-atlanta" element={<MasterBathRemodelingMetroAtlanta />} />
            <Route path="/blog/kitchen-bathroom-contractor-north-georgia" element={<KitchenBathroomContractorNorthGeorgia />} />
            <Route path="/blog/house-painting-woodstock" element={<HousePaintingWoodstock />} />
            <Route path="/blog/house-painting-marietta" element={<HousePaintingMarietta />} />
            <Route path="/blog/house-painting-alpharetta-milton" element={<HousePaintingAlpharetta />} />
            <Route path="/blog/house-painting-roswell-sandy-springs" element={<HousePaintingRoswell />} />
            <Route path="/blog/house-painting-metro-atlanta" element={<HousePaintingMetroAtlanta />} />
            <Route path="/blog/home-construction-cherokee-county" element={<HomeConstructionCherokeeCounty />} />
            <Route path="/blog/home-construction-marietta" element={<HomeConstructionMarietta />} />
            <Route path="/blog/home-construction-alpharetta" element={<HomeConstructionAlpharetta />} />
            <Route path="/blog/home-construction-roswell" element={<HomeConstructionRoswell />} />
            <Route path="/blog/home-construction-metro-atlanta" element={<HomeConstructionMetroAtlanta />} />
            <Route path="/blog/bathroom-remodeling-woodstock-ga" element={<BathroomRemodelingWoodstock />} />
            <Route path="/blog/shower-remodel-woodstock-ga" element={<ShowerRemodelingWoodstock />} />
            <Route path="/blog/basement-remodeling-woodstock-ga" element={<BasementRemodelingWoodstock />} />
            <Route path="/blog/basement-finishing-woodstock-ga" element={<BasementFinishingWoodstock />} />
            <Route path="/blog/bathroom-remodeling-canton-ga" element={<BathroomRemodelingCanton />} />
            <Route path="/blog/basement-remodeling-roswell-ga" element={<BasementRemodelingRoswell />} />
            <Route path="/blog/bathroom-remodel-alpharetta-ga" element={<BathroomRemodelingAlpharettaNew />} />
            <Route path="/blog/bathroom-remodeling-marietta-ga" element={<BathroomRemodelingMariettaNew />} />
            <Route path="/blog/basement-remodeling-marietta-ga" element={<BasementRemodelingMarietta />} />
            <Route path="/blog/basement-remodeling-alpharetta-ga" element={<BasementRemodelingAlpharetta />} />
            <Route path="/blog/spring-kitchen-remodeling-woodstock-ga" element={<SpringKitchenRemodelingWoodstock />} />
            <Route path="/blog/spring-kitchen-remodeling-marietta-ga" element={<SpringKitchenRemodelingMarietta />} />
            <Route path="/blog/spring-kitchen-remodeling-alpharetta-ga" element={<SpringKitchenRemodelingAlpharetta />} />
            <Route path="/blog/summer-basement-faq" element={<SummerBasementFAQ />} />
            <Route path="/blog/science-of-summer-parties-finished-basement" element={<SummerPartyBasementFAQ />} />
            <Route path="/blog/basement-finishing-remodeling-woodstock-ga-faq" element={<BasementWoodstockFAQ />} />
            <Route path="/blog/home-remodeling-bathroom-remodel-builders-woodstock-ga" element={<HomeRemodelingWoodstockFAQ />} />
            <Route path="/blog/general-contractor-woodstock-ga" element={<GeneralContractorWoodstock />} />
            <Route path="/blog/roofing-woodstock-ga-faq" element={<RoofingWoodstockGA />} />
            <Route path="/blog/deck-builders-kitchen-remodeling-woodstock-ga" element={<DeckKitchenWoodstockGA />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
