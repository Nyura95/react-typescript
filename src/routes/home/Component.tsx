import * as React from 'react';

// typing
import { RouteComponentProps } from 'react-router';

// module
import { Row, Col, Button } from 'reactstrap';

// sass import
import * as styles from './Styles.scss';

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
    push: () => {}
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      hello: 'Hello !'
    };
  }

  render() {
    return (
      <Row className={styles.container}>
        <Col lg="12" className={styles.container_button}>
          {this.state.hello}
        </Col>
        <Col lg="12" className={styles.container_button}>
          <Button onClick={() => this.setState({ hello: 'Hello world !' })} color="primary">
            Trigger state
          </Button>
        </Col>
        <Col lg="12" className={styles.container_button}>
          <Button onClick={() => this.props.push('/counter')} color="info">
            Go to counter
          </Button>
          <Button onClick={() => this.props.push('/translate')} color="info">
            Go to translate
          </Button>
        </Col>
      </Row>
    );
  }
}
