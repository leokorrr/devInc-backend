import { IsNotEmpty, Matches, MinLength } from 'class-validator'
import { URL_REGEX } from '../../utils/constants'

export class UpdateSocialLinkDto {
  @IsNotEmpty()
  @MinLength(3)
  title: string

  @IsNotEmpty()
  @Matches(URL_REGEX)
  link: string
}
