import Link from "next/link";
import Image from "next/image";
import HeroPageHeader from "./ui/components/HeroPageHeader";

export default function Home() {
  return (
    <>
      <HeroPageHeader />
      <main className="w-full min-h-full h-auto mb-14 mt-0 mx-auto p-[0px_round(up,_7.22223%,_.2rem)] text-[#050505]">
        <div className="w-full m-auto max-w-[1252px] felx flex-col gap-36">
          <section
            className="
              w-full grid auto-rows-min grid-cols-12 gap-x-7 items-center mx-auto mb-0 mt-4
              md:mt-16 md:gap-y-0
              lg:mt-8 lg:gap-y-12
            "
          >
            <header
              className="
                flex flex-col col-start-1 col-end-13 gap-5
                md:col-start-3 md:col-end-11 md:text-center md:gap-4
                lg:col-start-1 lg:col-end-7 lg:text-left
                xl:col-start-1 xl:col-end-6
              "
            >
              <h1 className="font-semibold text-4xl tracking-tight text-[#1a1a1a] xm:text-5xl md:text-6xl lg:text-7xl">
                Создавайте увлекательные карточки.
              </h1>
              <h2 className="text-lg tracking-tight font-medium xm:text-2xl">
                QCards помогает вам легко создавать Quiz-карточки для
                продуктивного обучения и саморазвития.
              </h2>
              <nav
                className="
                  flex flex-wrap gap-2 flex-col
                  md:mt-0 md:items-center md:justify-center md:flex-col
                  lg:mt-1 lg:w-max lg:flex-row
                "
              >
                <Link
                  href="/login"
                  className="min-w-36 flex items-center justify-center font-medium rounded-lg bg-[#0582ff] text-white pt-[10px] px-5 pb-3 flex-grow transition-colors [@media(hover:hover){&:hover}]:bg-[#045ac3] [@media(hover:none){&:active}]:bg-[#045ac3]"
                >
                  <p>Войти</p>
                </Link>
                <Link
                  href="/register"
                  className="min-w-36 flex items-center justify-center font-medium rounded-lg bg-[#ebf5fe] text-[#087fe7] pt-[10px] px-5 pb-3 flex-grow transition-colors [@media(hover:hover){&:hover}]:bg-[#d6e1f5] [@media(hover:none){&:active}]:bg-[#d6e1f5]"
                >
                  <p className="text-base">Регистрация</p>
                </Link>
              </nav>
            </header>
            <div
              className="
                flex h-auto w-full justify-center self-end col-start-1 col-end-13 max-w-60 mx-auto mt-2
                sm:max-w-72 sm:mx-auto
                md:mt-6 md:col-start-3 md:col-end-11 md:max-w-64 md:mx-auto
                lg:col-start-7 lg:col-end-13 lg:max-w-80 lg:mx-0 lg:ml-auto lg:mt-0
                xl:col-start-6 xl:col-end-13 xl:max-w-96
              "
            >
              <Image
                src="/qcards-image.png"
                width={1024}
                height={1024}
                style={{
                  width: "100%",
                  maxWidth: "390px",
                  objectFit: "cover",
                }}
                priority
                alt="QCards image"
              />
            </div>
            <div className="my-0 mx-auto w-full grid col-start-1 col-end-13">
              <div className="grid grid-cols-12 auto-rows-min w-full">
                <div className="col-[span_12]">
                  <div className="rounded-xl border border-[#0000001a] overflow-hidden w-full h-auto block relative my-0 mx-auto shadow-[0px_4px_18px_#0000000a,_0px_2.025px_7.84688px_rgba(0,_0,_0,_.027),_0px_0.8px_2.925px_#00000005,_0px_0.175px_1.04062px_rgba(0,_0,_0,_.013)]">
                    <Image
                      src="/hero-image-desktop.png"
                      width={1920}
                      height={1080}
                      priority
                      className="hidden md:block"
                      alt="Screenshots of the QCards project showing desktop version"
                    />
                    <Image
                      src="/hero-image-mobile.png"
                      width={776}
                      height={830}
                      priority
                      className="block md:hidden"
                      alt="Screenshots of the QCards project showing mobile version"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
