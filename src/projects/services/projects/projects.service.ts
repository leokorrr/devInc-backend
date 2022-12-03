import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateProjectDto } from 'src/projects/dto/CreateProjectDto'
import { UpdateProjectDto } from 'src/projects/dto/UpdateProjectDto'

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async getProjects() {
    console.log('getProjects')
  }

  async createProject(createProjectDto: CreateProjectDto) {
    console.log('createProject')
  }

  async updateProject(projectId: string, updateProjectDto: UpdateProjectDto) {
    console.log('updateProject')
  }

  async deleteProject(projectId: string) {
    console.log('deleteProject')
  }
}
