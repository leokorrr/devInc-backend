import { Injectable } from '@nestjs/common'
import { Prisma, SocialLink } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { CreateSocialLinkDto } from 'src/social-links/dto/CreateSocialLinkDto'
import { UpdateSocialLinkDto } from 'src/social-links/dto/UpdateSocialLinkDto'

@Injectable()
export class SocialLinksService {
  constructor(private prisma: PrismaService) {}

  async getSocialLinks(): Promise<SocialLink[]> {
    return this.prisma.socialLink.findMany()
  }

  async createSocialLink(
    data: Prisma.SocialLinkCreateInput,
  ): Promise<SocialLink> {
    return this.prisma.socialLink.create({ data })
  }

  async updateSocialLink(
    socialLinkId: string,
    updateSocialLinkDto: UpdateSocialLinkDto,
  ) {
    console.log('updateSocialLink')
  }

  async deleteSocialLink(
    where: Prisma.SocialLinkWhereUniqueInput,
  ): Promise<SocialLink> {
    return this.prisma.socialLink.delete({ where })
  }
}
