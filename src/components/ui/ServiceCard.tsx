import { Link } from "react-router-dom";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: string;
};

function ServiceCard({
  title,
  description,
  href,
  icon,
}: ServiceCardProps) {
  return (
    <Link
      to={href}
      className="
        group
        cursor-pointer
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-8
        shadow-md
        shadow-gray-200/60
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-transparent
        hover:bg-primary
        hover:shadow-2xl
        hover:shadow-primary/20
      "
    >
      <div
        className="
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-secondary
          transition-all
          duration-300
          group-hover:bg-white
        "
      >
        {icon ? (
          <img
            src={icon}
            alt={title}
            className="
            h-8 
            w-8 
            transition-all 
            duration-300
            invert
            group-hover:invert-0
            "
          />
        ) : (
          <div
            className="
              h-8
              w-8
              rounded-lg
              bg-primary/40
              transition-all
              duration-300
              group-hover:bg-primary
            "
          />
        )}
      </div>

      <div className="inline-block">
        <h3
            className="
            font-heading
            text-3xl
            text-black
            transition-colors
            duration-300
            group-hover:text-white
            "
        >
            {title}
        </h3>

        <div
            className="
            mt-3
            h-1
            w-0
            rounded-full
            bg-white
            transition-all
            duration-500
            ease-out
            group-hover:w-full
            "
        />
        </div>

      <p
        className="
          mt-4
          font-body
          text-lg
          leading-8
          text-gray-600
          transition-colors
          duration-300
          group-hover:text-white/90
        "
      >
        {description}
      </p>
    </Link>
  );
}

export default ServiceCard;