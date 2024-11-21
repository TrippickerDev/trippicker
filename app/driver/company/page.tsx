"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

function DriverPage() {
  const router = useRouter();
  const [logistics, setLogistics] = useState<boolean>(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [vehicleYear, setVechicleYear] = useState("");
  const [vehicleBrand, setVechicleBrand] = useState("");
  const [vehicleModel, setVechicleModel] = useState("");
  const [vehiclePlateNumber, setVechiclePlateNumber] = useState("");

  const [gender, setGender] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("driverData");

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFirstName(parsedData.firstName || "");
      setLastName(parsedData.lastName || "");
      setGender(parsedData.gender || "");
      setEmail(parsedData.email || "");
      setVechicleBrand(parsedData.vehicleBrand || "");
      setVechicleYear(parsedData.vehicleYear || "");
      setVechicleModel(parsedData.vehicleModel || "");
      setVechiclePlateNumber(parsedData.vehiclePlateNumber || "");
    }
  }, []);

  const handleNext = () => {
    if (!firstName || !lastName || !email || !gender) {
      alert("Please fill in all fields");
      return;
    }
    const savedData = localStorage.getItem("driverData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      localStorage.setItem(
        "driverData",
        JSON.stringify({
          ...parsedData,
          firstName,
          lastName,
          email,
          gender,
          vehicleBrand,
          vehicleModel,
          vehiclePlateNumber,
          vehicleYear,
        })
      );
    }

    router.push("/driver/documents");
  };

  return (
    <div className="h-auto flex flex-col justify-center max-w-4xl mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-[#5800FF] font-bold text-xl md:text-2xl lg:text-3xl">
          Registration
        </h1>
        <h2 className="text-[#b0b0b0] text-base md:text-xl lg:text-2xl">
          Please fill in the details to create your account.
        </h2>
      </div>

      {/* Form Section */}
      <div className="space-y-8">
        {/* First Name */}
        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="firstName">
            First Name
          </Label>
          <div className="flex items-center space-x-3">
            <Input
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="lastName">
            Last Name
          </Label>
          <div className="flex items-center space-x-3">
            <Input
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="email">
            Email
          </Label>
          <div className="flex items-center space-x-3">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="driver@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
            />
            <Button className="bg-[#40EC24] text-white p-2 md:p-3 rounded-2xl h-auto font-bold hover:bg-[#2ecc71] transition-all">
              Verify
            </Button>
          </div>
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="gender">
            Gender
          </Label>
          <Select
            name="gender"
            value={gender}
            onValueChange={(value) => setGender(value)}
          >
            <SelectTrigger
              id="gender"
              className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF]"
            >
              <SelectValue placeholder="Select your gender" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectLabel>Gender</SelectLabel>
                <SelectItem value="male" className="cursor-pointer">
                  Male
                </SelectItem>
                <SelectItem value="female" className="cursor-pointer">
                  {" "}
                  Female
                </SelectItem>
                <SelectItem value="others" className="cursor-pointer">
                  Others
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Referral Code */}
        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="code">
            Referral Code
          </Label>
          <div className="flex items-center space-x-3">
            <Input
              id="code"
              name="referralCode"
              placeholder="5789"
              className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
            />
          </div>
          <p className="text-gray-400">
            If someone referred you, enter their code here.
          </p>
        </div>

        {/* Logistics Toggle */}
        <div className="flex items-center space-x-3">
          <Input
            type="checkbox"
            id="logisticsToggle"
            className="w-5 h-5 text-[#5800FF] rounded-full border-gray-300  checked:text-[#5800ff] focus:ring-[#5800FF]"
            checked={logistics}
            onChange={() => setLogistics(!logistics)}
          />
          <Label className="text-lg font-bold" htmlFor="logisticsToggle">
            I own a logistics company
          </Label>
        </div>

        {/* Logistics Details */}
        {logistics && (
          <div className="space-y-8">
            {/* Vehicle Name */}
            <div className="space-y-2">
              <Label
                className="text-lg md:text-xl font-bold"
                htmlFor="vehicleName"
              >
                Vehicle Name
              </Label>
              <Input
                id="vehicleName"
                name="vehicleName"
                placeholder="Vehicle Name"
                value={vehicleBrand}
                onChange={(e) => setVechicleBrand(e.target.value)}
                className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
              />
            </div>

            {/* Vehicle Model */}
            <div className="space-y-2">
              <Label
                className="text-lg md:text-xl font-bold"
                htmlFor="vehicleModel"
              >
                Vehicle Model
              </Label>
              <Input
                id="vehicleModel"
                name="vehicleModel"
                placeholder="Vehicle Model"
                value={vehicleModel}
                onChange={(e) => setVechicleModel(e.target.value)}
                className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
              />
            </div>

            {/* Vehicle Manufacturer */}
            <div className="space-y-2">
              <Label
                className="text-lg md:text-xl font-bold"
                htmlFor="vehicleManufacturer"
              >
                Vehicle Year
              </Label>
              <Input
                id="vehicleManufacturer"
                name="vehicleManufacturer"
                placeholder="Vehicle Manufacturer"
                value={vehicleYear}
                onChange={(e) => setVechicleYear(e.target.value)}
                className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
              />
            </div>

            {/* License Plate */}
            <div className="space-y-2">
              <Label
                className="text-lg md:text-xl font-bold"
                htmlFor="licensePlate"
              >
                License Plate
              </Label>
              <Input
                id="licensePlate"
                name="licensePlate"
                placeholder="License Plate"
                value={vehiclePlateNumber}
                onChange={(e) => setVechiclePlateNumber(e.target.value)}
                className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
              />
            </div>

            {/* Vehicle Color */}
            <div className="space-y-2">
              <Label
                className="text-lg md:text-xl font-bold"
                htmlFor="vehicleColor"
              >
                Vehicle Color
              </Label>
              <Input
                id="vehicleColor"
                name="vehicleColor"
                placeholder="Vehicle Color"
                className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
              />
            </div>
          </div>
        )}

        {/* Next Button */}
        <div className="flex justify-end mt-6 gap-x-3">
          <Button
            onClick={() => router.push("/driver/")}
            className="bg-white py-3 px-6 rounded-xl font-bold   hover:bg-[#5800ff] hover:text-white border border-[#5800ff] text-[#5800FF] transition-all"
          >
            Prev
          </Button>
          <Button
            onClick={handleNext}
            className="bg-[#5800FF] text-white py-3 px-6 rounded-xl font-bold hover:bg-white border border-[#5800ff] hover:text-[#5800FF] transition-all"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DriverPage;
