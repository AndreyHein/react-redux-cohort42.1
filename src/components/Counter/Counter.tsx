import Button from "components/Button/Button";

import { CounterProps } from "./types";
import { Count, CounterWrapper, ButtonControl } from "./styles";

function Counter({ count, onMinus, onPlus }: CounterProps) {

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count className="count">{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;