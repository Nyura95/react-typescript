import * as React from 'react';

interface IPropsCatchComponent {
  error?: Error;
  info?: React.ErrorInfo;
}

export type ICatchComponent = React.FunctionComponent<IPropsCatchComponent> | React.Component<IPropsCatchComponent>;

interface IProps {
  catchComponent: (error?: Error, info?: React.ErrorInfo) => React.ReactNode;
}
interface IState extends IPropsCatchComponent {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ hasError: true, error, info });
  }

  render() {
    if (this.state.hasError) {
      return this.props.catchComponent(this.state.error, this.state.info);
    }
    return this.props.children;
  }
}
