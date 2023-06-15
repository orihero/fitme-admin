import { NavLink, Outlet } from "react-router-dom";
import { Container } from "./style";
import { Main } from "../Dashboard/style";
import MTable from "material-react-table";
import { ROUTES } from "../../routes/ROUTES";
import { COLORS } from "../../constants/COLORS";
import { BsDatabaseFillAdd } from "react-icons/bs";
import Button from "@mui/material/Button";
import { Text } from "../Users/style";
import { ExercisesHooks } from "./hooks";

const ExercisesView = () => {
  const { show } = ExercisesHooks();

  return (
    <Container>
      {!!show && (
        <Main>
          <MTable
            columns={[]}
            data={[]}
            renderTopToolbarCustomActions={() => (
              <NavLink
                to={`${ROUTES.DASHBOARD}/${ROUTES.EXERCISES}/${ROUTES.ADD_EXERCISE}`}
              >
                <Button
                  variant="outlined"
                  onClick={() => console.log("onPress")}
                  startIcon={<BsDatabaseFillAdd size={20} />}
                  style={{ color: COLORS.BLUE, borderColor: COLORS.BLUE }}
                >
                  <Text>{"Add"}</Text>
                </Button>
              </NavLink>
            )}
          ></MTable>
        </Main>
      )}
      <Outlet />
    </Container>
  );
};

export default ExercisesView;
