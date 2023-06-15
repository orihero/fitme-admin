import React, { useMemo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import {
  Box,
  Button,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { FaEye, FaPowerOff } from "react-icons/fa";
import { MdModeEdit, MdDelete } from "react-icons/md";
import moment from "moment";
import { UsersHooks } from "./hooks";
import { COLORS } from "../../constants/COLORS";
import { ROUTES } from "../../routes/ROUTES";
import { User } from "../../types";
import { AlignCenter, Container, Main, Text, TextModal } from "./style";

const Users = () => {
  const {
    show,
    deleteLoading,
    isDeleteVisible,
    showDeleteModal,
    hideDeleteModal,
    onDeleteSubmit,
    data,
  } = UsersHooks();

  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
        size: 150,
      },
      {
        header: "Phone number",
        accessorKey: "phoneNumber",
        size: 150,
      },
      {
        header: "Role",
        accessorKey: "role",
        size: 150,
      },
      {
        header: "Pro account",
        accessorKey: "isProAccount",
        size: 150,
        Cell: ({ cell }) => (
          <AlignCenter>
            <FaPowerOff
              size={20}
              color={cell.getValue<boolean>() ? COLORS.BLUE : COLORS.GREY}
            />
          </AlignCenter>
        ),
      },
      {
        header: "Created date",
        accessorKey: "createdAt",
        size: 150,
        Cell: ({ cell }) => (
          <Text>{moment(cell.getValue<string>()).format("DD-MM-YYYY")}</Text>
        ),
      },
    ],
    []
  );

  return (
    <Container>
      {!!show && (
        <Main>
          <MaterialReactTable
            data={data}
            columns={columns}
            enableColumnOrdering
            renderTopToolbarCustomActions={() => (
              <NavLink
                to={`${ROUTES.DASHBOARD}/${ROUTES.USERS}/${ROUTES.ADD_USER}`}
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
            enableRowActions
            renderRowActions={({ row }) => (
              <Box
                sx={{
                  gap: "10px",
                  display: "flex",
                  color: "#fff",
                }}
              >
                <NavLink
                  to={`${ROUTES.DASHBOARD}/${ROUTES.USERS}/${ROUTES.READ_USER}`}
                >
                  <Tooltip arrow placement="bottom" title="View">
                    <Button
                      color="success"
                      onClick={() => console.log("onPress1")}
                    >
                      <FaEye size={18} />
                    </Button>
                  </Tooltip>
                </NavLink>
                <NavLink
                  to={`${ROUTES.DASHBOARD}/${ROUTES.USERS}/${ROUTES.EDIT_USER}`}
                >
                  <Tooltip arrow placement="bottom" title="Edit">
                    <Button
                      style={{ color: COLORS.BLUE }}
                      onClick={() => console.log("onPress2")}
                    >
                      <MdModeEdit size={18} />
                    </Button>
                  </Tooltip>
                </NavLink>
                <Tooltip arrow placement="bottom" title="Delete">
                  <Button color="error" onClick={showDeleteModal}>
                    <MdDelete color="" size={18} />
                  </Button>
                </Tooltip>
              </Box>
            )}
            displayColumnDefOptions={{
              "mrt-row-actions": {
                muiTableHeadCellProps: {
                  align: "center",
                },
              },
            }}
            muiTableHeadCellColumnActionsButtonProps={{
              sx: {
                visibility: "hidden",
              },
            }}
            muiTableHeadCellDragHandleProps={{
              sx: {
                visibility: "hidden",
              },
            }}
          />

          <Dialog open={!!isDeleteVisible}>
            <DialogTitle textAlign="center">
              {"Are you want to delete ?"}
            </DialogTitle>
            <DialogActions
              sx={{
                p: "1rem",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Button variant="outlined" onClick={hideDeleteModal}>
                <TextModal>{"Cancel"}</TextModal>
              </Button>
              <LoadingButton
                color="error"
                variant="outlined"
                loading={deleteLoading}
                onClick={onDeleteSubmit}
              >
                <TextModal>{"Delete"}</TextModal>
              </LoadingButton>
            </DialogActions>
          </Dialog>
        </Main>
      )}

      <Outlet />
    </Container>
  );
};

export default Users;
