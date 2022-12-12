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
import { CreateProjectDto } from 'src/projects/dto/CreateProjectDto'
import { UpdateProjectDto } from 'src/projects/dto/UpdateProjectDto'
import { ProjectsService } from 'src/projects/services/projects/projects.service'
import { Project as ProjectModel } from '@prisma/client'
@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get('')
  getProjects(): Promise<ProjectModel[]> {
    return this.projectsService.getProjects()
  }

  @Post('')
  @UsePipes(ValidationPipe)
  createProject(
    @Body() createProjectDto: CreateProjectDto,
  ): Promise<ProjectModel> {
    return this.projectsService.createProject(createProjectDto)
  }

  // TODO: check if Put right decorator
  @Put(':id')
  updateProject(
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ): Promise<ProjectModel> {
    return this.projectsService.updateProject({
      where: { ulid: id },
      data: updateProjectDto,
    })
  }

  @Delete(':id')
  deleteProject(@Param('id') id: string): Promise<ProjectModel> {
    return this.projectsService.deleteProject({
      ulid: id,
    })
  }
}