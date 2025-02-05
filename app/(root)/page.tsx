import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="h1-bold">
              Sự kiện của bạn, đẳng cấp hơn với EventHub!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Tham gia ngay để giúp bạn tiết kiệm thời gian và công sức trong
              việc tổ chức sự kiện, làm cho sự kiện của bạn trở nên hoàn hảo
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Khám phá ngay</Link>
            </Button>
          </div>

          <Image
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section
        className="wrapper my-8 flex flex-col gap-8 md-gap-12"
        id="events"
      >
        <h2 className="h2-bold">
          Được tin tưởng bởi <br /> hàng ngàn sự kiện
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search CategoryFilter
        </div>
      </section>
    </>
  );
}
