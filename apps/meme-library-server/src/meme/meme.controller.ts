import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MemeService } from "./meme.service";
import { MemeControllerBase } from "./base/meme.controller.base";

@swagger.ApiTags("memes")
@common.Controller("memes")
export class MemeController extends MemeControllerBase {
  constructor(protected readonly service: MemeService) {
    super(service);
  }
}
