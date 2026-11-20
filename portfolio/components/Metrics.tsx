import { metrics } from "@/lib/data";

export default function Metrics() {
  return (
    <section className="bg-ink text-paper">
      <div className="container-editorial py-20 md:py-24">
        <h2 className="font-display text-3xl md:text-4xl mb-14 md:mb-16">
          By the numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
          {metrics.map((metric, i) => (
            <div key={i}>
              <p className="font-display text-4xl sm:text-5xl md:text-6xl text-paper mb-3">
                {metric.value}
              </p>
              <p className="text-sm text-paper/60 leading-relaxed max-w-[16rem]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
