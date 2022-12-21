import { Benefits, TravelInfo } from "../components/home";
import { WonderButton } from "../components/generals";

export const Home = () => {
  return (
    <section className="text-white">
      <div className="bg-[url('/images/home/fondo-.png')] bg-center text-white h-full w-full bg-no-repeat bg-cover flex flex-col justify-center">
        <div className="bg-gradient-to-b from-[#706f6f] via-transparent to-black w-screen h-screen flex flex-col justify-between items-center">
          <div></div>
          <figure className="flex justify-center">
            <img
              src="/images/home/titulos/titulo.png"
              srcSet="/images/home/titulos/titulo.png 480w, /images/home/titulos/titulo2.png 768w, /images/home/titulos/titulo3.png 1280w"
              sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1280px"
              alt="Wonder Travel Orinoquia"
            ></img>
          </figure>
          <article className="flex justify-center items-end text-[#FDFCF7] text-[38px] text-center px-5">
            <h2 className="font-abril">Guainía y Cerros de Mavicure</h2>
          </article>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-black mt-[-1px]">
        <TravelInfo />
        <div className="flex items-center mt-6 gap-x-2 relative">
          <div className="absolute left-[46px] top-7">
            <figure>
              <img
                // width={15}
                // height={21}
                src="/images/home/ubicaciones/ubicacion.png"
                srcSet="/images/home/ubicaciones/ubicacion.png 480w, /images/home/ubicaciones/ubicacion2.png 768w, /images/home/ubicaciones/ubicacion3.png 1280w"
                sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1280px"
                alt="Wonder Travel Orinoquia"
              ></img>
            </figure>
          </div>
          <figure>
            <img
              // width={89}
              // height={114}
              src="/images/home/mapas/mapa.png"
              srcSet="/images/home/mapas/mapa.png 480w, /images/home/mapas/mapa2.png 768w, /images/home/mapas/mapa3.png 1280w"
              sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1280px"
              alt="Wonder Travel Orinoquia"
            ></img>
          </figure>
          <article>
            <h4>Orinoquía (Guainía, Colombia)</h4>
          </article>
        </div>
        <div className="mt-4 w-full">
          <Benefits />
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-8 gap-y-2 text-sm md:text-base lg:text-lg">
          <article>
            <p>Whatsapp:</p>
          </article>
          <div className="text-[20px]">
            <WonderButton
              backgroundColor="#FF805A"
              altImage="Whatsapp contact information wonder travel"
              urlImage="/images/generals/whatsappIcons/whatsapp3.png"
              imageSize="small"
              label="Reservar / información"
              neon={true}
              onClick={() => {}}
              border={true}
              size="medium"
            />
          </div>
        </div>
        <figure className="mt-8 mb-4">
          <img
            // width={36}
            // height={27}
            src="/images/home/flechas/flecha.png"
            srcSet="/images/home/flechas/flecha.png 480w, /images/home/flechas/flecha2.png 768w, /images/home/flechas/flecha3.png 1280w"
            sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1280px"
            alt="Que es Wonder Travel"
          ></img>
        </figure>
      </div>
    </section>
  );
};
