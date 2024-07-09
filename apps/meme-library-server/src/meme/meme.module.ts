import { Module } from "@nestjs/common";
import { MemeModuleBase } from "./base/meme.module.base";
import { MemeService } from "./meme.service";
import { MemeController } from "./meme.controller";
import { MemeResolver } from "./meme.resolver";

@Module({
  imports: [MemeModuleBase],
  controllers: [MemeController],
  providers: [MemeService, MemeResolver],
  exports: [MemeService],
})
export class MemeModule {}
