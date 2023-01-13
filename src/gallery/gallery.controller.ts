import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { galleryDto } from './gallery.dto';
import { GalleryService } from './gallery.service';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}
  @Get(':id')
  async getGallery(@Param('id') id: Types.ObjectId) {
    return await this.galleryService.getCurrentGallery(id);
  }

  @Post('add-image/:id')
  async imageLinkAdd(
    @Param('id') id: Types.ObjectId,
    @Body() { imageLink }: { imageLink: string },
  ) {
    return await this.galleryService.addImageInGallery(id, imageLink);
  }
  @Get('get-image/:id')
  async getImageFromGallery(@Param('id') id: Types.ObjectId) {
    return await this.galleryService.getAllImagesFromGallery(id);
  }

  @Post()
  async createGallery() {
    return this.galleryService.createGallery();
  }

  @Get('all-page')
  async getGalleriesPage() {
    return await this.galleryService.getGalleriesPage();
  }

  @Delete(':id')
  async deleteGallery(@Param('id') id: Types.ObjectId) {
    return this.galleryService.deleteOne(id);
  }

  @Get()
  async getGalleries() {
    return this.galleryService.findAll();
  }

  @Patch(':id')
  async updateGallery(
    @Param('id') id: Types.ObjectId,
    @Body() dto: galleryDto,
  ) {
    return await this.galleryService.updateGallery(id, dto);
  }
}
