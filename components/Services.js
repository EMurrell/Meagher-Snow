import Image from "next/image";
import { CheckIcon } from "@heroicons/react/outline";

export default function Services() {
  return (
    <section
      id="Services"
      className="py-32 -mt-16 overflow-hidden font-sans tracking-tight bg-center bg-cover md:-mt-20 md:py-28 bg-quote"
    >
      <div className="px-8 ">
        <div className="flex flex-col justify-center ">
          <h1 className="pb-8 text-3xl font-bold text-center text-white md:text-4xl">
            SERVICES:
          </h1>

          <div className="flex self-center w-24 border-t-2 border-highlight1"></div>

          <div className="flex flex-col justify-center max-w-lg mx-auto mt-8">
            <ul className="max-w-3xl mx-auto text-xl font-medium leading-relaxed text-white md:text-3xl ">
              <li className="pb-4 md:pb-8">&#x2713;&emsp;Snowblowing</li>
              <li className="pb-4 md:pb-8">
                &#x2713;&emsp;Residential Driveways
              </li>
              <li className="pb-4 md:pb-8">&#x2713;&emsp;Walkways</li>
              <li className="pb-4 md:pb-8">
                &#x2713;&emsp;High Priority Laneways
              </li>
              <li className="pb-4 md:pb-8">
                &#x2713;&emsp;Yearly or As Needed
              </li>
              <li className="pb-4 md:pb-8">
                &#x2713;&emsp;Rooftop Snow Removal
              </li>
              <li className="pb-12 md:pb-16">
                &#x2713;&emsp;We Come Back For City Plows
              </li>
              <li className="pb-4 text-2xl italic text-center md:pb-8 md:text-4xl">
                ENQUIRE ABOUT OUR LAWN MAINTENANCE SERVICES
              </li>
            </ul>
            <div className="mx-auto mt-16">
              <a href="tel:+1-613-830-5383">
                <button className="px-8 py-3 mx-auto -mt-8 text-lg font-bold text-white border-2 rounded-full shadow-lg hover:border-highlight1 hover:bg-white/70 bg-highlight1 border-highlight1 lg:px-6 shadow-black w-max md:text-xl lg:py-4 hover:text-highlight1">
                  CALL NOW
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
