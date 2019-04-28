import { ComponentClass } from 'react';
import { connect, Matching } from 'react-redux';

import { Notification, IProps, IState } from './component';
import { notificationShow } from '../../actions';
import { IOptionReactNotificationComponent } from '../../types';

const mapStateToProps = (): Partial<IProps> => ({});

const mapDispatchToProps = (): Partial<IProps> => {
  return {
    notificationShow: (option: IOptionReactNotificationComponent): void => notificationShow(option)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification as ComponentClass<Matching<Partial<IProps>, IProps>, IState>);
