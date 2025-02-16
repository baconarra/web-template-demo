import About0 from "@/components/Blocks/about/about0";
import About1 from "@/components/Blocks/about/about1";
import About2 from "@/components/Blocks/about/about2";
import { preprocessBlocks } from "@/tools/page-utility";
import { Media } from "@/types/components/media";
import { Quote } from "@/types/components/quote";
import { Page } from "@/types/page";
import Error from "next/error";

const pageData: Page[] = Array.from(
  require("../../../public/contents/pages.json")
);

export default function Home() {
  const aboutPageData = pageData.find((x) => x.endpoint == "/about")!;
  const processed = preprocessBlocks(aboutPageData) as Page;

  return (
    <>
      <About0
        page={processed.blocks[0] as Quote}
        background={processed.backgroundBlocks[0] as Media}
      />
      <About1
        page={processed.blocks[1] as Quote}
        background={processed.backgroundBlocks[1] as Media}
      />
      <About2 page={processed.blocks[2] as Quote} />
    </>
  );
}
