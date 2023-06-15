import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { ROUTES } from "../../routes/ROUTES";
import { users } from "../../mock";

export const UsersHooks = () => {
  const { pathname } = useLocation();

  const [deleteLoading, setDeleteLoading] = useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(0);

  const effect = async () => {
    try {
      console.log("effect");
    } catch (e) {
      console.log("e: ", e);
    }
  };

  useEffect(() => {
    effect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showDeleteModal = () => {
    setIsDeleteVisible(1);
  };

  const hideDeleteModal = () => setIsDeleteVisible(0);

  const onDeleteSubmit = async () => {
    try {
      setDeleteLoading(true);

      setTimeout(() => {
        setDeleteLoading(false);
        hideDeleteModal();
      }, 3000);
    } catch (e) {
      console.log("e: ", e);
    }
  };

  let show = true;
  const addUserRoute = `${ROUTES.DASHBOARD}/${ROUTES.USERS}/${ROUTES.ADD_USER}`;
  const editUserRoute = `${ROUTES.DASHBOARD}/${ROUTES.USERS}/${ROUTES.EDIT_USER}`;
  const readUserRoute = `${ROUTES.DASHBOARD}/${ROUTES.USERS}/${ROUTES.READ_USER}`;
  const condition =
    pathname === addUserRoute ||
    pathname === `${addUserRoute}/` ||
    pathname === editUserRoute ||
    pathname === `${editUserRoute}/` ||
    pathname === readUserRoute ||
    pathname === `${readUserRoute}/`;

  if (condition) {
    show = false;
  }

  return {
    show,
    deleteLoading,
    isDeleteVisible,
    showDeleteModal,
    hideDeleteModal,
    onDeleteSubmit,
    data: users,
  };
};
