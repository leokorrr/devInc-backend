import { IsNotEmpty, Matches } from 'class-validator'
import { ULID_REGEX, URL_REGEX } from '../../utils/constants'

export class CreateReviewDto {
  @IsNotEmpty()
  @Matches(ULID_REGEX)
  ulid: string

  @IsNotEmpty()
  text: string

  @IsNotEmpty()
  author: string

  // @Matches(URL_REGEX)
  link: string

  // @Matches(URL_REGEX)
  projectLink: string
}
