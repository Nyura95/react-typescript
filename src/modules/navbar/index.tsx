import * as React from 'react';

// module
import { I18n } from 'react-redux-i18n';
import { Navbar as NavbarReactStrap, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler } from 'reactstrap';
import { useDispatch } from 'react-redux';

// style
import * as styles from './styles.scss';

import { IRouterDispatch } from '../../reducers';
import { RouterPush, userDisconnect } from '../../actions';

export interface IState {
  isOpen: boolean;
}

const Navbar: IHook = () => {
  const dispatch = useDispatch<IRouterDispatch>();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <NavbarReactStrap dark={true} color={'dark'} expand="md">
      <NavbarBrand
        onClick={() => dispatch(RouterPush('/'))}
        color={'white'}
        className={styles.clickable}
        style={{ color: 'white' }}
      >
        {I18n.t('nav.title')}
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar={true}>
        <Nav className="mr-auto" navbar={true}>
          <NavItem>
            <NavLink onClick={() => dispatch(RouterPush('/'))} className={styles.clickable}>
              {I18n.t('nav.page1')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => dispatch(RouterPush('/counter'))} className={styles.clickable}>
              {I18n.t('nav.page2')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => dispatch(RouterPush('/translate'))} className={styles.clickable}>
              {I18n.t('nav.page3')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => dispatch(RouterPush('/notification'))} className={styles.clickable}>
              {I18n.t('nav.page4')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => dispatch(RouterPush('/loader'))} className={styles.clickable}>
              {I18n.t('nav.page5')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => dispatch(RouterPush('/animate'))} className={styles.clickable}>
              {I18n.t('nav.page6')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => dispatch(RouterPush('/component'))} className={styles.clickable}>
              {I18n.t('nav.page7')}
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      <Collapse isOpen={isOpen} navbar={true}>
        <Nav className="ml-auto" navbar={true}>
          <NavItem>
            <NavLink onClick={() => dispatch(userDisconnect())} className={styles.clickable}>
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
