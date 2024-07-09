import { InputJsonValue } from "../../types";
import { MemeCreateNestedManyWithoutUsersInput } from "./MemeCreateNestedManyWithoutUsersInput";
import { DiscussionCreateNestedManyWithoutUsersInput } from "./DiscussionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  memes?: MemeCreateNestedManyWithoutUsersInput;
  discussions?: DiscussionCreateNestedManyWithoutUsersInput;
};
