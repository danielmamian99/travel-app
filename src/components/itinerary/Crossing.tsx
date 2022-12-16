import { CrossingDay, CrossingTitle } from "./";
import { useFetch } from '../../hooks/useFetch.js';


export const Crossing = () => {
  const itinerarys = useFetch()
  return (
    <div className="flex flex-col justify-center h-full w-full p-8">
      <CrossingTitle/>
      {
        Object.values(itinerarys).map((itinerary,index) => (
           <CrossingDay key={index} day={itinerary.day} activitys={itinerary.activitys}/>
        ))
      }
    </div>
  );
};
