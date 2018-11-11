import * as React from 'react';

// Type
import { RouteComponentProps } from 'react-router';

// Module
import { Button } from '../../components';
import { Row, Col } from 'reactstrap';

// Sass import
import * as styles from './styles.scss';

// Interface props
export interface IProps extends RouteComponentProps {}

// Interface state
interface IState {
  hello: string;
}

export default class Home extends React.Component<IProps, IState> {
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
      </Row>
    );
  }
}
