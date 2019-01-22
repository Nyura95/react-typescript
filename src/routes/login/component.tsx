import * as React from 'react';

// Type
import { RouteComponentProps } from 'react-router';

// Module
import { Row } from 'reactstrap';
import { Button } from '../../components';

// Sass import
import * as styles from './styles.scss';

// Interface props
export interface IProps extends RouteComponentProps {
  authUser(username: string, password: string): void;
}

// Interface state
interface IState {
  busy: boolean;
}

export default class Login extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      busy: false
    };
  }

  authUser(username: string, password: string) {
    this.setState({
      busy: true
    });
    this.props.authUser(username, password);
  }

  render() {
    return (
      <Row className={styles.container}>
        <Button busy={this.state.busy} onClick={() => this.authUser('jean@example.com', 'password')}>
          Connect
        </Button>
      </Row>
    );
  }
}
