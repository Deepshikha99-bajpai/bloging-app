"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import styles from "./loginPage.module.css";

const VALID_USERNAME = "Deepshikha";
const VALID_PASSWORD = "Deepshikha";

const LoginPage = () => {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/write");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 400));

    const enteredUser = username.trim();
    const enteredPass = password.trim();

    if (enteredUser === VALID_USERNAME && enteredPass === VALID_PASSWORD) {
      login();
      router.replace("/write");
      return;
    }

    setError(
      `Incorrect ID or password. Use User ID "${VALID_USERNAME}" and password "${VALID_PASSWORD}".`
    );
    setIsSubmitting(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.panelBrand}>
        <div className={styles.brandInner}>
          <Link href="/" className={styles.logo}>
            DAVV Blog
          </Link>
          <p className={styles.tagline}>
            Your campus hub for stories, culture, and student voices from Devi Ahilya Vishwavidyalaya.
          </p>
          <ul className={styles.features}>
            <li>Publish and manage blog posts</li>
            <li>Explore college and culture pages</li>
            <li>Accessible reading with built-in speech</li>
          </ul>
        </div>
        <div className={styles.brandGlow} aria-hidden="true" />
      </div>

      <div className={styles.panelForm}>
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <p className={styles.eyebrow}>Member access</p>
            <h1>Sign in to your account</h1>
            <p className={styles.subtitle}>
              Enter your credentials to open the editor and manage content.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="username" className={styles.label}>
                User ID
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Deepshikha"
                className={styles.input}
                disabled={isSubmitting}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <div className={styles.passwordWrap}>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Deepshikha"
                  className={styles.input}
                  disabled={isSubmitting}
                  required
                />
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  disabled={isSubmitting}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {error ? (
              <div className={styles.error} role="alert">
                {error}
              </div>
            ) : null}

            <button type="submit" className={styles.submit} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className={styles.spinner} aria-hidden="true" />
                  Signing in…
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className={styles.credentialsBox}>
            <p className={styles.credentialsTitle}>Demo login credentials</p>
            <p className={styles.credentialsText}>
              User ID: <strong>{VALID_USERNAME}</strong>
              <br />
              Password: <strong>{VALID_PASSWORD}</strong>
            </p>
          </div>

          <Link href="/" className={styles.backLink}>
            ← Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
