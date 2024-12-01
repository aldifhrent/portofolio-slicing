export default function ProjectFilterButton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-[57px]">
      <button className="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 text-nowrap">
        All
      </button>
      <button className="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 text-nowrap">
        UI/UX
      </button>
      <button className="px-4 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 border border-orange-500 rounded-lg text-nowrap">
        Web Design
      </button>
      <button className="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 text-nowrap">
        App Design
      </button>
      <button className="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 text-nowrap">
        Graphic Design
      </button>
    </div>
  );
}
