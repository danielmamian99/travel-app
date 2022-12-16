export const WonderButton = () => {
  return (
    <button className="py-2 px-4 rounded-lg shadow-wonder bg-gradient-to-b from-[#FF805A] to-[#FF6348]">
      <div className="flex justify-center gap-x-2">
        <img
          src="/images/generals/whatsappIcons/whatsapp1.png"
          alt="Whatsapp contact information wonder travel"
          // srcSet="/images/generals/whatsappIcons/whatsapp1.png 360w,
          // /images/generals/whatsappIcons/whatsapp2.png 720w,
          // /images/generals/whatsappIcons/whatsapp3.png 1440w>"
        />
        <p>Reservar / información</p>
      </div>
    </button>
  );
};
