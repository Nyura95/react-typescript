import * as React from 'react';

// module
import { I18n } from 'react-redux-i18n';
import { Navbar as NavbarReactStrap, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler } from 'reactstrap';
import { useDispatch } from 'react-redux';

// style
import * as styles from './styles.scss';
import { RouterPush, userDisconnect } from '../../actions';

const Navbar: IHook = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const push = React.useCallback(
    (to: string) => {
      dispatch(RouterPush(to));
    },
    [dispatch]
  );

  const disconnect = React.useCallback(() => {
    dispatch(userDisconnect());
  }, [dispatch]);

  return (
    <NavbarReactStrap dark={true} color={'dark'} expand="md">
      <NavbarBrand onClick={() => push('/')} color={'white'} className={styles.clickable} style={{ color: 'white' }}>
        {I18n.t('nav.title')}
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar={true}>
        <Nav className="mr-auto" navbar={true}>
          <NavItem>
            <NavLink onClick={() => push('/')} className={styles.clickable}>
              {I18n.t('nav.page1')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => push('/counter')} className={styles.clickable}>
              {I18n.t('nav.page2')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => push('/translate')} className={styles.clickable}>
              {I18n.t('nav.page3')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => push('/notification')} className={styles.clickable}>
              {I18n.t('nav.page4')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => push('/loader')} className={styles.clickable}>
              {I18n.t('nav.page5')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => push('/animate')} className={styles.clickable}>
              {I18n.t('nav.page6')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => push('/component')} className={styles.clickable}>
              {I18n.t('nav.page7')}
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      <Collapse isOpen={isOpen} navbar={true}>
        <Nav className="ml-auto" navbar={true}>
          <NavItem>
            <NavLink onClick={disconnect} className={styles.clickable}>
              {I18n.t('nav.disconnect')}
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </NavbarReactStrap>
  );
};

Navbar.defaultProps = {};

export default Navbar;
