import React from "react";
import { HeroSection } from "@/components/landing/HeroSection";
import { EcosystemExplorer } from "@/components/landing/EcosystemExplorer";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <EcosystemExplorer />
    </div>
  );
}
