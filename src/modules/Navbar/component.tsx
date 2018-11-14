import * as React from 'react';

// Modules
import { Navbar as NavbarReactStrap, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler } from 'reactstrap';

// Sass import
import * as styles from './styles.scss';

// Interface props
export interface IProps {
  goPush(to: string): void;
  disconnectUser(): void;
}

interface IState {
  isOpen: boolean;
}

export default class Navbar extends React.PureComponent<IProps, IState> {
  static defaultProps: IProps = {
    goPush: (to: string) => {},
    disconnectUser: () => {}
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <NavbarReactStrap dark={true} color={'dark'} expand="md">
        <NavbarBrand
          onClick={() => this.props.goPush('/')}
          color={'white'}
          className={styles.clickable}
          style={{ color: 'white' }}
        >
          react-typescript
        </NavbarBrand>
        <NavbarToggler onClick={() => this.toggle()} />
        <Collapse isOpen={this.state.isOpen} navbar={true}>
          <Nav className="mr-auto" navbar={true}>
            <NavItem>
              <NavLink onClick={() => this.props.goPush('/')} className={styles.clickable}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => this.props.goPush('/counter')} className={styles.clickable}>
                Counter
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => this.props.goPush('/translate')} className={styles.clickable}>
                Translate
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Collapse isOpen={this.state.isOpen} navbar={true}>
          <Nav className="ml-auto" navbar={true}>
            <NavItem>
              <NavLink onClick={() => this.props.disconnectUser()} className={styles.clickable}>
                Disconnect
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </NavbarReactStrap>
    );
  }
}
