import { Module } from '@nestjs/common';

import { MembersController } from './members/members.controller';
import { MembersService } from './members/members.service';
import { MembersModule } from './members/members.module';
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [MembersModule, TeamsModule],
  controllers: [MembersController],
  providers: [MembersService],
})
export class AppModule {}
