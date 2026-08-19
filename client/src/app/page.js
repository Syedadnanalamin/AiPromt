import HeroSection from "@/components/Homepage/HeroSection/HeroSection";
import FeaturedPrompts from "@/components/Homepage/FeaturedPrompts/FeaturedPrompts";
import WhyChooseUs from "@/components/Homepage/WhyChooseUs/WhyChooseUs";
import TopCreators from "@/components/Homepage/TopCreators/TopCreators";
import CustomerReviews from "@/components/Homepage/CustomerReviews/CustomerReviews";
import FAQSection from "@/components/Homepage/FAQSection/FAQSection";
import CTASection from "@/components/Homepage/CTASection/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero / Banner Section */}
      <HeroSection />

      {/* 2. 6 Featured & Trending Prompts Section */}
      <FeaturedPrompts />

      {/* 3. Why Choose Us / Platform Benefits Section */}
      <WhyChooseUs />

      {/* 4. Top Verified Creators Section */}
      <TopCreators />

      {/* 5. Customer Testimonials & Reviews Section */}
      <CustomerReviews />

      {/* 6. Extra Section 1: FAQ Section */}
      <FAQSection />

      {/* 7. Extra Section 2: Final CTA Banner */}
      <CTASection />
    </div>
  );
}
