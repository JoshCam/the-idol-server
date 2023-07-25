import { Module } from '@nestjs/common';
import { MembersController } from './members/members.controller';
import { MembersService } from './members/members.service';
import { MembersModule } from './members/members.module';
import { TeamsModule } from './teams/teams.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [MembersModule, TeamsModule],
  controllers: [MembersController],
  providers: [MembersService, PrismaService],
})
export class AppModule {}
