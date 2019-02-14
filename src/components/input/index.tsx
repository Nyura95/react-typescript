import * as React from 'react';

// Sass import
import * as styles from './styles.scss';

import { Input as RInput } from 'reactstrap';
import { InputType } from 'reactstrap/lib/Input';

// Interface props
export interface IProps {
  label: string;
  value: string;
  placeholder: string;
  disabled: boolean;
  type: InputType;
  onChange: Function;
}

export interface IState {
  value: string;
}

export class Input extends React.Component<IProps, IState> {
  private timeout: NodeJS.Timeout = setTimeout(() => { }, 0);
  static defaultProps: Partial<IProps> = {
    value: '',
    disabled: false,
    type: 'text',
    onChange: () => { }
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  onClickHandler(value: string) {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.props.onChange(value), 200);
    this.setState({ value });
  }

  componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  render() {
    return (
      <RInput
        type={this.props.type}
        className={styles.input}
        value={this.state.value}
        placeholder={this.props.placeholder}
        onChange={(e: React.FormEvent<HTMLInputElement>) => this.onClickHandler(e.currentTarget.value)}
      />
    );
  }
}
