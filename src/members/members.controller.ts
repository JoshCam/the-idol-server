import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { CreateMemberDto } from 'src/dtos/createMember.dto';
import { IMember } from 'src/interfaces/member.interface';
import { MembersService } from './members.service';
// import { IMember } from 'src/interfaces/member.interface';

@Controller('/members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  async addMember(@Body() createMemberDto: CreateMemberDto): Promise<IMember> {
    const { memberName, teamId } = instanceToPlain(createMemberDto);
    return await this.membersService.addMember(memberName, teamId);
  }

  @Get(':id')
  getMember(@Param('id') id: string): any {
    // Get specific member
    return { name: 'kate' };
  }

  @Patch(':id')
  updateMember(@Param('id') id: string): any {
    // edit specific member
    return { name: 'kate' };
  }

  @Delete(':id')
  deleteMember(@Param('id') id: string): any {
    // remove specific member (probs just add a deleted tag)\
    return { name: 'kate' };
  }
}
