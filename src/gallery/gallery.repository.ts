import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';

import { InjectModel } from 'nestjs-typegoose';
import { Gallery, GalleryDocument, GallerySchema } from './gallery.schema';




@Injectable()
export class GalleryRepository {
	constructor(
		@InjectModel(Gallery)
		private readonly galleryModel: ModelType<GalleryDocument>
	) {}

	async getAllGallery() {
		return this.galleryModel.find().exec()
	}
}
