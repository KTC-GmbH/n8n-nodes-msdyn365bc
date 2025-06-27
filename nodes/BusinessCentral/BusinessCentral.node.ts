import { INodeType, INodeTypeDescription, NodeApiError, NodeConnectionType } from 'n8n-workflow';
import { IExecuteFunctions } from 'n8n-workflow';

export class BusinessCentral implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Business Central',
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		name: 'businessCentral',
		icon: 'file:businesscentral.svg',
		group: ['transform'],
		version: 1,
		description: 'Interact with Microsoft Dynamics 365 Business Central',
		defaults: { name: 'Business Central' },
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [{ name: 'businessCentralApi', required: true }],
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [{ name: 'Get Customers', value: 'getCustomers' }],
				default: 'getCustomers',
			},
			{
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'string',
				default: 'workflowCustomers',
				description: 'Service path used in the API URL (e.g. workflowCustomers)',
				displayOptions: {
					show: {
						operation: ['getCustomers'],
					},
				},
				required: true,
			},
		],
	};

	async execute(this: IExecuteFunctions) {
		const returnData = [];
		const operation = this.getNodeParameter('operation', 0) as string;

		if (operation === 'getCustomers') {
			const serviceName = this.getNodeParameter('serviceName', 0) as string;
			const credentials = await this.getCredentials('businessCentralApi');
			const tenantId = credentials.tenantId as string;
			const environment = (credentials.environmentName || credentials.environment) as string;
			const companyId = credentials.companyId as string;

			const url = `https://api.businesscentral.dynamics.com/v2.0/${tenantId}/${environment}/ODataV4/Company('${companyId}')/${serviceName}`;

			let lastError;

			try {
				const responseData = await this.helpers.httpRequestWithAuthentication.call(
					this,
					'businessCentralApi',
					{ method: 'GET', url, json: true },
				);

				if (responseData.value && Array.isArray(responseData.value)) {
					for (const customer of responseData.value) {
						returnData.push({ json: customer });
					}
					return [returnData];
				}
			} catch (error) {
				console.log('Attempt failed:', error.message);
				lastError = error;
			}

			if (lastError) {
				throw new NodeApiError(this.getNode(), lastError, {
					message: 'All API endpoint attempts failed',
					description: 'Tried multiple endpoint formats without success',
					httpCode: lastError.response?.status?.toString() || 'Unknown',
				});
			}
		}

		return [returnData];
	}
}
