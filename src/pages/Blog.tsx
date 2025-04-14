
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32">
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
