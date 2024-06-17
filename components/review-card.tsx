import Image from "next/image";
import { Review } from "@/types";
import { star } from "@/public/assets/icons";

interface ReviewCardProps {
  data: Review;
}

const ReviewCard = ({ data }: ReviewCardProps) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={data.imgURL}
        alt={data.customerName}
        className="rounded-full object-contain"
        width={120}
        height={120}
      />
      <p className="mt-6 max-w-sm text-center info-text">{data.feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <Image
          src={star}
          alt={"star-icon"}
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">
          ({data.rating})
        </p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {data.customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
