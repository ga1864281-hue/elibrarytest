import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturedBooks from "@/components/FeaturedBooks";
import RecentlyAdded from "@/components/RecentlyAdded";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedBooks />
        <RecentlyAdded />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
