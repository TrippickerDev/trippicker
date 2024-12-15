"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function DriverPage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [logistics, setLogistics] = useState<boolean>(true);
  const [email, setEmail] = useState("");
  const [numberBikes, setNumberBikes] = useState<number>(1);
  const [gender, setGender] = useState("");
  const [licensePlates, setLicensePlates] = useState<string[]>([""]);

  useEffect(() => {
    // Adjust license plate inputs when numberBikes changes
    setLicensePlates((prev) => {
      const updated = [...prev];
      const difference = numberBikes - prev.length;

      if (difference > 0) {
        // Add empty strings for additional bikes
        updated.push(...Array(difference).fill(""));
      } else if (difference < 0) {
        // Remove extra license plate inputs
        updated.splice(difference);
      }
      return updated;
    });
  }, [numberBikes]);

  const handleLicensePlateChange = (index: number, value: string) => {
    setLicensePlates((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const handleNext = () => {
    if (!firstName || !email) {
      alert("Please fill in all required fields");
      return;
    }

    const driverData = {
      firstName,
      email,
      numberBikes,
      licensePlates,
    };

    localStorage.setItem("driverData", JSON.stringify(driverData));
    router.push("/logistics/documents");
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
            Admin Name
          </Label>
          <Input
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="driver@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
          />
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

        <div className="flex items-center space-x-3">
          <Input
            type="checkbox"
            id="logisticsToggle"
            className="w-5 h-5 text-[#5800FF] rounded-full border-gray-300 checked:text-[#5800ff] focus:ring-[#5800FF]"
            checked={logistics}
            onChange={() => setLogistics(!logistics)}
          />
          <Label className="text-lg font-bold" htmlFor="logisticsToggle">
            I own a logistics company
          </Label>
        </div>

        {logistics && (
          <div>
            {/* Number of Bikes */}
            <div className="space-y-2">
              <Label
                className="text-lg md:text-xl font-bold"
                htmlFor="numberBikes"
              >
                Number of Bikes
              </Label>
              <Input
                id="numberBikes"
                type="number"
                min="1"
                value={numberBikes}
                onChange={(e) => setNumberBikes(Number(e.target.value))}
                className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
              />
            </div>

            {/* License Plates */}
            <div className="space-y-4">
              <Label className="text-lg md:text-xl font-bold">
                License Plates
              </Label>
              {licensePlates.map((plate, index) => (
                <Input
                  key={index}
                  placeholder={`License Plate ${index + 1}`}
                  value={plate}
                  onChange={(e) =>
                    handleLicensePlateChange(index, e.target.value)
                  }
                  className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
                />
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-6 gap-x-3">
          <Button
            onClick={() => router.push("/driver/")}
            className="bg-white py-3 px-6 rounded-xl font-bold hover:bg-[#5800ff] hover:text-white border border-[#5800ff] text-[#5800FF] transition-all"
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
