import { Benefits } from "./";

export const TravelInfo = () => {
  return (
    <>
      <div className="w-6/12 md:w-[26rem] lg:w-[28rem] xl:w-[30rem] mt-8">
        <hr className="border-y-[1.5px]" />
      </div>
      <article className="flex justify-center mt-6 text-md md:text-2xl lg:text-3xl text-center">
        <h3>
          Viaje por los Cerros de Mavicure
          <br />y sus alrededores
        </h3>
      </article>
      <div className="flex mt-8 px-2 py-2 border-2 rounded w-56 items-center">
        <figure className="mx-1 w-1/6 flex justify-center">
          <img
            // width={18}
            // height={18}
            src="/images/generals/logos/logo.png"
            srcSet="/images/generals/logos/logo.png 480w, /images/generals/logos/logo2.png 768w, /images/generals/logos/logo3.png 1280w"
            sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1280px"
            alt="Wonder Travel"
          ></img>
        </figure>
        <article className="text-[15px] font-bold w-5/6 pl-2">
          <p>4 días, 3 noches*</p>
        </article>
      </div>
    </>
  );
};
