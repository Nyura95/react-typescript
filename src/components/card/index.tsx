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

const Card: IHook<IProps> = props => {
  const showIcon = React.useMemo(
    (): JSX.Element => (
      <CardBody className="text-center">
        <Spinner size="lg" type="grow" />
      </CardBody>
    ),
    []
  );

  const showBodyCard = React.useMemo(
    (): JSX.Element => (
      <CardBody>
        {props.title !== '' ? <CardTitle>{props.title}</CardTitle> : null}
        <CardText tag="div">{props.children}</CardText>
        {props.footer !== '' ? <CardFooter>{props.footer}</CardFooter> : null}
      </CardBody>
    ),
    [props.title, props.footer, props.children]
  );

  return React.useMemo(
    () => (
      <RCard body={props.body} className={props.className}>
        {props.header !== '' ? <CardHeader>{props.header}</CardHeader> : null}
        {props.busy ? showIcon : showBodyCard}
      </RCard>
    ),
    [props.body, props.header, props.busy]
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
