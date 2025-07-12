"use client";
import { TestimonialsColumn } from "@workspace/ui/components/blocks/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Their MVP helped us validate our product-market fit in just 6 weeks. The speed and quality were remarkable, allowing us to secure our seed funding.",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Jonathan Miller",
    role: "Co-founder, FinTech Startup"
  },
  {
    text: "The enterprise platform integrated seamlessly with our legacy systems. Scalability and security were top-notch—this team understands corporate needs.",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    name: "Claire Thompson",
    role: "Enterprise Architect, Global Retail Inc."
  },
  {
    text: "From onboarding to launch, they maintained clear communication and fast iteration cycles. Our AI-powered MVP was live in record time.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Luca Romano",
    role: "CTO, HealthTech Startup"
  },
  {
    text: "Their cloud-native ERP transformed our data flow across departments. What impressed us most was the real-time visibility into operations.",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    name: "Ava Chen",
    role: "Director of Operations, LogisticsCorp"
  },
  {
    text: "We launched our beta version with complete backend and auth in under a month. The MVP was stable, extensible, and investor-ready.",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "Tobias Meier",
    role: "Founder, EduStart"
  },
  {
    text: "Our AI-enabled enterprise dashboard has become essential. It consolidates insights across teams and enables faster, data-driven decisions.",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    name: "Sophie Dubois",
    role: "Chief Data Officer, MedSys Group"
  },
  {
    text: "They delivered a robust MVP that gave us a competitive edge. The modular architecture helped us expand features post-launch effortlessly.",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
    name: "Diego Morales",
    role: "Product Lead, SaaS Startup"
  },
  {
    text: "Their understanding of enterprise-grade compliance and scalability made our cloud migration smooth. Support was responsive and strategic.",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    name: "Natalie Fischer",
    role: "IT Strategy Consultant"
  },
  {
    text: "They built our MVP with incredible speed and precision. The user feedback was overwhelmingly positive, helping us iterate quickly post-launch.",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "Michael O’Connor",
    role: "Startup Advisor, MVP Ventures"
  },
  {
    text: "We operate in a highly regulated industry, and their team ensured all data and integration practices were enterprise-compliant. Excellent partner.",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    name: "Emily Rodriguez",
    role: "VP Compliance, Finserve Group"
  }
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
