export default {
	classes: {
		form: 'ui form',
		question: 'field',
		errorMessage: 'ui error compact message visible tiny ',
		controlButton: 'ui hidden message'
	},
	formPanels: [
		{
			index: 1,
			panelId: 'register-panel',
		}
	],
	questionPanels: [
		{
			panelId: 'register-panel',
			/*action: {
				default: {
					action: 'SUBMIT'
				}
			},*/
			questionSets: [
				{
					index:1,
					questionSetId: 'register-set'
				}
			]
		}
	],
	questionSets: [
		{
			questionSetId: 'register-set',
			questions: [
				{
					"questionId": "email",
					"question": "Email Address",
					"input": {
						"type": "emailInput",
						"placeholder": "Email Address"
					},
					"validateOn": "blur",
					"validations": [
						{
							"type": "isEmail"
						}
					]
				},
			]
		}
	]
};