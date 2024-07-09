import { SortOrder } from "../../util/SortOrder";

export type TagOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  memes?: SortOrder;
};
