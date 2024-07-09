import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { DiscussionTitle } from "../discussion/DiscussionTitle";

export const MemeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="url" source="url" />
        <TextInput label="description" multiline source="description" />
        <SelectArrayInput
          label="Tags"
          source="tags"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="name" source="name" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="discussions"
          reference="Discussion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DiscussionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
