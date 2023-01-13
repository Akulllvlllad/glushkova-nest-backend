import { IsString, IsArray, IsBoolean } from 'class-validator'

export class galleryDto {
  @IsString()
  gallery: string;

  @IsString()
  beautifulTitle: string;

  @IsString()
  titleImage: string;

  @IsString()
  date: string;

  @IsString()
  bannerImage: string;

  @IsArray()
  data: [];

  @IsString()
  location: string;

  @IsBoolean()
  isPublic: boolean;
}
