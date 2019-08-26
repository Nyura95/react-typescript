import * as React from 'react';

// module
import { I18n } from 'react-redux-i18n';
import { useDispatch } from 'react-redux';

// style
import * as styles from './styles.scss';
import { RouterPush, userDisconnect } from '../../actions';
import { RouterDispatch, UserDispatch } from '../../reducers';
import { joinClass } from '../../helpers/general';
import { Icon } from '../../components';

const Navbar: IHook = () => {
  const dispatch = useDispatch<UserDispatch & RouterDispatch>();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const push = React.useCallback((to: string) => {
    dispatch(RouterPush(to));
    setIsOpen(false);
  }, []);

  const disconnect = React.useCallback(() => {
    dispatch(userDisconnect());
  }, []);

  const items = React.useMemo(() => {
    return (
      <>
        <div className={styles.item} onClick={() => push('/')}>
          {I18n.t('nav.page1')}
        </div>
        <div className={styles.item} onClick={() => push('/counter')}>
          {I18n.t('nav.page2')}
        </div>
        <div className={styles.item} onClick={() => push('/translate')}>
          {I18n.t('nav.page3')}
        </div>
        <div className={styles.item} onClick={() => push('/notification')}>
          {I18n.t('nav.page4')}
        </div>
        <div className={styles.item} onClick={() => push('/loader')}>
          {I18n.t('nav.page5')}
        </div>
        <div className={styles.item} onClick={() => push('/component')}>
          {I18n.t('nav.page6')}
        </div>
        <div className={joinClass(styles.item, 'd-lg-none d-block')} onClick={disconnect}>
          {I18n.t('nav.disconnect')}
        </div>
      </>
    );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container_navigation}>
        <div className={styles.title}>{I18n.t('nav.title')}</div>
        <div className={joinClass(styles.navigation, 'd-none d-lg-flex')}>{items}</div>
        <div className={joinClass(styles.right_navigation, 'd-none d-lg-flex')} onClick={disconnect}>
          {I18n.t('nav.disconnect')}
        </div>
        <div className={joinClass(styles.bars, 'd-inline-block d-lg-none')} onClick={() => setIsOpen(!isOpen)}>
          <Icon icon={'fa-bars'} className={styles.icon} />
        </div>
      </div>
      <div
        className={joinClass(
          styles.container_navigation_mobile,
          isOpen ? styles.show : styles.hide,
          'd-lg-none d-flex'
        )}
      >
        <div className={styles.scroll}>{items}</div>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  navigations: []
};

export default Navbar;
