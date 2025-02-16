import { Media } from "@/types/components/media";
import { Quote } from "@/types/components/quote";
import Image from "next/image";

interface Props {
  page: Quote;
  background: Media;
}

export default function About1(props: Props) {
  return (
    <section className="relative overflow-hidden pb-20 mt-10 md:pt-40 xl:pt-16">
      <div className="text-center">
        <h1 className="mb-8 text-3xl font-bold text-black dark:text-white xl:text-hero">
          {props.page.title}
        </h1>
      </div>

      <div className="mx-auto max-w-c-1390 px-10 md:px-40 2xl:px-40 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2 relative">
          <div className="relative h-60 md:h-[240px] hidden md:block rounded-sm">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}${props.background.file.url}`}
              alt="Handshake Gesture"
              layout="fill"
              objectFit="contain"
              className="rounded-sm"
            />
          </div>

          <div className="relative block md:hidden rounded-md overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}${props.background.file.url}`}
              alt="Handshake Gesture"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 -z-1 blur-md opacity-40 rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
          </div>
        </div>

        <div
          className={`w-full md:w-1/2 relative px-10 py-12 ${
            props.page.body && "text-center md:text-left"
          }`}
        >
          <div className="md:hidden absolute inset-0 -z-1 rounded-md overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}${props.background.file.url}`}
              alt="Background for Quote Body"
              layout="fill"
              objectFit="cover"
              className="blur-md opacity-50 rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-md"></div>
          </div>

          <p className="text-lg text-white md:text-black dark:text-white">
            {props.page.body}
          </p>
        </div>
      </div>
    </section>
  );
}
