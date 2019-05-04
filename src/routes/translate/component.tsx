import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { RouteComponentProps } from 'react-router';
import { Row, Col } from 'reactstrap';

// component
import { Button } from '../../components';

// style
import * as styles from './styles.scss';

export interface IProps extends RouteComponentProps {
  i18nSetLang(lang: string): void;
  i18nGetTranslate(): string;
  locale: string;
}

export interface IState { }

export class Translate extends React.Component<IProps, IState> {
  render(): JSX.Element {
    return (
      <Row className={styles.container}>
        <Col lg="12" className={styles.container_button}>
          {I18n.t('translate', { lang: this.props.locale })}
        </Col>
        <Col lg="12" className={styles.container_button}>
          <Button
            onClick={() => this.props.i18nSetLang(this.props.i18nGetTranslate() === 'fr' ? 'en' : 'fr')}
            color="info"
          >
            {I18n.t('pages.translate.button')}
          </Button>
        </Col>
      </Row>
    );
  }
}
