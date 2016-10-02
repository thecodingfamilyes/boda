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
					"question": "Email",
					"input": {
						"type": "emailInput",
						"placeholder": "ejemplo@example.com"
					},
					"validateOn": "blur",
					"validations": [
						{
							"type": "isEmail",
							"message": 'Introduce un email válido'
						}
					]
				},
				{
					"questionId": "name",
					"question": "Nombre",
					"validateOn": "blur",
					"input": {
						type: 'textInput',
						"placeholder": "Ejemplo: Mariano González"
					},
					"validations": [
						{
							"type": "isLength",
							params: [3, 200],
							"message": 'Introduce un nombre válido'
						}
					]
				},
				{
					questionId: "password",
					question: 'Contraseña',
					"validateOn": "blur",
					"input": {
						"type": 'passwordInput',
						placeholder: 'Introduce una contraseña'
					},
					validations: [
						"type" : "equals",
						"params" : ["{repassword}"],
						"message" : "Las contraseñas no coinciden"
					]
				},
				{
					questionId: "repassword",
					question: 'Repite la contraseña',
					"validateOn": "blur",
					"input": {
						"type": 'passwordInput',
						placeholder: 'Introduce una contraseña'
					},
					validations: [
						"type" : "equals",
						"params" : ["{password}"],
						"message" : "Las contraseñas no coinciden"
					]
				},
			]
		}
	]
};