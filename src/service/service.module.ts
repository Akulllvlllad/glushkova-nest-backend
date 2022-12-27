import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { serviceController } from './service.controller'
import { service, serviceSchema } from './service.schema'
import { serviceService } from './service.service'

@Module({
	imports: [
		MongooseModule.forFeature([{ name: service.name, schema: serviceSchema }]),
	],
	controllers: [serviceController],
	providers: [serviceService],
})
export class serviceModule {}
