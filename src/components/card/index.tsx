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
  className?: string;
}

const Card: React.FunctionComponent<IProps> = (props) => {
  const showIcon = (): JSX.Element => {
    return (
      <CardBody className="text-center">
        <Spinner size="lg" type="grow" />
      </CardBody>
    );
  };
  const showCard = (): JSX.Element => {
    return (
      <CardBody>
        {props.title !== '' ? <CardTitle>{props.title}</CardTitle> : null}
        <CardText tag="div">{props.children}</CardText>
        {props.footer !== '' ? <CardFooter>{props.footer}</CardFooter> : null}
      </CardBody>
    );
  }
  return (
    <RCard body={props.body} className={props.className}>
      {props.header !== '' ? <CardHeader>{props.header}</CardHeader> : null}
      {props.busy ? showIcon() : showCard()}
    </RCard>
  );
};

Card.defaultProps = {
  header: '',
  title: '',
  footer: '',
  busy: false,
  className: ''
};

export default Card;