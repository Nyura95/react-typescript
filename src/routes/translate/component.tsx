import * as React from 'react';

import { RouteComponentProps } from 'react-router';
import { Row, Col } from 'reactstrap';
import { I18n } from 'react-redux-i18n';

import { Button } from '../../components';

import * as styles from './styles.scss';

export interface IProps extends RouteComponentProps {
  setLocale(lang: string): void;
  getTranslate(): string;
  locale: string;
}

export interface IState {}

export default class Translate extends React.Component<IProps, IState> {
  render() {
    return (
      <Row className={styles.container}>
        <Col lg="12" className={styles.container_button}>
          {I18n.t('translate', { lang: this.props.locale })}
        </Col>
        <Col lg="12" className={styles.container_button}>
          <Button onClick={() => this.props.setLocale(this.props.getTranslate() === 'fr' ? 'en' : 'fr')} color="info">
            translate
          </Button>
        </Col>
      </Row>
    );
  }
}
