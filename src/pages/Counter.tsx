import { Button } from "@/components/ui/Button";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { decrement, increment } from "@/store/slices/counter/counterSlice";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const incCounter = () => dispatch(increment());
  const decCounter = () => dispatch(decrement());

  return (
    <>
      <div>Counter</div>
      <Button onClick={incCounter}>+</Button>
      <h2>{count}</h2>
      <Button onClick={decCounter}>-</Button>
    </>
  );
};

export default Counter;
