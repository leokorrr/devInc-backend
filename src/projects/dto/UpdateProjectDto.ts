import { IsNotEmpty, Matches } from 'class-validator'
import { URL_REGEX } from 'src/utils/constants'

export class UpdateProjectDto {
  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  image: string

  @IsNotEmpty()
  @Matches(URL_REGEX)
  link: string
}
