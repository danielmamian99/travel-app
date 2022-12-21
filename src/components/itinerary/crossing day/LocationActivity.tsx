import { Activity } from "../../../interfaces";
import { Circle } from "../../generals";

export const LocationActivity = ({
  name,
  subtitle,
  icon,
  labels,
}: Activity) => {
  return (
    <section className="flex rounded-lg shadow-[0px_0px_10px_1px_rgba(0,0,0,0.1)] bg-[#FDFCF7] z-20 px-4 py-1">
      <section className="grid grid-cols-[8rem_2rem_8rem] items-center justify-items-center gap-x-2 pt-0.5">
        <article className="flex flex-col py-2">
          <p className="text-[16px] font-bold">{name}</p>
          {subtitle && <br />}
          <p>{subtitle}</p>
        </article>
        <div className="flex justify-center items-center relative">
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
        <div className="flex w-full flex-col items-center pl-2 py-2">
          {labels.map((label, index) => (
            <article className="grid justify-center align-middle" key={index}>
              <p>{label}</p>
              {  labels.length > 1 && labels.length-1 > index  && <br />}
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};
