import Image from "next/image";
import { Service } from "@/types";

interface ServicesCardProps {
  data: Service;
}

const ServicesCard = ({ data }: ServicesCardProps) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <Image src={data.imgURL} alt={data.label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {data.label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {data.subtext}
      </p>
    </div>
  );
};

export default ServicesCard;
