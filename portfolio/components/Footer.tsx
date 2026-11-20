import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="container-editorial py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-ink-faint">
          © {year} {profile.name}. All rights reserved.
        </p>
        <a
          href="#home"
          className="text-xs text-ink-faint hover:text-claret transition-colors duration-200"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
