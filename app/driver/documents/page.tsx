"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Upload } from "lucide-react";
import axios from "axios";
import { Label } from "@/components/ui/label";

function DriverPage() {
  const router = useRouter();
  const [lagos, setlagos] = useState<boolean>(false);
  const [licenseNumber, setLicenseNumber] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files || files.length === 0) {
      console.warn("No file selected or invalid input");
      return;
    }

    setImages((prev) => [...prev, files[0]]);
  };

  useEffect(() => {
    const localItems = localStorage.getItem("driverData");
    if (localItems) {
      const data = JSON.parse(localItems);
      console.log(data);
    }
  }, []);

  const handleSubmit = async () => {
    const storedData = localStorage.getItem("driverData");

    const formData = new FormData();

    if (storedData) {
      const refData = JSON.parse(storedData);

      // Append each field from the stored data to the formData
      formData.append("city", refData.city);
      formData.append("email", refData.email);
      formData.append("firstName", refData.firstName);
      formData.append("lastName", refData.lastName);
      formData.append("phoneNumber", refData.phoneNumber);
      formData.append("vehicleBrand", refData.vehicleBrand);
      formData.append("vehicleModel", refData.vehicleModel);
      formData.append("vehiclePlateNumber", refData.vehiclePlateNumber);
      formData.append("vehicleYear", refData.vehicleYear);
      formData.append("accountName", refData.accountName);
      formData.append("accountNumber", refData.accountNumber);
      formData.append("address", refData.address);
      formData.append("bankName", refData.bankName);
      formData.append("bvnNin", refData.bvnNin);
      formData.append("gender", refData.gender);
      formData.append("nextOfKinName", refData.nextOfKinName);
      formData.append("nextOfKinPhoneNumber", refData.nextOfKinPhoneNumber);
      formData.append("nextOfKinRelationship", refData.nextOfKinRelationship);
      formData.append("paymentType", refData.paymentType);

      // Append formValues from the stored data, if available
      if (refData.formValues) {
        for (const key in refData.formValues) {
          if (refData.formValues.hasOwnProperty(key)) {
            formData.append(key, refData.formValues[key]);
          }
        }
      }
    }

    formData.append("licenseNumber", licenseNumber);
    formData.append("role", "driver");

    // Append images
    images.forEach((file) => {
      formData.append("driver_signup", file);
    });

    // API call to submit the form
    try {
      const response = await axios.post(
        "https://trippicker-proxy-test.up.railway.app/api/v1/drivers/auth/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("Driver signup successful!");
        router.push("/driver/success");
      } else {
        console.error("Driver signup failed");
      }
    } catch (error) {
      console.error("Error occurred during driver signup", error);
    }
  };

  return (
    <div className="h-auto flex flex-col justify-center max-w-4xl mx-auto p-4">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="text-[#5800FF] font-bold text-xl md:text-2xl lg:text-3xl">
          Documents
        </h1>
        <h2 className="text-[#b0b0b0] text-base md:text-xl lg:text-2xl text-left">
          Please upload the following documents to complete your profile
          verification.
        </h2>
      </div>

      {/* Form Section */}
      <div className="space-y-8">
        <div className="space-y-2">
          <label
            className="text-lg md:text-xl font-bold"
            htmlFor="licenseNumber"
          >
            Driver License or JTB Form Number
          </label>
          <Input
            id="licenseNumber"
            name="licenseNumber"
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
            placeholder="Enter License Number"
            className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
          />
          <p className="text-gray-400">License number on driver’s documents</p>
        </div>

        <div className="space-y-2">
          <label
            className="text-lg md:text-xl font-bold"
            htmlFor="driverLicense"
          >
            Driver License
          </label>
          <p className="text-gray-400">
            Upload a photo of your valid driver’s license
          </p>
          <div className="border-dashed border-[#5800ff] flex-col h-auto rounded-xl my-auto py-2 space-y-3 flex justify-center items-center w-full border">
            <input
              type="file"
              id="driverLicense"
              className="hidden"
              onChange={handleFileUpload}
            />
            <Label
              htmlFor="driverLicense"
              className="cursor-pointer text-[#5800FF] font-semibold"
            >
              <div className="bg-[#F4EFFF] h-10 w-10 rounded-full p-3 flex items-center justify-center">
                <Upload color="#5800FF" size={24} />
              </div>
            </Label>
            <p className="text-gray-400">
              Drag and drop any file here or browse
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="firstName">
            Driver Profile Photo
          </Label>
          <p className="text-gray-400">
            Provide a clear and well-lit photo showing the entire exterior of
            your car. Ensure the photo captures your car from bumper to bumper,
            including the license plate.
          </p>
          <div className="border-dashed border-[#5800ff] flex-col h-auto rounded-xl my-auto py-2 space-y-3 flex justify-center items-center w-full border">
            <input
              type="file"
              id="licensePlate"
              className="hidden"
              onChange={handleFileUpload}
            />
            <Label
              htmlFor="driverLicense"
              className="cursor-pointer text-[#5800FF] font-semibold"
            >
              <div className="bg-[#F4EFFF] h-10 w-10 rounded-full p-3 flex items-center justify-center">
                <Upload color="#5800FF" size={24} />
              </div>
            </Label>
            <p className="text-gray-400">
              Drag and drop any file here or browse
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="firstName">
            Interior Photo of Car
          </Label>
          <p className="text-gray-400">
            Provide a clear and well-lit photo showing the entire exterior of
            your car. Ensure the photo captures your car from bumper to bumper,
            including the license plate.
          </p>
          <div className="border-dashed border-[#5800ff] flex-col h-auto rounded-xl my-auto py-2 space-y-3 flex justify-center items-center w-full border">
            <input
              type="file"
              id="Interior"
              className="hidden"
              onChange={handleFileUpload}
            />
            <Label
              htmlFor="driverLicense"
              className="cursor-pointer text-[#5800FF] font-semibold"
            >
              <div className="bg-[#F4EFFF] h-10 w-10 rounded-full p-3 flex items-center justify-center">
                <Upload color="#5800FF" size={24} />
              </div>
            </Label>
            <p className="text-gray-400">
              Drag and drop any file here or browse
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="firstName">
            Exterior Photo of Car
          </Label>
          <p className="text-gray-400">
            Submit a clear photo of the certificate proving you own the car you
            will be using for driving with us. Ensure all text on the
            certificate is legible.
          </p>
          <div className="border-dashed border-[#5800ff] flex-col h-auto rounded-xl my-auto py-2 space-y-3 flex justify-center items-center w-full border">
            <input
              type="file"
              id="exterior"
              className="hidden"
              onChange={handleFileUpload}
            />
            <Label
              htmlFor="driverLicense"
              className="cursor-pointer text-[#5800FF] font-semibold"
            >
              <div className="bg-[#F4EFFF] h-10 w-10 rounded-full p-3 flex items-center justify-center">
                <Upload color="#5800FF" size={24} />
              </div>
            </Label>
            <p className="text-gray-400">
              Drag and drop any file here or browse
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="firstName">
            Proof of car ownership cirtificate
          </Label>
          <p className="text-gray-400">
            Provide a clear photo of your vehicle insurance certificate. Make
            sure that all details, including coverage period and policy number,
            are visible and legible.{" "}
          </p>
          <div className="border-dashed border-[#5800ff] flex-col h-auto rounded-xl my-auto py-2 space-y-3 flex justify-center items-center w-full border">
            <input
              type="file"
              id="ownership"
              className="hidden"
              onChange={handleFileUpload}
            />
            <Label
              htmlFor="driverLicense"
              className="cursor-pointer text-[#5800FF] font-semibold"
            >
              <div className="bg-[#F4EFFF] h-10 w-10 rounded-full p-3 flex items-center justify-center">
                <Upload color="#5800FF" size={24} />
              </div>
            </Label>
            <p className="text-gray-400">
              Drag and drop any file here or browse
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="firstName">
            Certificate of Roadworthiness
          </Label>
          <p className="text-gray-400">
            Upload the certificate that confirms your car is roadworthy. The
            photo should be clear and show all relevant details, including the
            expiration date and any inspection stamps or signatures.
          </p>
          <div className="border-dashed border-[#5800ff] flex-col h-auto rounded-xl my-auto py-2 space-y-3 flex justify-center items-center w-full border">
            <input
              type="file"
              id="certificate"
              className="hidden"
              onChange={handleFileUpload}
            />
            <Label
              htmlFor="driverLicense"
              className="cursor-pointer text-[#5800FF] font-semibold"
            >
              <div className="bg-[#F4EFFF] h-10 w-10 rounded-full p-3 flex items-center justify-center">
                <Upload color="#5800FF" size={24} />
              </div>
            </Label>
            <p className="text-gray-400">
              Drag and drop any file here or browse
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="firstName">
            Vehicle Insurance certificate
          </Label>
          <p className="text-gray-400">
            Provide a clear photo of your vehicle insurance certificate. Make
            sure that all details, including coverage period and policy number,
            are visible and legible.
          </p>
          <div className="border-dashed border-[#5800ff] flex-col h-auto rounded-xl my-auto py-2 space-y-3 flex justify-center items-center w-full border">
            <input
              type="file"
              id="insurance"
              className="hidden"
              onChange={handleFileUpload}
            />
            <Label
              htmlFor="driverLicense"
              className="cursor-pointer text-[#5800FF] font-semibold"
            >
              <div className="bg-[#F4EFFF] h-10 w-10 rounded-full p-3 flex items-center justify-center">
                <Upload color="#5800FF" size={24} />
              </div>
            </Label>
            <p className="text-gray-400">
              Drag and drop any file here or browse
            </p>
          </div>
        </div>

        {/* lagos Vehicle Details */}
        {lagos && (
          <div className="space-y-8 bg-white/40 backdrop-blur-md p-4">
            <div className="space-y-2">
              <Label
                className="text-lg md:text-xl font-bold"
                htmlFor="firstName"
              >
                LASRRA Card
              </Label>
              <p className="text-gray-400">
                Upload a clear photo of your LASRRA Card. Ensure that your name,
                photo, and other details on the card are easily readable.
              </p>
              <div className="border-dashed border-[#5800ff] flex-col h-auto rounded-xl my-auto py-2 space-y-3 flex justify-center items-center w-full border">
                <div className="bg-[#F4EFFF] h-10 w-10 rounded-full  p-3 flex items-center justify-center">
                  <Upload color="#5800FF" size={24} />
                </div>
                <p className="text-gray-400 text-base">
                  {" "}
                  Drag and drop any file here{" "}
                </p>
                <p className="text-gray-400"> or browse file from device </p>
              </div>
              <p className="text-gray-400">
                License number on driver’s documents
              </p>
            </div>
            <div className="space-y-2">
              <Label
                className="text-lg md:text-xl font-bold"
                htmlFor="firstName"
              >
                LASDRI Card
              </Label>
              <p className="text-gray-400">
                Submit a clear photo of your LASDRI Card to confirm your driving
                qualifications. The photo should include your name, photo, and
                any other relevant details, ensuring they are all visible.
              </p>
              <div className="border-dashed border-[#5800ff] flex-col h-auto rounded-xl my-auto py-2 space-y-3 flex justify-center items-center w-full border">
                <div className="bg-[#F4EFFF] h-10 w-10 rounded-full  p-3 flex items-center justify-center">
                  <Upload color="#5800FF" size={24} />
                </div>
                <p className="text-gray-400 text-base">
                  {" "}
                  Drag and drop any file here{" "}
                </p>
                <p className="text-gray-400"> or browse file from device </p>
              </div>
              <p className="text-gray-400">
                License number on driver’s documents
              </p>
            </div>
          </div>
        )}

        <div className="flex items-center space-x-3">
          <Input
            type="checkbox"
            id="lagosToggle"
            className="w-5 h-5"
            checked={lagos}
            onChange={() => setlagos(!lagos)}
          />
          <label className="text-lg font-bold" htmlFor="lagosToggle">
            I am a Lagos State Resident
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-6 gap-x-3">
          <Button
            onClick={handleSubmit}
            className="bg-[#5800FF] text-white py-3 px-6 rounded-xl font-bold hover:bg-white border border-[#5800ff] hover:text-[#5800FF] transition-all"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DriverPage;
