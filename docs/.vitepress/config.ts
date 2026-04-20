import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default withMermaid(
  defineConfig({
  base: "/mithril-ui-kit/",
  title: "Mithril UI Kit",
  description: "Mithril UI Kit Component documentation",
  lang: "ja-JP",
  lastUpdated: true,
  cleanUrls: true,
  mermaid: {},
  vite: {
    esbuild: {
      jsx: "transform",
      jsxFactory: "m",
      jsxFragment: "m.fragment",
    },
    resolve: {
      alias: {
        "mithriluikit": path.resolve(__dirname, "../../src/index.ts")
      }
    },
    ssr: {
      noExternal: ["mithril", "mithriluikit", "classnames"]
    }
  },
  themeConfig: {
    logo: { src: '/mithril-ui-kit-logo.svg', width: 24, height: 24 },
    nav: [
      { text: "Home", link: "/" },
      { text: "Github", link: "https://github.com/14e28f87/mithril-ui-kit" },
    ],
    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "installation", link: "/installation" }
        ]
      },
      {
        text: "Actions and Buttons",
        items: [
          { text: "Button", link: "/Button" },
          { text: "IconButton", link: "/IconButton" }
        ]
      },
      {
        text: "Forms and Input",
        items: [
          { text: "Form", link: "/Form" },
          { text: "FormItem", link: "/FormItem" },
          { text: "Input", link: "/Input" },
          { text: "NumberInput", link: "/NumberInput" },
          { text: "PasswordInput", link: "/PasswordInput" },
          { text: "TextArea", link: "/TextArea" },
          { text: "Select", link: "/Select" },
          { text: "NativeSelect", link: "/NativeSelect" },
          { text: "Combobox", link: "/Combobox" },
          { text: "Checkbox", link: "/Checkbox" },
          { text: "CheckboxCard", link: "/CheckboxCard" },
          { text: "Radio", link: "/Radio" },
          { text: "RadioGroup", link: "/RadioGroup" },
          { text: "RadioCard", link: "/RadioCard" },
          { text: "Switch", link: "/Switch" },
          { text: "Slider", link: "/Slider" },
          { text: "TagsInput", link: "/TagsInput" },
          { text: "ColorPicker", link: "/ColorPicker" },
          { text: "ColorSwatch", link: "/ColorSwatch" },
          { text: "PinInput", link: "/PinInput" },
          { text: "FileUpload", link: "/FileUpload" },
          { text: "Editable", link: "/Editable" },
          { text: "InlineEdit", link: "/InlineEdit" },
          { text: "DatePicker", link: "/DatePicker" },
          { text: "SegmentedControl", link: "/SegmentedControl" }
        ]
      },
      {
        text: "Feedback and Overlay",
        items: [
          { text: "Alert", link: "/Alert" },
          { text: "Status", link: "/Status" },
          { text: "EmptyState", link: "/EmptyState" },
          { text: "Badge", link: "/Badge" },
          { text: "Spinner", link: "/Spinner" },
          { text: "Skeleton", link: "/Skeleton" },
          { text: "Modal", link: "/Modal" },
          { text: "Offcanvas", link: "/Offcanvas" },
          { text: "Overlay", link: "/Overlay" },
          { text: "Popover", link: "/Popover" },
          { text: "Toast", link: "/Toast" },
          { text: "Tooltip", link: "/Tooltip" },
          { text: "HoverCard", link: "/HoverCard" }
        ]
      },
      {
        text: "Navigation",
        items: [
          { text: "Accordion", link: "/Accordion" },
          { text: "Breadcrumb", link: "/Breadcrumb" },
          { text: "Carousel", link: "/Carousel" },
          { text: "Dropdown", link: "/Dropdown" },
          { text: "Pagination", link: "/Pagination" },
          { text: "Steps", link: "/Steps" },
          { text: "Tabs", link: "/Tabs" }
        ]
      },
      {
        text: "Data Display",
        items: [
          { text: "Card", link: "/Card" },
          { text: "Tag", link: "/Tag" },
          { text: "Progress", link: "/Progress" },
          { text: "ProgressCircle", link: "/ProgressCircle" },
          { text: "Timeline", link: "/Timeline" },
          { text: "Table", link: "/Table" },
          { text: "Listbox", link: "/Listbox" },
          { text: "TreeView", link: "/TreeView" }
        ]
      },
      {
        text: "Layout",
        items: [
          { text: "Box", link: "/Box" },
          { text: "Flex", link: "/Flex" },
          { text: "Grid", link: "/Grid" },
          { text: "SimpleGrid", link: "/SimpleGrid" },
          { text: "Stack", link: "/Stack" },
          { text: "Wrap", link: "/Wrap" },
          { text: "Center", link: "/Center" },
          { text: "AbsoluteCenter", link: "/AbsoluteCenter" },
          { text: "AspectRatio", link: "/AspectRatio" },
          { text: "Bleed", link: "/Bleed" },
          { text: "Float", link: "/Float" },
          { text: "Group", link: "/Group" },
          { text: "Container", link: "/Container" },
          { text: "Separator", link: "/Separator" },
          { text: "ScrollArea", link: "/ScrollArea" },
          { text: "Splitter", link: "/Splitter" }
        ]
      },
    ],
    search: {
      provider: "local"
    },
    footer: {
      message: "Mithril UI Kit Documentation",
      copyright: "Copyright 2026"
    }
  }
})
);