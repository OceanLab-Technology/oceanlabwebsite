import { cn } from "@workspace/ui/lib/utils"
import Image from "next/image"
import { Badge } from "@workspace/ui/components/badge"

export interface Project {
  title: string
  description: string
  imageUrl: string
  categories: string[] // e.g. ["Web", "App"]
  techStack: string[]  // e.g. ["Next.js", "Tailwind"]
  href?: string
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  categories,
  techStack,
  href,
  className,
}: Project & { className?: string }) {
  const Card = href ? "a" : "div"

  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex flex-col rounded-lg border-t bg-muted/20",
        "hover:bg-muted/30 transition-colors duration-300",
        "max-w-[320px] sm:max-w-[320px]",
        className
      )}
    >
      <div className="relative h-40 w-full rounded-t-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-1 pt-2">
          {categories.map((cat) => (
            <Badge key={cat} variant="secondary">{cat}</Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-1 pt-1">
          {techStack.map((tech) => (
            <Badge key={tech} variant="outline">{tech}</Badge>
          ))}
        </div>
      </div>
    </Card>
  )
}
