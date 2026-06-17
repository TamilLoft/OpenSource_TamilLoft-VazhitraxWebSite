import tamilloftLogo from "../img/ui/logotamilloft.png";
import {
  FacebookIcon,
  TwitterXIcon,
  LinkedInIcon,
  InstagramIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  HeartIcon,
} from "./Icons";

const SOCIAL = [
  {
    href: "https://www.facebook.com/profile.php?id=61566605741854",
    Icon: FacebookIcon,
    label: "Facebook",
  },
  { href: "https://x.com/TamilLoft", Icon: TwitterXIcon, label: "Twitter" },
  {
    href: "https://www.linkedin.com/company/tamilloft",
    Icon: LinkedInIcon,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/tamilloft_official",
    Icon: InstagramIcon,
    label: "Instagram",
  },
];

const PRODUCT_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#use-cases", label: "Use Cases" },
  { href: "/#pricing", label: "Dashboard" },
];

const COMPANY_LINKS = [
  { href: "https://tamilloft.in/#about", label: "About Us" },
  { href: "https://tamilloft.in/careers", label: "Careers" },
  { href: "https://tamilloft.in/blogs", label: "Blog" },
  { href: "https://tamilloft.in/view/contact.html", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Vazhitrax</h3>
            <p className="text-sm text-white/60 mb-4">
              GPS Tracking &amp; Fleet Management Solutions for modern
              organizations.
            </p>
            <div className="flex gap-2">
              {SOCIAL.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white no-underline hover:bg-[#4361ee] hover:-translate-y-0.5 transition-all">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Product</h4>
            <ul className="list-none p-0 m-0 space-y-2 text-sm">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/60 no-underline hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="list-none p-0 m-0 space-y-2 text-sm">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/60 no-underline hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Contact Us</h4>
            <ul className="list-none p-0 m-0 space-y-2.5 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <EnvelopeIcon size={14} />
                tamilloftoffical@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon size={14} />
                +91 *925356605
              </li>
              <li className="flex items-center gap-2">
                <MapPinIcon size={14} />
                Tamil Nadu, India
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/60 m-0">
            &copy; 2024 TamilLoft. All rights reserved.
          </p>
          <p className="text-sm text-white/60 m-0 flex items-center gap-2">
            Made with <HeartIcon size={13} className="text-red-400" />
            <a
              href="#"
              className="inline-flex items-center no-underline"
              aria-label="TamilLoft Technologies">
              <img
                src={tamilloftLogo}
                alt="TamilLoft Technologies"
                height={70}
                width={70}
                style={{ filter: "invert(1)", mixBlendMode: "screen" }}
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
