import * as React from 'react';

// module
import { I18n } from 'react-redux-i18n';
import { Navbar as NavbarReactStrap, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler } from 'reactstrap';

import { IProps } from './';
import { history } from '../../store';


// style
import * as styles from './styles.scss';

export interface IState {
  isOpen: boolean;
}

const Navbar: IHook<IProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <NavbarReactStrap dark={true} color={'dark'} expand="md">
      <NavbarBrand
        onClick={() => props.goPush('/')}
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
            <NavLink onClick={() => props.goPush('/')} className={styles.clickable}>
              {I18n.t('nav.page1')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => props.goPush('/counter')} className={styles.clickable}>
              {I18n.t('nav.page2')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => props.goPush('/translate')} className={styles.clickable}>
              {I18n.t('nav.page3')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => props.goPush('/notification')} className={styles.clickable}>
              {I18n.t('nav.page4')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => props.goPush('/loader')} className={styles.clickable}>
              {I18n.t('nav.page5')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => props.goPush('/animate')} className={styles.clickable}>
              {I18n.t('nav.page6')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => props.goPush('/component')} className={styles.clickable}>
              {I18n.t('nav.page7')}
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      <Collapse isOpen={isOpen} navbar={true}>
        <Nav className="ml-auto" navbar={true}>
          <NavItem>
            <NavLink onClick={() => props.userDisconnect()} className={styles.clickable}>
              {I18n.t('nav.disconnect')}
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </NavbarReactStrap>
  )
};

Navbar.defaultProps = {};

export default Navbar;