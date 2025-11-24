import Button from "../Button";
import { increment, decrement, reset } from "../../actions";
import { useDispatch } from "react-redux";

const ChangeData = () => {

    const dispatch= useDispatch();
  return (
    <div>
      <Button type="button" onClick={ () => dispatch(increment())} title="Increment" />
      <Button type="button" onClick={ () => dispatch(decrement())} title="Decrement" />
      <Button type="button" onClick={ () => dispatch(reset())} title="Reset" />
    </div>
  );
};

export default ChangeData;
