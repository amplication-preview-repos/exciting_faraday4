import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MemeListRelationFilter } from "../meme/MemeListRelationFilter";
import { DiscussionListRelationFilter } from "../discussion/DiscussionListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  memes?: MemeListRelationFilter;
  discussions?: DiscussionListRelationFilter;
};
