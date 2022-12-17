import { CrossingDay, CrossingTitle } from "./";
import { useFetch } from '../../hooks/useFetch.js';


export const Crossing = () => {
  const itinerarys = useFetch()
  return (
    <div className="flex flex-col justify-center items-center relative h-full w-full p-8 gap-y-4">
      <div className="z-0 absolute border border-[#FF6549] border-dashed h-[90%] top-32 w-px"></div>

      <CrossingTitle/>
      {
        Object.values(itinerarys).map((itinerary,index) => (
           <CrossingDay key={index} day={itinerary.day} activitys={itinerary.activitys}/>
        ))
      }
    </div>
  );
};
