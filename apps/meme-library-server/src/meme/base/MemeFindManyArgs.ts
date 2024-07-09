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
import { MemeWhereInput } from "./MemeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MemeOrderByInput } from "./MemeOrderByInput";

@ArgsType()
class MemeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MemeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MemeWhereInput, { nullable: true })
  @Type(() => MemeWhereInput)
  where?: MemeWhereInput;

  @ApiProperty({
    required: false,
    type: [MemeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MemeOrderByInput], { nullable: true })
  @Type(() => MemeOrderByInput)
  orderBy?: Array<MemeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MemeFindManyArgs as MemeFindManyArgs };