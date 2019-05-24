import * as React from 'react';

// module
import { Form as RForm, FormProps } from 'reactstrap';

export interface IProps extends FormProps {
  preventDefault?: boolean;
}

const Form: IHook<IProps> = ({ className, children, onSubmit, preventDefault }) => {
  const submit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      if (!preventDefault) {
        event.preventDefault();
      }
      if (onSubmit) {
        onSubmit(event);
      }
    },
    [onSubmit]
  );

  return (
    <RForm classame={className} onSubmit={submit}>
      {children}
    </RForm>
  );
};

Form.defaultProps = {
  onSubmit: () => {},
  preventDefault: false
};

export default Form;
