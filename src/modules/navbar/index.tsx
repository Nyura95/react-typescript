import * as React from 'react';

// module
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

// style
import * as styles from './styles.scss';
import { RouterPush, userDisconnect } from '../../actions';
import { RouterDispatch, UserDispatch } from '../../reducers';
import { joinClass } from '../../helpers/general';
import { Icon } from '../../components';

const Navbar: IHook = () => {
  const dispatch = useDispatch<UserDispatch & RouterDispatch>();
  const { t } = useTranslation();
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
          {t('nav.page1')}
        </div>
        <div className={styles.item} onClick={() => push('/counter')}>
          {t('nav.page2')}
        </div>
        <div className={styles.item} onClick={() => push('/translate')}>
          {t('nav.page3')}
        </div>
        <div className={styles.item} onClick={() => push('/notification')}>
          {t('nav.page4')}
        </div>
        <div className={styles.item} onClick={() => push('/loader')}>
          {t('nav.page5')}
        </div>
        <div className={styles.item} onClick={() => push('/component')}>
          {t('nav.page6')}
        </div>
        <div className={styles.item} onClick={() => push('/fetch')}>
          {t('nav.page7')}
        </div>
        <div className={joinClass(styles.item, 'd-lg-none d-block')} onClick={disconnect}>
          {t('nav.disconnect')}
        </div>
      </>
    );
  }, [t]);

  return (
    <div className={styles.container}>
      <div className={styles.container_navigation}>
        <div className={styles.title}>{t('nav.title')}</div>
        <div className={joinClass(styles.navigation, 'd-none d-lg-flex')}>{items}</div>
        <div className={joinClass(styles.right_navigation, 'd-none d-lg-flex')} onClick={disconnect}>
          {t('nav.disconnect')}
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
