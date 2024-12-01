/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
interface ProjectCardProps {
  image: string;
  title: string;
  type: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="hover:bg-gray-50 p-4 rounded-lg hover:shadow-lg">
      <img src={props.image} />
      <div className="flex flex-col items-start mt-[37px] ">
        <h1 className="text-[19px] text-[#FD6F00]">{props.type}</h1>
        <p className="mt-[10px] font-bold text-[24px]">{props.title}</p>
      </div>
    </div>
  );
}
