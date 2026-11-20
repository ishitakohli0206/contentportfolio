import { skills, services } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-paper-alt">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Skills */}
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-8">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-sm text-ink border border-line px-3.5 py-2 bg-paper hover:border-claret hover:text-claret transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-8">
              Services
            </h2>
            <div className="flex flex-col">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 py-5 border-t border-line first:border-t-0"
                >
                  <span className="font-display text-lg text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-ink text-base font-medium mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-ink-soft text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
