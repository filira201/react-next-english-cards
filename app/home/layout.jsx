import SideNav from "../ui/components/home/SideNav";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-row">
      <div className="flex-none w-64 border border-red-500">
        <SideNav />
      </div>
      <div className="grow p-12 overflow-y-auto">{children}</div>
    </div>
  );
}
