import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common'
import { Types } from 'mongoose'
import { galleryDto } from './gallery.dto'
import { GalleryService } from './gallery.service'

@Controller('gallery')
export class GalleryController {
	constructor(private readonly galleryService: GalleryService) {}

	@Get('all-page')
	async getGalleriesPage() {
		return await this.galleryService.getGalleriesPage()
	}

	@Get()
	async getGalleries() {
		return this.galleryService.findAll()
	}

	@Post()
	async createGallery() {
		return this.galleryService.createGallery()
	}

	@Delete(':id')
	async deleteGallery(@Param('id') id: Types.ObjectId) {
		return this.galleryService.deleteOne(id)
	}

	@Patch(':id')
	async updateGallery(
		@Param('id') id: Types.ObjectId,
		@Body() dto: galleryDto
	) {
		return await this.galleryService.updateGallery(id, dto)
	}

	@Get(':id')
	async getGallery(@Param('id') id: Types.ObjectId) {
		return await this.galleryService.getCurrentGallery(id)
	}
}
