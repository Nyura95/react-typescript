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

const Animate: IHook<IProps> = () => {
  let animeOut: Function = () => { };
  let animeIn: Function = () => { };
  let anime: Function = () => { };

  return (
    <Row className={styles.container}>
      <Col lg="12" className={styles.container_button}>
        <Button.Standar onClick={() => animeIn()}>{I18n.t('pages.animate.triggerIn')}</Button.Standar>
        <Button.Standar onClick={() => animeOut()}>{I18n.t('pages.animate.triggerOut')}</Button.Standar>
        <Button.Standar onClick={() => anime()}>{I18n.t('pages.animate.trigger')}</Button.Standar>
      </Col>
      <Col lg="12" className={styles.container_animate}>
        <Animated
          timeout={1000}
          animateIn="zoomIn"
          animateOut="zoomOut"
          triggerOut={event => (animeOut = event)}
          triggerIn={event => (animeIn = event)}
          trigger={event => (anime = event)}
          type="children"
        >
          <div className={styles.block} />
        </Animated>
      </Col>
    </Row>
  );
};

Animate.defaultProps = {};

export default Animate;
