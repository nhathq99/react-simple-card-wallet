import React from "react";
import WalletSVG from "../../assets/icons/wallet.svg";
import { Wrapper } from "./Header.styled";


const Header = () => {
    return(
        <Wrapper>
            <div className="body">
                <div className="left-side">
                    <img className="logo" alt="" src={WalletSVG} />
                    <p className="app-name">Card Wallet</p>
                </div>
            </div>
        </Wrapper>
    );
};

export default Header;
