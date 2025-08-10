import React from "react";
import PriceOption from "../PriceOption/PriceOption"; // Adjust path if needed

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 30,
      features: [
        "Access to gym equipment",
        "Locker facility",
        "Free water station"
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 50,
      features: [
        "Access to gym equipment",
        "Locker facility",
        "Free water station",
        "Group fitness classes",
        "One personal training session/month",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 80,
      features: [
        "Access to gym equipment",
        "Locker facility",
        "Free water station",
        "Unlimited group fitness classes",
        "Weekly personal training sessions",
        "Sauna and steam room access",
      ],
    },
    {
      id: 4,
      name: "VIP Plan",
      price: 120,
      features: [
        "24/7 gym access",
        "Private locker",
        "Free water & energy drinks",
        "Unlimited group fitness classes",
        "Unlimited personal training sessions",
        "Access to VIP lounge & spa",
      ],
    },
    {
      id: 5,
      name: "Student Plan",
      price: 25,
      features: [
        "Access to gym equipment during off-peak hours",
        "Locker facility",
        "Discounted group classes",
        "One personal training session/quarter",
      ],
    },
    {
      id: 6,
      name: "Family Plan",
      price: 150,
      features: [
        "Access for up to 4 family members",
        "Locker facilities",
        "Group fitness classes",
        "Two personal training sessions/month",
        "Family spa access",
      ],
    },
    {
      id: 7,
      name: "Corporate Plan",
      price: 200,
      features: [
        "Access for up to 10 employees",
        "Corporate wellness sessions",
        "Group fitness classes",
        "Unlimited personal training sessions",
        "Spa and sauna access",
      ],
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-5xl mb-8 text-center font-bold">Best Prices in the Town</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
