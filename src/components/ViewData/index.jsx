import { useSelector } from "react-redux";

const ViewData = () => {
    const count = useSelector((state) => state.counter);

  return (
    <div>
        <p>The count is: {count}</p>
    </div>
  )
}

export default ViewData;