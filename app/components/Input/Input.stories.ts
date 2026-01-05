import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'
import { ImSearch } from 'react-icons/im'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputVariant: Story = {
  args: {
    variant: 'text',
    placeholder: 'Input',
    defaultValue: 'input-value',
  },
}

export const InputVariantWithIconLeft: Story = {
  args: {
    variant: 'search',
    placeholder: 'Input',
    defaultValue: 'input-value',
    icon: ImSearch,
  },
}
