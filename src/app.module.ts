import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProjectsModule } from './projects/projects.module'
import { ReviewsModule } from './reviews/reviews.module'
import { ContactInfoModule } from './contact-info/contact-info.module'
import { SocialLinksModule } from './social-links/social-links.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProjectsModule,
    ReviewsModule,
    ContactInfoModule,
    SocialLinksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
