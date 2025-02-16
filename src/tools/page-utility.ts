import { Media } from "@/types/components/media";
import { Quote } from "@/types/components/quote";
import { RichText } from "@/types/components/rich-text";
import { Slider } from "@/types/components/slider";
import { Page } from "@/types/page";

export function preprocessBlocks(page: Page): Page {
  const bgBlocks: (Slider | RichText | Quote | Media)[] = [];

  page.blocks = page.blocks.filter((block) => {
    if (block.tag?.startsWith("bg:")) {
      bgBlocks.push(block);
      return false;
    }
    return true;
  });

  page.blocks.forEach((block) => {
    const bgTag = block.tag?.startsWith("bg:") ? block.tag : `bg:${block.tag}`;
    const backgroundBlock = bgBlocks.find((b) => b.tag === bgTag) ?? null;
    page.backgroundBlocks = page.backgroundBlocks ?? [];
    page.backgroundBlocks.push(backgroundBlock as Media | null);
  });

  return page;
}
