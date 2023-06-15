import { LoadingButton } from "@mui/lab";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Switch,
  Select,
  TextField,
  FormLabel,
} from "@mui/material";
import { UsersAddHooks } from "./hooks";
import { Container, Title, SpaceBetween, Text, Bottom, styles } from "./style";

const UsersAddView = () => {
  const { loading, user, onSetUser, onSubmit, ROLES } = UsersAddHooks();

  return (
    <Container>
      <Title>{"Add user"}</Title>
      <SpaceBetween>
        <TextField value={user.name} label="Name" variant="outlined" />

        <TextField value={user.phoneNumber} label="Number" variant="outlined" />

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">{"Role"}</InputLabel>
          <Select
            label="Role"
            value={user.role ?? ""}
            id="demo-select-small"
            labelId="demo-select-small-label"
            onChange={(e) => onSetUser("role", e.target.value)}
          >
            <MenuItem value="">
              <em>{"None"}</em>
            </MenuItem>
            {Object.values(ROLES).map((v, i) => (
              <MenuItem value={v} key={i}>
                <Text>{v}</Text>
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel component="legend">{"Pro Account"}</FormLabel>
          <Switch
            checked={!!user.isProAccount}
            onClick={() => onSetUser("isProAccount", !user.isProAccount)}
          />
        </FormControl>
      </SpaceBetween>

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
      </Bottom>
    </Container>
  );
};

export default UsersAddView;
