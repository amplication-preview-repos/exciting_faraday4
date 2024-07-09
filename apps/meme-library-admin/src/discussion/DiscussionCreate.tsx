import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { MemeTitle } from "../meme/MemeTitle";

export const DiscussionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="meme.id" reference="Meme" label="Meme">
          <SelectInput optionText={MemeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
