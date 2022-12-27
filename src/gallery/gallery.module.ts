import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GalleryController } from './gallery.controller';
import { gallery, gallerySchema } from './gallery.schema';
import { GalleryService } from './gallery.service';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: gallery.name, schema: gallerySchema }]),
	],
	controllers: [GalleryController],
	providers: [GalleryService],
})
export class GalleryModule {}
