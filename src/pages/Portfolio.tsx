
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32">
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
