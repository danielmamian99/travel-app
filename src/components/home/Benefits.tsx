export const Benefits = () => {
  return (
    <div className=" flex w-full justify-center gap-x-4">
      <div className="grid grid-rows-2 w-2/6 md:w-1/6">
        <div className="flex flex-row gap-x-2 md:gap-x-4">
          <div className="flex justify-center items-center w-1/4">
            <img
              className="h-1/4 md:h-2/4 lg:h-3/5"
              src="/images/home/brujula.svg"
            ></img>
          </div>
          <div className="w-3/4 self-center text-xs md:text-base">
            <p>Experiencias cautivantes</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-2 md:gap-x-4">
          <div className="flex justify-center items-center w-1/4">
            <img
              className="h-1/4 md:h-2/4 lg:h-3/5"
              src="/images/home/alojamiento.svg"
            ></img>
          </div>
          <div className="w-3/4 self-center text-xs md:text-base">
            <p>Alojamientos únicos</p>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-2 w-2/6 md:w-1/6">
        <div className="flex flex-row gap-x-2 md:gap-x-4">
          <div className="flex justify-center items-center w-1/4">
            <img
              className="h-1/4 md:h-2/4 lg:h-3/5"
              src="/images/home/comida.svg"
            ></img>
          </div>
          <div className="w-3/4 self-center text-xs md:text-base">
            <p>Todas las comidas incluidas</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-2 md:gap-x-4">
          <div className="flex justify-center items-center w-1/4">
            <img
              className="h-1/4 md:h-2/4 lg:h-3/5"
              src="/images/home/transporte.svg"
            ></img>
          </div>
          <div className="w-3/4 self-center text-xs md:text-base">
            <p>Transporte terrestre y fluvial en el Guainía</p>
          </div>
        </div>
      </div>
    </div>
  );
};
