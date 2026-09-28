import Reveal from "./Reveal";

/** Standing head for the inner pages: clears the fixed navbar, sets the title. */
export default function PageHeader({ title, intro, meta, children }) {
  return (
    <header className="shell pb-14 pt-36 md:pb-20 md:pt-44">
      <Reveal>
        {meta && <p className="mb-5 text-[0.75rem] tracking-[0.18em] text-muted-foreground">{meta}</p>}
        <h1 className="max-w-[16ch] text-[2.6rem] sm:text-[3.4rem] lg:text-[4.2rem]">{title}</h1>
        {intro && (
          <p className="mt-8 max-w-[52ch] text-[1rem] leading-relaxed text-muted-foreground">{intro}</p>
        )}
        {children}
      </Reveal>
    </header>
  );
}
