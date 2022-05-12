import Image from "next/image";
import { CheckIcon } from "@heroicons/react/outline";

export default function Services() {
  return (
    <section
      id="Services"
      className="py-32 -mt-10 overflow-hidden font-sans tracking-tight bg-center bg-cover md:-mt-16 md:py-28 bg-quote"
    >
      <div className="px-8 ">
        <div className="flex flex-col justify-center ">
          <h1 className="pb-8 text-3xl font-bold text-center text-white md:text-4xl">
            SERVICES:
          </h1>

          <div className="flex self-center w-24 border-t-2 border-highlight1"></div>

          <div className="flex flex-col justify-center mt-8">
            <ul className="max-w-3xl mx-auto font-sans text-xl font-medium leading-relaxed text-white md:text-3xl ">
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
                &#x2713;&emsp;We Offer Sand and Salt
              </li>
              <li className="pb-4 md:pb-8">
                &#x2713;&emsp;We Come Back For City Plows
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
