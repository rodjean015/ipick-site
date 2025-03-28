import Image from "next/image";
import StepsComponent from "../components/StepsComponent";
import "@fontsource/montserrat/900.css";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    image: "/assets/insurance.png",
    alt: "Safety",
    title: "Safety First",
    description:
      "Your safety is our priority. Experienced drivers and advanced features ensure a smooth, worry-free ride.",
  },
  {
    image: "/assets/affordable.png",
    alt: "Luxury",
    title: "Affordable Luxury",
    description:
      "Premium service at prices that won’t break the bank—luxury made affordable.",
  },
  {
    image: "/assets/fingertips.png",
    alt: "Simplicity",
    title: "Simplicity at Your Fingertips",
    description:
      "Booking a ride is effortless—just open the app, set your destination, and we handle the rest.",
  },
  {
    image: "/assets/seatbelt.png",
    alt: "Comfort",
    title: "Elevated Comfort",
    description:
      "Travel in style with our top-notch fleet, whether for business or a night out.",
  },
];

export default function Home() {
  return (
    <div>
      <header
        id="home"
        className="h-[70vh] flex flex-col justify-center items-center text-center px-4 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/assets/car.png')" }}
      >
        <div className="h-[70vh] absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10">
          {/* Main Heading */}
          <h1 className="font-[900] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-shadow-black text-center px-4">
            <span className="animate-gradient">iPick. </span>
            Bringing you to Places.
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-700 font-bold mt-4 text-center px-4">
            Anytime, Anywhere, iPick is There.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <a
              href="https://play.google.com/store/apps/details?id=com.ipick.starter&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image
                src="/androidDownload.svg"
                alt="Download on Google Play"
                width={180}
                height={60}
                className="w-44 sm:w-48 md:w-52"
              />
            </a>

            <a
              href="https://apps.apple.com/ph/app/ipick-booking-services/id6738897138"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
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

      <section id="about" className="py-20 text-center bg-white text-black">
        <h2 className="text-3xl font-semibold">Discover iPick</h2>
        <p className="text-600 mt-4 p-4 max-w-2xl mx-auto">
          The iPick Mobile App is designed to provide a seamless and
          user-friendly experience for both passengers and drivers. It is
          divided into two key features: iPick Passenger and iPick Driver, each
          tailored to meet the specific needs of its users.
        </p>

        <div>
          <h2 className="text-center text-2xl font-bold mb-6">How It Works?</h2>
          <StepsComponent />
        </div>
      </section>

      <section
        id="why-choose"
        className="bg-gray-200 py-20 text-center text-black"
      >
        <h2 className="text-3xl font-semibold">Why Choose iPick?</h2>
        <p className="mt-4 p-4 max-w-3xl mx-auto text-gray-700">
          Book a ride with ease using our mobile app. Whether you’re going to
          work, exploring the city, or catching a flight, iPick ensures your
          journey is seamless and comfortable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              alt={feature.alt}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
