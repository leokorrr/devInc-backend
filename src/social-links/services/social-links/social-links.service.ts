import { Injectable } from '@nestjs/common'
import { Prisma, SocialLink } from '@prisma/client'
import { PrismaService } from '../../../prisma.service'

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

  async updateSocialLink(params: {
    where: Prisma.SocialLinkWhereUniqueInput
    data: Prisma.SocialLinkUpdateInput
  }): Promise<SocialLink> {
    const { data, where } = params
    return this.prisma.socialLink.update({
      data,
      where,
    })
  }

  async deleteSocialLink(
    where: Prisma.SocialLinkWhereUniqueInput,
  ): Promise<SocialLink> {
    return this.prisma.socialLink.delete({ where })
  }
}
