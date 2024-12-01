import { serviceData } from "@/lib/const";
import ServiceCard from "./services-card";

export default function Services() {
  return (
    <section className="mt-[69.52px] px-12 2xl:px-[250px] pt-[61px] mx-auto">
      <div className="flex flex-col items-center justify-center mx-auto">
        <h1 className="text-[65px] font-bold">Services</h1>
        <p className="text-[21px] text-center mt-[15px]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[31px] mt-20">
          {serviceData.map((service) => (
            <ServiceCard
              key={service.title}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
