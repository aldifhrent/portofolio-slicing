/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ServiceCard(props: ServiceCardProps) {
  return (
    <div className="max-w-[330px] min-h-[346px] px-[18px] bg-[#F8F8F8] pt-[57px] pb-[10px] hover:shadow-lg rounded-lg shadow-lg hover:bg-gray-200">
      <div className="flex flex-col items-start justify-center">
        <img src={props.image} />
        <h1 className="text-[32px] font-bold mt-[26px]">{props.title}</h1>
        <p className="text-[19px] mt-[15px]">{props.description}</p>
      </div>
    </div>
  );
}
