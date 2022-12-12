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
import { CreateSocialLinkDto } from '../../dto/CreateSocialLinkDto'
import { UpdateSocialLinkDto } from '../../dto/UpdateSocialLinkDto'

import { SocialLinksService } from '../../services/social-links/social-links.service'
import { SocialLink as SocialLinkModel } from '@prisma/client'

@Controller('social-links')
export class SocialLinksController {
  constructor(private socialLinksService: SocialLinksService) {}

  @Get('')
  getSocialLinks(): Promise<SocialLinkModel[]> {
    return this.socialLinksService.getSocialLinks()
  }

  @Post('')
  @UsePipes(ValidationPipe)
  // TODO: ULID creation check
  createSocialLink(
    @Body() createSocialLinkDto: CreateSocialLinkDto,
  ): Promise<SocialLinkModel> {
    return this.socialLinksService.createSocialLink(createSocialLinkDto)
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  updateSocialLink(
    @Param('id') id: string,
    @Body() updateSocialLinkDto: UpdateSocialLinkDto,
  ): Promise<SocialLinkModel> {
    return this.socialLinksService.updateSocialLink({
      where: { ulid: id },
      data: updateSocialLinkDto,
    })
  }

  @Delete(':id')
  deleteSocialLink(@Param('id') id: string): Promise<SocialLinkModel> {
    return this.socialLinksService.deleteSocialLink({
      ulid: id,
    })
  }
}
