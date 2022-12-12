import { Injectable } from '@nestjs/common'
import { Prisma, Project } from '@prisma/client'
import { PrismaService } from '../../../prisma.service'

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async getProjects(): Promise<Project[]> {
    return this.prisma.project.findMany()
  }

  async createProject(data: Prisma.ProjectCreateInput): Promise<Project> {
    return this.prisma.project.create({ data })
  }

  async updateProject(params: {
    where: Prisma.ProjectWhereUniqueInput
    data: Prisma.ProjectUpdateInput
  }): Promise<Project> {
    const { data, where } = params
    return this.prisma.project.update({
      data,
      where,
    })
  }

  async deleteProject(where: Prisma.ProjectWhereUniqueInput): Promise<Project> {
    return this.prisma.project.delete({ where })
  }
}
