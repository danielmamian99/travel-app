export const Benefits = () => {
  return (
    <section className=" flex w-full justify-center gap-x-4">
      <div className="grid grid-rows-2 w-2/6 md:w-1/6 gap-y-2">
        <div className="flex flex-row gap-x-2 md:gap-x-4">
          <figure className="flex justify-center items-center w-1/4">
            <img
              className="h-2/5 md:h-2/4 lg:h-3/5"
              src="/images/home/brujula.svg"
              alt="Wonder Travel Experiencias"
            ></img>
          </figure>
          <article className="w-3/4 self-center text-xs md:text-base">
            <p>Experiencias cautivantes</p>
          </article>
        </div>
        <div className="flex flex-row gap-x-2 md:gap-x-4">
          <figure className="flex justify-center items-center w-1/4">
            <img
              className="h-2/5 md:h-2/4 lg:h-3/5"
              src="/images/home/alojamiento.svg"
              alt="Wonder Travel Alojamiento"
            ></img>
          </figure>
          <article className="w-3/4 self-center text-xs md:text-base">
            <p>Alojamientos únicos</p>
          </article>
        </div>
      </div>
      <div className="grid grid-rows-2 w-2/6 md:w-1/6 gap-y-2">
        <div className="flex flex-row gap-x-2 md:gap-x-4">
          <figure className="flex justify-center items-center w-1/4">
            <img
              className="h-2/5 md:h-2/4 lg:h-3/5"
              src="/images/home/comida.svg"
              alt="Wonder Travel comidas"
            ></img>
          </figure>
          <article className="w-3/4 self-center text-xs md:text-base">
            <p>Todas las comidas incluidas</p>
          </article>
        </div>
        <div className="flex flex-row gap-x-2 md:gap-x-4">
          <figure className="flex justify-center items-center w-1/4">
            <img
              className="h-2/5 md:h-2/4 lg:h-3/5"
              src="/images/home/transporte.svg"
              alt="Wonder Travel Transporte"
            ></img>
          </figure>
          <article className="w-3/4 self-center text-xs md:text-base">
            <p>Transporte terrestre y fluvial en el Guainía</p>
          </article>
        </div>
      </div>
    </section>
  );
};
