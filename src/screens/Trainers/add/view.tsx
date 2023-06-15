import { TrainersAddHooks } from "./hooks";
import { Container } from "./style";

const TrainersAddView = () => {
  const { state, setState } = TrainersAddHooks();

  return (
    <Container>
      <h1>TrainersAddView</h1>
    </Container>
  );
};

export default TrainersAddView;
