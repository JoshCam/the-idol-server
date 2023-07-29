import { Body, Controller, Post } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { CreateMemberDto } from 'src/dtos/createMember.dto';
import { IMember } from 'src/interfaces/member.interface';
import { MembersService } from './members.service';

@Controller('/members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  async addMember(@Body() createMemberDto: CreateMemberDto): Promise<IMember> {
    const { memberName, teamId } = instanceToPlain(createMemberDto);
    return await this.membersService.addMember(memberName, teamId);
  }
}
