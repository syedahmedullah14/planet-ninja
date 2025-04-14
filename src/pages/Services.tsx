
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32">
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
