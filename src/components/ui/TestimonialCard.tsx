import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  role: string;
  rating: number;
  comment: string;
  image: string;
};

function TestimonialCard({
  name,
  role,
  rating,
  comment,
  image,
}: TestimonialCardProps) {
  return (
    <div
      className="
        h-full
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-8
        shadow-md
        shadow-gray-200/60
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={18}
          className={
            index < rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }
        />
      ))}
    </div>

      <p className="font-body leading-8 text-gray-700">
        "{comment}"
      </p>

      <div className="mt-8 flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <h3 className="font-body text-lg font-semibold text-black">
            {name}
          </h3>

          <p className="text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;