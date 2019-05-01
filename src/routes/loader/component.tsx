import * as React from 'react';

import { RouteComponentProps } from 'react-router';

import { Row, Col } from 'reactstrap';
import { Button } from '../../components';

import * as styles from './styles.scss';

// interface props
export interface IProps extends RouteComponentProps {
  loaderShow(): void;
  loaderHide(): void;
  loaderReset(): void;
}

export interface IState { }

export class Loader extends React.PureComponent<IProps> {
  render(): JSX.Element {
    return (
      <Row className={styles.container}>
        <Col lg="12" className={styles.container_button}>
          <Button onClick={() => this.props.loaderShow()}>Show</Button>
          <Button onClick={() => this.props.loaderHide()}>Hide</Button>
          <Button onClick={() => this.props.loaderReset()}>Reset</Button>
        </Col>
      </Row>
    );
  }
}
