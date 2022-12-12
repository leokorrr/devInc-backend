import { Injectable } from '@nestjs/common'
import { ContactInfo, Prisma } from '@prisma/client'
import { PrismaService } from '../../../prisma.service'

@Injectable()
export class ContactInfoService {
  constructor(private prisma: PrismaService) {}

  async getContactInfo(): Promise<ContactInfo[]> {
    return this.prisma.contactInfo.findMany()
  }

  async createContactInfo(
    data: Prisma.ContactInfoCreateInput,
  ): Promise<ContactInfo> {
    return this.prisma.contactInfo.create({ data })
  }

  async updateContactInfo(params: {
    where: Prisma.ContactInfoWhereUniqueInput
    data: Prisma.ContactInfoUpdateInput
  }): Promise<ContactInfo> {
    const { data, where } = params
    return this.prisma.contactInfo.update({
      data,
      where,
    })
  }

  async deleteContactInfo(
    where: Prisma.ContactInfoWhereUniqueInput,
  ): Promise<ContactInfo> {
    return this.prisma.contactInfo.delete({ where })
  }
}
