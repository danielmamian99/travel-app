import { Benefits, TravelInfo } from "../components/home";
import { WonderButton } from "../components/generals";

export const Home = () => {
  return (
    <section className="text-white">
      <div className="bg-[url('/images/home/fondo-.png')] text-white h-full w-full bg-no-repeat bg-cover flex flex-col justify-center">
        <div className="bg-gradient-to-b from-[#706f6f] via-transparent to-black w-screen h-screen flex flex-col justify-between items-center">
          <div></div>
          <figure className="flex justify-center">
            <img
              className="min-w-full"
              src="/images/home/wonderTitulo.svg"
              alt="Wonder Travel"
            ></img>
          </figure>
          <article className="w-3/4 md:w-11/12 flex justify-center items-end text-4xl md:text-7xl lg:text-8xl font-bold text-center">
            <p className="font-abril">
              Guainía y Cerros <br />
              de Mavicure
            </p>
          </article>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-black">
        <TravelInfo />
        <div className="flex items-center mt-6 gap-x-2">
          <figure>
            <img src="/images/home/mapa.svg" alt="Wonder Travel Orinoquia"></img>
          </figure>
          <article>
            <p className="text-sm">Orinoquía (Guainía, Colombia)</p>
          </article>
        </div>
        <div className="mt-4 w-full">
          <Benefits />
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-8 gap-y-2">
          <article>
            <p>Whatsapp:</p>
          </article>
          <WonderButton
            backgroundColor="#FF805A"
            altImage="Whatsapp contact information wonder travel"
            urlImage="/images/generals/whatsappIcons/whatsapp1.png"
            imageSize="small"
            label="Reservar / información"
            neon = {true}
            onClick={() => {}}
            size="small"
          />
        </div>
        <figure className="mt-8 mb-4">
          <img src="/images/home/arrow.svg" alt="Que es Wonder Travel"></img>
        </figure>
      </div>
    </section>
  );
};
