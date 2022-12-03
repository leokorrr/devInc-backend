import { IsNotEmpty, Matches, MinLength } from 'class-validator'
import { URL_REGEX } from 'src/utils/constants'

export class CreateSocialLinkDto {
  @IsNotEmpty()
  @MinLength(3)
  title: string

  @IsNotEmpty()
  @Matches(URL_REGEX)
  link: string

  @IsNotEmpty()
  @Matches(URL_REGEX)
  imageUrl: string
}
