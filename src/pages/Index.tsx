import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import About from "@/components/About";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
      <Hero />
      <Services />
      <Products />
      <About />
      <Process />
      <Reviews />
      <Partners />
      <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
