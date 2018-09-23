import * as React from 'react';

// typing
import { RouteComponentProps } from 'react-router';

// design module
import { Row, Col, Button } from 'reactstrap';

// sass import
import * as styles from './styles.scss';

// interface props
export interface Props extends RouteComponentProps<any> {
  push(to: string): void;
}

export default class Home extends React.Component<Props> {
  // default props
  static defaultProps = {
    increment: () => {},
    push: () => {},
    AsyncIncrement: () => {},
    resetCounter: () => {},
    counter: 0,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      autoInscrement: 1,
    };
  }

  render() {
    return (
      <Row className={styles.container}>
        <Col className={styles.container_button}>
          <Button onClick={() => this.props.push('/counter')} color="info">
            Go to counter
          </Button>
        </Col>
      </Row>
    );
  }
}
