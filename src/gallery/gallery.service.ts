import { Injectable, NotFoundException } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { galleryDto } from './gallery.dto';
import { gallery, galleryDocument } from './gallery.schema';

@Injectable()
export class GalleryService {
  constructor(
    @InjectModel(gallery) private galleryModel: Model<galleryDocument>,
  ) {}

  async findAll(): Promise<gallery[]> {
    return await this.galleryModel.find();
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
      isPublic: false,
    };

    const { _id } = await this.galleryModel.create(defaultGallery);

    return _id;
  }

  async updateGallery(_id: Types.ObjectId, dto: galleryDto): Promise<string> {
    const updateGallery = await this.galleryModel.findByIdAndUpdate(_id, dto, {
      new: true,
    });

    if (!updateGallery) throw new NotFoundException('Gallery did not found');

    return 'обновление прошло успешно';
  }

  async deleteOne(_id: Types.ObjectId): Promise<string> {
    const deletedGalleries = await this.galleryModel.findByIdAndDelete(_id);

    if (!deletedGalleries) throw new NotFoundException('Gallery did not found');

    return 'Удаление прошло успешно';
  }

  async getCurrentGallery(_id: Types.ObjectId): Promise<gallery> {
    const gallery = await this.galleryModel.findById(_id);

    if (!gallery) throw new NotFoundException('Gallery did not found');

    return gallery;
  }

  async getGalleriesPage(): Promise<string[]> {
    const gallery = await this.galleryModel.find();
    const pages = [];

    for (const one of gallery) {
      const { _id } = one;
      pages.push(_id);
    }

    return pages;
  }

  async addImageInGallery(
    _id: Types.ObjectId,
    imageLink: string,
  ): Promise<string> {
    const gallery = await this.galleryModel.findByIdAndUpdate(
      _id,
      {
        $push: {
          data: imageLink,
        },
      },
      { safe: true, upsert: true, new: true },
    );

    if (!gallery) throw new NotFoundException('Gallery did not found');

    return 'Добавление прошло успешно';
  }

  async getAllImagesFromGallery(_id: Types.ObjectId): Promise<string[]> {
    const { data } = await this.galleryModel.findById(_id);

    if (!gallery) throw new NotFoundException('Gallery did not found');

    return data;
  }
}
