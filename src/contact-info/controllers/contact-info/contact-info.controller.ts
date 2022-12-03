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
import { CreateContactInfoDto } from 'src/contact-info/dto/CreateContactInfoDto'
import { UpdateContactInfoDto } from 'src/contact-info/dto/UpdateContactInfoDto'
import { ContactInfoService } from 'src/contact-info/services/contact-info/contact-info.service'
import { ContactInfo as ContactInfoModel } from '@prisma/client'
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
    return this.contactInfoService.createContactInfo(createContactInfoDto)
  }

  // TODO: check if Put right decorator
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
