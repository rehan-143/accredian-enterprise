import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Programs from "@/components/Programs";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Impact from "@/components/Impact";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <Programs />
        <WhyUs />
        <Process />
        <Impact />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
