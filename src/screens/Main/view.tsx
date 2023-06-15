import MaterialReactTable from "material-react-table";
import { MainHooks } from "./hooks";
import { Container } from "./style";

const Main = () => {
  const { data, columns } = MainHooks();

  return (
    <Container>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableColumnActions={false}
        enableColumnFilters={false}
        enablePagination={false}
        enableSorting={false}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        muiTableBodyRowProps={{ hover: false }}
      />
    </Container>
  );
};

export default Main;
