import * as React from 'react';
import { Row } from 'reactstrap';
import { RouteComponentProps } from 'react-router';

import { Button } from '../../components';

import * as styles from './styles.scss';

export interface IProps extends RouteComponentProps {
  userAuth(username: string, password: string): void;
}

// Interface state
export interface IState {
  busy: boolean;
}

export class Login extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      busy: false
    };
  }

  authUser(username: string, password: string): void {
    this.setState({ busy: true });
    this.props.userAuth(username, password);
  }

  render(): JSX.Element {
    return (
      <Row className={styles.container}>
        <Button busy={this.state.busy} onClick={() => this.authUser('jean@example.com', 'password')}>
          Connect
        </Button>
      </Row>
    );
  }
}
