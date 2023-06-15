import { UsersEditHooks } from "./hooks";
import { Container } from "./style";

const UsersEditView = () => {
  const { state, setState } = UsersEditHooks();

  return (
    <Container>
      <h1>UsersEditView</h1>
    </Container>
  );
};

export default UsersEditView;
