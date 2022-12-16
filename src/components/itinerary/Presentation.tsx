export const Presentation = () => {
  return (
    <div className="h-full w-full p-8">
      <div className="text-center font-bold text-sm">
        <p>
          Wonder Travel es la plataforma que conecta viajeros con anfitriones en
          lugares mágicos de Colombia
        </p>
      </div>
      <div className="flex md:justify-center mt-4">
        <div className="flex">
          <div>
            <img
              className=""
              src="/images/itinerary/hombreViajero/viajero.png"
            ></img>
          </div>
          <div>
            <img
              className=""
              src="/images/itinerary/mujerViajera/viajero (1).png"
            ></img>
          </div>
        </div>
        <div>
          <img
            className=""
            src="/images/itinerary/tituloWonder/Group 1101.png"
          ></img>
        </div>
        <div className="relative left-10">
            <div className="absolute left-10 w-10">
                <img className="" src="/images/itinerary/bosque/amazonas (3).png"></img>
            </div>
            <div className="absolute w-10 left-10 bottom-0">
                <img className="" src="/images/itinerary/ballena/ballena (2).png"></img>
            </div>
            <div className="absolute w-10 right-0">
                <img className="" src="/images/itinerary/tucan/tucan.png"></img>
            </div>
            <div className="absolute w-10 right-0 bottom-0">
                <img className="" src="/images/itinerary/puestaSol/puesta-de-sol.png"></img>
            </div>
            <div className="absolute w-10 bottom-5">
                <img className="" src="/images/itinerary/montanas/montanas (1).png"></img>
            </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <img className="" src="/images/itinerary/meta/noun_adventure_68979.png"></img>
      </div>
    </div>
  );
};
