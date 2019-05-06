import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { RouteComponentProps } from 'react-router';
import { Row, Col } from 'reactstrap';

// component
import { Button, Animated } from '../../components';

// style
import * as styles from './styles.scss';

// interface props
export interface IProps extends RouteComponentProps {}

export interface IState {
  animate: string;
}

export default class Animate extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      animate: 'Hello'
    };
  }

  render(): JSX.Element {
    return (
      <Row className={styles.container}>
        <Col lg="12" className={styles.container_button}>
          <Button onClick={() => this.forceUpdate()}>Trigger</Button>
        </Col>
        <Col lg="12" className={styles.container_animate}>
          <Animated timeout={1000} animateIn="zoomIn" animateOut="zoomOut">
            <div className={styles.block} />
          </Animated>
        </Col>
      </Row>
    );
  }
}
