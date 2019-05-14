import * as React from 'react';

// modules
import { Row, Col } from 'reactstrap';

// component
import { IProps } from './';

// style
import * as styles from './styles.scss';
import { I18n } from 'react-redux-i18n';

export interface IState {
  busy: boolean;
}

export class Home extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      busy: false
    };
  }

  render(): JSX.Element {
    return (
      <Row className={styles.container}>
        <Col lg="12" className={styles.container_button}>
          {I18n.t('pages.home.hello', { username: this.props.username })}
        </Col>
      </Row>
    );
  }
}
