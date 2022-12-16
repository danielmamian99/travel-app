import { Benefits, TravelInfo } from "../components/home";
import { WonderButton } from "../components/generals";

// bg-gradient-to-b from-[#706f6f] via-transparent to-black
export const Home = () => {
  return (
    <div className="text-white">
      <div className="bg-[url('/images/home/fondo-.png')] text-white h-full w-full bg-no-repeat bg-cover flex flex-col justify-center">
        <div className="bg-gradient-to-b from-[#706f6f] via-transparent to-black w-screen h-screen flex flex-col justify-between items-center">
          <div></div>
          <div className="flex justify-center">
            <img
              className="min-w-full"
              src="/images/home/wonderTitulo.svg"
            ></img>
          </div>
          <div className="w-3/4 md:w-11/12 flex justify-center items-end text-4xl md:text-7xl lg:text-8xl font-bold text-center">
            <p>
              Guainía y Cerros <br />
              de Mavicure
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-black">
        <TravelInfo />
        <div className="flex items-center mt-4">
          <div>
            <img src="/images/home/mapa.svg"></img>
          </div>
          <div>
            <p>Orinoquía (Guainía, Colombia)</p>
          </div>
        </div>
        <div className="mt-4 w-full">
          <Benefits />
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-y-2">
          <div>
            <p>Whatsapp:</p>
          </div>
          <WonderButton
            backgroundColor="#FF805A"
            image={{
              alt: "Whatsapp contact information wonder travel",
              url: "/images/generals/whatsappIcons/whatsapp1.png",
            }}
            imageSize="small"
            label="Reservar / información"
            neon = {true}
            onClick={() => {}}
            primary
            size="small"
          />
        </div>
        <div className="my-4">
          <img src="/images/home/arrow.svg"></img>
        </div>
      </div>
    </div>
  );
};
