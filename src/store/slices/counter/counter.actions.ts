import { CounterState } from "./counterSlice";

export function increment(state: CounterState) {
  return {
    ...state,
    value: state.value++
  }
}

export function decrement(state: CounterState) {
  return {
    ...state,
    value: state.value--
  }
}