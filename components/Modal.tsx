import React, { useMemo } from "react";
import { FiX } from "react-icons/fi";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  location: {
    title: string;
    address?: string;
    description?: string;
    hours?: string;
    image?: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
}

const LocationModal: React.FC<ModalProps> = ({ isOpen, onClose, location }) => {
  // Default coordinates if not provided (centered on Philippines)
  const defaultCoordinates = {
    latitude: 14.5995,
    longitude: 120.9842,
  };

  const mapCoordinates = location.coordinates || defaultCoordinates;

  // Use useMemo to memoize the center and libraries
  const center = useMemo(
    () => ({
      lat: mapCoordinates.latitude,
      lng: mapCoordinates.longitude,
    }),
    [mapCoordinates]
  );

  const libraries = useMemo(() => ["places"], []);

  // Use useLoadScript hook
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
      "AIzaSyBTVoAYJ7vxQ5cSiIRYDc7_b0nJB-X6QR8",
    libraries: libraries as any,
  });

  if (!isOpen) return null;

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-opacity-50 backdrop-blur-lg"
        onClick={onClose}
      ></div>
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg w-full max-w-4xl mx-auto shadow-xl overflow-hidden">
        {/* Close Icon Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 z-10 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <FiX size={20} />
        </button>
        <div className="flex flex-col md:flex-row">
          {/* Map Section */}
          <div className="w-full md:w-1/2 h-64 md:h-[500px]">
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={center}
              zoom={12}
              options={{
                disableDefaultUI: true,
                zoomControl: false,
                streetViewControl: false, 
                mapTypeControl: false,
                fullscreenControl: false,
              }}
            >
              <Marker
                position={center}
                icon={{
                  url: './assets/marker-orange.png', // Path to the custom marker
                  scaledSize: new window.google.maps.Size(40, 40), // Resizes the marker
                }}
              />
            </GoogleMap>
          </div>
          {/* Location Details */}
          <div className="w-full md:w-1/2 p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {location.title}
            </h3>
            {location.image && (
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src={location.image}
                  alt={location.title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            {location.address && (
              <p className="text-gray-600 mb-2">
                <strong>Address:</strong> {location.address}
              </p>
            )}
            {location.hours && (
              <p className="text-gray-600 mb-2">
                <strong>Hours:</strong> {location.hours}
              </p>
            )}
            {location.description && (
              <p className="text-gray-600 mb-4 flex-grow">
                {location.description}
              </p>
            )}
            {/* Close Button */}
            <button
              onClick={onClose}
              className="mt-auto w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
