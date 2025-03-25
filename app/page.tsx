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

      <section id="about" className="py-20 text-center bg-white text-black">
        <h2 className="text-3xl font-semibold">About iPick</h2>
        <p className="text-600 mt-4 p-4 max-w-2xl mx-auto">
          The iPick Mobile App is designed to provide a seamless and user-friendly experience for both passengers and drivers. It is divided into two key features: iPick Passenger and iPick Driver, each tailored to meet the specific needs of its users.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="rounded-lg shadow-md aspect-square flex flex-col items-center justify-center p-4 text-center relative">
            <span className="absolute top-4 left-4 bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs">1</span>
            <img src="/assets/step1.png" alt="Step 1" className="w-12 h-12 mb-3 filter-green" />
            <h3 className="font-bold text-lg">Download the App</h3>
            <p className="text-sm text-gray-800">
              Get started by downloading the iPick app from the App Store or Google Play. It’s quick, easy, and free.
            </p>
          </div >

          <div className="rounded-lg shadow-md aspect-square flex flex-col items-center justify-center p-4 text-center relative">
            <span className="absolute top-4 left-4 bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs">2</span>
            <img src="/assets/step2.png" alt="Step 2" className="w-12 h-12 mb-3 filter-green" />
            <h3 className="font-bold text-lg">Sign Up</h3>
            <p className="text-sm text-gray-800">
              Create your iPick account and save your preferences for a seamless experience.
            </p>
          </div >

          <div className="rounded-lg shadow-md aspect-square flex flex-col items-center justify-center p-4 text-center relative">
            <span className="absolute top-4 left-4 bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs">3</span>
            <img src="/assets/step3.png" alt="Step 3" className="w-12 h-12 mb-3 filter-green" />
            <h3 className="font-bold text-lg">Open Phone’s Location</h3>
            <p className="text-sm text-gray-800">
              Make sure to open your device’s location to enable tracking.
            </p>
          </div >

          <div className="rounded-lg shadow-md aspect-square flex flex-col items-center justify-center p-4 text-center relative">
            <span className="absolute top-4 left-4 bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs">4</span>
            <img src="/assets/step4.png" alt="Step 4" className="w-12 h-12 mb-3 filter-green" />
            <h3 className="font-bold text-lg">Book Your Ride</h3>
            <p className="text-sm text-gray-800">
              Open the app, enter your destination, and choose your ride option.
            </p>
          </div >

          <div className="rounded-lg shadow-md aspect-square flex flex-col items-center justify-center p-4 text-center relative">
            <span className="absolute top-4 left-4 bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs">5</span>
            <img src="/assets/step5.png" alt="Step 5" className="w-12 h-12 mb-3 filter-green" />
            <h3 className="font-bold text-lg">Ride in Style</h3>
            <p className="text-sm text-gray-800">
              Your driver will be there in no time, all set to take you on a comfortable and enjoyable journey.
            </p>
          </div >

          <div className="rounded-lg shadow-md aspect-square flex flex-col items-center justify-center p-4 text-center relative">
            <span className="absolute top-4 left-4 bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs">6</span>
            <img src="/assets/step6.png" alt="Step 6" className="w-12 h-12 mb-3 filter-green" />
            <h3 className="font-bold text-lg">Rate and Pay</h3>
            <p className="text-sm text-gray-800">
              After your ride, kindly rate your experience and pay through the app. No need to worry about searching for cash or cards.
            </p>
          </div >
        </div >
      </section >

      <footer id="contact" className="py-20 text-center bg-gray-200">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <p className="text-gray-800 mt-4">
          Have questions? Contact us anytime.
        </p>
      </footer>
    </div >
  );
}
