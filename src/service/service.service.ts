import { Model } from 'mongoose'
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { service, serviceDocument } from './service.schema'
import { serviceDto } from './service.dto'
import { Types } from 'mongoose'
@Injectable()
export class serviceService {
	constructor(
		@InjectModel(service.name) private serviceModel: Model<serviceDocument>
	) {}

	async findAll(): Promise<service[]> {
		
		return await this.serviceModel.find()
	}

	async updateService(_id: Types.ObjectId, dto: serviceDto): Promise<service> {
		const updateService = await this.serviceModel.findOneAndUpdate(_id, dto, {
			new: true,
		})

		if (!updateService) throw new NotFoundException('Error')

		return updateService
	}
}
