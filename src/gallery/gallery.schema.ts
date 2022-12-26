import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type GalleryDocument = Gallery & Document

@Schema()
export class Gallery {
	@Prop({ default: '' })
	title: string

	@Prop({ default: '' })
	beautifulTitle: string

	@Prop({ default: '' })
	titleImage: string

	@Prop({ default: '' })
	bannerImage: string

	@Prop({ default: [{ id: String, path: String }] })
	data: []

	@Prop({ default: '' })
	date: string
}

export const GallerySchema = SchemaFactory.createForClass(Gallery)
