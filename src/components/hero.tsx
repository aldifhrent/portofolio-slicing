/* eslint-disable jsx-a11y/alt-text */

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <section className="mt-[90px] px-12 xl:px-[250px]">
      <div className="flex flex-col xl:flex-row justify-between items-center gap-0 sm:gap-y-[80px] ">
        <div className="flex flex-col ">
          <h1 className="font-semibold text-[24px]">Hi I am </h1>
          <h2 className="mt-[6px] text-[32px] text-[#FD6F00] font-semibold">
            Aldi Ahmad Fahrizi Ilmawan
          </h2>
          <div className="flex flex-col">
            <h3 className="text-[70px] lg:text-[100px] font-bold">
              Full Stack
            </h3>
            <h3 className="text-[70px] lg:text-[100px] font-bold md:ml-56 lg:-mt-12">
              Developer
            </h3>
          </div>
          <p className="max-w-lg">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <button className="bg-orange-500 rounded-lg h-[52px] w-[188px] text-white p-1 text-[21px] mt-6 hover:font-bold">
            Hire me
          </button>
        </div>
        <div className="flex flex-col items-center justify-center  ">
          <img src="./profile-image.svg" className="w-full" />
          <div className="flex gap-12 mt-[36.76px] items-center ">
            <Facebook className="bg-black p-2 text-white rounded-lg size-10" />
            <Twitter className="bg-black p-2 text-white rounded-lg size-10" />
            <Instagram className="bg-black p-2 text-white rounded-lg size-10" />
            <Linkedin className="bg-black p-2 text-white rounded-lg size-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
