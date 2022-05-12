import Image from "next/image";
import { Facebook, Twitter, Instagram } from "@icons-pack/react-simple-icons";
import { MailIcon, ArrowNarrowRightIcon } from "@heroicons/react/outline";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer
      id="Contact"
      className="flex flex-col px-8 pt-6 font-sans bg-black xl:h-auto md:px-24 lg:px-52 text-neutral-100 "
    >
      <div className="flex flex-col py-20 2xl:py-20 lg:flex-row ">
        <div className="flex flex-col">
          <h1 className="pr-2 mb-8 text-4xl font-semibold md:text-5xl lg:text-6xl lg:w-1/2">
            Meagher&apos;s Snowblowing
          </h1>

          {/* <div className="flex flex-row mb-10">
            <a href="https://facebook.com/trailbridgeweb">
              <Facebook className="w-8 h-8 mr-8 cursor-pointer md:w-10 md:h-10 hover:text-highlight1" />
            </a>
            <a href="https://twitter.com/trailbridgeweb">
              <Twitter className="w-8 h-8 mr-8 cursor-pointer md:w-10 md:h-10 hover:text-highlight1" />
            </a>
            <a href="https://instagram.com/trailbridgeweb">
              <Instagram className="w-8 h-8 cursor-pointer md:w-10 md:h-10 hover:text-highlight1" />
            </a>
          </div> */}
        </div>

        <div className="flex flex-col text-base lg:text-lg">
          <div>
            <div className="flex flex-col mb-6 transition duration-300 ease-in-out transform cursor-pointer lg:mx-6 h-max w-max hover:shadow-bottom">
              <h2 className="flex flex-row text-xl font-bold lg:text-2xl w-max">
                CONTACT US TODAY!
              </h2>
            </div>
          </div>
          <a href="mailto:meaghersnowblowing@gmail.com">
            <div className="flex flex-col mb-6 transition duration-300 ease-in-out transform cursor-pointer lg:mx-6 h-max w-max hover:shadow-bottom">
              <h2 className="flex flex-row w-max">
                Email &nbsp;
                <ArrowNarrowRightIcon className="w-4 h-4 mt-1 lg:h-5 md:h-5" />
              </h2>
              <p className=" text-neutral-400 font-body">
                meaghersnowblowing@gmail.com
              </p>
            </div>
          </a>

          <div className="flex flex-col mb-6 transition duration-300 ease-in-out transform cursor-pointer lg:mx-6 h-max w-max hover:shadow-bottom">
            <a href="tel:+1-613-830-5383">
              <h2 className="flex flex-row w-max">
                Phone &nbsp;
                <ArrowNarrowRightIcon className="w-4 h-4 mt-1 lg:h-5 md:h-5" />
              </h2>
              <p className=" text-neutral-400 font-body">(613) 830-5383</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center py-12 text-base text-center border-t border-neutral-200 lg:text-lg text-neutral-400">
        &copy; {getCurrentYear()} Meagher&apos;s Snowblowing, <br />
        Powered by Trailbridge Web
      </div>
    </footer>
  );
}
