import { IsNotEmpty, Matches } from 'class-validator'
import { EMAIL_REGEX } from 'src/utils/constants'

export class UpdateContactInfoDto {
  @IsNotEmpty()
  @Matches(EMAIL_REGEX)
  email: string

  @IsNotEmpty()
  address: string

  phone: string
}