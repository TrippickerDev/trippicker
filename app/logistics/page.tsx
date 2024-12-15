"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function DriverPage() {
  const router = useRouter();

  // State to capture phone number and selected city
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");

  // Handle form submission
  const handleNext = () => {
    if (!phoneNumber || !city) {
      alert("Please fill in details");
      return;
    }

    localStorage.setItem(
      "driverData",
      JSON.stringify({
        city,
        phoneNumber,
      })
    );

    router.push("/logistics/company");
  };

  useEffect(() => {
    const savedData = localStorage.getItem("driverData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setPhoneNumber(parsedData.phoneNumber || "");
      setCity(parsedData.city || "");
    }
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center max-w-4xl mx-auto p-4">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="text-[#5800FF] font-bold text-xl md:text-2xl lg:text-3xl">
          Registration
        </h1>
        <h2 className="text-[#b0b0b0] text-base md:text-xl lg:text-2xl">
          Please fill in the details to create your account.
        </h2>
      </div>

      {/* Phone Number Section */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="phone">
            Phone Number
          </Label>
          <div className="flex items-center space-x-3">
            <span className="bg-[#5800FF] text-white p-3 md:p-4 rounded-2xl flex items-center justify-center font-bold">
              <Image src={"/9ja.png"} height={24} width={24} alt="Nigeria" />
              <span className="ml-2">+234</span>
            </span>
            <Input
              id="phone"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full p-4  border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF]"
            />
          </div>
        </div>

        {/* Select City Section */}
        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="city">
            Select City
          </Label>
          <Select value={city} onValueChange={(value) => setCity(value)}>
            <SelectTrigger
              id="city"
              className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF]"
            >
              <SelectValue placeholder="Select your city" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className=" bg-white">
                <SelectLabel>Cities</SelectLabel>
                <SelectItem
                  className="hover:bg-gray-300 cursor-pointer"
                  value="lagos"
                >
                  Lagos
                </SelectItem>
                <SelectItem
                  className="hover:bg-gray-300 cursor-pointer"
                  value="benin"
                >
                  Benin
                </SelectItem>
                <SelectItem
                  className="hover:bg-gray-300 cursor-pointer"
                  value="abuja"
                >
                  Abuja
                </SelectItem>
                <SelectItem
                  className="hover:bg-gray-300 cursor-pointer"
                  value="port-harcourt"
                >
                  Port Harcourt
                </SelectItem>
                <SelectItem
                  className="hover:bg-gray-300 cursor-pointer"
                  value="kano"
                >
                  Kano
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-end">
          <Button
            onClick={handleNext}
            className="bg-[#5800FF] text-white p-3 md:p-4 rounded-2xl flex hover:bg-white border-[#5800ff] hover:text-[#5800ff] items-center justify-center font-bold"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DriverPage;
