import { IsNotEmpty, Matches, MinLength } from 'class-validator'
import { ULID_REGEX, URL_REGEX } from 'src/utils/constants'

export class CreateSocialLinkDto {
  @IsNotEmpty()
  @Matches(ULID_REGEX)
  ulid: string

  @IsNotEmpty()
  @MinLength(3)
  title: string

  @IsNotEmpty()
  @Matches(URL_REGEX)
  link: string
}
