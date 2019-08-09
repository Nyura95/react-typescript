import * as React from 'react';

export interface IPropsCatchComponent {
  error?: Error;
  info?: React.ErrorInfo;
  retriveal?: Function;
}

export type ICatchComponent = React.FunctionComponent<IPropsCatchComponent> | React.Component<IPropsCatchComponent>;

interface IProps {
  catchComponent: (props: IPropsCatchComponent) => React.ReactNode;
}
interface IState extends IPropsCatchComponent {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false, error: undefined, info: undefined };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ hasError: true, error, info });
  }

  retriveal() {
    this.setState({ hasError: false, error: undefined, info: undefined });
  }

  render() {
    if (this.state.hasError) {
      return this.props.catchComponent({
        error: this.state.error,
        info: this.state.info,
        retriveal: () => this.retriveal()
      });
    }
    return this.props.children;
  }
}
