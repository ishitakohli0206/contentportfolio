"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { work, WorkCategory } from "@/lib/data";

const filters: ("All" | WorkCategory)[] = [
  "All",
  "SEO & Blog Writing",
  "Product & Web Content",
];

export default function Work() {
  const [active, setActive] = useState<"All" | WorkCategory>("All");

  const visible =
    active === "All" ? work : work.filter((item) => item.category === active);

  return (
    <section id="work" className="border-t border-line">
      <div className="container-editorial py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-3">
              Selected Work
            </h2>
            <p className="text-ink-soft max-w-lg">
              Published articles, chosen to show range — SEO-led blog
              writing on one end, product and web content on the other.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`text-sm px-4 py-2 border transition-colors duration-200 ${
                  active === filter
                    ? "border-ink bg-ink text-paper"
                    : "border-line text-ink-soft hover:border-ink hover:text-ink"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
          {visible.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-paper p-8 md:p-10 flex flex-col justify-between transition-colors duration-200 hover:bg-paper-alt"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs text-ink-faint tracking-wideish">
                    {item.category}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-ink-faint group-hover:text-claret group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </div>

                <h3 className="font-display text-xl md:text-2xl text-ink mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-claret mb-4">{item.publication}</p>
                <p className="text-ink-soft text-[0.95rem] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs text-ink-soft border border-line px-2.5 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
