import { TCategory } from "@/components/shared/side-menu/SideMenu";
import {
  selectCurrentCategory,
  setCategory,
} from "@/redux/features/category/category.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Icon from "../icon/Icon";

const MenuItem = (category: TCategory) => {
  const currentCategory = useAppSelector(selectCurrentCategory);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(setCategory(category.name.toLowerCase()));
  }

  const condition = currentCategory === category.name.toLowerCase();
  console.log(currentCategory);

  return (
    <li
      className={`menu ${condition ? "bg-[#ffffff30]" : ""}`}
      onClick={handleClick}
    >
      <Icon iconName={category.icon} size={20} />
      <span>{category.name}</span>
    </li>
  );
};

export default MenuItem;
