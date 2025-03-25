import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/taxi-bg.jpg')" }}
      >
        <div className="absolute inset-0 animated-gradient opacity-80"></div>
        <div className="relative z-10">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-shadow-black text-center px-4">
            <span className="animate-gradient">iPick. </span>
            Bringing you to Places.
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 font-bold mt-4 text-center px-4">
            Anytime, Anywhere, iPick is There.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.ipick.starter&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:-translate-y-1 hover:opacity-80"
            >
              <Image
                src="/androidDownload.svg"
                alt="Download on Google Play"
                width={180}
                height={60}
                className="w-44 sm:w-48 md:w-52"
              />
            </a>

            {/* App Store Button */}
            <a
              href="https://apps.apple.com/ph/app/ipick-booking-services/id6738897138"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:-translate-y-1 hover:opacity-80"
            >
              <Image
                src="/iosDownload.svg"
                alt="Download on the App Store"
                width={180}
                height={60}
                className="w-44 sm:w-48 md:w-52"
              />
            </a>
          </div>
        </div>
      </header>

      <section id="about" className="h-screen py-20 text-center">
        <h2 className="text-3xl font-semibold">About iPick</h2>
        <p className="text-gray-600 mt-4">
          Our product is fast, reliable, and easy to use.
        </p>
      </section>

      <footer id="contact" className="py-20 text-center bg-gray-200">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <p className="text-gray-600 mt-4">
          Have questions? Contact us anytime.
        </p>
      </footer>
    </div>
  );
}
