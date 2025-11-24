import Button from "../Button";
import { increment,decrement,reset } from "../../actions";
import { useDispatch } from "react-redux";

const ChangeData = () => {

    const dispatch= useDispatch();
  return (
    <div>
      <Button type="button" onClick={ () => dispatch(increment(10))} title="Increment" />
      <Button type="button" onClick={ () => dispatch(decrement(5))} title="Decrement" />
      <Button type="button" onClick={ () => dispatch(reset(2))} title="Reset" />
    </div>
  );
};

export default ChangeData;
