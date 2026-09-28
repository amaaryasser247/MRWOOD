import Img from "./Img";
import Reveal, { RevealImage } from "./Reveal";
import { site } from "../data/site";

const facts = [
  { value: `${new Date().getFullYear() - site.founded}+`, label: "Years in the workshop" },
  { value: "400+", label: "Doors delivered" },
  { value: "100%", label: "Made to measure" },
];

export default function AboutSection({ compact = false }) {
  return (
    <section className="shell py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-12 md:gap-x-10">
        <RevealImage className="md:col-span-6">
          <Img
            src="about/workshop.jpg"
            alt="Inside the MRWOOD workshop"
            ratio="portrait"
            label="Workshop"
            className="aspect-4/5"
          />
        </RevealImage>

        <div className="md:col-span-6 md:pl-6 lg:pl-16">
          <Reveal>
            <h2 className="max-w-[15ch] text-[2.1rem] sm:text-[2.6rem] lg:text-[3.1rem]">
              Wood, cut and finished by the same hands
            </h2>
            <div className="mt-8 space-y-6 text-[1rem] leading-relaxed text-muted-foreground">
              <p>
                MRWOOD is a wood manufacturing workshop. We select the boards, cut and press the
                panels, and finish every door ourselves — which is why a door leaves us matching the
                room it was measured in, not a catalogue.
              </p>
              <p>
                We work in solid oak, accent, beech and veneered panels, in modern flush shapes as
                readily as in carved classical ones. Most of what we make is custom: a size, a
                grain direction, a finish matched to furniture that already exists.
              </p>
              {!compact && (
                <p>
                  The work is slow on purpose. Edges are sanded by hand, hinges are fitted dry
                  before the finish goes on, and nothing ships until it opens and closes the way it
                  should.
                </p>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-14 grid grid-cols-3 gap-6 border-t border-foreground/12 pt-8">
            {facts.map((f) => (
              <div key={f.label}>
                <p className="font-display text-[1.8rem] font-light text-accent">{f.value}</p>
                <p className="mt-2 text-[0.75rem] leading-snug tracking-[0.1em] text-muted-foreground">
                  {f.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
