// import { TestimonialsSection } from "@workspace/ui/components/blocks/testimonials-with-marquee"


// const testimonials = [
//   {
//     author: {
//       name: "Emma Thompson",
//       handle: "@emmaai",
//       avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
//     },
//     text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
//     href: "https://twitter.com/emmaai"
//   },
//   {
//     author: {
//       name: "David Park",
//       handle: "@davidtech",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
//     },
//     text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
//     href: "https://twitter.com/davidtech"
//   },
//   {
//     author: {
//       name: "Sofia Rodriguez",
//       handle: "@sofiaml",
//       avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
//     },
//     text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
//   }
// ]

// export default function TestimonialsSectionDemo() {
//   return (
//     <TestimonialsSection
//       title="Trusted by developers worldwide"
//       description="Join thousands of developers who are already building the future with our AI platform"
//       testimonials={testimonials}
//     />
//   )
// }

import { ProjectsSection } from "@/components/project/projectSection"

const projects = [
  {
    title: "Oceanlab MVP Builder",
    description: "Low-code platform to launch AI-powered MVPs rapidly.",
    imageUrl: "/Archive/1.png",
    categories: ["Web", "MVP"],
    techStack: ["Next.js", "OpenAI", "Supabase"],
    href: "https://oceanlab.dev/mvp-builder"
  },
  {
    title: "AI Monitoring Dashboard",
    description: "DevOps dashboard to monitor AI pipelines in real-time.",
    imageUrl: "/Archive/2.png",
    categories: ["DevOps", "App"],
    techStack: ["Go", "Docker", "Grafana"],
  },
  {
    title: "Design System Explorer",
    description: "Internal design system for product teams at scale.",
    imageUrl: "/Archive/3.png",
    categories: ["Design", "System"],
    techStack: ["Figma", "Tailwind", "Storybook"]
  },
  {
    title: "Design System Explorer",
    description: "Internal design system for product teams at scale.",
    imageUrl: "/Archive/4.png",
    categories: ["Design", "System"],
    techStack: ["Figma", "Tailwind", "Storybook"]
  },
    {
    title: "Design System Explorer",
    description: "Internal design system for product teams at scale.",
    imageUrl: "/Archive/5.png",
    categories: ["Design", "System"],
    techStack: ["Figma", "Tailwind", "Storybook"]
  },
    {
    title: "Design System Explorer",
    description: "Internal design system for product teams at scale.",
    imageUrl: "/Archive/6.png",
    categories: ["Design", "System"],
    techStack: ["Figma", "Tailwind", "Storybook"]
  },
    {
    title: "Design System Explorer",
    description: "Internal design system for product teams at scale.",
    imageUrl: "/Archive/7.png",
    categories: ["Design", "System"],
    techStack: ["Figma", "Tailwind", "Storybook"]
  },
    {
    title: "Design System Explorer",
    description: "Internal design system for product teams at scale.",
    imageUrl: "/Archive/8.png",
    categories: ["Design", "System"],
    techStack: ["Figma", "Tailwind", "Storybook"]
  },
    {
    title: "Design System Explorer",
    description: "Internal design system for product teams at scale.",
    imageUrl: "/Archive/9.png",
    categories: ["Design", "System"],
    techStack: ["Figma", "Tailwind", "Storybook"]
  },
    {
    title: "Design System Explorer",
    description: "Internal design system for product teams at scale.",
    imageUrl: "/Archive/10.png",
    categories: ["Design", "System"],
    techStack: ["Figma", "Tailwind", "Storybook"]
  }
]

export default function ProjectsSectionDemo() {
  return (
    <ProjectsSection
      title="Projects we've engineered"
      description="From MVPs to real-time platforms, our systems are built with scale and intelligence in mind."
      projects={projects}
    />
  )
}
