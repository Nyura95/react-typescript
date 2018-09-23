import * as React from 'react';

// typing
import { RouteComponentProps } from 'react-router';

// design module
import { Row, Col, Button } from 'reactstrap';
// i18n
import { I18n } from 'react-redux-i18n';

// sass import
import * as styles from './styles.scss';

// interface props
export interface Props extends RouteComponentProps {
  push(to: string): void;
}

// interface state
interface State {
  hello: string;
}

export default class Home extends React.Component<Props, State> {
  // default props
  static defaultProps = {
    push: () => {},
    counter: 0,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      hello: 'Hello !',
    };
  }

  render() {
    return (
      <Row className={styles.container}>
        <Col lg="12" className={styles.container_button}>
          {this.state.hello} {I18n.t('hello')}
        </Col>
        <Col lg="12" className={styles.container_button}>
          <Button onClick={() => this.setState({ hello: 'Hello world !' })} color="primary">
            Trigger state
          </Button>
          <Button onClick={() => this.props.push('/counter')} color="info">
            Go to counter
          </Button>
        </Col>
      </Row>
    );
  }
}
