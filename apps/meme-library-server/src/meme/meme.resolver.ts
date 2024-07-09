import * as graphql from "@nestjs/graphql";
import { MemeResolverBase } from "./base/meme.resolver.base";
import { Meme } from "./base/Meme";
import { MemeService } from "./meme.service";

@graphql.Resolver(() => Meme)
export class MemeResolver extends MemeResolverBase {
  constructor(protected readonly service: MemeService) {
    super(service);
  }
}
