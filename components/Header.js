import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <section className="flex flex-col justify-center w-full h-screen px-6 text-black bg-center bg-no-repeat bg-cover shadow-lg md:px-16 lg:px-32 bg-hero">
      {/* <div className="flex mx-auto">
        <Image src="/logo-sq.png" alt="logo" height={500} width={500} />
      </div> */}
      <h1 className="pb-2 text-4xl font-extrabold text-center md:text-6xl lg:text-7xl">
        MEAGHER&apos;S <br /> SNOWBLOWING
      </h1>

      <em className="pb-5 text-xl font-semibold text-center md:text-3xl lg:text-4xl">
        Let us do the worrying this winter!
      </em>
      <Link href={"/#Contact"} passHref>
        <button className="px-5 py-3 mx-auto mb-16 text-lg font-semibold text-black border-4 border-black shadow-lg bg-white/50 hover:bg-highlight1 hover:border-highlight1 lg:px-6 shadow-neutral-500 w-max md:text-xl lg:py-4 hover:text-black">
          CONTACT US
        </button>
      </Link>
    </section>
  );
}
