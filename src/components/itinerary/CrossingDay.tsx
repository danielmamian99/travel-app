import { Itinerary } from "../../interfaces";
import { ActivityOfDay } from "./ActivityOfDay";
import { LocationActivity } from "./LocationActivity";

export const CrossingDay = ({ day, activitys }: Itinerary) => {
  return (
    <>
      <div className="flex justify-end self-end w-full">
        <div className="border-b-2 w-1/4 flex justify-end">{`Day ${day}`}</div>
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
