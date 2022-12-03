import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateSocialLinkDto } from 'src/social-links/dto/CreateSocialLinkDto'
import { UpdateSocialLinkDto } from 'src/social-links/dto/UpdateSocialLinkDto'

@Injectable()
export class SocialLinksService {
  constructor(private prisma: PrismaService) {}

  async getSocialLinks() {
    console.log('getSocialLinks')
  }

  async createSocialLink(createSocialLinkDto: CreateSocialLinkDto) {
    console.log('createSocialLink')
  }

  async updateSocialLink(
    socialLinkId: string,
    updateSocialLinkDto: UpdateSocialLinkDto,
  ) {
    console.log('updateSocialLink')
  }

  async deleteSocialLink(socialLinkId: string) {
    console.log('deletePost')
  }
}
