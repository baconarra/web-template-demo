import { Media } from "@/types/components/media";
import { Quote } from "@/types/components/quote";
import Image from "next/image";

interface Props {
  page: Quote;
  background: Media;
}

export default function About0(props: Props) {
  return (
    <section className="relative overflow-hidden py-20 mt-35 md:py-50 xl:py-56">
      <div className="absolute inset-0 -z-1">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}${props.background?.file.url}`}
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="mx-auto max-w-c-1390 px-20 md:px-8 2xl:px-0 text-center">
        <div className="relative">
          <h1 className="mb-15 text-3xl font-bold  text-white xl:text-hero">
            {props.page.title}
          </h1>
          <p className="text-white px-5">{props.page.body}</p>
        </div>
      </div>
    </section>
  );
}
