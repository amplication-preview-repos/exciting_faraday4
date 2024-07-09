import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DiscussionListRelationFilter } from "../discussion/DiscussionListRelationFilter";

export type MemeWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  discussions?: DiscussionListRelationFilter;
};
