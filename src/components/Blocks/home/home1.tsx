import { Slider } from "@/types/components/slider";
import Image from "next/image";

interface Props {
  page: Slider;
}
export default function Home1(props: Props) {
  return (
    <section className="overflow-hidden pb-20 pt-10 md:pt-20 xl:pb-25 xl:pt-23">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <h2 className="mb-10 text-3xl font-bold text-black dark:text-white">
          {props.page.title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {props.page.files.map((file, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}${file.url}`}
                alt={file.alternativeText || file.name}
                width={file.width}
                height={file.height}
                className="w-full object-cover"
              />
              {file.alternativeText && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                  <p className="text-sm text-white">{file.alternativeText}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
