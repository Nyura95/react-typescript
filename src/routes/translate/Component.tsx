import * as React from 'react';

// Type
import { RouteComponentProps } from 'react-router';

// Modules
import { Row, Col, Button } from 'reactstrap';
import { I18n } from 'react-redux-i18n';

// Sass import
import * as styles from './Styles.scss';

// Interface props
export interface Props extends RouteComponentProps {
  goBack(): void;
  setLocale(lang: string): void;
  locale: string;
}

export default class Translate extends React.Component<Props> {
  // default props
  static defaultProps = {
    goBack: () => {},
    setLocale: () => {},
    locale: ''
  };

  render() {
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
        <Col lg="12" className={styles.container_button}>
          <Button onClick={() => this.props.goBack()} color="info">
            Back
          </Button>
        </Col>
      </Row>
    );
  }
}
