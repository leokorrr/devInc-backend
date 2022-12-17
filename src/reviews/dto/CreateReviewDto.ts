import { IsNotEmpty, Matches } from 'class-validator'
import { URL_REGEX } from '../../utils/constants'

export class CreateReviewDto {
  @IsNotEmpty()
  text: string

  @IsNotEmpty()
  author: string

  // @TODO: check for null value
  // @Matches(new RegExp(`${URL_REGEX}|^$`))
  link: string

  // @Matches(new RegExp(`${URL_REGEX}|^$`))
  projectLink: string
}
