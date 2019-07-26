import * as React from 'react';

// modules
import { Row, Col } from 'reactstrap';
import { RouteComponentProps } from 'react-router';

// style
import * as styles from './styles.scss';

import { Button, Input } from '../../components';
import { fetch } from '../../api';
import { AwiseSocket, IMessage } from './awiseSocket';

interface IConversation {
  Messages: IMessage[];
}

const Home: IHook<RouteComponentProps> = () => {
  const [messages, setMessages] = React.useState<IMessage[]>([]);
  const [message, setMessage] = React.useState<string>('');
  const [token, setToken] = React.useState<string>('');

  const awiseSocket = React.useMemo(() => {
    return new AwiseSocket('wss://messenger.awise.co');
  }, []);

  const init = React.useCallback(() => {
    awiseSocket.init().then(() => {
      awiseSocket.sendMessage('onload', JSON.stringify({ token }));
    });
  }, [token]);

  React.useEffect(() => {
    fetch<IConversation>('/v1/conversation/1').then(result => {
      setMessages(result.Data.Messages);
    });
    return () => {
      awiseSocket.close();
    };
  }, []);

  React.useEffect(() => {
    awiseSocket.onmessage = data => {
      switch (data.Action) {
        case 'newMessage':
          setMessages([...messages, data.Data as IMessage]);
          awiseSocket.sendMessage('onread', '');
          break;
        case 'Error':
          alert(data.Comment)
          break;
      }
    };
  }, [messages]);

  const sendMessage = React.useCallback(
    (message: string) => () => {
      awiseSocket.sendMessage('send', JSON.stringify({ message }));
      setMessage('');
    },
    []
  );

  return (
    <Row className={styles.container}>
      <Col lg="12" className={styles.container_button}>
        <Input type="text" value={token} onChange={token => setToken(token)} />
        <Button.Rectangle onClick={init}>Envoyer</Button.Rectangle>
      </Col>
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
