import { Test, TestingModule } from '@nestjs/testing';
import { TeamsService } from '../../src/teams/teams.service';
import { MembersService } from '../../src/members/members.service';
import { TeamsController } from '../../src/teams/teams.controller';
import { MembersController } from '../../src/members/members.controller';

describe('AppController', () => {
  let teamController: TeamsController;
  let teamService: TeamsService;
  let memberController: MembersController;
  let memberService: MembersService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TeamsController, MembersController],
      providers: [TeamsService, MembersService],
    }).compile();

    teamController = app.get<TeamsController>(TeamsController);
    teamService = app.get<TeamsService>(TeamsService);
    memberController = app.get<MembersController>(MembersController);
    memberService = app.get<MembersService>(MembersService);
  });

  it('should build expected dependencies', () => {
    expect(teamController).toBeDefined();
    expect(teamService).toBeDefined();
    expect(memberController).toBeDefined();
    expect(memberService).toBeDefined();
  });
});
