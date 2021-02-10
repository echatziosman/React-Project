import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CartSummary from './CartSummary';
class Navi extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.state({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink >
                                    <Link to="/form1">Form-1</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink >
                                    <Link to="/form2">Form-2</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
                        </Nav>
                        <NavbarText>Northwind App</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        );
    }


}

export default Navi;