import * as React from 'react';

// Type
import { RouteComponentProps } from 'react-router';

// Modules
import { Button } from '../../components';
import { Row, Col } from 'reactstrap';
import { I18n } from 'react-redux-i18n';

// Sass import
import * as styles from './styles.scss';

// Interface props
export interface IProps extends RouteComponentProps {
  setLocale(lang: string): void;
  locale: string;
}

export default class Translate extends React.Component<IProps> {
  render() {
    console.log('t');
    return (
      <Row className={styles.container}>
        <Col lg="12" className={styles.container_button}>
          {I18n.t('translate', { lang: this.props.locale })}
        </Col>
        <Col lg="12" className={styles.container_button}>
          <Button onClick={() => this.props.setLocale('fr')} color="info">
            translate
          </Button>
        </Col>
      </Row>
    );
  }
}
