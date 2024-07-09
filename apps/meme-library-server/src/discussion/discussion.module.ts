import { Module } from "@nestjs/common";
import { DiscussionModuleBase } from "./base/discussion.module.base";
import { DiscussionService } from "./discussion.service";
import { DiscussionController } from "./discussion.controller";
import { DiscussionResolver } from "./discussion.resolver";

@Module({
  imports: [DiscussionModuleBase],
  controllers: [DiscussionController],
  providers: [DiscussionService, DiscussionResolver],
  exports: [DiscussionService],
})
export class DiscussionModule {}
