import { Module } from '@nestjs/common';

import { MembersController } from './members/members.controller';
import { MembersService } from './members/members.service';
import { MembersModule } from './members/members.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [MembersModule, TeamModule],
  controllers: [MembersController],
  providers: [MembersService],
})
export class AppModule {}
