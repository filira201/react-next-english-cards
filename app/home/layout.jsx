import SideNav from "../ui/components/home/SideNav";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-row">
      <div className="flex-none shadow-[inset_-1px_0px_0px_0px_rgba(0,0,0,0.03)] bg-[#f7f7f5] w-64">
        <SideNav />
      </div>
      <div className="grow px-9 py-8 overflow-y-auto">{children}</div>
    </div>
  );
}
