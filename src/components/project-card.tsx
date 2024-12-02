/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
interface ProjectCardProps {
  image: string;
  title: string;
  type: string;
  href: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className=" p-4 rounded-xl hover:shadow-xl  max-h-[700px] hover:outline-2">
      <img src={props.image} width={300} />
      <div className="flex flex-col items-start mt-[20px] justify-end ">
        <h1 className="text-sm  p-1 bg-[#FD6F00] rounded-lg text-white">
          {props.type}
        </h1>
        <p className="mt-[10px] font-bold text-[24px]">{props.title}</p>

        <Link href={props.href || ""} target="_blank" className="mt-5">
          <button className="bg-orange-400  items-center p-4 w-[100px] rounded-lg font-bold text-white shadow-lg">
            Website
          </button>
        </Link>
      </div>
    </div>
  );
}
