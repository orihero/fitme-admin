import { useEffect, useMemo, useState } from "react";
import { REQUESTS } from "../../../api/requests";
import { Category, NotificationMessage } from "../../../types";

const CategoryAddHook = () => {
  const [category, setCategory] = useState<Partial<Category>>({});
  const [parents, setParents] = useState<Category[]>([]);
  const [notification, setNotification] = useState<NotificationMessage>();
  const [loading, setLoading] = useState(false);

  const categoryTypes = useMemo(() => ["EXERCISE", "PRODUCT", "DISH"], []);

  const fetchCategories = async () => {
    if (!category.type) {
      return;
    }
    try {
      const res = await REQUESTS.category.get({ type: category.type });
      setParents(res.data.data);
    } catch (error) {
      showNotification();
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [category.type]);

  const onChangeState = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => {
    if (!!name && name.indexOf(".") !== -1) {
      const [middle, key] = name.split(".");
      setCategory({
        ...category,
        [middle]: {
          //@ts-ignore
          ...(!!category[middle] ? category[middle] : {}),
          [key]: value,
        },
      });
      return;
    }
    setCategory({ ...category, [name]: value });
  };

  const showNotification = (
    notification: NotificationMessage = {
      message: "Internal server error",
      type: "error",
    }
  ) => {
    setNotification(notification);
    setTimeout(() => {
      setNotification(undefined);
    }, 6000);
  };

  const onSubmit = async () => {
    console.log("====================================");
    console.log("DSA");
    console.log("====================================");
    setLoading(true);
    try {
      const res = await REQUESTS.category.add(category);
      showNotification({ message: "Created successfully", type: "success" });
    } catch (error) {
      showNotification();
    }
    setLoading(false);
  };

  return {
    category,
    onChangeState,
    loading,
    onSubmit,
    notification,
    categoryTypes,
    parents,
  };
};

export default CategoryAddHook;
