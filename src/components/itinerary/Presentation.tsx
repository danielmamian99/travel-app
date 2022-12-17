export const Presentation = () => {
  return (
    <section className="h-full w-full p-8">
      <article className="text-center font-bold text-sm">
        <p>
          Wonder Travel es la plataforma que conecta viajeros con anfitriones en
          lugares mágicos de Colombia
        </p>
      </article>
      <div className="flex justify-center md:justify-center mt-4">
        <div className="flex items-center">
          <figure className="w-8">
            <img
              className="w-full md:w-11/12 lg:w-full"
              src="/images/itinerary/hombreViajero/viajero.png"
              srcSet="/images/itinerary/hombreViajero/viajero.png 300w, /images/itinerary/hombreViajero/viajero2.png 768w, /images/itinerary/hombreViajero/viajero3.png 1280w"
              sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
              alt="Wonder Travel Viaja"
            />
          </figure>
          <figure className="w-8">
            <img
              className="w-full md:w-11/12 lg:w-full"
              src="/images/itinerary/mujerViajera/viajero.png"
              srcSet="/images/itinerary/mujerViajera/viajero.png 300w, /images/itinerary/mujerViajera/viajero2.png 768w, /images/itinerary/mujerViajera/viajero3.png 1280w"
              sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
              alt="Wonder Travel Viaja"
            />
          </figure>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center w-1/3 mr-[-10px]">
            <div className="w-1 h-1">
              <div className="rounded-full bg-black w-1 h-1"></div>
            </div>
            <div className="w-full">
              <hr className="w-full border-black" />
            </div>
          </div>
          <figure className="flex items-center justify-center">
            <img
              className="w-full md:w-11/12 lg:w-full"
              src="/images/itinerary/tituloWonder/tituloWonder.png"
              srcSet="/images/itinerary/tituloWonder/tituloWonder.png 300w, /images/itinerary/tituloWonder/tituloWonder2.png 768w, /images/itinerary/tituloWonder/tituloWonder2.png 1280w"
              sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
              alt="Wonder Travel"
            />
          </figure>
          <div className="flex items-center w-1/3 ml-[-10px]">
            <div className="w-full">
              <hr className="w-full border-black" />
            </div>
            <div className="w-1 h-1">
              <div className="rounded-full bg-black w-1 h-1"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-x-2 mb-[-0.3em]">
            <figure className="grid items-center justify-items-center w-1/2">
              <img
                className="w-5/12 md:w-4/5 lg:w-full"
                src="/images/itinerary/tucan/tucan.png"
                srcSet="/images/itinerary/tucan/tucan.png 300w, /images/itinerary/tucan/tucan2.png 768w, /images/itinerary/tucan/tucan3.png 1280w"
                sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
                alt="Wonder Travel Tucanes"
              />
            </figure>
            <figure className="grid items-center justify-items-center w-1/2">
              <img
                className="w-5/12 md:w-4/5 lg:w-full"
                src="/images/itinerary/bosque/amazonas.png"
                srcSet="/images/itinerary/bosque/amazonas.png 300w, /images/itinerary/bosque/amazonas2.png 768w, /images/itinerary/bosque/amazonas3.png 1280w"
                sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
                alt="Wonder Travel Bosque Amazonas"
              />
            </figure>
          </div>
          <div className="flex justify-center">
            <figure className="grid items-center justify-items-center w-1/2">
              <img
                className="w-5/12 md:w-4/5 lg:w-full"
                src="/images/itinerary/montanas/montanas.png"
                srcSet="/images/itinerary/montanas/montanas.png 300w, /images/itinerary/montanas/montanas2.png 768w, /images/itinerary/montanas/montanas3.png 1280w"
                sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
                alt="Wonder Travel Montañas"
              />
            </figure>
          </div>
          <div className="flex w-full gap-x-2 mt-[-0.5em]">
            <figure className="grid items-center justify-items-center w-1/2">
              <img
                className="w-5/12 md:w-4/5 lg:w-full"
                src="/images/itinerary/puestaSol/puesta-de-sol.png"
                srcSet="/images/itinerary/puestaSol/puesta-de-sol.png 300w, /images/itinerary/puestaSol/puesta-de-sol2.png 768w, /images/itinerary/puestaSol/puesta-de-sol3.png 1280w"
                sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
                alt="Wonder Travel puesta de sol"
              />
            </figure>
            <figure className="grid items-center justify-items-center w-1/2">
              <img
                className="w-5/12 md:w-4/5 lg:w-full"
                src="/images/itinerary/ballena/ballena.png"
                srcSet="/images/itinerary/ballena/ballena.png 300w, /images/itinerary/ballena/ballena2.png 768w, /images/itinerary/ballena/ballena3.png 1280w"
                sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
                alt="Wonder Travel Ballenas"
              />
            </figure>
          </div>
        </div>
      </div>
      <figure className="flex justify-center mt-4">
        <img
          className=""
          src="/images/itinerary/meta/noun_adventure_68979.png"
          alt="Wonder Travel Aventuras"
        ></img>
      </figure>
    </section>
  );
};
