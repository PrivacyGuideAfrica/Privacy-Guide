import { Component, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

class PageBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    return this.state.failed ? <div role="alert" className="mx-auto max-w-2xl px-4 py-12 space-y-4">
      <h1 className="text-2xl font-semibold">This page couldn’t load</h1>
      <p>Check your connection and reload the page. Your answers on this page may need to be entered again.</p>
      <button className="rounded-md bg-blue-900 px-5 py-3 text-white" onClick={() => window.location.reload()}>Reload page</button>
    </div> : this.props.children;
  }
}
export const RouteErrorBoundary = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  return <PageBoundary key={pathname}>{children}</PageBoundary>;
};
