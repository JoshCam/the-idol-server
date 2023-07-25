import { Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { IMember } from 'src/interfaces/member.interface';

@Controller('/members')
export class MembersController {
  @Get()
  getAllMembers(): IMember[] {
    return [{ name: 'steve', teamName: 'uno' }];
  }

  @Get('/team/:id')
  getAllTeamMembers(@Param('id') id: string): IMember[] {
    // Get all members from the database for a specified team
    return [{ name: 'steve', teamName: 'uno' }];
  }

  @Get(':id')
  getMember(@Param('id') id: string): IMember {
    // Get specific member
    return { name: 'kate', teamName: 'dos' };
  }

  @Patch(':id')
  updateMember(@Param('id') id: string): IMember {
    // edit specific member
    return { name: 'kate', teamName: 'Tres' };
  }

  @Delete(':id')
  deleteMember(@Param('id') id: string): IMember {
    // remove specific member (probs just add a deleted tag)\
    return { name: 'kate', teamName: 'Tres' };
  }
}
