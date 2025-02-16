import { Media } from "./components/media"
import { Quote } from "./components/quote"
import { RichText } from "./components/rich-text"
import { Slider } from "./components/slider"

export interface Page {
  title: string
  endpoint: string
  blocks: (Slider | RichText | Quote | Media)[],
  backgroundBlocks: (Media | null)[]
}
