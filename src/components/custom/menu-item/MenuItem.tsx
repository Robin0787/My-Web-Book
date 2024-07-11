import {
  selectCurrentCategory,
  setCategory,
} from "@/redux/features/category/category.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TCategory } from "@/types/types.category";
import Icon from "../icon/Icon";

const MenuItem = ({ category }: { category: TCategory }) => {
  const currentCategory = useAppSelector(selectCurrentCategory);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(setCategory(category.name.toLowerCase()));
  }

  const condition = currentCategory === category.name.toLowerCase();

  return (
    <li className={condition ? "currentMenu" : "menu"} onClick={handleClick}>
      <Icon iconName={category.icon} size={20} />
      <span>{category.name}</span>
    </li>
  );
};

export default MenuItem;
