import { ArrowUpRight, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end">
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] mb-6">
              Have a story worth publishing?
            </h2>
            <p className="text-ink-soft text-base md:text-lg max-w-xl mb-8">
              Whether you&apos;re a brand that needs SEO content, a publication
              looking for a writer, or a team with a research document to
              untangle — I&apos;d like to hear about it.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-ink text-paper px-7 py-4 text-sm hover:bg-claret transition-colors duration-200"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="md:col-span-4">
            <ul className="flex flex-col gap-4 border-t border-line pt-6 md:border-t-0 md:pt-0">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-ink hover:text-claret transition-colors duration-200"
                >
                  <Mail size={18} />
                  <span className="text-sm">{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 text-ink hover:text-claret transition-colors duration-200"
                >
                  <Phone size={18} />
                  <span className="text-sm">{profile.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ink hover:text-claret transition-colors duration-200"
                >
                  <Linkedin size={18} />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-ink-soft">
                <MapPin size={18} />
                <span className="text-sm">{profile.location}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
