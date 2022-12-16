import { Activity } from "../../interfaces";

export const ActivityOfDay = ({
  type,
  name,
  icon,
  labels,
  subtitle,
}: Activity) => {
  return (
    <div className="grid grid-cols-3 items-center justify-items-center gap-x-2">
      <div>
        {type === 'start' && "Inicio"}
      </div>
      <div className="flex justify-center items-center bg-[#FF805A] rounded-full w-[2em] h-[2em]">
        {icon && (
          <div className="flex justify-center w-[1em] h-[1em]">
            <img src={`/images/itinerary/${icon}.svg`}></img>
          </div>
        )}
      </div>
      <div>
        {
          labels.map((label, index) => (
            <div key={index}>
              <p>{label}</p>
              <br/>
            </div>
          ))
        } 
      </div>
    </div>
  );
};
