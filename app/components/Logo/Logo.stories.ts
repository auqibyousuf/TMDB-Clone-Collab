import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./Logo";

const meta = {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavLogo: Story = {
  args: {
    imgSrc: "https://placehold.co/150x50",
    url: "#",
    altText: "Header logo",
  },
};
