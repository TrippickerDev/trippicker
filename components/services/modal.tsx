import { Service } from "@/config/types";
import { X } from "lucide-react";

interface ModalProps {
  service: Service;
  closeModal: () => void;
}

export const Modal = ({ service, closeModal }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white relative rounded-3xl shadow-lg max-w-md w-full md:max-w-lg lg:max-w-xl max-h-[80vh] overflow-y-auto">
        {/* Image Header */}
        <div
          className="w-full h-[150px] md:h-[200px] bg-cover flex items-center justify-center bg-no-repeat rounded-t-2xl"
          style={{ backgroundImage: "url('/moda.png')" }}
        >
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white text-center">
            {service.title}
          </h2>
        </div>

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="text-trip-blue bg-white rounded-full h-10 w-10 flex items-center justify-center absolute top-3 md:top-5 right-3 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        {/* Modal Content */}
        <div className="p-6 md:p-8 space-y-4">
          {/* Description */}
          <p className="text-trip-blue-secondary text-sm md:text-base">
            {service.description}
          </p>

          {/* Button */}
          {/* <Button className="w-full text-white bg-trip-blue hover:text-trip-blue border border-trip-blue rounded-xl py-2">
            How it Works
          </Button> */}
          <h1 className="font-bold text-xl underline text-trip-blue">
            How it Works
          </h1>

          {/* Details */}
          <p className="text-trip-blue-secondary text-sm md:text-base leading-relaxed">
            {service.details}
          </p>
        </div>
      </div>
    </div>
  );
};
