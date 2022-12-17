import { Activity } from "../../interfaces";
import { Circle } from "../generals";

export const LocationActivity = ({
  name,
  subtitle,
  icon,
  labels,
}: Activity) => {
  return (
    <section className="flex rounded-lg shadow-[0px_0px_10px_1px_rgba(0,0,0,0.1)] z-20 px-4 py-1">
      <section className="grid grid-cols-[8rem_2rem_8rem] items-center justify-items-center gap-x-2 pt-0.5">
        <article className="flex flex-col">
          <p className="text-xl font-bold">{name}</p>
          <br/>
          <p className="text-sm">{subtitle}</p>
        </article>
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
        <article>
          {labels.map((label, index) => (
            <article className="grid justify-center align-middle" key={index}>
              <p className="text-sm">{label}</p>
              {labels.length > 1 && <br />}
            </article>
          ))}
        </article>
      </section>
    </section>
  );
};
