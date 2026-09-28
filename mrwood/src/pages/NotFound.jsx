import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70svh] flex-col justify-center py-40">
      <h1 className="text-[2.6rem] sm:text-[3.4rem]">This page doesn't exist</h1>
      <p className="mt-6 max-w-[44ch] text-muted-foreground">
        The link may be old. The door gallery is the best place to start.
      </p>
      <Link
        to="/doors"
        className="mt-10 w-fit bg-foreground px-8 py-4 text-[0.8rem] tracking-[0.16em] text-background transition-colors duration-500 hover:bg-accent"
      >
        Go to the doors
      </Link>
    </section>
  );
}
