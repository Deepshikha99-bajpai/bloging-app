"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

  return (
    <>
      {!isAuthenticated ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <button type="button" className={styles.linkButton} onClick={handleLogout}>
            Logout
          </button>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {!isAuthenticated ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <button type="button" className={styles.linkButton} onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
