import { Discussion as TDiscussion } from "../api/discussion/Discussion";

export const DISCUSSION_TITLE_FIELD = "id";

export const DiscussionTitle = (record: TDiscussion): string => {
  return record.id?.toString() || String(record.id);
};
