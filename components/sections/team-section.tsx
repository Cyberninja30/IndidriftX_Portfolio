"use client"

import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function TeamSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  const teamMembers = [
    {
      name: "Monica",
      role: "Founder, CMO",
      bio: "Spearheading brand strategy and global market expansion.",
      image: "/src/monica.png",
      imagePosition: "object-top",
    },
    {
      name: "Krishan Kumar Madhukar",
      role: "Co-Founder, CEO",
      bio: "Visionary leader driving the strategic direction of autonomous drone systems.",
      image: "/src/krishan.png",
      imagePosition: "object-top",
      scale: 1.6, // Increased zoom
    },
    {
      name: "Dev Sharma",
      role: "CTO",
      bio: "Architecting the future of swarm intelligence and AI navigation.",
      image: "/src/dev.png",
      imagePosition: "object-top",
    },
    {
      name: "Moinak Niyogi",
      role: "COO",
      bio: "Overseeing operations and scaling mission-critical logistics.",
      image: "/src/moinak.png",
      imagePosition: "object-top",
    },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">


        <div
          className={`grid gap-4 transition-all duration-700 md:grid-cols-2 md:gap-6 lg:gap-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          style={{ transitionDelay: "200ms" }}
        >
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-lg border border-foreground/20 p-6 transition-all duration-500 md:p-8 hover:border-foreground/40 hover:bg-foreground/5`}
            >
              <div className={`absolute inset-0 bg-foreground/5 transition-all duration-500 group-hover:opacity-50`} />
              <div className="relative z-10 flex items-start gap-4 md:gap-6">
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border border-foreground/20 bg-foreground/30 transition-all duration-500 group-hover:scale-105 md:h-32 md:w-32">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`h-full w-full object-cover ${member.imagePosition || "object-top"}`}
                    style={{
                      transform: member.scale ? `scale(${member.scale})` : undefined,
                      transformOrigin: "top center", // Ensure scaling happens from top to keep head in view
                    }}
                  />
                </div>
                <div className="pt-2">
                  <h3 className="mb-1 font-sans text-xl font-semibold text-foreground md:text-2xl">{member.name}</h3>
                  <p className="mb-3 text-sm font-light text-foreground/80 md:mb-4 md:text-base">{member.role}</p>
                  <p className="text-sm leading-relaxed text-foreground/70">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 flex flex-wrap gap-3 transition-all duration-700 md:mt-16 md:gap-4 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          style={{ transitionDelay: "600ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(5)}>
            Get in Touch
          </MagneticButton>
          <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(0)}>
            Back to Home
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
