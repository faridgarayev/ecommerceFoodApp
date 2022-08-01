import React, { useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { Container } from "reactstrap";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

/* CSS */
import '../../styles/header.css'

/* Logo */
import logo from "../../assets/images/res-logo.png";

const nav__links = [
    {
        display: "Home",
        path: "/home",
    },
    {
        display: "Foods",
        path: "/foods",
    },
    {
        display: "Cart",
        path: "/cart",
    }
    // ,
    // {
    //     display: "Contact",
    //     path: "/contact",
    // },
];

const Header = () => {
    const menuRef = useRef(null);
    const toggleMenu = () => menuRef.current.classList.toggle('show__menu');
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)
    const dispatch = useDispatch();

    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    };

    // const headerRef = useRef(null);

    return (
        <header className="header">
            <Container>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <h5>Tasty Treat</h5>
                    </div>

                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <div className="menu d-flex align-items-center gap-5">
                            {nav__links.map((item, index) => (
                                <NavLink
                                    onClick={toggleMenu}
                                    to={item.path}
                                    key={index}
                                    className={(navClass) =>
                                        navClass.isActive ? "active__menu" : ""
                                    }
                                >
                                    {item.display}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div className="nav__right d-flex align-items-center gap-4">
                        <span className="cart__icon" onClick={toggleCart}>
                            <i className="ri-shopping-basket-line"></i>
                            <span className="cart__badge">{totalQuantity}</span>
                        </span>

                        <span className="user">
                            <Link to="/login">
                                <i className="ri-user-line"></i>
                            </Link>
                        </span>

                        <span className="mobile__menu" onClick={toggleMenu}>
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header