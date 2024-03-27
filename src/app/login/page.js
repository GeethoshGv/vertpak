"use client";

import "./login.scss";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);

  async function handelFormSubmit(e) {
    e.preventDefault();
    setLoginInProgress(true);

    await signIn("credentials", { email, password, callbackUrl: "/" });

    setLoginInProgress(false);
  }
  return (
    <>
      <section className="register_section">
        <div className="form_center_div">
          <form action="" onSubmit={handelFormSubmit}>
            <div className="form_login_main_container">
              <div className="form_heading_div">
                <h6>{`WELCOME BACK`}</h6>
                <h5>Log In to your Account</h5>
              </div>
              <div className="form_lable_div">
                <div>
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loginInProgress}
                    value={email}
                  />
                </div>
                <div>
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loginInProgress}
                    value={password}
                  />
                </div>
              </div>
              <div className="form_button_div">
                <button type="submit" disabled={loginInProgress}>
                  CONTINUE
                </button>
                <div className="form_or_div">
                  <h5>Or</h5>
                </div>
                <button
                  type="button"
                  className="google_button"
                  onClick={() => signIn("google", { callbackUrl: "/" })}
                >
                  <img src={"/google.svg"} alt="" /> <h5>Google</h5>
                </button>
              </div>
              <div className="form_Login_hear_div">
                <p>
                  New User? <Link href={"/register"}>SIGN UP HERE</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
