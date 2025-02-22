"use client";

import Image from "next/image";

interface ShoeCardProps {
  imgURL: any;
  onChange: (img: string) => void;
  currentImage: string;
}

const ShoeCard = ({ imgURL, onChange, currentImage }: ShoeCardProps) => {
  const handleClick = () => {
    if (currentImage !== imgURL.bigShoe) onChange(imgURL.bigShoe);
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        currentImage === imgURL.bigShoe.src
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className="flex justify-center items-center bg-card bg-center bg-cover
                      sm:w-40 sm:h-40 rounded-xl max-sm:p-4"
      >
        <Image
          src={imgURL.thumbnail}
          alt={"shoe collection"}
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
