/* eslint-disable @next/next/no-img-element */
export default function Header() {
  return (
    <header className="px-12 2xl:px-[250px] p-12 xl:pt-[61px] sticky top-0  backdrop-blur-md backdrop-opacity-85 ">
      <nav className="flex justify-between items-center mx-auto ">
        <div className="flex gap-5 items-center">
          <img src="./logo.svg" width={67} height={67} alt="Logo " />
        </div>
        <nav className="hidden xl:flex gap-[26px]">
          <p className="text-lg hover:underline hover:underline-offset-8 hover:cursor-pointer hover:font-bold hover:transition-all hover:duration-75">
            Home
          </p>
          <p className="text-lg hover:underline hover:underline-offset-8 hover:cursor-pointer hover:font-bold hover:transition-all hover:duration-75">
            About Me
          </p>
          <p className="text-lg hover:underline hover:underline-offset-8 hover:cursor-pointer hover:font-bold hover:transition-all hover:duration-75">
            Services
          </p>
          <p className="text-lg hover:underline hover:underline-offset-8 hover:cursor-pointer hover:font-bold hover:transition-all hover:duration-75">
            Projects
          </p>
          <p className="text-lg hover:underline hover:underline-offset-8 hover:cursor-pointer hover:font-bold hover:transition-all hover:duration-75">
            Testimonials
          </p>
          <p className="text-lg hover:underline hover:underline-offset-8 hover:cursor-pointer hover:font-bold hover:transition-all hover:duration-75">
            Contact
          </p>
        </nav>
        <button className="bg-orange-500 hover:bg-orange-700 hover:cursor-pointer rounded-lg h-[52px] w-[188px] text-white">
          Download CV
        </button>
      </nav>
    </header>
  );
}
