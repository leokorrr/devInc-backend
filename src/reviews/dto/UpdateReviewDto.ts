import { IsNotEmpty, Matches } from 'class-validator'
import { URL_REGEX } from 'src/utils/constants'

export class UpdateReviewDto {
  @IsNotEmpty()
  text: string

  @IsNotEmpty()
  author: string

  @Matches(URL_REGEX)
  link: string

  @Matches(URL_REGEX)
  projectLink: string
}
