/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import styles from "./header.module.scss";
import CartIcon from "../icons/cart";
import MenuIcon from "../icons/menu";
import SearchIcon from "../icons/search";
import ArrowIcon from "../icons/arrow";
import React, {  useState } from "react";
import { useRouter } from "next/router";
//import { useAuth } from "@/firebase/context";

const Header: React.FC<{}> = (props) => {
    const [showHeader, setShowHeader] = useState({
        transform: "translate3d(100vw, 0, 0)",
      });
      const [input, setInput] = useState();
    
      const router = useRouter();
    
      //const { user } = useAuth();
      const user = null;
    
      /*const cart = useCart().data;
      const cartLength = Object.keys(cart).reduce((a, b) => a + cart[b].length, 0);*/

    return (
        <nav className={styles.container}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <a className={styles.logo}>Shopping</a>
            </Link>
            <div className={styles.rightContentMobile}>
              <Link href="/cart">
                <div className={styles.cartContainer}>
                  <CartIcon width={28} height={28} className={styles.cartIcon} />
                  <div>
                    <span>{ 0}</span>
                  </div>
                </div>
              </Link>
              <div className={styles.profileContainer}>
                <MenuIcon
                  width={30}
                  height={30}
                  className={styles.menuIcon}
                  onClick={() =>
                    setShowHeader({ transform: "translate3d(0vw, 0, 0)" })
                  }
                />
              </div>
            </div>
          </div>
          <div className={styles.rightMenu}>
            <div className={styles.menuContent} style={showHeader}>
              {user ? (
                <>
                  <Link href="/account">My Account</Link>
                  <Link href="/account/orders">My Orders</Link>
                  <Link href="/account/favorites">Favourites</Link>
                  <Link href="/account/logout">Logout</Link>
                </>
              ) : (
                <>
                  <Link href="/login">Login</Link>
                  <Link href="/login">Register</Link>
                </>
              )}
            </div>
            <div
              className={styles.background}
              style={showHeader}
              onClick={() =>
                setShowHeader({ transform: "translate3d(100vw, 0, 0)" })
              }
            />
          </div>
          <div className={styles.searchContainer}>
            <SearchIcon
              width={20}
              height={20}
              fill="grey"
              className={styles.searchIcon}
            />
            <form
              onSubmit={() =>
                input &&
                typeof window !== "undefined" &&
                router.push(`/search/${input}`)
              }
            >
              <input
                className={styles.searchInput}
                placeholder="Search for products, brands and more... "
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
          </div>
          <div className={styles.rightContent}>
            <Link href="/cart">
              <div className={styles.cartContainer}>
                <CartIcon width={20} height={20} className={styles.cartIcon} />
                <span>Cart: { 0}</span>
              </div>
            </Link>
    
            <Link href="/account">
              <div className={styles.profileContainer}>
                <img
                  src={"https://picsum.photos/200/200"}
                  className={styles.profilePhoto}
                  loading="lazy"
                />
                <span>
                  Hello{" "}
                  <span style={{ fontWeight: "normal" }}>
                    {"Guest"}
                  </span>
                </span>
                <ArrowIcon width={10} height={10} className={styles.arrowIcon} />
                <div className={styles.dropdown}>
                  <div className={styles.arrowUp} />
                  <div className={styles.dropdownMenu}>
                    {user ? (
                      <>
                        <Link href="/account">My Account</Link>
                        <Link href="/account/orders">My Orders</Link>
                        <Link href="/account/favorites">Favourites</Link>
                        <Link href="/account/logout">Logout</Link>
                      </>
                    ) : (
                      <>
                        <Link href="/login">Login</Link>
                        <Link href="/login">Register</Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </nav>
      );
  };


 export default Header;