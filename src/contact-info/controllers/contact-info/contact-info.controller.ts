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

@Controller('contact-info')
export class ContactInfoController {
  constructor(private contactInfoService: ContactInfoService) {}

  @Get('')
  getContactInfo() {
    return this.contactInfoService.getContactInfo()
  }

  @Post('')
  @UsePipes(ValidationPipe)
  createContactInfo(@Body() createContactInfoDto: CreateContactInfoDto) {
    return this.contactInfoService.createContactInfo(createContactInfoDto)
  }

  // TODO: check if Put right decorator
  @Put(':contact_info__id')
  @UsePipes(ValidationPipe)
  updateContactInfo(
    @Param('contact_info_id') contactInfoId: string,
    @Body() updateContactInfoDto: UpdateContactInfoDto,
  ) {
    return this.contactInfoService.updateContactInfo(
      contactInfoId,
      updateContactInfoDto,
    )
  }

  @Delete(':contact_info_id')
  deleteContactInfo(@Param('contact_info_id') contactInfoId: string) {
    return this.contactInfoService.deleteContactInfo(contactInfoId)
  }
}
