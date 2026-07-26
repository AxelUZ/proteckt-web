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
  const id = question
    .toLowerCase()
    .replace(/[¿?]/g, "")
    .replace(/\s+/g, "-");

  return (
    <div className="border-b border-gray-200 py-7">
      <h3>
        <button
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${id}`}
          id={`faq-button-${id}`}
          className="
            group
            flex
            w-full
            cursor-pointer
            items-start
            justify-between
            gap-8
            text-left
          "
        >
          <span
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
          </span>

          <span
            aria-hidden="true"
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
      </h3>

      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-button-${id}`}
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