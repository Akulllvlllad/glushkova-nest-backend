import { IsString, IsArray } from 'class-validator'


export class serviceDto {
	@IsArray()
	services: []

	@IsString()
	extra: string
}
