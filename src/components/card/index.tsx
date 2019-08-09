import * as React from 'react';

// module
import { Card as RCard, CardProps, CardHeader, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';

// component
import { Spinner } from '../';

interface IProps extends CardProps {
  header?: string;
  title?: string;
  footer?: string;
  busy?: boolean;
  className?: string;
  ['data-testid']?: string;
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

  return (
    <RCard
      body={props.body}
      className={props.className}
      data-testid={props['data-testid'] ? props['data-testid'] : null}
    >
      {props.header !== '' ? <CardHeader>{props.header}</CardHeader> : null}
      {props.busy ? showIcon : showBodyCard}
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

export default React.memo(Card);
