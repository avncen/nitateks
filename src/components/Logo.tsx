import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-baseline gap-1.5 group">
      <span className="font-serif text-2xl font-semibold text-navy tracking-wide">
        Nıta
      </span>
      <span className="text-xs font-light uppercase tracking-[0.3em] text-muted-foreground">
        Textile
      </span>
    </Link>
  );
};

export default Logo;
