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
import Head from "next/head"

export default function Page() {
  return (
    <>
      {/* SEO + Metadata */}
      <Head>
        <title>Oceanlab — AI-First MVPs & Enterprise Software</title>
        <meta property="og:title" content="Oceanlab — AI-First MVPs & Enterprise Software" />
        <meta
          name="description"
          content="Oceanlab builds AI-first MVPs, scalable enterprise software, and intelligent SaaS platforms — engineered to launch fast and scale to millions."
        />
        <meta
          name="keywords"
          content="AI product development, MVP development, SaaS engineering, enterprise software, scalable backend, AI-first SaaS, LLM apps, startup tech partner"
        />
        <meta name="author" content="Oceanlab" />
        <meta name="robots" content="index, follow" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.oceanlab.in" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oceanlab.in" />
        <meta property="og:title" content="Oceanlab — MVP & Enterprise Software" />
        <meta
          property="og:description"
          content="Launch AI-powered MVPs and scalable enterprise software. Oceanlab is your product engineering partner — from 0 to millions."
        />
        <meta property="og:image" content="https://www.oceanlab.in/logo.jpg" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oceanlab — MVP & Enterprise Software" />
        <meta
          name="twitter:description"
          content="We build launch-ready MVPs, enterprise systems, and AI-native SaaS. Partner with Oceanlab to move fast and scale smart."
        />
        <meta name="twitter:image" content="https://www.oceanlab.in/logo.jpg" />

      </Head>

      {/* Page Sections */}
      <main>
        <HeroSection />
        <LogoCloud />
        <Features />
        <StatsSection />
        <FeaturesSection />
        <MVPProcess />
        <Enterprise />
        <AI />
        <ProjectsSectionDemo />
        <Test />
        <GlowEffectCardBackground />
        <FooterSection />
      </main>
    </>
  );
}
