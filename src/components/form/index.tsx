import * as React from 'react';

// module
import { Form as RForm, FormProps } from 'reactstrap';

export interface IProps extends FormProps {
  preventDefault?: boolean;
}

interface IState { }

export class Form extends React.Component<IProps, IState> {
  static defaultProps = {
    onSubmit: () => { },
    preventDefault: false
  };

  onSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (!this.props.preventDefault) {
      event.preventDefault();
    }
    if (this.props.onSubmit) {
      this.props.onSubmit(event);
    }
  }

  render(): JSX.Element {
    return (
      <RForm
        classame={this.props.className}
        onSubmit={(event) => this.onSubmit(event)}
      >
        {this.props.children}
      </RForm>
    );
  }
}
