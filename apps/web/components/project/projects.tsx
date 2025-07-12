import { ProjectsSection } from "@/components/project/projectSection"

const projects = [
  {
    title: "Virtual Medical App",
    description: "Book virtual doctor appointments and manage health-related services remotely.",
    imageUrl: "/Archive/1.png",
    categories: ["Medical", "App"],
    techStack: ["React Native", "Go", "gRPC"]
  },
  {
    title: "E-signature Platform",
    description: "Securely send and sign any agreement digitally.",
    imageUrl: "/Archive/2.png",
    categories: ["MVP", "LegalTech"],
    techStack: ["Next.js", "AI", "Node.js"]
  },
  {
    title: "AI Fitness Tracker",
    description: "Track fitness progress and get personalized AI-powered workouts.",
    imageUrl: "/Archive/3.png",
    categories: ["Fitness", "Enterprise"],
    techStack: ["Kotlin", "Swift", "React", "Go"]
  },
  {
    title: "GitHub Activity Tracker",
    description: "Track GitHub activity across repositories in real time.",
    imageUrl: "/Archive/4.png",
    categories: ["Developer Tool", "MVP"],
    techStack: ["Next.js", "Node.js", "Supabase"]
  },
  {
    title: "Testimonial Manager",
    description: "Collect and display customer video & text testimonials to build trust.",
    imageUrl: "/Archive/5.png",
    categories: ["Enterprise", "Marketing"],
    techStack: ["AWS", "React", "Go", "Kubernetes"]
  },
  {
    title: "Instagram Growth Automation",
    description: "Automated tools to grow followers, engagement, and visibility on Instagram.",
    imageUrl: "/Archive/6.png",
    categories: ["Social Media", "MVP"],
    techStack: ["Next.js", "Supabase"]
  },
  {
    title: "Universal LLM API",
    description: "Manage and analyze LLM requests with one API across multiple providers.",
    imageUrl: "/Archive/7.png",
    categories: ["AI", "Enterprise"],
    techStack: ["Next.js", "Go", "Azure", "AI"]
  },
  {
    title: "AI Meme Generator",
    description: "Create viral memes easily with AI—no design skills needed.",
    imageUrl: "/Archive/8.png",
    categories: ["Entertainment", "MVP"],
    techStack: ["Next.js", "Supabase"]
  },
  {
    title: "Scalable AI Blockchain",
    description: "Fast blockchain (120K TPS) with AI-powered security and Proof of Stake.",
    imageUrl: "/Archive/9.png",
    categories: ["Blockchain", "Enterprise"],
    techStack: ["Rust", "Solana", "Next.js", "Go", "AI"]
  },
  {
    title: "Voice AI Assistant",
    description: "Enterprise-grade voice AI with real-time communication capabilities.",
    imageUrl: "/Archive/10.png",
    categories: ["Voice", "Enterprise"],
    techStack: ["React Native", "Go", "gRPC"]
  }
]

export default function ProjectsSectionDemo() {
  return (
    <div id="Portfolio">
      <ProjectsSection
        title="Projects we've engineered"
        description="From MVPs to real-time platforms, our systems are built with scale and intelligence in mind."
        projects={projects}
      />
    </div>

  )
}
