import { Test, TestingModule } from '@nestjs/testing';
import { TeamService } from '../../src/team/team.service';
import { MembersService } from '../../src/members/members.service';
import { TeamController } from '../../src/team/team.controller';
import { MembersController } from '../../src/members/members.controller';

describe('AppController', () => {
  let teamController: TeamController;
  let teamService: TeamService;
  let memberController: MembersController;
  let memberService: MembersService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TeamController, MembersController],
      providers: [TeamService, MembersService],
    }).compile();

    teamController = app.get<TeamController>(TeamController);
    teamService = app.get<TeamService>(TeamService);
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
