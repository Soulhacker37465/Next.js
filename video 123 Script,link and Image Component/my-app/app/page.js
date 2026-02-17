import Image from "next/image";

export default function Home() {
  return (
     <div className="container my-5 size-80 bg-red-300 relative">
      <Image className="mx-auto object-contain" fill={true} sizes="12px" src="http://www.menucool.com/slider/prod/image-slider-3.jpg" alt="" />
     </div>
  );
}