import { TCategory } from "@/components/shared/side-menu/SideMenu";
import { useLocation, useSearchParams } from "react-router-dom";
import Icon from "../icon/Icon";

const MenuItem = (category: TCategory) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryValue = searchParams.get("q");
  const [, setSearchParams] = useSearchParams();

  function handleClick() {
    setSearchParams({ q: category?.name?.toLowerCase() });
  }

  return (
    <li
      className={`menu ${
        queryValue === category?.name?.toLowerCase()
          ? "bg-[#262626] hover:bg-[#ffffff50]"
          : ""
      }`}
      onClick={handleClick}
    >
      <Icon iconName={category.icon} size={20} />
      <span>{category.name}</span>
    </li>
  );
};

export default MenuItem;
