"use client";
import ShineBorder from "@/components/magicui/shine-border";
import { PricingPlan } from "./pricing-section";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular,
  url,
}: PricingPlan) => {
  const router = useRouter();

  const onClick = () => {
    router.push(url);
  };

  return (
    <ShineBorder
      className="relative bg-slate-950 flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <div className="border flex flex-col justify-between bg-white/5 rounded-lg h-full w-full p-6 hover:shadow-md text-left relative">
        {isPopular && (
          <div className="absolute top-0 right-0 bg-white text-black px-2 py-1 rounded-bl-lg rounded-tr-lg">
            Popular
          </div>
        )}
        <div>
          <div className="inline-flex items-end">
            <h1 className="font-extrabold text-3xl">${price}</h1>
          </div>
          <h2 className="font-bold text-xl my-2">{title}</h2>
          <p>{description}</p>
          <div className="flex-grow border-t border-gray-400 opacity-25 my-3"></div>
          <ul>
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex flex-row items-center text-white gap-2 my-2"
              >
                <div className="rounded-full flex items-center justify-center bg-gray-900 w-4 h-4 mr-2">
                  <Check className="text-white" width={10} height={10} />
                </div>
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button
            onClick={onClick}
            className=" bg-white py-2 mt-3 rounded-lg text-black w-full"
          >
            Select Plan
          </button>
        </div>
      </div>
    </ShineBorder>
  );
};

export default PricingCard;
