import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Gallery, GallerySchema } from './gallery.schema';
import { GalleryRepository } from './gallery.repository'

@Module({
	imports: [
		MongooseModule.forFeature([{ name: "Gallery", schema: GallerySchema }]),
	],
	providers: [GalleryRepository],
})
export class GalleryModule {}
