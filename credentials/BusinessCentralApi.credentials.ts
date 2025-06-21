import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class BusinessCentralApi implements ICredentialType {
	name = 'BusinessCentralApi';
	displayName = 'Business Central OAuth2 API';
	extends = ['oAuth2Api'];
	documentationUrl =
		'https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/';

	properties: INodeProperties[] = [
		{
			displayName: 'Tenant ID',
			name: 'tenantId',
			type: 'string',
			required: true,
			default: '',
		},
		{
			displayName: 'Environment',
			name: 'environment',
			type: 'string',
			required: true,
			default: '',
		},
		{
			displayName: 'Company ID',
			name: 'companyId',
			type: 'string',
			default: '',
			required: true,
			description: 'Business Central company ID (GUID)',
		},
		{
			displayName: 'Tenant ID',
			name: 'tenantId',
			type: 'string',
			required: true,
			default: '',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: 'https://api.businesscentral.dynamics.com/.default',
		},
	];
}
