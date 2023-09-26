import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingVariant: Story = {
  args: {
    text: "Headings",
    variant: "20",
    headingElement: "2",
  },
};
