import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { MongooseModule } from "@nestjs/mongoose";
import { GalleryController } from "./gallery/gallery.controller";
// import { GalleryModule } from './gallery/gallery.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/glushkova-mong')],
  controllers: [AppController, GalleryController],
  providers: [AppService],
})
export class AppModule {}
