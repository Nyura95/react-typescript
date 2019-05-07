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
export interface IProps extends RouteComponentProps { }

export interface IState {
  animate: string;
}

export default class Animate extends React.Component<IProps, IState> {
  private animeOut: Function = () => { };
  private animeIn: Function = () => { };
  private anime: Function = () => { };

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
          <Button onClick={() => this.animeIn()}>{I18n.t('pages.animate.triggerIn')}</Button>
          <Button onClick={() => this.animeOut()}>{I18n.t('pages.animate.triggerOut')}</Button>
          <Button onClick={() => this.anime()}>{I18n.t('pages.animate.trigger')}</Button>
        </Col>
        <Col lg="12" className={styles.container_animate}>
          <Animated
            timeout={1000}
            animateIn="zoomIn"
            animateOut="zoomOut"
            triggerOut={event => this.animeOut = event}
            triggerIn={event => this.animeIn = event}
            trigger={event => this.anime = event}
          >
            <div className={styles.block} />
          </Animated>
        </Col>
      </Row>
    );
  }
}
