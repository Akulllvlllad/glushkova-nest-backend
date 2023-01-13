import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type galleryDocument = HydratedDocument<gallery>

@Schema()
export class gallery {
  @Prop()
  gallery: string;

  @Prop()
  beautifulTitle: string;

  @Prop()
  titleImage: string;

  @Prop()
  date: string;

  @Prop()
  bannerImage: string;

  @Prop([String])
  data: [];

  @Prop()
  location: string;

  @Prop()
  isPublic: boolean;
}

export const gallerySchema = SchemaFactory.createForClass(gallery)
