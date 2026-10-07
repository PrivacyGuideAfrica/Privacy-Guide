import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "@/components/shared/Brand";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const close = () => setOpen(false);
  const links = <>
    <NavLink to="/countries" onClick={close} className="nav-link">Explore Modules</NavLink>
    <Link to="/#how-it-works" onClick={close} className="nav-link">How it works</Link>
    <NavLink to="/about" onClick={close} className="nav-link">About</NavLink>
    <Button asChild><Link to="/countries" onClick={close}>Start Free Assessment <ArrowRight aria-hidden="true" /></Link></Button>
  </>;
  return <header className="site-header print:hidden">
    <nav aria-label="Main navigation" className="page-container" onKeyDown={event => {
      if (event.key === "Escape" && open) { close(); toggle.current?.focus(); }
    }}>
      <div className="nav-bar">
        <Link to="/" onClick={close} aria-label="PrivacyGuide.Africa home"><Brand /></Link>
        <div className="hidden lg:flex items-center gap-5">{links}</div>
        <Button ref={toggle} variant="ghost" size="icon" className="lg:hidden" aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>
      <div id="mobile-navigation" hidden={!open} className="pb-5 lg:hidden"><div className="flex flex-col gap-2">{links}</div></div>
    </nav>
  </header>;
};
