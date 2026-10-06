import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const close = () => setOpen(false);
  const links = <>
    <NavLink to="/countries" onClick={close} className="rounded-md px-3 py-3 font-medium text-slate-700 hover:bg-slate-100">Explore Modules</NavLink>
    <NavLink to="/about" onClick={close} className="rounded-md px-3 py-3 font-medium text-slate-700 hover:bg-slate-100">About</NavLink>
    <Button asChild className="bg-blue-900 hover:bg-blue-800"><Link to="/countries" onClick={close}>Start Free Assessment</Link></Button>
  </>;
  return <header className="sticky top-0 z-40 border-b border-slate-200 bg-white print:hidden">
    <nav aria-label="Main navigation" className="mx-auto max-w-6xl px-4 sm:px-6" onKeyDown={event => {
      if (event.key === "Escape" && open) { close(); toggle.current?.focus(); }
    }}>
      <div className="flex h-16 items-center justify-between gap-4">
        <Link to="/" onClick={close} className="text-lg font-bold tracking-tight text-blue-950 sm:text-xl">PrivacyGuide.Africa</Link>
        <div className="hidden lg:flex items-center gap-3">{links}</div>
        <Button ref={toggle} variant="ghost" size="icon" className="lg:hidden" aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
        </Button>
      </div>
      <div id="mobile-navigation" hidden={!open} className="pb-4 lg:hidden"><div className="flex flex-col gap-2">{links}</div></div>
    </nav>
  </header>;
};
