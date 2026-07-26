type ServiceCardProps = {
  title: string;
  description: string;
  icon?: string;
};

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <article
      className="
        group
        rounded-lg
        border-b
        border-gray-400
        py-8
        transition-all
        duration-300
        hover:bg-primary
        hover:px-6
      "
    >
      <div className="flex items-start gap-4">
        {icon && (
          <img
            src={icon}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            width={24}
            height={24}
            className="
              mt-1
              h-6
              w-6
              opacity-60
              transition-all
              duration-300
              group-hover:opacity-100
              group-hover:invert
            "
          />
        )}

        <div className="flex-1">
          <h3
            className="
              font-heading
              text-2xl
              text-black
              transition-colors
              duration-300
              group-hover:text-white
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-3
              font-body
              text-base
              leading-7
              text-gray-600
              transition-colors
              duration-300
              group-hover:text-white/90
            "
          >
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;