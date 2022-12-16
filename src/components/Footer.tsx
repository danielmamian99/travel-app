export const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center h-full w-full p-8">
        <hr />
        <div className="flex justify-center gap-x-2 mt-8">
          <div className="border-r-2 border-[#FF694C]">
            <img className="" src="/images/footer/tituloWonder.svg"></img>
          </div>
          <div className="flex justify-center items-center">
            <p>#ViajaAlMomento</p>
          </div>
        </div>
        <div className="mt-8">
          <img src="/images/footer/reservas/Group 470@3x.png"></img>
        </div>
        <div className="flex flex-col justify-center m-4">
          <p className="underline text-center">Miembros de:</p>
          <img src="/images/footer/acotur/ACOTUR LOGO AI-01@3x.png"></img>
        </div>
      </div>
      <div className="text-white bg-[#272A2E] py-2">
        <p className="text-center">© Copyright Wonder Travel</p>
      </div>
    </>
  );
};
