import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Col } from 'reactstrap';

// component
import { Button, Card, Input, Form } from '../../components';
import { IProps } from './';

import { version } from '../../../package.json';

const Login: IHook<IProps> = ({ userAuth }) => {
  const [busy, setBusy] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const authUser = (username: string, password: string): void => {
    setBusy(true);
    userAuth(username, password);
  };

  return (
    <Col md="12" lg="6" className="mx-auto text-center">
      <Card header={I18n.t('pages.login.title', { version })}>
        <Form onSubmit={() => authUser(username, password)}>
          <Input
            type="email"
            value={username}
            onChange={(username: string) => setUsername(username)}
            label={I18n.t('pages.login.username')}
          />
          <Input
            type="password"
            value={password}
            onChange={(password: string) => setPassword(password)}
            label={I18n.t('pages.login.password')}
          />
          <Button
            type={'submit'}
            busy={busy}
            disabled={username === '' || password === ''}
          >
            {I18n.t('pages.login.button')}
          </Button>
        </Form>
      </Card>
    </Col>
  );
};

Login.defaultProps = {};

export default Login;