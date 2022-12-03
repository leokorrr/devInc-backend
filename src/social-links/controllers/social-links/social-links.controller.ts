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
  createSocialLink(@Body() createSocialLinkDto: CreateSocialLinkDto) {
    return this.socialLinksService.createSocialLink(createSocialLinkDto)
  }

  // TODO: check if Put right decorator
  @Put(':social_link_id')
  @UsePipes(ValidationPipe)
  updateSocialLink(
    @Param('social_link_id') socialLinkId: string,
    @Body() updateSocialLinkDto: UpdateSocialLinkDto,
  ) {
    return this.socialLinksService.updateSocialLink(
      socialLinkId,
      updateSocialLinkDto,
    )
  }

  @Delete(':social_link_id')
  deleteSocialLink(@Param('social_link_id') socialLinkId: string) {
    return this.socialLinksService.deleteSocialLink({
      ulid: socialLinkId,
    })
  }
}
