import * as React from 'react';

// module
import { Card as RCard, CardProps, CardHeader, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';

// component
import { Spinner } from '../';

export interface IProps extends CardProps {
  header?: string;
  title?: string;
  footer?: string;
  busy?: boolean;
}

interface IState { }

export class Card extends React.Component<IProps, IState> {
  static defaultProps = {
    header: '',
    title: '',
    footer: '',
    busy: null
  };

  showIcon(): JSX.Element {
    return (
      <CardBody className='text-center'>
        <Spinner size='lg' type='grow' />
      </CardBody>);
  }

  showCard(): JSX.Element {
    return (
      <CardBody>
        {this.props.title !== '' ? (<CardTitle>{this.props.title}</CardTitle>) : null}
        <CardText>{this.props.children}</CardText>
        {this.props.footer !== '' ? (<CardFooter>{this.props.footer}</CardFooter>) : null}
      </CardBody>
    );
  }
  render(): JSX.Element {
    return (
      <RCard {...this.props} title=''>
        {this.props.header !== '' ? (<CardHeader>{this.props.header}</CardHeader>) : null}
        {this.props.busy ? this.showIcon() : this.showCard()}
      </RCard>
    );
  }
}
