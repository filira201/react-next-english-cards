import LoginForm from "@/app/ui/components/LoginForm";
import Link from "next/link";
import QcardsLogo from "../ui/components/QcardsLogo";

export default function LoginPage() {
  return (
    <main className="text-[#050505] flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-[#0582ff] shadow-custom p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <Link href="/" scroll={false}>
              <QcardsLogo />
            </Link>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
