/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MemeCreateInput } from "./MemeCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateMemeArgs {
  @ApiProperty({
    required: true,
    type: () => MemeCreateInput,
  })
  @ValidateNested()
  @Type(() => MemeCreateInput)
  @Field(() => MemeCreateInput, { nullable: false })
  data!: MemeCreateInput;
}

export { CreateMemeArgs as CreateMemeArgs };
