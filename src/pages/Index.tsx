import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  console.log("Index component loading...");
  
  return (
    <div className="min-h-screen bg-black">
      {/* Teste de estilo para diagnosticar */}
      <div className="text-tattoo-gold p-4">
        Teste de cor dourada
      </div>
      <Header />
      <Hero />
      <Gallery />
      <About />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
