import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Col } from 'reactstrap';

// component
import { Button, Card, Input, Form } from '../../components';
import { IProps } from './';

import { version } from '../../../package.json';

// Interface state
export interface IState {
  busy: boolean;
  username: string;
  password: string;
}

export class Login extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      busy: false,
      username: '',
      password: ''
    };
  }

  authUser(username: string, password: string): void {
    this.setState({ busy: true });
    this.props.userAuth(username, password);
  }

  render(): JSX.Element {
    return (
      <Col md="12" lg="6" className="mx-auto text-center">
        <Card header={I18n.t('pages.login.title', { version })}>
          <Form onSubmit={() => this.authUser(this.state.username, this.state.password)}>
            <Input
              type="email"
              value={this.state.username}
              onChange={(username: string) => this.setState({ username })}
              label={I18n.t('pages.login.username')}
            />
            <Input
              type="password"
              value={this.state.password}
              onChange={(password: string) => this.setState({ password })}
              label={I18n.t('pages.login.password')}
            />
            <Button
              type={'submit'}
              busy={this.state.busy}
              disabled={this.state.username === '' || this.state.password === ''}
            >
              {I18n.t('pages.login.button')}
            </Button>
          </Form>
        </Card>
      </Col>
    );
  }
}
