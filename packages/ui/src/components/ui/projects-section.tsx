// import { cn } from "@workspace/ui/lib/utils"
// import { Avatar, AvatarImage } from "@workspace/ui/components/ui/avatar"

// export interface TestimonialAuthor {
//   name: string
//   handle: string
//   avatar: string
// }

// export interface TestimonialCardProps {
//   author: TestimonialAuthor
//   text: string
//   href?: string
//   className?: string
// }

// export function TestimonialCard({ 
//   author,
//   text,
//   href,
//   className
// }: TestimonialCardProps) {
//   const Card = href ? 'a' : 'div'
  
//   return (
//     <Card
//       {...(href ? { href } : {})}
//       className={cn(
//         "flex flex-col rounded-lg border-t",
//         "bg-gradient-to-b from-muted/50 to-muted/10",
//         "p-4 text-start sm:p-6",
//         "hover:from-muted/60 hover:to-muted/20",
//         "max-w-[320px] sm:max-w-[320px]",
//         "transition-colors duration-300",
//         className
//       )}
//     >
//       <div className="flex items-center gap-3">
//         <Avatar className="h-12 w-12">
//           <AvatarImage src={author.avatar} alt={author.name} />
//         </Avatar>
//         <div className="flex flex-col items-start">
//           <h3 className="text-md font-semibold leading-none">
//             {author.name}
//           </h3>
//           <p className="text-sm text-muted-foreground">
//             {author.handle}
//           </p>
//         </div>
//       </div>
//       <p className="sm:text-md mt-4 text-sm text-muted-foreground">
//         {text}
//       </p>
//     </Card>
//   )
// }

// import { cn } from "@workspace/ui/lib/utils"
// import Image from "next/image"
// import { Badge } from "@/components/ui/badge"

// export interface Project {
//   title: string
//   description: string
//   imageUrl: string
//   categories: string[] // e.g. ["Web", "App"]
//   techStack: string[]  // e.g. ["Next.js", "Tailwind"]
//   href?: string
// }

// export function ProjectCard({
//   title,
//   description,
//   imageUrl,
//   categories,
//   techStack,
//   href,
//   className,
// }: Project & { className?: string }) {
//   const Card = href ? "a" : "div"

//   return (
//     <Card
//       {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
//       className={cn(
//         "flex flex-col rounded-lg border-t bg-muted/20",
//         "hover:bg-muted/30 transition-colors duration-300",
//         "max-w-[320px] sm:max-w-[320px]",
//         className
//       )}
//     >
//       <div className="relative h-40 w-full rounded-t-lg overflow-hidden">
//         <Image
//           src={imageUrl}
//           alt={title}
//           fill
//           className="object-cover"
//         />
//       </div>
//       <div className="p-4 space-y-2">
//         <h3 className="text-md font-semibold">{title}</h3>
//         <p className="text-sm text-muted-foreground">{description}</p>
//         <div className="flex flex-wrap gap-1 pt-2">
//           {categories.map((cat) => (
//             <Badge key={cat} variant="secondary">{cat}</Badge>
//           ))}
//         </div>
//         <div className="flex flex-wrap gap-1 pt-1">
//           {techStack.map((tech) => (
//             <Badge key={tech} variant="outline">{tech}</Badge>
//           ))}
//         </div>
//       </div>
//     </Card>
//   )
// }
