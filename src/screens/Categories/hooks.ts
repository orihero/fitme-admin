import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../../routes/ROUTES";
import { Category } from "../../types";
import { REQUESTS } from "../../api/requests";

export const CategoriesHooks = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const res = await REQUESTS.category.get();
      setCategories(res.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const { pathname } = useLocation();
  let show = true;
  const addCategoryRoute = `${ROUTES.DASHBOARD}/${ROUTES.CATEGORIES}/${ROUTES.ADD_CATEGORY}`;
  // const editUserRoute = `${ROUTES.DASHBOARD}/${ROUTES.EXERCISES}/${ROUTES.EDIT_USER}`;
  // const readUserRoute = `${ROUTES.DASHBOARD}/${ROUTES.EXERCISES}/${ROUTES.READ_USER}`;
  const condition =
    pathname === addCategoryRoute || pathname === `${addCategoryRoute}/`;
  // pathname === editUserRoute ||
  // pathname === `${editUserRoute}/` ||
  // pathname === readUserRoute ||
  // pathname === `${readUserRoute}/`;

  if (condition) {
    show = false;
  }
  return { show, categories };
};
