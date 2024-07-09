import Icon from "@/components/custom/icon/Icon";
import MenuItem from "@/components/custom/menu-item/MenuItem";

export interface TCategory {
  name: string;
  icon: string;
}

const categories: TCategory[] = [
  {
    name: "Home",
    icon: "FaHome",
  },
  {
    name: "Social",
    icon: "FaHome",
  },
  {
    name: "Google",
    icon: "FaHome",
  },
  {
    name: "Communication",
    icon: "FaHome",
  },
];

const SideMenu = () => {
  return (
    <section className="h-full w-full relative">
      {/* Heading Section */}
      <div className="h-[10%] px-5 bg-[#ffffff10] rounded-t-[10px]">
        <div className="h-full flex justify-center items-center text-white">
          <h1 className="text-2xl font-bold">My Web Book</h1>
        </div>
      </div>
      {/* Categories section */}
      <article id="menuScrollBar" className="h-[80%] overflow-y-auto">
        <ul className="w-full flex flex-col justify-center items-center gap-3 list-none px-5 2xl:px-8 py-4">
          {categories?.map((item, index) => (
            <MenuItem key={index} name={item.name} icon={item.icon} />
          ))}
          <li className={"menu"}>
            <Icon iconName="FaPlus" size={20} />
            <span>Add New</span>
          </li>
        </ul>
      </article>
      {/* Footer Section */}
      <div className="h-[10%] w-full bg-[#00000015] rounded-b-[20px]">
        <div className="flex justify-center items-center h-full">
          <p className="text-sm 2xl:text-base text-primary">
            All rights reserved by{" "}
            <span className="text-white font-semibold">Robin</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SideMenu;
