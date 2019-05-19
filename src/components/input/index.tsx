import * as React from 'react';

// module
import { Input as RInput, FormGroup, Label, FormText, FormFeedback } from 'reactstrap';
import { InputType } from 'reactstrap/lib/Input';

// Sass import
import * as styles from './styles.scss';

// Interface props
export interface IProps {
  label?: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  type: InputType;
  onChange: Function;
  valid?: boolean;
  invalid?: boolean;
  formText?: string;
  formFeedback?: string;
  plaintext?: boolean;
  busy?: boolean;
}

export interface IState {
  value: string;
}


const Input: React.FunctionComponent<IProps> = (props) => {
  const [value, setValue] = React.useState<string>(props.value)

  const onClickHandler = (inpuValue: string): void => {
    setValue(inpuValue);
    props.onChange(inpuValue);
  }

  React.useEffect(() => { }, [props.value])

  return (
    <FormGroup>
      {props.label !== '' ? <Label>{props.label}</Label> : null}
      <RInput
        type={props.type}
        className={styles.input}
        value={value}
        placeholder={props.placeholder}
        onChange={(e: React.FormEvent<HTMLInputElement>) => onClickHandler(e.currentTarget.value)}
        valid={props.valid}
        invalid={props.invalid}
        plaintext={props.plaintext}
        disabled={props.busy}
      />
      {props.formFeedback !== '' ? (
        <FormFeedback valid={props.valid}>{props.formFeedback}</FormFeedback>
      ) : null}
      {props.formText !== '' ? <FormText>{props.formText}</FormText> : null}
    </FormGroup>
  );
};

Input.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
  valid: false,
  invalid: false,
  formText: '',
  formFeedback: '',
  plaintext: false,
  busy: false
}

export default Input;