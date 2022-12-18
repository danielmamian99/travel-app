import { Activity } from "../../../interfaces";
import { Circle } from "../../generals";

export const ActivityOfDay = ({
  type,
  name,
  icon,
  labels,
  subtitle,
}: Activity) => {
  return (
    <>
      <section className="grid grid-cols-[8rem_2rem_8rem] items-center justify-items-center gap-x-2 pt-0.5">
        <div>{type === "start" && "Inicio"}</div>
        <div className="flex justify-center items-center relative h-full">
          {icon ? (
            <Circle
              backgroundColor="#FF805A"
              urlImage={`/images/itinerary/${icon}.svg`}
              altImage={icon}
            />
          ) : (
            <Circle backgroundColor="#FF805A" />
          )}
        </div>

        <div className="flex w-full flex-col items-start pl-2">
          {labels.map((label, index) => (
            <article className="grid justify-center align-middle" key={index}>
              <p className="text-sm">{label}</p>
              {labels.length > 1 && <br />}
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
