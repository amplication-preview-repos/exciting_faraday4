import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MemeServiceBase } from "./base/meme.service.base";

@Injectable()
export class MemeService extends MemeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
