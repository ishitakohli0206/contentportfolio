import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-paper-alt">
      <div className="container-editorial py-20 md:py-28">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-14 md:mb-20">
          Experience
        </h2>

        <div className="flex flex-col">
          {experience.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-t border-line first:border-t-0"
            >
              <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start gap-2">
                <span className="font-display text-2xl text-claret">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-ink-faint md:mt-2">
                  {item.duration}
                </span>
              </div>

              <div className="md:col-span-9">
                <h3 className="font-display text-xl md:text-2xl text-ink mb-1">
                  {item.role}
                </h3>
                <p className="text-sm text-claret mb-4">{item.company}</p>
                <p className="text-ink-soft text-base leading-relaxed mb-4 max-w-2xl">
                  {item.summary}
                </p>
                <ul className="flex flex-col gap-2 mb-5 max-w-2xl">
                  {item.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-ink-soft text-[0.95rem] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:w-1.5 before:h-1.5 before:bg-claret before:rounded-full"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                {item.metrics && item.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="text-xs text-ink border border-line px-3 py-1.5"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
