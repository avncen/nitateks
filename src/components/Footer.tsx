import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 border-2 border-gold rounded-full flex items-center justify-center">
                <span className="font-serif text-sm font-semibold text-gold tracking-tight leading-none">N</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl font-semibold text-primary-foreground tracking-wide">Nıta</span>
                <span className="text-xs font-light uppercase tracking-[0.3em] text-primary-foreground/50">Textile</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Nıta Tekstil Danışmanlık Ltd. Şti. — Your trusted partner in
              textile consulting, production management, and global market
              expansion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                Opera Cad. Atılgan Royal Apt D:60, Kat 20, Mavişehir, İzmir / Turkey
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-gold" />
                zeynep@nitateks.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-gold" />
                +90 533 216 55 88
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Nıta Tekstil Danışmanlık Ltd. Şti. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
