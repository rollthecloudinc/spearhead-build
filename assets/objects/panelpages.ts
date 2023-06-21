export const panelpages = [
{
	"contexts": [],
	"displayType": "page",
	"entityPermissions": {
		"deleteUserIds": [],
		"readUserIds": [
			"*"
		],
		"writeUserIds": []
	},
	"gridItems": [],
	"id": "200e4ab8-922c-4a9c-a760-77bce3facf92",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "gridless",
	"name": "hedge-test",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "snippet",
					"contexts": [],
					"label": "",
					"locked": false,
					"name": "",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "text/html",
							"displayName": "Content Type",
							"name": "contentType",
							"type": 1,
							"value": "text/html"
						},
						{
							"attributes": [],
							"computedValue": "This is a hedge compatibility test. Modified.",
							"displayName": "Content",
							"name": "content",
							"type": 1,
							"value": "This is a hedge compatibility test. Modified."
						},
						{
							"attributes": [],
							"computedValue": null,
							"displayName": "jsScript",
							"name": "jsScript",
							"type": 1,
							"value": null
						}
					]
				}
			],
			"settings": [],
			"stylePlugin": ""
		}
	],
	"path": "/hedge-test",
	"persistence": {
		"dataduct": {
			"settings": []
		}
	},
	"rowSettings": [
		{
			"settings": []
		}
	],
	"site": "spearhead",
	"title": "Hedge Test",
	"userId": "b7a9bac5-5fef-4aa6-bf12-d536c156e453"
}
,
{
	"contexts": [
		{
			"adaptor": "data",
			"data": {
				"exposedModule": "./JsonChartModule",
				"moduleName": "JsonChartModule",
				"remoteEntry": "https://rollthecloudinc.github.io/plugin-amcharts5-build/remoteEntry.js"
			},
			"name": "chart_module",
			"plugin": "module"
		}
	],
	"displayType": "page",
	"entityPermissions": {
		"deleteUserIds": [],
		"readUserIds": [
			"*"
		],
		"writeUserIds": []
	},
	"gridItems": [],
	"id": "479f66de-7468-47fa-a649-9fd476b754ab",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "gridless",
	"name": "test_amcharts5_plugin_v1",
	"panels": [
		{
			"columnSetting": {
				"settings": [ ]
			},
			"label": "",
			"name": "",
			"panes": [
				{
					"contentPlugin": "amcharts5_json_chart",
					"label": "",
					"linkedPageId": "",
					"locked": false,
					"name": "",
					"rule": {
						"condition": "",
						"field": "",
						"operator": "",
						"rules": [ ],
						"value": ""
					},
					"settings": [ ]
				}
			],
			"settings": [ ],
			"stylePlugin": ""
		}
	],
	"path": "/test-amcharts5-plugin-v1",
	"persistence": {
		"dataduct": {
			"settings": []
		}
	},
	"rowSettings": [
		{
			"settings": []
		}
	],
	"site": "spearhead",
	"title": "Test AmCharts5 Plugin v1",
	"userId": "b7a9bac5-5fef-4aa6-bf12-d536c156e453"
}
,
{"contexts":[],"cssFile":"","derivativeId":"","displayType":"page","entityPermissions":{"deleteUserIds":["e36b42fe-b09c-4514-a519-e178bb52957e"],"readUserIds":["*"],"writeUserIds":["e36b42fe-b09c-4514-a519-e178bb52957e"]},"gridItems":[{"cols":100,"rows":1,"weight":0,"x":0,"y":0}],"id":"bd29f806-3b4b-4b79-9dac-7a5ae221f432","layoutSetting":{"settings":[]},"layoutType":"split","name":"hello_world","panels":[{"columnSetting":{"settings":[]},"label":"","name":"","panes":[{"contentPlugin":"snippet","label":"","linkedPageId":"","locked":false,"name":"","rule":{"condition":"","field":"","operator":"","rules":null,"value":""},"settings":[{"attributes":[],"computedValue":"text/html","displayName":"Content Type","floatValue":0,"intValue":0,"name":"contentType","type":1,"value":"text/html"},{"attributes":[],"computedValue":"Hello World","displayName":"Content","floatValue":0,"intValue":0,"name":"content","type":1,"value":"Hello World"},{"attributes":[],"computedValue":"","displayName":"jsScript","floatValue":0,"intValue":0,"name":"jsScript","type":1,"value":""}]}],"settings":[],"stylePlugin":""}],"path":"/hello-world","persistence":{"dataduct":{"plugin":"","settings":[]}},"rowSettings":[{"settings":[]}],"site":"spearhead","title":"Hello World","userId":"e36b42fe-b09c-4514-a519-e178bb52957e"}
];
