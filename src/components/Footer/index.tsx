"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import * as navData from "../../../public/contents/navigation.json";
import Link from "next/link";
const footer = navData.footer;

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-10 lg:py-12">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <Link href="/" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}${footer[0].items[0].media?.url}`}
                    alt={footer[0].items[0].media?.alternativeText ?? "Logo"}
                  />
                </Link>
                <p className="mb-10 mt-5">{footer[0].items[1].text}</p>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-around md:gap-0 lg:w-2/3 xl:w-7/12">
                {footer.map((item, index) => {
                  if (index == 0) return null;
                  return (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: -20,
                        },

                        visible: {
                          opacity: 1,
                          y: 0,
                        },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 1, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="animate_top max-w-[40%]"
                    >
                      <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                        {item.title}
                      </h4>

                      <ul>
                        {item.items.map((subItem, index) => (
                          <li key={index}>
                            <a
                              href={subItem.link ?? "#"}
                              className={
                                "mb-3 inline-flex items-center hover:text-primary text-md" +
                                (subItem.link
                                  ? ""
                                  : " pointer-events-none cursor-text")
                              }
                            >
                              {subItem.media && (
                                <Image
                                  width={20}
                                  height={20}
                                  src={`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}${subItem.media.url}`}
                                  alt={subItem.media.alternativeText ?? "icon"}
                                  className="mr-2" // Add some spacing between the image and text
                                />
                              )}
                              {subItem.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
