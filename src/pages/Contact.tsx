
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
