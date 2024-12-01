import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

type Props = {
  buttonLink: LinkField;
  buttonText: string | null;
  className?: string;
};

const Button = ({ buttonLink, buttonText, className }: Props) => {
  return (
    <PrismicNextLink
      className={clsx(
        "rounded-2xl bg-amber-800 px-8 py-4 text-center text-lg font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-amber-700 md:text-xl",
        className
      )}
      field={buttonLink}
    >
      {buttonText}
    </PrismicNextLink>
  );
};

export default Button;
