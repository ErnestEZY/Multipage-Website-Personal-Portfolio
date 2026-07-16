import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import FloatingTools from "./FloatingTools";
import AmbientBackground from "./AmbientBackground";

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <AmbientBackground />
      <div className="site-shell">
        <Nav />
        <main id="main">
          <Outlet />
        </main>
        <Footer />
      </div>
      <FloatingTools />
    </>
  );
}

