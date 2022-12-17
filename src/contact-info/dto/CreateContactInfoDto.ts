import { IsNotEmpty, Matches } from 'class-validator'
import { EMAIL_REGEX } from '../../utils/constants'

export class CreateContactInfoDto {
  @IsNotEmpty()
  @Matches(EMAIL_REGEX)
  email: string

  @IsNotEmpty()
  address: string

  phone: string
}
