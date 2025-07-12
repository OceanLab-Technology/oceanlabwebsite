import HeroSection from "@/components/hero/hero-section"
import Features from "@/components/Features/Features"
import LogoCloud from "@/components/logoCloud/logoCloud"
import StatsSection from "@/components/stats/stats"
import FeaturesSection from "@/components/Features/sec"
import MVPProcess from "@/components/MVP/MVPProcess"
import Enterprise from "@/components/Enterprise/enterprise"
import AI from "@/components/AI/ai"
import ProjectsSectionDemo from "@/components/project/projects"
import Test from "@/components/testimonials/test"
import GlowEffectCardBackground from "@/components/book/book"
import FooterSection from "@/components/footer/footer"
export default function Page() {
  return (
    <div>
      <HeroSection />
      <LogoCloud />
      <Features/>
      <StatsSection/>
      {/* <MVPFeatures/>
       */}
      <FeaturesSection/>
      <MVPProcess/>
      <Enterprise/>
      <AI/>
      <ProjectsSectionDemo />
      <Test />
      <GlowEffectCardBackground />
      <FooterSection/>
    </div>
  )
}
