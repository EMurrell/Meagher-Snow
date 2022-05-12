import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Github, Devdotto, Twitter } from "@icons-pack/react-simple-icons";
import { MailIcon } from "@heroicons/react/outline";
import { Fade as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";

const links = [
  { name: "About", to: "#About", id: 1 },
  { name: "Services", to: "#Services", id: 2 },
  { name: "Contact", to: "#Contact", id: 3 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

export default function Nav() {
  const [open, cycleOpen] = useCycle(false, true);
  const [animateNav, setAnimateNav] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 125) {
        setAnimateNav(true);
      } else setAnimateNav(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <nav
      className={`text-black w-full flex    justify-between  font-sans  fixed z-50 transition ease-in-out duration-500 ${
        animateNav && "shadow-xl  "
      }`}
    >
      <div
        className={`flex w-screen py-4  bg-transparent   ${
          animateNav &&
          "py-0 backdrop-blur-sm  bg-white/80  trasition ease-in-out duration-500"
        } mx-auto   justify-between   `}
      >
        <Link href="/">
          <a className="inline-flex mx-4 mt-4 text-2xl font-semibold text-center cursor-pointer md:mt-8 font-logo md:text-2xl md:ml-8 lg:ml-16">
            {/* <Image src="/plowpng-sm.png" alt="logo" height={120} width={120} /> */}
            MEAGHER&apos;S
          </a>
        </Link>

        {/* The Side Bar Menu for screens smaller than 'Medium' */}
        <AnimatePresence>
          {open && (
            <motion.aside
              className="fixed top-0 right-0 h-screen bg-white md:hidden overflow"
              initial={{ width: 0 }}
              transition={{ type: "tween" }}
              animate={{
                width: "80%",
              }}
              exit={{
                width: 0,
                transition: { delay: 0.3, duration: 0.15 },
              }}
            >
              <motion.div
                className="flex flex-col p-8 ml-4 text-2xl "
                initial="closed"
                animate="open"
                exit="closed"
              >
                <Link href="https://www.trailbridgeweb.com" passHref>
                  <a>
                    <div
                      className="py-10 border-b-2 border-neutral-100"
                      onClick={cycleOpen}
                    >
                      <h2>MEAGHER&apos;S</h2>
                      {/* <Image
                        src="/plowpng-sm.png"
                        alt="logo"
                        height={100}
                        width={100}
                      /> */}
                    </div>
                  </a>
                </Link>

                {links.map(({ name, to, id }) => (
                  <motion.a
                    key={id}
                    href={to}
                    className="flex mt-16 transition duration-100 ease-in-out transform hover:shadow-bottom w-max "
                    variants={itemVariants}
                    aria-current={links.current ? "page" : undefined}
                    onClick={cycleOpen}
                  >
                    {name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* The Hamburger Menu and Close Icons */}
        <div className="flex justify-end md:hidden ">
          <button className="px-2 m-2 cursor-pointer">
            <span className="sr-only ">Open main menu</span>
            <Hamburger toggled={open} toggle={cycleOpen} />
          </button>
        </div>

        {/* The Navbar on medium screens */}
        <div className="hidden pr-8 md:inline-flex ">
          {links.map(({ name, to, id }) => (
            <a
              key={id}
              href={to}
              className="mx-8 my-8 text-lg font-normal transition duration-100 ease-in-out transform hover:scale-110 lg:mx-12 9 md:text-xl "
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
