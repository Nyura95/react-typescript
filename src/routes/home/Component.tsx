import * as React from 'react';

// Type
import { RouteComponentProps } from 'react-router';

// Module
import { Button } from '../../components';
import { Row, Col } from 'reactstrap';

// Sass import
import * as styles from './styles.scss';

// Interface props
export interface IProps extends RouteComponentProps {
  push(to: string): void;
}

// Interface state
interface State {
  hello: string;
}

export default class Home extends React.Component<IProps, State> {
  constructor(props: IProps) {
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
