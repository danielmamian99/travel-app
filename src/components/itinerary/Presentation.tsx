export const Presentation = () => {
  return (
    <section className="h-full w-full p-8">
      <article className="text-center font-bold text-sm">
        <p>
          Wonder Travel es la plataforma que conecta viajeros con anfitriones en
          lugares mágicos de Colombia
        </p>
      </article>
      <div className="flex md:justify-center mt-4">
        <div className="flex">
          <figure>
            <img
              className=""
              src="/images/itinerary/hombreViajero/viajero.png"
              alt="Wonder Travel Viaja"
            ></img>
          </figure>
          <figure>
            <img
              className=""
              src="/images/itinerary/mujerViajera/viajero (1).png"
              alt="Wonder Travel Viaja"
            ></img>
          </figure>
        </div>
        <figure>
          <img
            className=""
            src="/images/itinerary/tituloWonder/Group 1101.png"
            alt="Wonder Travel"
          ></img>
        </figure>
        <div className="relative left-10">
            <figure className="absolute left-10 w-10">
                <img className="" src="/images/itinerary/bosque/amazonas (3).png" alt="Wonder Travel Amazonas"></img>
            </figure>
            <figure className="absolute w-10 left-10 bottom-0">
                <img className="" src="/images/itinerary/ballena/ballena (2).png" alt="Wonder Travel Ballenas"></img>
            </figure>
            <figure className="absolute w-10 right-0">
                <img className="" src="/images/itinerary/tucan/tucan.png" alt="Wonder Travel Tucanes"></img>
            </figure>
            <figure className="absolute w-10 right-0 bottom-0">
                <img className="" src="/images/itinerary/puestaSol/puesta-de-sol.png" alt="Wonder Travel paisajes"></img>
            </figure>
            <figure className="absolute w-10 bottom-5">
                <img className="" src="/images/itinerary/montanas/montanas (1).png" alt="Wonder Travel montañas"></img>
            </figure>
        </div>
      </div>
      <figure className="flex justify-center mt-4">
        <img className="" src="/images/itinerary/meta/noun_adventure_68979.png" alt="Wonder Travel Aventuras"></img>
      </figure>
    </section>
  );
};
