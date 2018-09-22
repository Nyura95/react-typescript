import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as styles from './styles.scss';

import { Container } from 'reactstrap';

export interface IProps extends RouteComponentProps<any> {
  children: any;
}

export default class Layout extends React.Component<IProps> {
  static defaultProps = {};

  render() {
    return <Container>test</Container>;
  }
}
