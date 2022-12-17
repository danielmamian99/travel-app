import { Itinerary } from "../../interfaces";
import { ActivityOfDay } from "./ActivityOfDay";
import { LocationActivity } from "./LocationActivity";

export const CrossingDay = ({ day, activitys }: Itinerary) => {
  return (
    <>
      <div className="flex justify-end w-full md:w-1/2">
        <div className="border-[#FF6549] border-t w-1/4 text-[#FF6549] flex justify-end">{`Day ${day}`}</div>
      </div>
      {activitys.map((activity, index) => (
        <div key={index} className="flex flex-col items-center leading-3">
          {activity.type === "location" ? (
            <LocationActivity {...activity} />
          ) : (
            <ActivityOfDay {...activity} />
          )}
        </div>
      ))}
    </>
  );
};
