import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { RouteComponentProps } from 'react-router';
import { Row, Col } from 'reactstrap';

// component
import { Button } from '../../components';

// style
import * as styles from './styles.scss';

// interface props
export interface IProps extends RouteComponentProps {
  counterSet(counter: number): void;
  counterAsyncSet(counter: number): void;
  counterReset(): void;
  counter: number;
}

export interface IState { }

export class Counter extends React.PureComponent<IProps> {
  render(): JSX.Element {
    return (
      <Row className={styles.container}>
        <Col lg="12" className={styles.container_button}>
          {I18n.t('pages.counter.count', { counter: this.props.counter })}
        </Col>
        <Col lg="12" className={styles.container_button}>
          <Button onClick={() => this.props.counterSet(1)} color="primary">
            {I18n.t('pages.counter.increment')}
          </Button>
          <Button onClick={() => this.props.counterSet(-1)}>{I18n.t('pages.counter.decrement')}</Button>
          <Button onClick={() => this.props.counterAsyncSet(1)} color="warning">
            {I18n.t('pages.counter.async')}
          </Button>
        </Col>
        <Col lg="12" className={styles.container_button}>
          <Button onClick={() => this.props.counterReset()}>{I18n.t('pages.counter.reset')}</Button>
        </Col>
      </Row>
    );
  }
}
