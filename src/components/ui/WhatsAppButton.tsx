import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.link/wwikda"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-xl
        focus-visible:outline-none
        focus-visible:ring-4
        focus-visible:ring-white/40
      "
    >
      <FaWhatsapp
        className="h-9 w-9"
        aria-hidden="true"
        focusable="false"
      />
    </a>
  );
}

export default WhatsAppButton;