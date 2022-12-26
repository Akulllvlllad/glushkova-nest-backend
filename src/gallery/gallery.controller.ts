import { Controller, Post, Get } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { GalleryDto } from './gallery.dto';
// import { GalleryService } from './gallery.service';

@Controller('gallery')
export class GalleryController {
  // constructor(private readonly galleryService: GalleryService) {}

  @Get()
  async getAllGallery() {
    return 'hello';
  }

  @Post('create')
  async createGallery(@Body() dto: GalleryDto) {
    return [dto];
  }
}
