import { CrossingDay } from "./";
import { useFetch } from "../../hooks/useFetch.js";

export const Crossing = () => {
  const itinerarys = useFetch();
  return (
    <section className="flex flex-col items-center px-8">
      <div className="flex flex-row w-full justify-between md:w-1/2 my-4">
        <div>
          <p className="font-bold text-xl">La travesía:</p>
        </div>
        <div className="flex flex-row gap-x-1">
          <article className="flex items-center min-w-max">
            <p className="text-sm">Wonder Travel</p>
          </article>
          <img
            className="w-1/6"
            src="/images/generals/wonderLogo.svg"
            alt="Wonder Travel"
          ></img>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center relative w-full gap-y-4">
        <div className="z-0 absolute border border-[#FF6549] border-dashed h-[96%] top-16 w-px"></div>

        {Object.values(itinerarys).map((itinerary, index) => (
          <CrossingDay
            key={index}
            day={itinerary.day}
            activitys={itinerary.activitys}
          />
        ))}
      </div>
      <article className="flex justify-center mt-2">
        <p className="w-4/6 text-center">Regreso a ciudad de origen</p>
      </article>
    </section>
  );
};
