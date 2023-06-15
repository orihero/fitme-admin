import LoadingButton from "@mui/lab/LoadingButton";

import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import { Bottom, Text, Title, styles } from "../../Users/add/style";
import ExerciseAddHook from "./hooks";
import MenuItem from "@mui/material/MenuItem";

const AddExerciseView = () => {
  const {
    exercise,
    onChangeState,
    onSubmit,
    loading,
    errorMessage,
    categories,
  } = ExerciseAddHook();

  return (
    <Container>
      <Title>{"Add exercise"}</Title>
      <InputLabel>Title</InputLabel>
      <TextField
        fullWidth={true}
        label="Title"
        name="title"
        value={exercise.title}
        onChange={onChangeState}
      />
      <InputLabel id="demo-select-small-label">Category</InputLabel>
      <Select
        fullWidth={true}
        label="Category"
        name="category"
        value={
          typeof exercise.category === "string"
            ? exercise.category
            : exercise.category?._id
        }
        onChange={onChangeState}
      >
        {categories?.map((e) => {
          return (
            <MenuItem key={e._id} value={e._id}>
              <Text>{e.name.ru}</Text>
            </MenuItem>
          );
        })}
      </Select>
      <InputLabel>Description</InputLabel>
      <TextField
        fullWidth={true}
        label="Description"
        name="description"
        value={exercise.description}
        onChange={onChangeState}
      />
      <InputLabel>Image link</InputLabel>
      <TextField
        fullWidth={true}
        label="Image link"
        name="image"
        value={exercise.image}
        onChange={onChangeState}
      />
      <InputLabel>Video link</InputLabel>
      <TextField
        fullWidth={true}
        label="Video link"
        name="video"
        value={exercise.video}
        onChange={onChangeState}
      />
      <InputLabel>Meta description</InputLabel>
      <TextField
        fullWidth={true}
        label="Meta  description"
        name="metadescription"
        value={exercise.metadescription}
        onChange={onChangeState}
      />
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
        <Snackbar open={!!errorMessage} autoHideDuration={6000}>
          <Alert severity="error">{errorMessage}</Alert>
        </Snackbar>
      </Bottom>
    </Container>
  );
};

export default AddExerciseView;
