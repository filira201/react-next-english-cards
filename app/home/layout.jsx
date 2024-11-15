import LayoutHomeHeader from "../ui/components/home/LayoutHomeHeader";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col overflow-hidden lg:flex-row">
      <LayoutHomeHeader />
      <div
        style={{ padding: "48px  round(up, 7.22223%, .2rem)" }}
        className="grow border overflow-y-auto"
      >
        {children}
      </div>
    </div>
  );
}
