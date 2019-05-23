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

const Animate: IHook<IProps> = () => {
  let animeOut: Function = () => {};
  let animeIn: Function = () => {};
  let anime: Function = () => {};

  const [test, setTest] = React.useState('bonjour');

  return (
    <Row className={styles.container}>
      <Col lg="12" className={styles.container_button}>
        <Button onClick={() => animeIn()}>{I18n.t('pages.animate.triggerIn')}</Button>
        <Button onClick={() => animeOut()}>{I18n.t('pages.animate.triggerOut')}</Button>
        <Button onClick={() => anime()}>{I18n.t('pages.animate.trigger')}</Button>
      </Col>
      <Col lg="12" className={styles.container_animate}>
        <Animated
          timeout={5000}
          animateIn="zoomIn"
          animateOut="zoomOut"
          triggerOut={event => (animeOut = event)}
          triggerIn={event => (animeIn = event)}
          trigger={event => (anime = event)}
          type="children"
        >
          <div className={styles.block} onClick={() => setTest('lol')}>
            {test}
          </div>
        </Animated>
      </Col>
    </Row>
  );
};

Animate.defaultProps = {};

export default Animate;
