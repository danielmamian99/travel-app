import { Benefits, TravelInfo } from "../components/home";
import { WonderButton } from "../components/generals";

export const Home = () => {
  return (
    <section className="text-white">
      <div className="bg-[url('/images/home/fondo-.png')] bg-center text-white h-full w-full bg-no-repeat bg-cover flex flex-col justify-center">
        <div className="bg-gradient-to-b from-[#706f6f] via-transparent to-black w-screen h-screen flex flex-col justify-between items-center">
          <div></div>
          <figure className="flex justify-center md:w-1/2">
            <img
              className="min-w-full"
              src="/images/home/wonderTitulo.svg"
              alt="Wonder Travel"
            ></img>
          </figure>
          <article className="w-3/4 md:w-11/12 flex justify-center items-end text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            <h2 className="font-abril">
              Guainía y Cerros <br />
              de Mavicure
            </h2>
          </article>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-black mt-[-1px]">
        <TravelInfo />
        <div className="flex items-center mt-6 gap-x-2">
          <figure>
            <img
              src="/images/home/mapa.svg"
              alt="Wonder Travel Orinoquia"
            ></img>
          </figure>
          <article>
            <h4 className="text-sm md:text-base lg:text-lg">
              Orinoquía (Guainía, Colombia)
            </h4>
          </article>
        </div>
        <div className="mt-4 w-full">
          <Benefits />
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-8 gap-y-2 text-sm md:text-base lg:text-lg">
          <article>
            <p>Whatsapp:</p>
          </article>
          <WonderButton
            backgroundColor="#FF805A"
            altImage="Whatsapp contact information wonder travel"
            urlImage="/images/generals/whatsappIcons/whatsapp3.png"
            imageSize="small"
            label="Reservar / información"
            neon={true}
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
