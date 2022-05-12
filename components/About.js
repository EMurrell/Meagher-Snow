export default function About() {
  return (
    <section
      id="About"
      className="flex flex-col justify-center w-full px-10 pt-12 font-sans font-bold tracking-tight md:pt-24 text-neutral-800 md:pb-8 "
    >
      <h1 className="pt-10 pb-8 text-3xl font-extrabold text-center md:text-4xl ">
        30 YEARS EXPERIENCE
      </h1>

      <div className="flex self-center w-32 border-t-2 border-highlight1"></div>

      <div className="flex flex-col justify-center py-6 text-xl text-center md:text-2xl lg:text-3xl">
        <p className="py-3 ">Free Estimates.</p>

        <p className="py-3">Family Owned and Operated.</p>

        <p className="py-3 ">Fully Licensed and Insured.</p>

        <p className="py-3 pb-8 md:pb-12 ">
          Serving Ottawa and Surrounding Region.
        </p>
      </div>

      <div className="flex flex-col justify-center px-6 py-4 mt-8 text-lg text-center text-white border-4 shadow-lg bg-highlight1 place-self-center md:text-xl lg:text-2xl border-highlight1 shadow-black">
        <h2>MAKES A GREAT GIFT FOR FRIENDS & FAMILY!</h2>
      </div>
    </section>
  );
}
