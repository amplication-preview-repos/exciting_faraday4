import * as graphql from "@nestjs/graphql";
import { DiscussionResolverBase } from "./base/discussion.resolver.base";
import { Discussion } from "./base/Discussion";
import { DiscussionService } from "./discussion.service";

@graphql.Resolver(() => Discussion)
export class DiscussionResolver extends DiscussionResolverBase {
  constructor(protected readonly service: DiscussionService) {
    super(service);
  }
}
