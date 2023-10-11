'use client'
import React from 'react'
import * as Popover from '@radix-ui/react-popover'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { RxCross1 } from 'react-icons/rx'
import { MenuPopOverTypes } from './MenuPopOverTypes'
import NavList from '../NavList/NavList'

const MenuPopOver = ({ links, extraClasses }: MenuPopOverTypes) => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button
        className={`text-[16px] rounded rounded-full flex justify-center items-center w-[20px] h-[20px] bg-lightGrey/50 hover:bg-lightBlue cursor-pointer' ${extraClasses}`}
        aria-label='Update dimensions'
      >
        <HiOutlineDotsHorizontal />
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className='rounded-8 mt-2 bg-gray-50 shadow-l px-1 py-1'>
        <NavList
          menuLinks={links}
          variant='default'
          extraClasses='text-black block text-center'
          listContainerExtraClasses='flex flex-col gap-3 text-black py-2 w-[70px] items-center'
        />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
)

export default MenuPopOver
