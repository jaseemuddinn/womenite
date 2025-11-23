import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import OurJourney from "./pages/OurJourney";
import Testimonials from "./pages/Testimonials";
import Programs from "./pages/Programs";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import LearnWithUs from "./pages/LearnWithUs";
import GenderEquality from "./pages/GenderEquality";
import ChildAbusePrevention from "./pages/ChildAbusePrevention";
import MenstrualHygiene from "./pages/MenstrualHygiene";
import ImpactStories from "./pages/ImpactStories";
import Documents from "./pages/Documents";
import Partners from "./pages/Partners";
import TransgenderMenstrualSupport from "./pages/TransgenderMenstrualSupport";
import ShameToStrength from "./pages/ShameToStrength";
import BreakingTheSilence from "./pages/BreakingTheSilence";
import Events from "./pages/Events";
import MenstrualHygieneWorkshop from "./pages/MenstrualHygieneWorkshop";
import WomenEmpowermentSummit from "./pages/WomenEmpowermentSummit";
import WomensDayEvent from "./pages/WomensDayEvent";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="our-journey" element={<OurJourney />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="programs" element={<Programs />} />
            <Route path="partners" element={<Partners />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<Contact />} />
            <Route path="donate" element={<Donate />} />
            <Route path="volunteer" element={<Volunteer />} />
            <Route path="learn" element={<LearnWithUs />} />
            <Route path="learn/gender-equality" element={<GenderEquality />} />
            <Route path="learn/child-abuse-prevention" element={<ChildAbusePrevention />} />
            <Route path="learn/menstrual-hygiene" element={<MenstrualHygiene />} />
            <Route path="impact-stories" element={<ImpactStories />} />
            <Route path="documents" element={<Documents />} />
            <Route path="impact-stories/transgender-menstrual-support" element={<TransgenderMenstrualSupport />} />
            <Route path="impact-stories/shame-to-strength" element={<ShameToStrength />} />
            <Route path="impact-stories/breaking-the-silence" element={<BreakingTheSilence />} />
            <Route path="events" element={<Events />} />
            <Route path="events/menstrual-hygiene-workshop" element={<MenstrualHygieneWorkshop />} />
            <Route path="events/women-empowerment-summit" element={<WomenEmpowermentSummit />} />
            <Route path="events/womens-day-celebration" element={<WomensDayEvent />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
