import { INodeType, INodeTypeDescription, NodeApiError, NodeConnectionType } from 'n8n-workflow';
import { IExecuteFunctions } from 'n8n-workflow';

export class BusinessCentral implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Business Central',
		name: 'businessCentral',
		icon: 'file:businesscentral.svg',
		group: ['transform'],
		version: 1,
		description: 'Interact with Microsoft Dynamics 365 Business Central',
		defaults: {
			name: 'Business Central',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'businessCentralOAuth2Api',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				options: [
					{
						name: 'Get Customers',
						value: 'getCustomers',
					},
				],
				default: 'getCustomers',
			},
		],
	};

	async execute(this: IExecuteFunctions) {
		// const items = this.getInputData();
		const returnData = [];

		const credentials = await this.getCredentials('businessCentralOAuth2Api');

		const tenantId = credentials.tenantId as string;
		const environment = credentials.environment as string;
		const companyId = credentials.companyId as string;

		const url = `https://api.businesscentral.dynamics.com/v2.0/${tenantId}/${environment}/ODataV4/Company('${companyId}')/customers`;

		try {
			const responseData = await this.helpers.httpRequestWithAuthentication.call(
				this,
				'businessCentralOAuth2Api',
				{ method: 'GET', url, json: true },
			);

			for (const customer of responseData.value) {
				returnData.push({ json: customer });
			}
		} catch (error) {
			throw new NodeApiError(this.getNode(), error);
		}

		return [returnData];
	}
}
