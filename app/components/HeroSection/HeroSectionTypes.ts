import { ButtonType } from '../Button/ButtonTypes'
import { InputType } from '../Input/InputTypes'
import { LogoType } from '../Logo/LogoTypes'

export type HeroSectionType = {
  title: string
  description: string
  bgImg: {
    imgUrl: string
    imgAlt: string
  }
  extraClasses?: string
}
