import Button from "@mui/material/Button";
import MTable, { MRT_ColumnDef } from "material-react-table";
import moment from "moment";
import { useMemo } from "react";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
import { COLORS } from "../../constants/COLORS";
import { ROUTES } from "../../routes/ROUTES";
import { Category } from "../../types";
import { Main } from "../Dashboard/style";
import { Text } from "../Users/style";
import { CategoriesHooks } from "./hooks";
import { Container } from "./style";
import { MoreVert } from "@mui/icons-material";

const CategoriesView = () => {
  const { show, categories } = CategoriesHooks();

  const columns = useMemo<MRT_ColumnDef<Category>[]>(
    () => [
      //@ts-ignore
      {
        header: "name",
        accessorKey: "name.ru",
        size: 150,
      },
      {
        header: "Type",
        accessorKey: "type",
        size: 150,
      },
      {
        header: "Created date",
        accessorKey: "createdAt",
        size: 150,
        Cell: ({ cell }) => (
          <Text>{moment(cell.getValue<string>()).format("DD-MM-YYYY")}</Text>
        ),
      },
      {
        header: "Actions",
        Cell: ({ cell }) => (
          <>
            <MoreVert />
          </>
        ),
      },
    ],
    []
  );

  return (
    <Container>
      {!!show && (
        <Main>
          <MTable
            columns={columns}
            data={categories}
            renderTopToolbarCustomActions={() => (
              <NavLink
                to={`${ROUTES.DASHBOARD}/${ROUTES.CATEGORIES}/${ROUTES.ADD_CATEGORY}`}
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

export default CategoriesView;
