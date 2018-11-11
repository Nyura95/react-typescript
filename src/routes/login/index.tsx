import * as React from 'react';

// Type
import { RouteComponentProps } from 'react-router';

// Module
import { Row, Col } from 'reactstrap';

// Sass import
import * as styles from './styles.scss';

// Interface props
export interface IProps extends RouteComponentProps {}

// Interface state
interface IState {}

export default class Login extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <Row className={styles.container}>
        <Col lg="12" className={styles.container_button}>
          bonjour
        </Col>
      </Row>
    );
  }
}
