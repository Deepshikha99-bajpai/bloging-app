"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { AuthContextProvider } from "@/context/AuthContext";
import { SpeechContentProvider } from "@/context/SpeechContentContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthGuard from "@/components/AuthGuard/AuthGuard";

const SiteSpeech = dynamic(() => import("@/components/fullPageSpeech/SiteSpeech"), {
  ssr: false,
});

const AppProviders = ({ children }) => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <AuthContextProvider>
      <SpeechContentProvider>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="app-root">
              {isLoginPage ? (
                <AuthGuard>{children}</AuthGuard>
              ) : (
                <div className="app-wrapper">
                  <Navbar />
                  <main id="main-content" className="site-main">
                    <AuthGuard>{children}</AuthGuard>
                  </main>
                  <Footer />
                  <SiteSpeech />
                </div>
              )}
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </SpeechContentProvider>
    </AuthContextProvider>
  );
};

export default AppProviders;
