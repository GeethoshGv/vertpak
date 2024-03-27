"use client";
import Link from "next/link";
import "./header.scss";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const session = useSession();
  console.log(session);

  const userData = session.data?.user;
  let userName = userData?.name;

  const status = session?.status;
  return (
    <>
      <header>
        <div className="nav_img_div">
          <Link className="logo_name" href={"/"}>
            Vertpak
          </Link>
        </div>
        <div className="nav_2">
          {status === "authenticated" && (
            <>
              <Link className="login_button" href={"/profile"}>
                {/* <img src="/user.svg" alt="" /> */}
                <h5>{userName}</h5>
              </Link>
              <button
                onClick={() => signOut()}
                className="logout_button"
                href={"/login"}
              >
                <h5>Logout</h5>
              </button>
            </>
          )}

          {status === "unauthenticated" && (
            <>
              <Link className="login_button" href={"/login"}>
                <img src="/user.svg" alt="" />
                <h5>Login</h5>
              </Link>
              <Link className="login_button" href={"/register"}>
                <h5>Register</h5>
              </Link>
            </>
          )}

          {/* <Link className="login_button" href={""}>
            <img src="/cart.svg" alt="" />
            <h5>Cart</h5>
          </Link> */}
        </div>
        <nav>
          <Link href={""}>Product</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
        </nav>
      </header>
    </>
  );
}
