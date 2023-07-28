import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { PrismaService } from 'src/prisma.service';
import { MembersService } from 'src/members/members.service';

@Module({
  controllers: [TeamsController],
  providers: [TeamsService, PrismaService, MembersService],
})
export class TeamsModule {}
