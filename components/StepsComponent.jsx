const steps = [
    {
      id: 1,
      title: "Download the App",
      description:
        "Get started by downloading the iPick app from the App Store or Google Play. It’s quick, easy, and free.",
      image: "/assets/step1.png",
    },
    {
      id: 2,
      title: "Sign Up",
      description:
        "Create your iPick account and save your preferences for a seamless experience.",
      image: "/assets/step2.png",
    },
    {
      id: 3,
      title: "Open Phone’s Location",
      description:
        "Make sure to open your device’s location to enable tracking.",
      image: "/assets/step3.png",
    },
    {
      id: 4,
      title: "Book Your Ride",
      description:
        "Open the app, enter your destination, and choose your ride option.",
      image: "/assets/step4.png",
    },
    {
      id: 5,
      title: "Ride in Style",
      description:
        "Your driver will be there in no time, all set to take you on a comfortable and enjoyable journey.",
      image: "/assets/step5.png",
    },
    {
      id: 6,
      title: "Rate and Pay",
      description:
        "After your ride, kindly rate your experience and pay through the app. No need to worry about searching for cash or cards.",
      image: "/assets/step6.png",
    },
  ];
  
  const StepCard = ({ step }) => {
    return (
      <div className="bg-gray-100 rounded-lg shadow-md aspect-square flex flex-col items-center justify-center p-4 text-center relative">
        <span className="absolute top-4 left-4 bg-green-700 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs">
          {step.id}
        </span>
        <img src={step.image} alt={step.title} className="w-12 h-12 mb-3" />
        <h3 className="font-bold text-lg">{step.title}</h3>
        <p className="text-sm text-gray-800">{step.description}</p>
      </div>
    );
  };
  
  const StepsComponent = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 max-w-5xl mx-auto">
        {steps.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>
    );
  };
  
  export default StepsComponent;
  