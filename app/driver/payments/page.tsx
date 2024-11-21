"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function DriverPage() {
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    address: "",
    nextOfKinName: "",
    nextOfKinPhoneNumber: "",
    paymentType: "",
    accountName: "",
    accountNumber: "",
    bankName: "",
    nextOfKinRelationship: "",
    bvnNin: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("driverData");

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      const updatedData = {
        ...parsedData,
        address: formValues.address || parsedData.address,
        nextOfKinName: formValues.nextOfKinName || parsedData.nextOfKinName,
        nextOfKinPhoneNumber:
          formValues.nextOfKinPhoneNumber || parsedData.nextOfKinPhoneNumber,
        paymentType: formValues.paymentType || parsedData.paymentType,
        accountName: formValues.accountName || parsedData.accountName,
        accountNumber: formValues.accountNumber || parsedData.accountNumber,
        bankName: formValues.bankName || parsedData.bankName,
        nextOfKinRelationship:
          formValues.nextOfKinRelationship || parsedData.nextOfKinRelationship,
        bvnNin: formValues.bvnNin || parsedData.bvnNin,
      };

      localStorage.setItem("driverData", JSON.stringify(updatedData));
    }
  }, [formValues]);

  const handleSubmit = async () => {
    const savedData = localStorage.getItem("driverData");

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      const requestData = {
        ...parsedData,
        role: "driver",
        ownVehicle: true,
      };

      console.log("Sending data to API:", requestData);
    }
    router.push("/driver/documents");
  };

  // Handler to update form values
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="h-auto flex flex-col justify-center max-w-4xl mx-auto p-4">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="text-[#5800FF] font-bold text-xl md:text-2xl lg:text-3xl">
          Payment Details
        </h1>
        <h2 className="text-[#b0b0b0] text-base md:text-xl lg:text-2xl text-left">
          Please upload the following documents to complete your profile
          verification. Ensure that each document is clear, legible, and
          contains all required details. Use well-lit, high-quality photos or
          scans for best results.
        </h2>
      </div>

      {/* Form Section */}
      <div className="space-y-8">
        {/* Payment Type */}
        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="paymentType">
            Payment Type
          </Label>
          <p className="text-gray-400">Choose your preferred payment type.</p>
          <Input
            id="paymentType"
            name="paymentType"
            value={formValues.paymentType}
            onChange={handleChange}
            placeholder="Enter payment type"
            className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
          />
        </div>

        {/* Account Name */}
        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="accountName">
            Account Name
          </Label>
          <p className="text-gray-400">Enter the name on your account.</p>
          <Input
            id="accountName"
            name="accountName"
            value={formValues.accountName}
            onChange={handleChange}
            placeholder="Enter account name"
            className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
          />
        </div>

        {/* Account Number */}
        <div className="space-y-2">
          <Label
            className="text-lg md:text-xl font-bold"
            htmlFor="accountNumber"
          >
            Account Number
          </Label>
          <p className="text-gray-400">Enter your account number.</p>
          <Input
            id="accountNumber"
            name="accountNumber"
            value={formValues.accountNumber}
            onChange={handleChange}
            placeholder="Enter account number"
            className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
          />
        </div>

        {/* Bank Name */}
        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="bankName">
            Bank Name
          </Label>
          <p className="text-gray-400">Enter the name of your bank.</p>
          <Input
            id="bankName"
            name="bankName"
            value={formValues.bankName}
            onChange={handleChange}
            placeholder="Enter bank name"
            className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
          />
        </div>
        {/* Bank Name */}
        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="address">
            Address
          </Label>
          <p className="text-gray-400">Enter the name of your Home Address.</p>
          <Input
            id="bankName"
            name="address"
            value={formValues.address}
            onChange={handleChange}
            placeholder="Enter bank name"
            className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
          />
        </div>

        {/* Next of Kin Relationship */}
        <div className="space-y-2">
          <Label
            className="text-lg md:text-xl font-bold"
            htmlFor="nextOfKinRelationship"
          >
            Next of Kin Name
          </Label>
          <p className="text-gray-400">Enter the Name of your next of kin.</p>
          <Input
            id="nextOfKinRelationship"
            name="nextOfKinName"
            value={formValues.nextOfKinName}
            onChange={handleChange}
            placeholder="Enter relationship"
            className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
          />
        </div>
        <div className="space-y-2">
          <Label
            className="text-lg md:text-xl font-bold"
            htmlFor="nextOfKinRelationship"
          >
            Next of Kin Phone Number
          </Label>
          <p className="text-gray-400">
            Enter the phone number of your next of kin.
          </p>
          <Input
            id="nextOfKinRelationship"
            name="nextOfKinPhoneNumber"
            value={formValues.nextOfKinPhoneNumber}
            onChange={handleChange}
            placeholder="Enter relationship"
            className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
          />
        </div>
        <div className="space-y-2">
          <Label
            className="text-lg md:text-xl font-bold"
            htmlFor="nextOfKinRelationship"
          >
            Next of Kin Relationship
          </Label>
          <p className="text-gray-400">
            Enter the relationship to your next of kin.
          </p>
          <Input
            id="nextOfKinRelationship"
            name="nextOfKinRelationship"
            value={formValues.nextOfKinRelationship}
            onChange={handleChange}
            placeholder="Enter relationship"
            className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
          />
        </div>

        {/* BVN/NIN */}
        <div className="space-y-2">
          <Label className="text-lg md:text-xl font-bold" htmlFor="bvnNin">
            BVN/NIN
          </Label>
          <p className="text-gray-400">
            Provide your BVN or NIN (must be 11 digits).
          </p>
          <Input
            id="bvnNin"
            name="bvnNin"
            type="number"
            minLength={11}
            value={formValues.bvnNin}
            onChange={handleChange}
            placeholder="Enter BVN or NIN"
            className="w-full p-4 border border-gray-300 bg-[#EFEFEF] text-gray-700 rounded-2xl h-auto focus:outline-none focus:ring-2 focus:ring-[#5800FF] placeholder:text-gray-400"
          />
        </div>

        {/* Next/Prev Buttons */}
        <div className="flex justify-end mt-6 gap-x-3">
          <Button
            onClick={() => router.push("/driver/")}
            className="bg-white py-3 px-6 rounded-xl font-bold hover:bg-[#5800ff] hover:text-white border border-[#5800ff] text-[#5800FF] transition-all"
          >
            Prev
          </Button>
          <Button
            onClick={handleSubmit}
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
