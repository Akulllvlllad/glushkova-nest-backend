import { Injectable, NotFoundException } from '@nestjs/common'
import { Model, Types } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'
import { galleryDto } from './gallery.dto'
import { gallery, galleryDocument } from './gallery.schema'

@Injectable()
export class GalleryService {
	constructor(
		@InjectModel(gallery) private galleryModel: Model<galleryDocument>
	) {}

	async findAll(): Promise<gallery[]> {
		return await this.galleryModel.find()
	}

	async createGallery(): Promise<Types.ObjectId> {
		const defaultGallery: galleryDto = {
			gallery: '',
			beautifulTitle: '',
			titleImage: '',
			date: '',
			bannerImage: '',
			data: [],
			location: '',
		}

		const { _id } = await this.galleryModel.create(defaultGallery)

		return _id
	}

	async updateGallery(
		_id: Types.ObjectId,
		dto: galleryDto
	): Promise<gallery[]> {
		const updateGallery = await this.galleryModel
			.findByIdAndUpdate(_id, dto, {
				new: true,
			})
			

		if (!updateGallery) throw new NotFoundException('Gallery did not found')

		return this.galleryModel.find()
	}

	async deleteOne(_id: Types.ObjectId): Promise<gallery[]> {
		const deletedGalleries = await this.galleryModel
			.findByIdAndDelete(_id)
			

		if (!deletedGalleries) throw new NotFoundException('Gallery did not found')

		return this.galleryModel.find()
	}

	async getCurrentGallery(_id: Types.ObjectId): Promise<gallery> {
		const gallery = await this.galleryModel.findOne(_id)

		if (!gallery) throw new NotFoundException('Gallery did not found')

		return gallery
	}

	async getGalleriesPage(): Promise<string[]> {
		const gallery = await this.galleryModel.find()
		const pages = []

		for (const one of gallery) {
			const { _id } = one
			pages.push(_id)
		}

		return pages
	}
}
