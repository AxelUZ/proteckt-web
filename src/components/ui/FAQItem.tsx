type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

export default function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 py-7">
      <button
        onClick={onClick}
        className="group flex w-full items-start justify-between gap-8 text-left cursor-pointer"
      >
        <h3
        className={`
            text-xl
            font-semibold
            transition-colors
            duration-300
            ${
            isOpen
                ? "text-primary"
                : "text-black group-hover:text-primary"
            }
        `}
        >
          {question}
        </h3>

        <span
        className={`
            text-3xl
            font-light
            leading-none
            transition-all
            duration-300
            ${
            isOpen
                ? "rotate-45 text-primary"
                : "text-gray-400 group-hover:text-primary group-hover:scale-110"
            }
        `}
        >
        +
        </span>
      </button>

      <div
        className={`
          grid
          transition-all
          duration-300
          ${
            isOpen
              ? "mt-5 grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }
        `}
      >
        <div className="overflow-hidden">
          <p className="max-w-4xl leading-8 text-gray-600">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}