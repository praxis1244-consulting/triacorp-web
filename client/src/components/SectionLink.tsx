import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { useLocation } from "wouter";

type SectionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export default function SectionLink({
  href,
  onClick,
  ...props
}: SectionLinkProps) {
  const [location] = useLocation();
  const hashTarget = href.startsWith("/#") ? href.slice(1) : href;
  const resolvedHref =
    location === "/" && hashTarget.startsWith("#") ? hashTarget : href;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (location === "/" && hashTarget.startsWith("#")) {
      event.preventDefault();
      const target = document.querySelector(hashTarget);
      target?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", hashTarget);
    }
  };

  return <a {...props} href={resolvedHref} onClick={handleClick} />;
}
