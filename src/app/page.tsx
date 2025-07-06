import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="pt-11 z-100 relative">
        <Navbar />
      </div>
      <Hero/>
      <Footer/>
    </PageWrapper>
  );
}
