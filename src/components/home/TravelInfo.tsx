import { Benefits } from "./";

export const TravelInfo = () => {
  return (
    <>
      <div className="w-6/12 md:w-[26rem] lg:w-[28rem] xl:w-[30rem] mt-8">
        <hr className="border-y-[1.5px]" />
      </div>
      <article className="flex justify-center mt-6 text-md md:text-2xl lg:text-3xl text-center">
        <p>
          Viaje por los Cerros de Mavicure
          <br />y sus alrededores
        </p>
      </article>
      <div className="flex mt-8 p-1 md:p-4 border-2 rounded w-3/6 md:w-5/12 lg:w-1/4 items-center">
        <figure className="mx-1 w-1/6 flex justify-center">
          <img
            className="w-3/6"
            src="/images/generals/wonderLogo.svg"
            alt="Wonder Travel"
          ></img>
        </figure>
        <div className="text-sm md:text-2xl font-bold w-5/6 pl-2">
          <p>4 días, 3 noches*</p>
        </div>
      </div>
    </>
  );
};
