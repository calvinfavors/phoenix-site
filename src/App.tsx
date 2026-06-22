import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ThankYou from './pages/ThankYou';
import Reviews from './pages/Reviews';
import BathroomRemodeling from './pages/services/BathroomRemodeling';
import KitchenRemodeling from './pages/services/KitchenRemodeling';
import BasementRemodeling from './pages/services/BasementRemodeling';
import CustomHomeConstruction from './pages/services/CustomHomeConstruction';
import RoofingServices from './pages/services/RoofingServices';
import DeckInstallation from './pages/services/DeckInstallation';
import PoolConstruction from './pages/services/PoolConstruction';
import BathroomRemodelingMariettaService from './pages/services/BathroomRemodelingMarietta';
import BathroomRemodelingRoswellService from './pages/services/BathroomRemodelingRoswell';
import BathroomRemodelingMiltonService from './pages/services/BathroomRemodelingMilton';
import KitchenRemodelingMariettaService from './pages/services/KitchenRemodelingMarietta';
import KitchenRemodelingRoswellService from './pages/services/KitchenRemodelingRoswell';
import KitchenRemodelingMiltonService from './pages/services/KitchenRemodelingMilton';
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
import HousePaintingRoswell from './pages/blog/HousePaintingRoswell';
import HousePaintingAlpharetta from './pages/blog/HousePaintingAlpharetta';
import HousePaintingKennesaw from './pages/blog/HousePaintingKennesaw';
import HousePaintingSmyrna from './pages/blog/HousePaintingSmyrna';
import HousePaintingMetroAtlanta from './pages/blog/HousePaintingMetroAtlanta';
import HomeConstructionMetroAtlanta from './pages/blog/HomeConstructionMetroAtlanta';
import HomeConstructionMarietta from './pages/blog/HomeConstructionMarietta';
import HomeConstructionRoswell from './pages/blog/HomeConstructionRoswell';
import HomeConstructionAlpharetta from './pages/blog/HomeConstructionAlpharetta';
import HomeConstructionCherokeeCounty from './pages/blog/HomeConstructionCherokeeCounty';
import BasementRemodelingWoodstock from './pages/blog/BasementRemodelingWoodstock';
import BasementRemodelingMarietta from './pages/blog/BasementRemodelingMarietta';
import BasementRemodelingAlpharetta from './pages/blog/BasementRemodelingAlpharetta';
import BasementRemodelingRoswell from './pages/blog/BasementRemodelingRoswell';
import BasementFinishingWoodstock from './pages/blog/BasementFinishingWoodstock';
import FinishedBasementContractorsWoodstock from './pages/blog/FinishedBasementContractorsWoodstock';
import BasementWoodstockFAQ from './pages/blog/BasementWoodstockFAQ';
import HomeRemodelingWoodstockFAQ from './pages/blog/HomeRemodelingWoodstockFAQ';
import GeneralContractorWoodstock from './pages/blog/GeneralContractorWoodstock';
import HomeBuildersWoodstock from './pages/blog/HomeBuildersWoodstock';
import DeckBuildersWoodstock from './pages/blog/DeckBuildersWoodstock';
import HomeAdditionMetroAtlanta from './pages/blog/HomeAdditionMetroAtlanta';
import RoofingWoodstockGA from './pages/blog/RoofingWoodstockGA';
import ShowerRemodelingWoodstock from './pages/blog/ShowerRemodelingWoodstock';
import BathroomRenovationCostWoodstock from './pages/blog/BathroomRenovationCostWoodstock';
import BathroomRemodelingAlpharettaMilton from './pages/blog/BathroomRemodelingAlpharettaMilton';
import BathroomRemodelingAlpharettaNew from './pages/blog/BathroomRemodelingAlpharettaNew';
import BathroomRemodelingMariettaNew from './pages/blog/BathroomRemodelingMariettaNew';
import BathroomRemodelingWoodstock from './pages/blog/BathroomRemodelingWoodstock';
import BathroomRemodelingCanton from './pages/blog/BathroomRemodelingCanton';
import SpringKitchenRemodelingWoodstock from './pages/blog/SpringKitchenRemodelingWoodstock';
import SpringKitchenRemodelingMarietta from './pages/blog/SpringKitchenRemodelingMarietta';
import SpringKitchenRemodelingAlpharetta from './pages/blog/SpringKitchenRemodelingAlpharetta';
import SummerBasementFAQ from './pages/blog/SummerBasementFAQ';
import SummerPartyBasementFAQ from './pages/blog/SummerPartyBasementFAQ';
import WholeHomeRenovationWoodstock from './pages/blog/WholeHomeRenovationWoodstock';
import ThePhoenixWay from './pages/ThePhoenixWay';
// New batch 1 (session prior)
import KitchenRemodelCostGuide from './pages/blog/KitchenRemodelCostGuide';
import OpenConceptKitchenRemodel from './pages/blog/OpenConceptKitchenRemodel';
import WalkInShowerVsTub from './pages/blog/WalkInShowerVsTub';
// New batch 2
import KitchenCabinetRefacingVsReplacement from './pages/blog/KitchenCabinetRefacingVsReplacement';
import SmallBathroomRemodelIdeas from './pages/blog/SmallBathroomRemodelIdeas';
import QuartzVsGraniteVsMarble from './pages/blog/QuartzVsGraniteVsMarble';
// New batch 3
import OldBathroomDangers from './pages/blog/OldBathroomDangers';
import NorthGeorgiaPlumbingBathroom from './pages/blog/NorthGeorgiaPlumbingBathroom';

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/the-phoenix-way" element={<ThePhoenixWay />} />

        {/* Service pages */}
        <Route path="/bathroom-remodeling-in-woodstock-ga" element={<BathroomRemodeling />} />
        <Route path="/kitchen-remodeling-in-woodstock-ga" element={<KitchenRemodeling />} />
        <Route path="/basement-remodeling-in-woodstock-ga" element={<BasementRemodeling />} />
        <Route path="/home-construction-in-woodstock-ga" element={<CustomHomeConstruction />} />
        <Route path="/roofing-services-woodstock-ga" element={<RoofingServices />} />
        <Route path="/deck-installation-woodstock-ga" element={<DeckInstallation />} />
        <Route path="/pool-construction-woodstock-ga" element={<PoolConstruction />} />
        <Route path="/bathroom-remodeling-marietta-ga" element={<BathroomRemodelingMariettaService />} />
        <Route path="/bathroom-remodeling-roswell-ga" element={<BathroomRemodelingRoswellService />} />
        <Route path="/bathroom-remodeling-milton-ga" element={<BathroomRemodelingMiltonService />} />
        <Route path="/kitchen-remodeling-marietta-ga" element={<KitchenRemodelingMariettaService />} />
        <Route path="/kitchen-remodeling-roswell-ga" element={<KitchenRemodelingRoswellService />} />
        <Route path="/kitchen-remodeling-milton-ga" element={<KitchenRemodelingMiltonService />} />

        {/* Area pages */}
        <Route path="/kennesaw" element={<Kennesaw />} />
        <Route path="/marietta" element={<Marietta />} />
        <Route path="/atlanta" element={<Atlanta />} />
        <Route path="/smyrna" element={<Smyrna />} />
        <Route path="/newnan" element={<Newnan />} />
        <Route path="/cherokee-county" element={<CherokeeCounty />} />
        <Route path="/alpharetta" element={<Alpharetta />} />
        <Route path="/milton" element={<Milton />} />
        <Route path="/roswell" element={<Roswell />} />
        <Route path="/woodstock" element={<Woodstock />} />

        {/* Blog posts */}
        <Route path="/blog/kitchen-bathroom-remodeling-trends-2026" element={<KitchenBathroomRemodeling />} />
        <Route path="/blog/home-builder-woodstock-ga" element={<HomeBuilderWoodstock />} />
        <Route path="/blog/deck-repair-woodstock-ga" element={<DeckRepairWoodstock />} />
        <Route path="/blog/roof-replacement-woodstock-ga" element={<RoofReplacementWoodstock />} />
        <Route path="/blog/new-construction-kennesaw-ga" element={<NewConstructionKennesaw />} />
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
        <Route path="/blog/house-painting-woodstock-ga" element={<HousePaintingWoodstock />} />
        <Route path="/blog/house-painting-marietta-ga" element={<HousePaintingMarietta />} />
        <Route path="/blog/house-painting-roswell-ga" element={<HousePaintingRoswell />} />
        <Route path="/blog/house-painting-alpharetta-ga" element={<HousePaintingAlpharetta />} />
        <Route path="/blog/house-painting-kennesaw-ga" element={<HousePaintingKennesaw />} />
        <Route path="/blog/house-painting-smyrna-ga" element={<HousePaintingSmyrna />} />
        <Route path="/blog/house-painting-metro-atlanta" element={<HousePaintingMetroAtlanta />} />
        <Route path="/blog/home-construction-metro-atlanta" element={<HomeConstructionMetroAtlanta />} />
        <Route path="/blog/home-construction-marietta-ga" element={<HomeConstructionMarietta />} />
        <Route path="/blog/home-construction-roswell-ga" element={<HomeConstructionRoswell />} />
        <Route path="/blog/home-construction-alpharetta-ga" element={<HomeConstructionAlpharetta />} />
        <Route path="/blog/home-construction-cherokee-county-ga" element={<HomeConstructionCherokeeCounty />} />
        <Route path="/blog/basement-remodeling-woodstock-ga" element={<BasementRemodelingWoodstock />} />
        <Route path="/blog/basement-remodeling-marietta-ga" element={<BasementRemodelingMarietta />} />
        <Route path="/blog/basement-remodeling-alpharetta-ga" element={<BasementRemodelingAlpharetta />} />
        <Route path="/blog/basement-remodeling-roswell-ga" element={<BasementRemodelingRoswell />} />
        <Route path="/blog/basement-finishing-woodstock-ga" element={<BasementFinishingWoodstock />} />
        <Route path="/blog/finished-basement-contractors-woodstock-ga" element={<FinishedBasementContractorsWoodstock />} />
        <Route path="/blog/basement-finishing-remodeling-woodstock-ga-faq" element={<BasementWoodstockFAQ />} />
        <Route path="/blog/home-remodeling-bathroom-remodel-builders-woodstock-ga" element={<HomeRemodelingWoodstockFAQ />} />
        <Route path="/blog/general-contractor-woodstock-ga" element={<GeneralContractorWoodstock />} />
        <Route path="/blog/home-builders-woodstock-ga" element={<HomeBuildersWoodstock />} />
        <Route path="/blog/deck-builders-woodstock-ga" element={<DeckBuildersWoodstock />} />
        <Route path="/blog/home-addition-metro-atlanta" element={<HomeAdditionMetroAtlanta />} />
        <Route path="/blog/roofing-woodstock-ga" element={<RoofingWoodstockGA />} />
        <Route path="/blog/shower-remodel-woodstock-ga" element={<ShowerRemodelingWoodstock />} />
        <Route path="/blog/bathroom-renovation-cost-woodstock-ga" element={<BathroomRenovationCostWoodstock />} />
        <Route path="/blog/bathroom-remodeling-alpharetta-milton-ga" element={<BathroomRemodelingAlpharettaMilton />} />
        <Route path="/blog/bathroom-remodel-alpharetta-ga" element={<BathroomRemodelingAlpharettaNew />} />
        <Route path="/blog/bathroom-remodeling-marietta-ga" element={<BathroomRemodelingMariettaNew />} />
        <Route path="/blog/bathroom-remodeling-woodstock-ga" element={<BathroomRemodelingWoodstock />} />
        <Route path="/blog/bathroom-remodeling-canton-ga" element={<BathroomRemodelingCanton />} />
        <Route path="/blog/spring-kitchen-remodeling-woodstock-ga" element={<SpringKitchenRemodelingWoodstock />} />
        <Route path="/blog/spring-kitchen-remodeling-marietta-ga" element={<SpringKitchenRemodelingMarietta />} />
        <Route path="/blog/spring-kitchen-remodeling-alpharetta-ga" element={<SpringKitchenRemodelingAlpharetta />} />
        <Route path="/blog/summer-basement-faq" element={<SummerBasementFAQ />} />
        <Route path="/blog/science-of-summer-parties-finished-basement" element={<SummerPartyBasementFAQ />} />
        <Route path="/blog/whole-home-renovation-woodstock-ga" element={<WholeHomeRenovationWoodstock />} />
        {/* Batch 1 new blogs */}
        <Route path="/blog/kitchen-remodel-cost-woodstock-ga-2026" element={<KitchenRemodelCostGuide />} />
        <Route path="/blog/open-concept-kitchen-remodel-woodstock-ga" element={<OpenConceptKitchenRemodel />} />
        <Route path="/blog/walk-in-shower-vs-tub-conversion-woodstock-ga" element={<WalkInShowerVsTub />} />
        {/* Batch 2 new blogs */}
        <Route path="/blog/kitchen-cabinet-refacing-vs-replacement-woodstock-ga" element={<KitchenCabinetRefacingVsReplacement />} />
        <Route path="/blog/small-bathroom-remodel-ideas-woodstock-ga" element={<SmallBathroomRemodelIdeas />} />
        <Route path="/blog/quartz-vs-granite-vs-marble-countertops-woodstock-ga" element={<QuartzVsGraniteVsMarble />} />
        {/* Batch 3 new blogs */}
        <Route path="/blog/old-bathroom-dangers-woodstock-ga" element={<OldBathroomDangers />} />
        <Route path="/blog/north-georgia-plumbing-bathroom-remodeling-woodstock-ga" element={<NorthGeorgiaPlumbingBathroom />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
