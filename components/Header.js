import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <section className="flex flex-col justify-center w-full h-screen px-6 text-black bg-right bg-no-repeat bg-cover shadow-xl md:px-16 lg:px-32 bg-hero">
      {/* <div className="flex mx-auto">
        <Image src="/logo-sq.png" alt="logo" height={500} width={500} />
      </div> */}
      <div className="flex flex-col self-center justify-center p-6 border-4 border-white max-w-max bg-white/50">
        <h1 className="pt-4 pb-2 text-4xl font-bold text-center md:text-6xl lg:text-7xl">
          MEAGHER&apos;S <br /> SNOWBLOWING
        </h1>

        <em className="pb-6 text-xl font-bold text-center md:text-3xl lg:text-4xl">
          Let Us Do The Worrying This Winter!
        </em>
      </div>
      <Link href={"/#Contact"} passHref>
        <button className="py-4 mx-auto mb-20 -mt-8 text-lg font-bold text-white border-2 rounded-full shadow-lg px-7 hover:border-highlight1 hover:bg-neutral-200/80 bg-highlight1 border-highlight1 lg:px-6 shadow-neutral-800 w-max md:text-xl lg:py-4 hover:text-highlight1">
          CONTACT US
        </button>
      </Link>
    </section>
  );
}
