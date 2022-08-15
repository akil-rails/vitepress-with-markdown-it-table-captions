import { defineConfig } from "vitepress"
import MarkdownIt from 'markdown-it'
import markdownItTableCaption from 'markdown-it-table-captions'

export default defineConfig({
  markdown: {
    config: (md: MarkdownIt) => {
      md.use(markdownItTableCaption);
    }
  }
})
