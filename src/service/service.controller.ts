import { Controller, Get, Patch, Param, Body } from '@nestjs/common'
import { Types } from 'mongoose'
import { serviceDto } from './service.dto'

import { serviceService } from './service.service'

@Controller('service')
export class serviceController {
	constructor(private readonly serviceService: serviceService) {}

	@Get()
	async getService() {
		return this.serviceService.findAll()
	}

	@Patch(':id')
	async updateService(
		@Param('id') id: Types.ObjectId,
		@Body() dto: serviceDto
	) {
		return await this.serviceService.updateService(id, dto)
	}

	
}
