import { Fragment } from "react";

import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import Features from "./components/features/Features";
import StrategiesSection from "./components/strategies/StrategiesSection";
import PricingSection from "./components/pricing/PricingSection";
import ClientsSection from "./components/clients/ClientsSection";
import OptimizeSection from "./components/optimize/OptimizeSection";

function App() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Features />
      <StrategiesSection />
      <PricingSection />
      <ClientsSection />
      <OptimizeSection />
    </Fragment>
  );
}

export default App;
