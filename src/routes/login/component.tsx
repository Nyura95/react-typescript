import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Col } from 'reactstrap';
import { RouteComponentProps } from 'react-router';

// component
import { Button, Card } from '../../components';

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
      <Col lg='3' className='mx-auto text-center'>
        <Card title={I18n.t('pages.login.title')}>
          <Button busy={this.state.busy} onClick={() => this.authUser('jean@example.com', 'password')}>
            {I18n.t('pages.login.button')}
          </Button>
        </Card>
      </Col>
    );
  }
}
