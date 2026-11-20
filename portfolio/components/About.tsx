import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl md:text-4xl text-ink sticky top-24">
              About
            </h2>
          </div>

          <div className="md:col-span-5">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-ink-soft text-base md:text-lg leading-relaxed mb-5 last:mb-0"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="md:col-span-3">
            <dl className="flex flex-col">
              {about.facts.map((fact, i) => (
                <div
                  key={i}
                  className="py-4 border-t border-line first:border-t-0 md:first:border-t"
                >
                  <dt className="text-xs text-ink-faint tracking-wideish mb-1">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-ink leading-snug">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
