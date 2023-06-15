import { TrainersEditHooks } from "./hooks";
import { Container } from "./style";

const TrainersEditView = () => {
  const { state, setState } = TrainersEditHooks();

  return (
    <Container>
      <h1>TrainersEditView</h1>
    </Container>
  );
};

export default TrainersEditView;
