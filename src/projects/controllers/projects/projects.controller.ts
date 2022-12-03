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

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get('')
  getProjects() {
    return this.projectsService.getProjects()
  }

  @Post('')
  @UsePipes(ValidationPipe)
  createProject(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.createProject(createProjectDto)
  }

  // TODO: check if Put right decorator
  @Put(':project_id')
  updateProject(
    @Param('project_id') projectId: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ) {
    return this.projectsService.updateProject(projectId, updateProjectDto)
  }

  @Delete(':project_id')
  deleteProject(@Param('project_id') projectId: string) {
    return this.projectsService.deleteProject(projectId)
  }
}
