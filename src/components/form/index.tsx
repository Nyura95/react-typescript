import * as React from 'react';

// module
import { Form as RForm, FormProps } from 'reactstrap';

interface IProps extends FormProps {
  ['data-testid']?: string;
}

const Form: IHook<IProps> = props => {
  const submit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (props.onSubmit) {
        props.onSubmit(event);
      }
    },
    [props.onSubmit]
  );

  return (
    <RForm
      className={props.className}
      onSubmit={submit}
      data-testid={props['data-testid'] ? props['data-testid'] : null}
    >
      {props.children}
    </RForm>
  );
};

Form.defaultProps = {
  onSubmit: () => {}
};

export default Form;
