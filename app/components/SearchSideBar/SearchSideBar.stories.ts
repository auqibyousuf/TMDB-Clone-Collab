import type { Meta, StoryObj } from '@storybook/react'
import { searchList } from '../../mockdata/index'
import SearchSideBar from './SearchSideBar'

const meta = {
  title: 'Components/Search SideBar',
  component: SearchSideBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SearchSideBar>

export default meta
type Story = StoryObj<typeof meta>

export const SearchSideBarComponent: Story = {
  args: {
    title: 'Search',
    searchList: searchList,
    resultsCount: 22,
  },
}
