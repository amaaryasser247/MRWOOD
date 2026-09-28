import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { site, whatsappLink } from "../data/site";

export default function CTASection({
  title = "Let's create something beautiful",
  text = "Send us a photo of your space or the door you have in mind. We'll tell you what's possible, in wood.",
  showContactLink = true,
}) {
  return (
    <section className="bg-foreground text-background">
      <div className="shell py-24 md:py-32">
        <Reveal>
          <h2 className="max-w-[16ch] text-[2.2rem] text-background sm:text-[3rem] lg:text-[3.6rem]">
            {title}
          </h2>
          <p className="mt-7 max-w-[52ch] text-[1rem] leading-relaxed text-background/60">{text}</p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-9 py-5 rounded-xl text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 shadow-[0_8px_32px_rgba(0,0,0,0.15)] font-semibold"
            >
              <MessageCircle size={18} strokeWidth={1.4} />
              <span className="text-[0.82rem] tracking-[0.16em]">Message us on WhatsApp</span>
            </a>

            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-9 py-5 rounded-xl text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 shadow-[0_8px_32px_rgba(0,0,0,0.05)] font-semibold"
            >
              <Phone size={17} strokeWidth={1.4} />
              <span className="text-[0.82rem] tracking-[0.16em]">{site.phoneDisplay}</span>
            </a>

            {showContactLink && (
              <Link
                to="/contact"
                className="rule-link ml-2 text-[0.8rem] tracking-[0.14em] text-background/70"
              >
                Contact MRWOOD
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
