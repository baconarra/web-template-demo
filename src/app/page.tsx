import Home0 from "@/components/Blocks/home/home0";
import Home1 from "@/components/Blocks/home/home1";
import { preprocessBlocks } from "@/tools/page-utility";
import { Media } from "@/types/components/media";
import { Quote } from "@/types/components/quote";
import { Slider } from "@/types/components/slider";
import { Page } from "@/types/page";
const pageData: Page[] = Array.from(
  require("../../public/contents/pages.json")
);

export default function Home() {
  const homePageData = pageData.find((x) => x.endpoint == "/")!;

  const processed = preprocessBlocks(homePageData) as Page;
  return (
    <>
      <Home0
        page={processed.blocks[0] as Quote}
        background={processed.backgroundBlocks[0] as Media}
      />
      <Home1 page={processed.blocks[1] as Slider} />
    </>
  );
}
