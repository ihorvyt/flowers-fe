import './header.scss'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const Header = () => {
    const {items, totalPrice} = useSelector((state) => state.cart);

    const itemsAmount = items.reduce((acc, current) => acc + current.count, 0);

    return (
        <header className="header">
             <div className="content">
                <Link to='/' className="content__logo">
                    <img src="/icons/logo.svg" alt=""/>
                </Link>

                <ul className="content__list">
                    <Link className="header__list-elem" to='/'>Shop</Link>
                    <Link className="header__list-elem" to=''>Locations</Link>
                    <Link className="header__list-elem" to='/orders'>Orders</Link>
                    <Link className="header__list-elem" to=''>Blog</Link>
                </ul>

                <Link to='/cart' className="content-cart">
                    <div className="content-cart__price">{totalPrice.toFixed(2)} грн</div>

                    <div className="content-cart__bucket">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <g clipPath="url(#clip0_8_2403)">
                                <path
                                    d="M12.2992 2.25084C12.4981 1.90606 12.5519 1.49638 12.4488 1.11193C12.3456 0.727478 12.094 0.399749 11.7492 0.200837C11.4044 0.00192428 10.9948 -0.0518769 10.6103 0.0512681C10.2259 0.154413 9.89813 0.406055 9.69922 0.750837L6.37922 6.50084H3.99922C3.13041 6.50101 2.28527 6.78405 1.59159 7.30716C0.897914 7.83028 0.393416 8.56502 0.154376 9.4003C-0.0846632 10.2356 -0.0452465 11.126 0.266667 11.9369C0.578581 12.7478 1.14603 13.4351 1.88322 13.8948C1.99937 13.9657 2.13315 14.0025 2.26922 14.0008H31.7292C31.8653 14.0025 31.9991 13.9657 32.1152 13.8948C32.8524 13.4351 33.4199 12.7478 33.7318 11.9369C34.0437 11.126 34.0831 10.2356 33.8441 9.4003C33.605 8.56502 33.1005 7.83028 32.4068 7.30716C31.7132 6.78405 30.868 6.50101 29.9992 6.50084H27.6192L24.2992 0.750837C24.2007 0.580118 24.0696 0.430471 23.9132 0.310439C23.7569 0.190406 23.5785 0.10234 23.3881 0.0512681C23.1978 0.000195853 22.9992 -0.0128824 22.8038 0.0127806C22.6084 0.0384437 22.4199 0.102345 22.2492 0.200837C22.0785 0.299328 21.9289 0.430481 21.8088 0.586806C21.6888 0.743131 21.6007 0.921568 21.5497 1.11193C21.4986 1.30229 21.4855 1.50084 21.5112 1.69626C21.5368 1.89167 21.6007 2.08012 21.6992 2.25084L24.1552 6.50084H9.84522L12.2992 2.25084Z"
                                    fill="#1A1A1A"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M31.6694 17.4707C31.6796 17.4132 31.6771 17.3541 31.6621 17.2976C31.647 17.2411 31.6197 17.1886 31.5821 17.1438C31.5446 17.099 31.4976 17.0629 31.4446 17.0382C31.3917 17.0135 31.3339 17.0007 31.2754 17.0007H2.72342C2.66494 17.0007 2.60718 17.0135 2.55419 17.0382C2.5012 17.0629 2.45427 17.099 2.4167 17.1438C2.37914 17.1886 2.35186 17.2411 2.33678 17.2976C2.3217 17.3541 2.31918 17.4132 2.32941 17.4707L4.32941 28.8667C4.5324 30.0225 5.09677 31.0841 5.94132 31.8989C6.78587 32.7136 7.86708 33.2394 9.02942 33.4007C14.3174 34.1367 19.6814 34.1367 24.9694 33.4007C26.1317 33.2394 27.213 32.7136 28.0575 31.8989C28.9021 31.0841 29.4664 30.0225 29.6694 28.8667L31.6694 17.4707ZM14.4994 21.5007C14.4994 21.1029 14.3414 20.7214 14.0601 20.4401C13.7788 20.1588 13.3972 20.0007 12.9994 20.0007C12.6016 20.0007 12.2201 20.1588 11.9388 20.4401C11.6575 20.7214 11.4994 21.1029 11.4994 21.5007V25.5007C11.4994 25.8986 11.6575 26.2801 11.9388 26.5614C12.2201 26.8427 12.6016 27.0007 12.9994 27.0007C13.3972 27.0007 13.7788 26.8427 14.0601 26.5614C14.3414 26.2801 14.4994 25.8986 14.4994 25.5007V21.5007ZM20.9994 20.0007C21.3972 20.0007 21.7788 20.1588 22.0601 20.4401C22.3414 20.7214 22.4994 21.1029 22.4994 21.5007V25.5007C22.4994 25.8986 22.3414 26.2801 22.0601 26.5614C21.7788 26.8427 21.3972 27.0007 20.9994 27.0007C20.6016 27.0007 20.2201 26.8427 19.9388 26.5614C19.6574 26.2801 19.4994 25.8986 19.4994 25.5007V21.5007C19.4994 21.1029 19.6574 20.7214 19.9388 20.4401C20.2201 20.1588 20.6016 20.0007 20.9994 20.0007Z"
                                      fill="#1A1A1A"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_8_2403">
                                    <rect width="33.9984" height="33.9528" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="content-cart__orders">
                            {itemsAmount}
                        </div>
                    </div>
                </Link>
            </div>
        </header>
    )
}