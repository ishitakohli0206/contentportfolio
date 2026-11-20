import Image from "next/image";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { profile, heroIntro } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container-editorial pt-14 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          {/* Text column */}
          <div className="md:col-span-7 order-2 md:order-1">
            <p
              className="font-sans text-ink-soft text-base md:text-lg mb-5"
            >
              Content Writer
              <br />
              SEO Content Writer
            </p>

            <h1
              className="font-display text-ink text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl mb-7"
            >
              {profile.name}
            </h1>

            <p
              className="max-w-xl text-ink-soft text-base md:text-lg leading-relaxed mb-9"
            >
              {heroIntro}
            </p>

            <div
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-sm hover:bg-claret transition-colors duration-200"
              >
                View My Work
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 border border-ink text-ink px-6 py-3 text-sm hover:border-claret hover:text-claret transition-colors duration-200"
              >
                About Me
              </a>
              <a
                href="#contact"
                className="inline-flex items-center text-ink text-sm underline decoration-line underline-offset-4 hover:decoration-claret hover:text-claret transition-colors duration-200"
              >
                Contact
              </a>
            </div>

            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-soft"
            >
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-claret transition-colors duration-200"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 hover:text-claret transition-colors duration-200"
              >
                <Mail size={16} />
                {profile.email}
              </a>
            </div>
          </div>

          {/* Photo column */}
          <div className="md:col-span-5 order-1 md:order-2">
            <div className="relative max-w-sm mx-auto md:mx-0 md:ml-auto">
              <div
                className="absolute -top-4 -right-4 md:-top-5 md:-right-5 w-full h-full bg-claret"
                aria-hidden="true"
              />
              <div className="relative border border-ink bg-paper-alt aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={profile.photo}
                  alt={`${profile.name}, ${profile.titles.join(" and ")}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, 380px"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-xs text-ink-faint tracking-wideish">
                {profile.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
