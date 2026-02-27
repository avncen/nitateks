import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      {/* Monogram icon */}
      <div className="w-10 h-10 bg-navy rounded-sm flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-105">
        <span className="font-serif text-lg font-bold text-gold tracking-tight leading-none">
          NT
        </span>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold" />
      </div>
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-serif text-xl font-bold text-navy tracking-tight">
          Nıta
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-gold">
          Textile
        </span>
      </div>
    </Link>
  );
};

export default Logo;
