import type { ICredentialType, ICredentialTestRequest, INodeProperties } from 'n8n-workflow';

export class BusinessCentralOAuth2Api implements ICredentialType {
	name = 'businessCentralOAuth2Api';
	displayName = 'Business Central OAuth2 API';
	extends = ['oAuth2Api'];
	documentationUrl =
		'https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/';

	properties: INodeProperties[] = [
		{
			displayName: 'Tenant ID',
			name: 'tenantId',
			type: 'string',
			default: '',
			required: true,
			description: 'Azure AD Tenant ID (GUID)',
		},
		{
			displayName: 'Environment',
			name: 'environment',
			type: 'options',
			options: [
				{
					name: 'Production',
					value: 'Production',
				},
				{
					name: 'Sandbox',
					value: 'Sandbox',
				},
			],
			default: 'Production',
			required: true,
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
			displayName: 'Auth URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://login.microsoftonline.com/{{tenantId}}/oauth2/v2.0/authorize',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://login.microsoftonline.com/{{tenantId}}/oauth2/v2.0/token',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: 'https://api.businesscentral.dynamics.com/.default offline_access',
		},
	];
	test: ICredentialTestRequest = {
		request: {
			method: 'GET',
			url: '=https://api.businesscentral.dynamics.com/v2.0/{{$credentials.tenantId}}/{{$credentials.environment}}/api/data/v1.0/companies',
		},
	};
}
