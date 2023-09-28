import type { Meta, StoryObj } from "@storybook/react";
import Link from "./Link";

const meta = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavLink: Story = {
  args: {
    text: "Link Component",
    url: "#",
  },
};
