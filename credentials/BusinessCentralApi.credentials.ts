import type { ICredentialType, INodeProperties } from 'n8n-workflow';

function stringProperty(
	displayName: string,
	name: string,
	description = '',
	required = true,
	defaultValue = '',
): INodeProperties {
	return { displayName, name, type: 'string', required, default: defaultValue, description };
}

export class BusinessCentralApi implements ICredentialType {
	name = 'businessCentralApi';
	displayName = 'Business Central OAuth2 API';
	extends = ['microsoftOAuth2Api'];
	documentationUrl =
		'https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/';

	properties: INodeProperties[] = [
		stringProperty('Tenant ID', 'tenantId', 'Your Azure Active Directory (AAD) tenant ID'),
		stringProperty('Environment Name', 'environmentName', 'Your Business Central environment'),
		stringProperty('Company ID', 'companyId', 'Your business central company name'),
		{
			displayName: 'OAuth2 Scope',
			name: 'scope',
			type: 'hidden',
			default: 'https://api.businesscentral.dynamics.com/.default',
		},
	];
}
