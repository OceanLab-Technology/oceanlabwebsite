import { cn } from "@workspace/ui/lib/utils"
import { ProjectCard, Project } from "./projectCard"
import {
  MouseTrackerProvider as CursorProvider,
  Pointer as Cursor,
  PointerFollower as CursorFollow,
} from "@workspace/ui/components/ui/cursor";
import { MousePointer2 } from "lucide-react";
 
interface ProjectsSectionProps {
  title: string
  description: string
  projects: Project[]
  className?: string
}

export function ProjectsSection({
  title,
  description,
  projects,
  className
}: ProjectsSectionProps) {
  return (
    <section className={cn(
      "bg-background text-foreground py-12 sm:py-24 md:py-32",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        {/* Infinite scrolling project cards */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:350s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(20)].map((_, setIndex) =>
                projects.map((project, i) => (
                  <ProjectCard key={`${setIndex}-${i}`} {...project} />
                ))
              )}
            </div>
          </div>

          {/* Gradient fade overlays on sides */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
      
      <CursorProvider>
        <Cursor>
          <MousePointer2 className="fill-blue-500 stroke-white/10" size={30} />
        </Cursor>
        <CursorFollow align="bottom-right">
          <div className="bg-blue-500 text-white border border-white/10 text-large px-3 py-1 rounded-md shadow-md">
              🔐 Anonymized
          </div>
        </CursorFollow>
      </CursorProvider>
 
    </section>
  )
}
