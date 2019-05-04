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
  loaderShow(): void;
  loaderHide(): void;
}

export interface IState { }

export class Loader extends React.PureComponent<IProps> {
  render(): JSX.Element {
    return (
      <Row className={styles.container}>
        <Col lg="12" className={styles.container_button}>
          <Button onClick={() => this.props.loaderShow()}>{I18n.t('pages.loader.show')}</Button>
          <Button onClick={() => this.props.loaderHide()}>{I18n.t('pages.loader.hide')}</Button>
        </Col>
      </Row>
    );
  }
}
