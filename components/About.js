export default function About() {
  return (
    <section
      id="About"
      className="flex flex-col justify-center w-full px-10 pt-6 font-sans font-medium tracking-tight md:pt-20 text-neutral-800 md:pb-8 "
    >
      <h1 className="pt-16 pb-8 text-3xl font-bold text-center md:text-4xl ">
        30 YEARS EXPERIENCE
      </h1>

      <div className="flex self-center w-32 border-t-2 border-highlight1"></div>

      <div className="flex flex-col justify-center py-6 text-xl text-center md:text-2xl lg:text-3xl">
        <p className="py-3 ">Free Estimates.</p>

        <p className="py-3">Family Owned and Operated.</p>

        <p className="py-3 ">Fully Licensed and Insured.</p>

        <p className="py-3 ">Fully Licensed and Insured.</p>

        <p className="py-3 pb-8 md:pb-12 ">
          Serving Orleans and Surrounding Region.
        </p>
      </div>

      <div className="flex flex-col justify-center px-8 py-8 mt-8 text-xl italic text-center text-black bg-white shadow-lg place-self-center md:text-2xl lg:text-3xl shadow-black">
        <h2>MAKES A GREAT GIFT FOR FRIENDS & FAMILY!</h2>
      </div>
    </section>
  );
}
