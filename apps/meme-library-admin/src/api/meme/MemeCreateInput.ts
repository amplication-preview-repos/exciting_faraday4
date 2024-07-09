import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DiscussionCreateNestedManyWithoutMemesInput } from "./DiscussionCreateNestedManyWithoutMemesInput";

export type MemeCreateInput = {
  url?: string | null;
  description?: string | null;
  tags?: Array<"Option1">;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
  discussions?: DiscussionCreateNestedManyWithoutMemesInput;
};
