import { Quote } from "@/types/components/quote";
import Link from "next/link";

interface Props {
  page: Quote;
}

export default function About2(props: Props) {
  return (
    <section className="relative overflow-hidden py-20 bg-gray-50 dark:bg-gray-900">
      {/* Decorative Element */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-green-400 to-teal-500 blur-3xl opacity-30"></div>

      {/* Commitment Section */}
      <div className="relative z-10 mx-auto max-w-4xl px-8 text-center">
        <h1 className="mb-6 text-4xl font-bold text-gray-800 dark:text-white">
          {props.page.title}
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          {props.page.body}
        </p>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-md hover:from-purple-500 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
