import * as React from 'react';

// modules
import { Row, Col } from 'reactstrap';
import { RouteComponentProps } from 'react-router';

// style
import * as styles from './styles.scss';

import { Button, Input } from '../../components';
import { fetch } from '../../api';

const uri = 'ws://127.0.0.1:3001';

interface IMessage {
  IDMessage: number;
  IDUser: number;
  IDConversation: number;
  Message: string;
  IDStatus: number;
  CreatedAt: string;
  UpdatedAt: string;
}

interface IConversation {
  Messages: IMessage[];
}

const Home: IHook<RouteComponentProps> = () => {
  const [messages, setMessages] = React.useState<IMessage[]>([]); // http://localhost:3000/api/v1/conversation/18
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
    fetch<IConversation>('/v1/conversation/18').then(result => {
      setMessages(result.Data.Messages);
    });
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
      {messages.map((message, key) => (
        <Col key={key} lg="12" className={styles.container_button}>
          {message.Message}
        </Col>
      ))}
      <Col lg="12" className={styles.container_button}>
        <Input type="text" value={message} onChange={message => setMessage(message)} />
        <Button.Rectangle onClick={sendMessage(message)}>Envoyer</Button.Rectangle>
      </Col>
    </Row>
  );
};

Home.defaultProps = {};

export default Home;
