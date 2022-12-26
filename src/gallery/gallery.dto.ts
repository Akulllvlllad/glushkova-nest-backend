import { IsString, IsArray } from 'class-validator';

export class GalleryDto {
  @IsString()
  title: string;

  @IsString()
  beautifulTitle: string;

  @IsString()
  titleImage: string;

  @IsString()
  bannerImage: string;

  @IsArray()
  data: [];

  @IsString()
  date: string;
}
