import * as React from 'react';

// modules
import { Row, Col } from 'reactstrap';
import { RouteComponentProps } from 'react-router';

// style
import * as styles from './styles.scss';

import { Button, Input } from '../../components';

const uri = 'ws://127.0.0.1:3001';

const Home: IHook<RouteComponentProps> = () => {
  const [messages, setMessages] = React.useState<string[]>([]); // http://localhost:3000/api/v1/conversation/18
  const [message, setMessage] = React.useState<string>('');

  const webSocket = React.useMemo(() => {
    const webSocket = new WebSocket(uri);
    webSocket.onopen = () => {
      webSocket.send(
        JSON.stringify({
          token: 'vTMGcVAE5EBwxqAVv1SPvfs_tao=',
          id: 2588,
          action: 'onload'
        })
      );
    };

    webSocket.onmessage = event => {
      setMessages([...messages, event.data]);
    };

    return webSocket;
  }, []);

  React.useEffect(() => {
    return () => {
      webSocket.close();
    };
  }, []);

  const sendMessage = React.useCallback(
    (message: string) => () => {
      webSocket.send(
        JSON.stringify({
          action: 'send',
          message: message
        })
      );
      setMessage('');
    },
    []
  );

  return (
    <Row className={styles.container}>
      <Col lg="12" className={styles.container_button}>
        <Input type="text" value={message} onChange={message => setMessage(message)} />
        <Button.Rectangle onClick={sendMessage(message)}>Envoyer</Button.Rectangle>
      </Col>
    </Row>
  );
};

Home.defaultProps = {};

export default Home;
