import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { ImSearch } from "react-icons/im";
const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderMenu: Story = {
  args: {
    logo: {
      imgSrc: "https://placehold.co/150x50",
      altText: "",
      url: "",
    },
    menu: {
      menuLinks: [
        {
          text: "Movies",
          url: "#",
        },
        {
          text: "Tv Shows",
          url: "#",
        },
        {
          text: "People",
          url: "/person",
        },
        {
          text: "More",
          url: "/person",
        },
      ],
    },
    ActionIcon: ImSearch,
  },
};
