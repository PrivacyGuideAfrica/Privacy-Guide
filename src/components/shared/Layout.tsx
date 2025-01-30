import { Navbar } from "@/components/Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};