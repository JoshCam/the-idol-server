import { Injectable } from '@nestjs/common';
import { IMember } from 'src/interfaces/member.interface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MembersService {
  constructor(private prisma: PrismaService) {}

  async getAllMembers(): Promise<IMember[]> {
    return await this.prisma.members.findMany();
  }
}
