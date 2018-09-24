import * as React from 'react';

// typing
import { RouteComponentProps } from 'react-router';

// module
import { Row, Col, Button } from 'reactstrap';
import { I18n } from 'react-redux-i18n';

// sass import
import * as styles from './styles.scss';

// interface props
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
    locale: '',
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
