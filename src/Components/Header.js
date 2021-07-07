import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'></img>
            
            <div className="header__search">
                <input className="header__searchInput" type="text"></input>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__option__LineOne">Hello guest</span>
                    <span className="header__option__LineTwo">Sign In</span>
                </div>

                <div className="header__option">
                    <span className="header__option__LineOne">Returns</span>
                    <span className="header__option__LineTwo">&Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__option__LineOne">Your</span>
                    <span className="header__option__LineTwo">Prime</span>
                </div>

                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__option__LineTwo header__basketCount">0</span>
                </div> 
            </div>
        </div>
    )
}

export default Header
