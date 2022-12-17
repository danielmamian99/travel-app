export const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col justify-center h-full w-full p-8">
        <hr />
        <div className="flex justify-center mt-8">
          <figure className="flex justify-center items-center border-r-2 border-[#FF694C] w-1/2">
            <img
              className="w-full md:w-4/5"
              src="/images/footer/tituloWonder.svg"
              alt="Wonder Travel"
            ></img>
          </figure>
          <article className="flex justify-center items-center pl-5 w-1/2">
            <p className="text-large md:text-2xl lg:text-4xl">
              #ViajaAlMomento
            </p>
          </article>
        </div>
        <figure className="mt-8 w-72 md:w-96 lg:w-[28rem]">
          <img
            src="/images/footer/reservas/reserva.png"
            srcSet="/images/footer/reservas/reserva.png 300w, /images/footer/reservas/reserva2.png 768w, /images/footer/reservas/reserva3.png 1280w"
            sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
            alt="Wonder Travel reservas"
          />
        </figure>
        <div className="flex flex-col justify-center m-4">
          <p className="underline text-center text-large md:text-2xl lg:text4xl">Miembros de:</p>
          <figure>
            <img
              src="/images/footer/acotur/acotur.png"
              srcSet="/images/footer/acotur/acotur.png 300w, /images/footer/acotur/acotur2.png 768w, /images/footer/acotur/acotur3.png 1280w"
              sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
              alt="Acotur"
            />
          </figure>
        </div>
      </div>
      <div className="text-white bg-[#272A2E] py-2">
        <p className="text-center">© Copyright Wonder Travel</p>
      </div>
    </footer>
  );
};
