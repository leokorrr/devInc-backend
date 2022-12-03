import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { CreateSocialLinkDto } from 'src/social-links/dto/CreateSocialLinkDto'
import { UpdateSocialLinkDto } from 'src/social-links/dto/UpdateSocialLinkDto'

import { SocialLinksService } from 'src/social-links/services/social-links/social-links.service'

@Controller('social-links')
export class SocialLinksController {
  constructor(private socialLinksService: SocialLinksService) {}

  @Get('')
  getSocialLinks() {
    return this.socialLinksService.getSocialLinks()
  }

  @Post('')
  @UsePipes(ValidationPipe)
  // TODO: ULID creation check
  createSocialLink(@Body() createSocialLinkDto: CreateSocialLinkDto) {
    return this.socialLinksService.createSocialLink(createSocialLinkDto)
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  updateSocialLink(
    @Param('id') id: string,
    @Body() updateSocialLinkDto: UpdateSocialLinkDto,
  ) {
    return this.socialLinksService.updateSocialLink({
      where: { ulid: id },
      data: updateSocialLinkDto,
    })
  }

  @Delete(':id')
  deleteSocialLink(@Param('id') id: string) {
    return this.socialLinksService.deleteSocialLink({
      ulid: id,
    })
  }
}
