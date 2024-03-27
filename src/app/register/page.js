"use client";
import { useState } from "react";
import "./reg.scss";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handelFormSubmition(e) {
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);

    const response = await fetch("api/register", {
      method: "POST",
      body: JSON.stringify({ username, password, email }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  }

  return (
    <>
      <section className="register_section">
        <div className="form_center_div">
          <form action="" onSubmit={handelFormSubmition}>
            <div className="form_main_container">
              <div className="form_heading_div">
                <h6>{`LET'S GET YOU STARTED`}</h6>
                <h5>Create an Account</h5>
              </div>
              <div className="form_lable_div">
                <div>
                  <label htmlFor="">Your name</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={creatingUser}
                  />
                </div>
                <div>
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={creatingUser}
                  />
                </div>
                <div>
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={creatingUser}
                  />
                </div>
              </div>
              <div className="form_button_div">
                <button type="submit" disabled={creatingUser}>
                  GET STARTED
                </button>
                <div className="form_or_div">
                  <h5>Or</h5>
                </div>
                <button
                  type="submit"
                  className="google_button"
                  onClick={() => signIn("google", { callbackUrl: "/" })}
                >
                  <img src={"/google.svg"} alt="" /> <h5>Google</h5>
                </button>
              </div>
              <div className="form_Login_hear_div">
                {error ? <p>An Error Occured While creating User</p> : <p></p>}
                {userCreated ? (
                  <p>
                    User Created <Link href={"/login"}>LOGIN </Link>
                  </p>
                ) : (
                  <p>
                    Already have an account? <Link href={"/login"}>LOGIN </Link>
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
