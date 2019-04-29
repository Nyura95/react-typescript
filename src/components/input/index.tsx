import * as React from 'react';

// Sass import
import * as styles from './styles.scss';

import { Input as RInput, FormGroup, Label, FormText, FormFeedback } from 'reactstrap';
import { InputType } from 'reactstrap/lib/Input';

// Interface props
export interface IProps {
  label: string;
  value: string;
  placeholder: string;
  disabled: boolean;
  type: InputType;
  onChange: Function;
  valid: boolean;
  invalid: boolean;
  formText: string;
  formFeedback: string;
}

export interface IState {
  value: string;
}

export class Input extends React.Component<IProps, IState> {
  static defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    valid: false,
    invalid: false,
    formText: '',
    formFeedback: ''
  };

  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  onClickHandler(value: string): void {
    this.props.onChange(value);
  }

  componentWillReceiveProps(nextProps: IProps): void {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  render(): JSX.Element {
    return (
      <FormGroup>
        {this.props.label !== '' ? <Label for="exampleEmail">{this.props.label}</Label> : null}
        <RInput
          type={this.props.type}
          className={styles.input}
          value={this.state.value}
          placeholder={this.props.placeholder}
          onChange={(e: React.FormEvent<HTMLInputElement>) => this.onClickHandler(e.currentTarget.value)}
          valid={this.props.valid}
          invalid={this.props.invalid}
        />
        {this.props.formFeedback !== '' ? (
          <FormFeedback valid={this.props.valid}>{this.props.formFeedback}</FormFeedback>
        ) : null}
        {this.props.formText !== '' ? <FormText>{this.props.formText}</FormText> : null}
      </FormGroup>
    );
  }
}
