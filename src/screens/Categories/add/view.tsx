import { Container } from "../style";
import {
  Alert,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import { Bottom, Text, Title, styles } from "../../Users/add/style";
import { LoadingButton } from "@mui/lab";
import CategoryAddHook from "./hooks";

const CategoryAddView = () => {
  const {
    category,
    notification,
    loading,
    onChangeState,
    onSubmit,
    parents,
    categoryTypes,
  } = CategoryAddHook();

  return (
    <Container>
      <Title>{"Add category"}</Title>
      <InputLabel>Type</InputLabel>
      <Select
        fullWidth={true}
        label="Type"
        placeholder="Type"
        name="type"
        onChange={onChangeState}
      >
        {categoryTypes.map((e) => {
          return (
            <MenuItem value={e} key={e}>
              <Text>{e}</Text>
            </MenuItem>
          );
        })}
      </Select>
      <InputLabel>Parent</InputLabel>
      <Select
        fullWidth={true}
        label="Parent"
        name="parent"
        value={
          typeof category.parent === "string"
            ? category.parent
            : category.parent?._id
        }
        onChange={onChangeState}
      >
        {parents?.map((e) => {
          <MenuItem value={undefined}>No parent</MenuItem>;
          return (
            <MenuItem key={e._id} value={e._id}>
              <Text>{e.name.ru}</Text>
            </MenuItem>
          );
        })}
      </Select>
      <InputLabel>Title</InputLabel>
      <TextField label="Title RU" name="name.ru" onChange={onChangeState} />
      <TextField label="Title UZ" name="name.uz" onChange={onChangeState} />
      <TextField label="Title EN" name="name.en" onChange={onChangeState} />
      <Bottom loading={loading}>
        <LoadingButton
          variant="outlined"
          onClick={onSubmit}
          loading={loading}
          startIcon={<></>}
          style={styles.btn}
          loadingPosition={"start"}
        >
          <Text loading={loading}>{"Save"}</Text>
        </LoadingButton>
        <Snackbar open={!!notification} autoHideDuration={6000}>
          <Alert severity={notification?.type}>{notification?.message}</Alert>
        </Snackbar>
      </Bottom>
    </Container>
  );
};

export default CategoryAddView;
