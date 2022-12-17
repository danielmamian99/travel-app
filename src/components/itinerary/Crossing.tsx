import { CrossingDay } from "./";
import { useFetch } from "../../hooks/useFetch.js";

export const Crossing = () => {
  const itinerarys = useFetch();
  return (
    <div className="flex flex-col justify-center items-center relative h-full w-full p-8 gap-y-4">
      <div className="z-0 absolute border border-[#FF6549] border-dashed h-[93%] top-32 w-px"></div>

      <div className="flex flex-row w-full justify-between">
        <div>
          <p className="font-bold text-xl">La travesía:</p>
        </div>
        <div className="flex flex-row gap-x-1">
          <div className="flex items-center min-w-max">
            <p className="text-sm">Wonder Travel</p>
          </div>
          <img className="w-1/6" src="/images/generals/wonderLogo.svg" alt="Wonder Travel"></img>
        </div>
      </div>
      {Object.values(itinerarys).map((itinerary, index) => (
        <CrossingDay
          key={index}
          day={itinerary.day}
          activitys={itinerary.activitys}
        />
      ))}
    </div>
  );
};
