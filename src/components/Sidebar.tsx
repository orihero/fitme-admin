import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import {
  FaBars,
  FaHome,
  FaUser,
  FaUserTag,
  FaClipboardList,
} from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import { TbCherryFilled } from "react-icons/tb";
import { BsCalendarDay } from "react-icons/bs";
import { GiMeal } from "react-icons/gi";
import { ROUTES } from "../routes/ROUTES";

export interface IRoute {
  path: string;
  name: string;
  icon: JSX.Element;
  subRoutes?: any[];
}

const routes = [
  {
    path: `${ROUTES.DASHBOARD}/${ROUTES.MAIN}`,
    name: "Dashboard",
    icon: <FaHome className="iconn" />,
  },
  {
    path: `${ROUTES.DASHBOARD}/${ROUTES.USERS}`,
    name: "Users",
    icon: <FaUser className="iconn" />,
  },
  {
    path: `${ROUTES.DASHBOARD}/${ROUTES.TRAINERS}`,
    name: "Trainers",
    icon: <FaUserTag className="iconn" />,
  },
  {
    path: `${ROUTES.DASHBOARD}/${ROUTES.CATEGORIES}`,
    name: "Categories",
    icon: <MdCategory className="iconn" />,
  },
  {
    path: `${ROUTES.DASHBOARD}/${ROUTES.EXERCISES}`,
    name: "Exercises",
    icon: <IoIosFitness className="iconn" />,
  },
  {
    path: `${ROUTES.DASHBOARD}/${ROUTES.WORKOUT_PLANS}`,
    name: "WorkoutPlans",
    icon: <FaClipboardList className="iconn" />,
  },
  {
    path: `${ROUTES.DASHBOARD}/${ROUTES.PRODUCTS}`,
    name: "Products",
    icon: <TbCherryFilled className="iconn" />,
  },
  {
    path: `${ROUTES.DASHBOARD}/${ROUTES.DISHES}`,
    name: "Dishes",
    icon: <GiMeal className="iconn" />,
  },
  {
    path: `${ROUTES.DASHBOARD}/${ROUTES.NUTRITION_PLANS}`,
    name: "NutritionPlans",
    icon: <BsCalendarDay className="iconn" />,
  },
];

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: isOpen ? "15vw" : "45px",

          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className={`sidebar `}
      >
        <div className="top_section">
          <div />

          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        <section className="routes">
          {routes.map((route, index) => (
            <NavLink
              key={index}
              to={route.path}
              className="link"
              // @ts-ignore
              activeclassname="active"
            >
              <div className="icon">{route.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    {route.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>
    </div>
  );
};

export default SideBar;
