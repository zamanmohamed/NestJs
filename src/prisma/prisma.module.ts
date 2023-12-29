import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  //අනිත් folders වලට use කරන්න export කරනවා
  exports: [PrismaService],
})
export class PrismaModule {}
