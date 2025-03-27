import React from 'react';
import { FiX } from 'react-icons/fi';
import Map, { Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

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

const LocationModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  location
}) => {
  if (!isOpen) return null;

  // Default coordinates if not provided (centered on Philippines)
  const defaultCoordinates = {
    latitude: 14.5995,
    longitude: 120.9842
  };
  const mapCoordinates = location.coordinates || defaultCoordinates;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0  bg-opacity-40 backdrop-blur-sm"
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
            <Map
              initialViewState={{
                latitude: mapCoordinates.latitude,
                longitude: mapCoordinates.longitude,
                zoom: 12
              }}
              style={{ width: '100%', height: '100%' }}
              mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json?labelTextSize=12&labelTextColor=%23000000&landColor=%23f0f0f0&waterColor=%23a0c8f0&roadColor=%23ffffff&roadWidth=1.5"
            >
              <Marker
                longitude={mapCoordinates.longitude}
                latitude={mapCoordinates.latitude}
              >
                <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
              </Marker>
            </Map>
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
