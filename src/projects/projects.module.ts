import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { ProjectsController } from './controllers/projects/projects.controller'
import { ProjectsService } from './services/projects/projects.service'

@Module({
  providers: [ProjectsService, PrismaService],
  controllers: [ProjectsController],
})
export class ProjectsModule {}
