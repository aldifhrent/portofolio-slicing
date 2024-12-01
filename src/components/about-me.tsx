/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export default function AboutMe() {
  return (
    <section className="mt-[69.52px] px-12 2xl:px-[250px] pt-[61px]">
      <div className="flex flex-col  xl:flex-row items-center justify-center mx-auto">
        <div>
          <img src="./profile-image.svg" />
        </div>
        <div className="flex flex-col mt-[55px] mx-auto ml-0 xl:ml-[148px] items-center xl:items-start ">
          <h1 className="text-[65px] font-bold text-center lg:text-left">
            About Me
          </h1>
          <p className="text-center xl:text-left text-[21px]  ">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
        </div>
      </div>
    </section>
  );
}
