import { IRadioButton } from "../interfaces/IRadioButton";
import { RadioContainer, RadioInput, ButtonLabel } from "./styled";

const RadioButton: React.FC<IRadioButton> = ({
  text,
  onChange,
  name,
  type,
  checked,
  value,
}) => {
  return (
    <ButtonLabel>
      {text}

      <RadioInput
        onChange={onChange}
        name={name}
        type={type}
        checked={checked}
        value={value}
      />
    </ButtonLabel>
  );
};

export default RadioButton;
