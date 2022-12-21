export const Benefits = () => {
  return (
    <section className=" flex w-full justify-center gap-x-4 mt-4">
      <div className="grid grid-rows-2 w-2/6 md:w-1/6 gap-y-2">
        <div className="flex flex-row gap-x-2 md:gap-x-4">
          <figure className="flex justify-center items-center w-1/4">
            <img
              // width={13}
              // height={13}
              src="/images/home/brujulas/brujula.png"
              srcSet="/images/home/brujulas/brujula.png 480w, /images/home/brujulas/brujula2.png 768w, /images/home/brujulas/brujula3.png 1280w"
              sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1280px"
              alt="Wonder Travel Experiencias"
            ></img>
          </figure>
          <article className="w-3/4 self-center text-sm">
            <p>Experiencias cautivantes</p>
          </article>
        </div>
        <div className="flex flex-row gap-x-2 md:gap-x-4">
          <figure className="flex justify-center items-center w-1/4">
            <img
              // width={13}
              // height={13}
              src="/images/home/alojamientos/alojamiento.png"
              srcSet="/images/home/alojamientos/alojamiento.png 480w, /images/home/alojamientos/alojamiento2.png 768w, /images/home/alojamientos/alojamiento3.png 1280w"
              sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1280px"
              alt="Wonder Travel comidas"
            ></img>
          </figure>
          <article className="w-3/4 self-center text-sm">
            <p>Alojamientos únicos</p>
          </article>
        </div>
      </div>
      <div className="grid grid-rows-2 w-2/6 md:w-1/6 gap-y-2">
        <div className="flex flex-row gap-x-2 md:gap-x-4">
          <figure className="flex justify-center items-center w-1/4">
            <img
              // width={18}
              // height={12}
              src="/images/home/comidas/comida.png"
              srcSet="/images/home/comidas/comida.png 480w, /images/home/comidas/comida2.png 768w, /images/home/comidas/comida3.png 1280w"
              sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1280px"
              alt="Wonder Travel comidas"
            ></img>
          </figure>
          <article className="w-3/4 self-center text-sm">
            <p>Todas las comidas incluidas</p>
          </article>
        </div>
        <div className="flex flex-row gap-x-2 md:gap-x-4">
          <figure className="flex justify-center items-center w-1/4">
          <img
              // width={16}
              // height={15}
              src="/images/home/transportes/transporte.png"
              srcSet="/images/home/transportes/transporte.png 480w, /images/home/transportes/transporte2.png 768w, /images/home/transportes/transporte3.png 1280w"
              sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1280px"
              alt="Wonder Travel comidas"
            ></img>
          </figure>
          <article className="w-3/4 self-center text-sm">
            <p>Transporte terrestre y fluvial en el Guainía</p>
          </article>
        </div>
      </div>
    </section>
  );
};
