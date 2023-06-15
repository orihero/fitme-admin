import { TrainersReadHooks } from "./hooks";
import { Container } from "./style";

const TrainersReadView = () => {
  const { state, setState } = TrainersReadHooks();

  return (
    <Container>
      <h1>TrainersReadView</h1>
    </Container>
  );
};

export default TrainersReadView;
