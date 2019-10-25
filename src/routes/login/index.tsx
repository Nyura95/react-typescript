import * as React from 'react';

// modules
import { useTranslation } from 'react-i18next';
import { Col } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';

// component
import { Button, Card, Input, Form } from '../../components';

import { version } from '../../../package.json';
import { userAuthenticate } from '../../actions';
import { UserDispatch } from '../../reducers';

const Login: IHook<RouteComponentProps> = () => {
  const dispatch = useDispatch<UserDispatch>();
  const { t } = useTranslation();

  const [busy, setBusy] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>('example@example.com');
  const [password, setPassword] = React.useState<string>('azerty');

  const authUser = React.useCallback((username: string, password: string): void => {
    setBusy(true);
    dispatch(userAuthenticate(username, password));
  }, []);

  return (
    <Col md="12" lg="6" className="mx-auto text-center">
      <Card header={t('pages.login.title', { version })}>
        <Form onSubmit={() => authUser(username, password)}>
          <Input
            type="email"
            value={username}
            onChange={(username: string) => setUsername(username)}
            label={t('pages.login.username')}
            data-testid="username"
          />
          <Input
            type="password"
            value={password}
            onChange={(password: string) => setPassword(password)}
            label={t('pages.login.password')}
            data-testid="password"
          />
          <Button.Rectangle type={'submit'} busy={busy} disabled={username === '' || password === ''}>
            {t('pages.login.button')}
          </Button.Rectangle>
        </Form>
      </Card>
    </Col>
  );
};

Login.defaultProps = {};

export default Login;
