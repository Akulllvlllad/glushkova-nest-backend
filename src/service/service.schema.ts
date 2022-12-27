import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'




export type serviceDocument = HydratedDocument<service>

@Schema()
export class service {
	@Prop()
	services: []

	@Prop()
	extra: string
}

export const serviceSchema = SchemaFactory.createForClass(service)
