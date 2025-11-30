"use client";

import React from "react";
import { Hero } from "./_components/heading";
import { ExperienceSection } from "./_components/ExperienceSection";
import { ProjectsSection } from "./_components/ProjectSection";
import { BlogSection } from "./_components/BlogSection";
import { Footer } from "./_components/footer";
import { CosmicBackground } from "@/components/CosmicBG";

export default function Portfolio() {
  return (
    <main className="min-h-screen text-zinc-200 selection:bg-indigo-500/30">
      <CosmicBackground />
      
      <div className="max-w-3xl mx-auto px-6 sm:px-12">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <BlogSection />
        <Footer />
      </div>
    </main>
  );
}