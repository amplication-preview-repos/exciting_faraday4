import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DiscussionService } from "./discussion.service";
import { DiscussionControllerBase } from "./base/discussion.controller.base";

@swagger.ApiTags("discussions")
@common.Controller("discussions")
export class DiscussionController extends DiscussionControllerBase {
  constructor(protected readonly service: DiscussionService) {
    super(service);
  }
}
