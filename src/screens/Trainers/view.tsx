import { Outlet } from "react-router-dom";
import { TrainersHooks } from "./hooks";
import { Container, Main } from "./style";

const TrainersView = () => {
  const { show } = TrainersHooks();

  return (
    <Container>
      {!!show && (
        <Main>
          <h1>{"TrainersView"}</h1>
        </Main>
      )}

      <Outlet />
    </Container>
  );
};

export default TrainersView;
