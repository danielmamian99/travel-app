import { useId } from "react";
import { Itinerary } from "../../interfaces";
import { ActivityOfDay } from "./ActivityOfDay";

export const CrossingDay = ({ day, activitys }: Itinerary) => {
  return (
    <>
      <div className="flex justify-end">
        <div className="border-b-2 w-1/4 flex justify-end">
          {`Day ${day}`}
        </div>
      </div>
      {
        activitys.map((activity, index) => (
          <div key={index} className="flex flex-col items-center">
            <ActivityOfDay {...activity} />
            <div className="bg-[#FF805A] h-24 w-0.5"></div>
          </div>
        ))
      }
    </>
  );
};
