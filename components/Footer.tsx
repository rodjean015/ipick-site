import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const socialMedia = [
    { href: "https://facebook.com", icon: faFacebookF },
    { href: "https://twitter.com", icon: faTiktok },
    { href: "https://instagram.com", icon: faInstagram },
    { href: "mailto:support@ipick.com", icon: faEnvelope },
  ];

  return (
    <footer className="bg-green-800 text-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* 🔹 Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* 🔹 Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-white">iPick</h2>
            <p className="text-gray-100 mt-3">
              A smarter way to ride. Reliable, affordable, and at your service
              24/7.
            </p>
          </div>

          {/* 🔹 Ride & Drive */}
          <div>
            <h3 className="text-xl font-semibold text-white">Get Started</h3>
            <ul className="mt-3 space-y-2">
              {["Ride with iPick", "Become a Driver", "Safety Measures"].map(
                (text, index) => (
                  <li key={index}>
                    <a
                      href={`/${text.toLowerCase().replace(/\s/g, "-")}`}
                      className="text-gray-100 hover:text-gray-400 transition duration-300"
                    >
                      {text}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* 🔹 Support & Legal */}
          <div>
            <h3 className="text-xl font-semibold text-white">Support</h3>
            <ul className="mt-3 space-y-2">
              {["Help Center", "Terms & Conditions", "Privacy Policy"].map(
                (text, index) => (
                  <li key={index}>
                    <a
                      href={`/${text.toLowerCase().replace(/\s/g, "-")}`}
                      className="text-gray-100 hover:text-gray-400 transition duration-300"
                    >
                      {text}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* 🔹 Social Media & Downloads */}
          <div>
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-3">
              {socialMedia.map(({ href, icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 hover:text-gray-400 transition duration-300"
                >
                  <FontAwesomeIcon icon={icon} className="text-2xl" />
                </a>
              ))}
            </div>

            <div className="flex justify-center md:justify-start gap-4 mt-4">
              {[
                {
                  src: "/androidDownload.svg",
                  alt: "Download on Google Play",
                  link: "https://play.google.com/store/apps/details?id=com.ipick.starter",
                },
                {
                  src: "/iosDownload.svg",
                  alt: "Download on the App Store",
                  link: "https://apps.apple.com/ph/app/ipick-booking-services/id6738897138",
                },
              ].map(({ src, alt, link }, index) => (
                <a key={index} href={link} target="_blank">
                  <img
                    src={src}
                    alt={alt}
                    className="h-12 hover:opacity-80 transition duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 🔹 Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* 🔹 Bottom Copyright */}
        <p className="text-gray-100 text-center text-sm">
          &copy; {new Date().getFullYear()} iPick. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
