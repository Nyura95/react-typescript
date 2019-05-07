import { connect } from 'react-redux';

import { Notification } from './component';
import { notificationShow } from '../../actions';
import { IOptionReactNotificationComponent } from '../../types';
import { RouteComponentProps } from 'react-router';

interface IComponentProps extends RouteComponentProps {}

interface IStateProps {}

const mapStateToProps = (): IStateProps => ({});

interface IDispatchProps {
  notificationShow(option: IOptionReactNotificationComponent): void;
}

const mapDispatchToProps = (): IDispatchProps => {
  return {
    notificationShow: (option: IOptionReactNotificationComponent): void => notificationShow(option)
  };
};

export type IProps = IComponentProps & IStateProps & IDispatchProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
