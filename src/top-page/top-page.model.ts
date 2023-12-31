import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TopPageDocument = HydratedDocument<TopPage>;

export enum TopLevelCategory {
  Courses,
  Servises,
  Books,
  Products,
}

export class HhData {
  @Prop()
  count: number;

  @Prop()
  juniorSalary: number;

  @Prop()
  middleSalary: number;

  @Prop()
  seniorSalary: number;
}

export class TopPageAdvantages {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

@Schema({ timestamps: true })
export class TopPage {
  @Prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;

  @Prop()
  secondCategory: string;

  @Prop()
  alias: string;

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop()
  hh?: HhData;

  @Prop({ type: () => [TopPageAdvantages] })
  advantages: [TopPageAdvantages];

  @Prop()
  seoText: string;

  @Prop()
  tagsTitle: string;

  @Prop([String])
  tags: [string];

  @Prop(Date)
  createdAt: Date;

  @Prop(Date)
  updatedAt: Date;
}

export const TopPageSchema = SchemaFactory.createForClass(TopPage);
TopPageSchema.index({ '$**': 'text' });
