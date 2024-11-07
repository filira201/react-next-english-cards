import Link from "next/link";
import Image from "next/image";
import HeroPageHeader from "./ui/components/HeroPageHeader";

export default function Home() {
  return (
    <>
      <HeroPageHeader />
      <main
        style={{ padding: "0 round(up, 7.22223%, .2rem)" }}
        className="w-full min-h-full h-auto mb-14 mt-0 mx-auto text-[#050505]"
      >
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
                  className="min-w-36 flex items-center justify-center font-medium rounded-lg bg-[#0582ff] text-white pt-[10px] px-5 pb-3 flex-grow transition-colors active:bg-[#045ac3] lg:hover:bg-[#045ac3]"
                >
                  <p>Войти</p>
                </Link>
                <Link
                  href="/register"
                  className="min-w-36 flex items-center justify-center font-medium rounded-lg bg-[#ebf5fe] text-[#087fe7] pt-[10px] px-5 pb-3 flex-grow transition-colors active:bg-[#d6e1f5] lg:hover:bg-[#d6e1f5]"
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
                src="/hero-image.png"
                width={1024}
                height={1024}
                style={{
                  width: "100%",
                  maxWidth: "390px",
                  objectFit: "cover",
                }}
                priority
                alt="Hero image"
              />
            </div>
            <div
              style={{ gridColumn: "1 / span 12" }}
              className="my-0 mx-auto w-full"
            >
              <div className="grid grid-cols-12 auto-rows-min gap-x-6 w-full">
                <div style={{ gridColumn: "span 12" }}>
                  <div
                    style={{
                      boxShadow:
                        " 0px 4px 18px #0000000a, 0px 2.025px 7.84688px rgba(0, 0, 0, .027), 0px 0.8px 2.925px #00000005, 0px 0.175px 1.04062px rgba(0, 0, 0, .013)",
                    }}
                    className="rounded-xl border border-[#0000001a] overflow-hidden w-full h-auto block relative my-0 mx-auto"
                  >
                    <Image
                      src="/desk-hero-image2.webp"
                      width={2560}
                      height={1600}
                      alt="Screenshots of the dashboard project showing desktop version"
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
