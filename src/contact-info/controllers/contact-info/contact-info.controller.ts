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
import { CreateContactInfoDto } from '../../dto/CreateContactInfoDto'
import { UpdateContactInfoDto } from '../../dto/UpdateContactInfoDto'
import { ContactInfoService } from '../../services/contact-info/contact-info.service'
import { ContactInfo as ContactInfoModel } from '@prisma/client'
import { ulid } from 'ulid'
@Controller('contact-info')
export class ContactInfoController {
  constructor(private contactInfoService: ContactInfoService) {}

  @Get('')
  getContactInfo(): Promise<ContactInfoModel[]> {
    return this.contactInfoService.getContactInfo()
  }

  @Post('')
  @UsePipes(ValidationPipe)
  createContactInfo(
    @Body() createContactInfoDto: CreateContactInfoDto,
  ): Promise<ContactInfoModel> {
    return this.contactInfoService.createContactInfo({
      ulid: ulid(),
      ...createContactInfoDto,
    })
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  updateContactInfo(
    @Param('id') id: string,
    @Body() updateContactInfoDto: UpdateContactInfoDto,
  ): Promise<ContactInfoModel> {
    return this.contactInfoService.updateContactInfo({
      where: { ulid: id },
      data: updateContactInfoDto,
    })
  }

  @Delete(':id')
  deleteContactInfo(@Param('id') id: string): Promise<ContactInfoModel> {
    return this.contactInfoService.deleteContactInfo({ ulid: id })
  }
}
