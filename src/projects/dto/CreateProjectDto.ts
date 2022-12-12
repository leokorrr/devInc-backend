import { IsNotEmpty, Matches } from 'class-validator'
import { ULID_REGEX, URL_REGEX } from '../../utils/constants'

export class CreateProjectDto {
  @IsNotEmpty()
  @Matches(ULID_REGEX)
  ulid: string

  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  image: string

  @IsNotEmpty()
  @Matches(URL_REGEX)
  link: string
}
