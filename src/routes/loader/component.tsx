import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Row, Col, Label } from 'reactstrap';

// component
import { Button, Card } from '../../components';
import { IProps } from './';

// style
import * as styles from './styles.scss';

export interface IState {}

export class Loader extends React.Component<IProps> {
  startLoadScreen(): void {
    this.props.loadScreenShow(I18n.t('pages.loader.loadscreentext'));
    setTimeout(() => this.props.loadScreenHide(), 3000);
  }
  render(): JSX.Element {
    return (
      <Row className={styles.container}>
        <Col lg={12}>
          <Card header={I18n.t('pages.loader.loadbar')} className={styles.card}>
            <Button onClick={() => this.props.loaderShow()}>{I18n.t('pages.loader.show')}</Button>
            <Button onClick={() => this.props.loaderHide()}>{I18n.t('pages.loader.hide')}</Button>
          </Card>
        </Col>
        <Col lg={12}>
          <Card header={I18n.t('pages.loader.loadscreen')} className={styles.card}>
            <Button onClick={() => this.startLoadScreen()}>{I18n.t('pages.loader.show')}</Button>
          </Card>
        </Col>
      </Row>
    );
  }
}
