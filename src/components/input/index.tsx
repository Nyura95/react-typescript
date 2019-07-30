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
  onChange: (value: string) => void;
  valid?: boolean;
  invalid?: boolean;
  formText?: string;
  formFeedback?: string;
  plaintext?: boolean;
  busy?: boolean;
  ['data-testid']?: string;
}

const Input: IHook<IProps> = props => {
  const [value, setValue] = React.useState<string>(props.value);

  const onClickHandler = React.useCallback((event: React.FormEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value);
    props.onChange(event.currentTarget.value);
  }, []);

  React.useEffect(() => setValue(props.value), [props.value]);

  return (
    <FormGroup>
      {props.label !== '' ? <Label>{props.label}</Label> : null}
      <RInput
        type={props.type}
        className={styles.input}
        value={value}
        placeholder={props.placeholder}
        onChange={onClickHandler}
        valid={props.valid}
        invalid={props.invalid}
        plaintext={props.plaintext}
        disabled={props.busy}
        data-testid={props['data-testid'] ? props['data-testid'] : null}
      />
      {props.formFeedback !== '' ? <FormFeedback valid={props.valid}>{props.formFeedback}</FormFeedback> : null}
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
};

export default Input;
