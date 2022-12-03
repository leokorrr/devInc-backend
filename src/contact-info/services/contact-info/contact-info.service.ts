import { Injectable } from '@nestjs/common'
import { CreateContactInfoDto } from 'src/contact-info/dto/CreateContactInfoDto'
import { UpdateContactInfoDto } from 'src/contact-info/dto/UpdateContactInfoDto'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class ContactInfoService {
  constructor(private prisma: PrismaService) {}

  async getContactInfo() {
    console.log('getContactInfo')
  }

  async createContactInfo(createContactInfoDto: CreateContactInfoDto) {
    console.log('createContactInfo')
  }

  async updateContactInfo(
    contactInfoId: string,
    updateContactInfoDto: UpdateContactInfoDto,
  ) {
    console.log('updateContactInfo')
  }

  async deleteContactInfo(contactInfoId: string) {
    console.log('deleteContactInfo')
  }
}
