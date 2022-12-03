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
  @Put(':id')
  @UsePipes(ValidationPipe)
  updateContactInfo(
    @Param('id') id: string,
    @Body() updateContactInfoDto: UpdateContactInfoDto,
  ) {
    return this.contactInfoService.updateContactInfo({
      where: { ulid: id },
      data: updateContactInfoDto,
    })
  }

  @Delete(':id')
  deleteContactInfo(@Param('id') id: string) {
    return this.contactInfoService.deleteContactInfo({ ulid: id })
  }
}
