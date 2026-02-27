import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      {/* Elegant monogram */}
      <div className="w-9 h-9 border-2 border-gold rounded-full flex items-center justify-center transition-all group-hover:bg-gold/10">
        <span className="font-serif text-sm font-semibold text-gold tracking-tight leading-none">
          N
        </span>
      </div>
      {/* Wordmark */}
      <div className="flex items-baseline gap-1.5">
        <span className="font-serif text-2xl font-semibold text-navy tracking-wide">
          Nıta
        </span>
        <span className="text-xs font-light uppercase tracking-[0.3em] text-muted-foreground">
          Textile
        </span>
      </div>
    </Link>
  );
};

export default Logo;
