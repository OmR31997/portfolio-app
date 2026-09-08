import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TechStack } from '../components/TechStack';
import { FeaturedProject } from '../components/FeaturedProject';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { Services } from '../components/Services';
import { ArchitectureFlow } from '../components/ArchitectureFlow';
import { Experience } from '../components/Experience';
import { ProofOfWork } from '../components/ProofOfWork';
import { WhyWorkWithMe } from '../components/WhyWorkWithMe';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070a11] text-slate-200 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      <Navbar />
      <Hero />
      <TechStack />
      <FeaturedProject />
      <ProjectsGrid />
      <Services />
      <ArchitectureFlow />
      <Experience />
      <ProofOfWork />
      <WhyWorkWithMe />
      <ContactSection />
      <Footer />
    </main>
  );
}
