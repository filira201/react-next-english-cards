import LayoutHomeHeader from "../ui/components/home/LayoutHomeHeader";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col overflow-hidden lg:flex-row">
      <LayoutHomeHeader />
      <div className="grow overflow-y-auto py-4 px-[round(up,_1.22223%,_.2rem)] md:py-8 lg:py-12 sm:px-[round(up,_3.22223%,_.2rem)]">
        {children}
      </div>
    </div>
  );
}
