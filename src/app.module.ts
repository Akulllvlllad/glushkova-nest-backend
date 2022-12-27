import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { MongooseModule } from "@nestjs/mongoose";
import { serviceModule } from './service/service.module'
import { GalleryModule } from './gallery/gallery.module';
import { StateModule } from './state/state.module';




@Module({
	imports: [
		MongooseModule.forRoot('mongodb://localhost:27017/glushkova-mongo'),
		serviceModule,
		GalleryModule,
		StateModule,
	
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
