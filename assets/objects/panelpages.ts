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
				"remoteEntry": "http://localhost:3000/remoteEntry.js"
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
	"id": "286f9a5e-196d-4812-bd8a-235a164a1a97",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "gridless",
	"name": "am_charts_visual_editor_bar_chart_test",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "amcharts5_json_chart",
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
							"computedValue": "{\n    \"type\": \"XYChart\",\n    \"data\": [{\n        \"category\": \"Category #1\",\n        \"value\": 3336\n    }, {\n        \"category\": \"Category #2\",\n        \"value\": 2517\n    }, {\n        \"category\": \"Category #3\",\n        \"value\": 784\n    }, {\n        \"category\": \"Category #4\",\n        \"value\": 2388\n    }, {\n        \"category\": \"Category #5\",\n        \"value\": 3581\n    }, {\n        \"category\": \"Category #6\",\n        \"value\": 690\n    }, {\n        \"category\": \"Category #7\",\n        \"value\": 4292\n    }, {\n        \"category\": \"Category #8\",\n        \"value\": 2254\n    }],\n    \"xAxes\": [{\n        \"type\": \"ValueAxis\"\n    }],\n    \"yAxes\": [{\n        \"type\": \"CategoryAxis\",\n        \"dataFields\": {\n            \"category\": \"category\"\n        }\n    }],\n    \"series\": [{\n        \"type\": \"ColumnSeries\",\n        \"columns\": {\n            \"template\": {\n                \"type\": \"Column\",\n                \"strokeOpacity\": 0,\n                \"tooltipText\": \"{categoryY}\\n{valueX}\",\n                \"tooltipPosition\": \"pointer\"\n            }\n        },\n        \"dataFields\": {\n            \"valueX\": \"value\",\n            \"categoryY\": \"category\"\n        },\n        \"sequencedInterpolation\": true,\n        \"sequencedInterpolationDelay\": 100\n    }]\n}",
							"displayName": "JSON",
							"name": "json",
							"type": 1,
							"value": "{\n    \"type\": \"XYChart\",\n    \"data\": [{\n        \"category\": \"Category #1\",\n        \"value\": 3336\n    }, {\n        \"category\": \"Category #2\",\n        \"value\": 2517\n    }, {\n        \"category\": \"Category #3\",\n        \"value\": 784\n    }, {\n        \"category\": \"Category #4\",\n        \"value\": 2388\n    }, {\n        \"category\": \"Category #5\",\n        \"value\": 3581\n    }, {\n        \"category\": \"Category #6\",\n        \"value\": 690\n    }, {\n        \"category\": \"Category #7\",\n        \"value\": 4292\n    }, {\n        \"category\": \"Category #8\",\n        \"value\": 2254\n    }],\n    \"xAxes\": [{\n        \"type\": \"ValueAxis\"\n    }],\n    \"yAxes\": [{\n        \"type\": \"CategoryAxis\",\n        \"dataFields\": {\n            \"category\": \"category\"\n        }\n    }],\n    \"series\": [{\n        \"type\": \"ColumnSeries\",\n        \"columns\": {\n            \"template\": {\n                \"type\": \"Column\",\n                \"strokeOpacity\": 0,\n                \"tooltipText\": \"{categoryY}\\n{valueX}\",\n                \"tooltipPosition\": \"pointer\"\n            }\n        },\n        \"dataFields\": {\n            \"valueX\": \"value\",\n            \"categoryY\": \"category\"\n        },\n        \"sequencedInterpolation\": true,\n        \"sequencedInterpolationDelay\": 100\n    }]\n}"
						}
					]
				}
			],
			"settings": [],
			"stylePlugin": ""
		}
	],
	"path": "/am-charts-visual-editor-bar-chart-test",
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
	"title": "Visual Editor Bar Chart",
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
{
	"contexts": [
		{
			"adaptor": "data",
			"data": {
				"exposedModule": "./JsonChartModule",
				"moduleName": "JsonChartModule",
				"remoteEntry": "http://localhost:3000/remoteEntry.js"
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
	"id": "5494f47d-473c-49b4-bbef-f563be722131",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "gridless",
	"name": "plugin-amcharts-refs-test-1",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "amcharts5_json_chart",
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
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "data",
											"displayName": "name",
											"name": "name",
											"type": 1,
											"value": "data"
										},
										{
											"attributes": [],
											"computedValue": "data",
											"displayName": "id",
											"name": "id",
											"type": 1,
											"value": "data"
										},
										{
											"attributes": [],
											"computedValue": "pane",
											"displayName": "type",
											"name": "type",
											"type": 1,
											"value": "pane"
										}
									],
									"computedValue": null,
									"displayName": "0",
									"name": "0",
									"type": 2,
									"value": null
								}
							],
							"computedValue": null,
							"displayName": "refs",
							"name": "refs",
							"type": 4,
							"value": null
						},
						{
							"attributes": [],
							"computedValue": "{\n  \"type\": \"XYChart\",\n  \"refs\": {\n    \"data\": [],\n    \"xAxis\": {\n      \"type\": \"DateAxis\",\n      \"settings\": {\n        \"baseInterval\": {\n          \"timeUnit\": \"day\",\n          \"count\": 1\n        },\n        \"renderer\": {\n          \"type\": \"AxisRendererX\"\n        }\n      }\n    },\n    \"yAxis\": {\n      \"type\": \"ValueAxis\",\n      \"settings\": {\n        \"renderer\": {\n          \"type\": \"AxisRendererY\"\n        }\n      }\n    }\n  },\n  \"settings\": {\n    \"panX\": false,\n    \"panY\": false,\n    \"wheelX\": \"panX\",\n    \"wheelY\": \"zoomX\",\n    \"scrollbarX\": {\n      \"type\": \"Scrollbar\",\n      \"settings\": {\n        \"orientation\": \"horizontal\"\n      }\n    }\n  },\n  \"properties\": {\n    \"xAxes\": [\n      \"#xAxis\"\n    ],\n    \"yAxes\": [\n      \"#yAxis\"\n    ],\n    \"series\": [\n      {\n        \"type\": \"LineSeries\",\n        \"settings\": {\n          \"name\": \"Series\",\n          \"xAxis\": \"#xAxis\",\n          \"yAxis\": \"#yAxis\",\n          \"valueYField\": \"value\",\n          \"valueXField\": \"date\",\n          \"tooltip\": {\n            \"type\": \"Tooltip\",\n            \"settings\": {\n              \"labelText\": \"{valueX}: {valueY}\"\n            }\n          }\n        },\n        \"properties\": {\n          \"data\": \"#data\"\n        }\n      }\n    ]\n  }\n}",
							"displayName": "json",
							"name": "json",
							"type": 1,
							"value": "{\n  \"type\": \"XYChart\",\n  \"refs\": {\n    \"data\": [],\n    \"xAxis\": {\n      \"type\": \"DateAxis\",\n      \"settings\": {\n        \"baseInterval\": {\n          \"timeUnit\": \"day\",\n          \"count\": 1\n        },\n        \"renderer\": {\n          \"type\": \"AxisRendererX\"\n        }\n      }\n    },\n    \"yAxis\": {\n      \"type\": \"ValueAxis\",\n      \"settings\": {\n        \"renderer\": {\n          \"type\": \"AxisRendererY\"\n        }\n      }\n    }\n  },\n  \"settings\": {\n    \"panX\": false,\n    \"panY\": false,\n    \"wheelX\": \"panX\",\n    \"wheelY\": \"zoomX\",\n    \"scrollbarX\": {\n      \"type\": \"Scrollbar\",\n      \"settings\": {\n        \"orientation\": \"horizontal\"\n      }\n    }\n  },\n  \"properties\": {\n    \"xAxes\": [\n      \"#xAxis\"\n    ],\n    \"yAxes\": [\n      \"#yAxis\"\n    ],\n    \"series\": [\n      {\n        \"type\": \"LineSeries\",\n        \"settings\": {\n          \"name\": \"Series\",\n          \"xAxis\": \"#xAxis\",\n          \"yAxis\": \"#yAxis\",\n          \"valueYField\": \"value\",\n          \"valueXField\": \"date\",\n          \"tooltip\": {\n            \"type\": \"Tooltip\",\n            \"settings\": {\n              \"labelText\": \"{valueX}: {valueY}\"\n            }\n          }\n        },\n        \"properties\": {\n          \"data\": \"#data\"\n        }\n      }\n    ]\n  }\n}"
						}
					]
				},
				{
					"contentPlugin": "datasource",
					"contexts": [],
					"label": "data",
					"locked": false,
					"name": "data",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "data",
							"displayName": "plugin",
							"name": "plugin",
							"type": 1,
							"value": "data"
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "[\n      { \"date\": 1652425200000, \"value\": 92 },\n      { \"date\": 1652511600000, \"value\": 95 },\n      { \"date\": 1652598000000, \"value\": 100 },\n      { \"date\": 1652684400000, \"value\": 100 },\n      { \"date\": 1652770800000, \"value\": 96 },\n      { \"date\": 1652857200000, \"value\": 97 },\n      { \"date\": 1652943600000, \"value\": 94 },\n      { \"date\": 1653030000000, \"value\": 89 },\n      { \"date\": 1653116400000, \"value\": 89 },\n      { \"date\": 1653202800000, \"value\": 87 },\n      { \"date\": 1653289200000, \"value\": 84 },\n      { \"date\": 1653375600000, \"value\": 81 },\n      { \"date\": 1653462000000, \"value\": 85 },\n      { \"date\": 1653548400000, \"value\": 89 },\n      { \"date\": 1653634800000, \"value\": 86 },\n      { \"date\": 1653721200000, \"value\": 90 },\n      { \"date\": 1653807600000, \"value\": 93 },\n      { \"date\": 1653894000000, \"value\": 94 },\n      { \"date\": 1653980400000, \"value\": 94 },\n      { \"date\": 1654066800000, \"value\": 96 }\n]",
									"displayName": "data",
									"name": "data",
									"type": 1,
									"value": "[\n      { \"date\": 1652425200000, \"value\": 92 },\n      { \"date\": 1652511600000, \"value\": 95 },\n      { \"date\": 1652598000000, \"value\": 100 },\n      { \"date\": 1652684400000, \"value\": 100 },\n      { \"date\": 1652770800000, \"value\": 96 },\n      { \"date\": 1652857200000, \"value\": 97 },\n      { \"date\": 1652943600000, \"value\": 94 },\n      { \"date\": 1653030000000, \"value\": 89 },\n      { \"date\": 1653116400000, \"value\": 89 },\n      { \"date\": 1653202800000, \"value\": 87 },\n      { \"date\": 1653289200000, \"value\": 84 },\n      { \"date\": 1653375600000, \"value\": 81 },\n      { \"date\": 1653462000000, \"value\": 85 },\n      { \"date\": 1653548400000, \"value\": 89 },\n      { \"date\": 1653634800000, \"value\": 86 },\n      { \"date\": 1653721200000, \"value\": 90 },\n      { \"date\": 1653807600000, \"value\": 93 },\n      { \"date\": 1653894000000, \"value\": 94 },\n      { \"date\": 1653980400000, \"value\": 94 },\n      { \"date\": 1654066800000, \"value\": 96 }\n]"
								}
							],
							"computedValue": null,
							"displayName": "settings",
							"name": "settings",
							"type": 2,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "pane",
									"displayName": "type",
									"name": "type",
									"type": 1,
									"value": "pane"
								},
								{
									"attributes": [],
									"computedValue": null,
									"displayName": "bindings",
									"name": "bindings",
									"type": 4,
									"value": null
								}
							],
							"computedValue": null,
							"displayName": "renderer",
							"name": "renderer",
							"type": 2,
							"value": null
						}
					]
				}
			],
			"settings": [],
			"stylePlugin": ""
		}
	],
	"path": "/plugin-amcharts-refs-test-1",
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
	"title": "plugin-amcharts-refs-test-1",
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
				"remoteEntry": "http://localhost:3000/remoteEntry.js"
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
	"id": "8ebbcdb3-300f-4739-8cb3-6c5d4c402638",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "gridless",
	"name": "am_charts_visual_editor_bar_chart_test",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "amcharts5_json_chart",
					"contexts": [],
					"label": "",
					"locked": false,
					"name": "",
					"settings": [
						{
							"attributes": [],
							"computedValue": "{\n    \"type\": \"XYChart\",\n    \"data\": [{\n        \"category\": \"Category #1\",\n        \"value\": 3336\n    }, {\n        \"category\": \"Category #2\",\n        \"value\": 2517\n    }, {\n        \"category\": \"Category #3\",\n        \"value\": 784\n    }, {\n        \"category\": \"Category #4\",\n        \"value\": 2388\n    }, {\n        \"category\": \"Category #5\",\n        \"value\": 3581\n    }, {\n        \"category\": \"Category #6\",\n        \"value\": 690\n    }, {\n        \"category\": \"Category #7\",\n        \"value\": 4292\n    }, {\n        \"category\": \"Category #8\",\n        \"value\": 2254\n    }],\n    \"xAxes\": [{\n        \"type\": \"ValueAxis\",\n        \"renderer\": {\n            \"maxLabelPosition\": 0.98\n        }\n    }],\n    \"yAxes\": [{\n        \"type\": \"CategoryAxis\",\n        \"dataFields\": {\n            \"category\": \"category\"\n        },\n        \"renderer\": {\n            \"grid\": {\n                \"template\": {\n                    \"type\": \"Grid\",\n                    \"location\": 0\n                }\n            },\n            \"minGridDistance\": 20\n        }\n    }],\n    \"series\": [{\n        \"type\": \"ColumnSeries\",\n        \"columns\": {\n            \"template\": {\n                \"type\": \"Column\",\n                \"strokeOpacity\": 0,\n                \"tooltipText\": \"{categoryY}\\n{valueX}\",\n                \"tooltipPosition\": \"pointer\"\n            }\n        },\n        \"dataFields\": {\n            \"valueX\": \"value\",\n            \"categoryY\": \"category\"\n        },\n        \"sequencedInterpolation\": true,\n        \"sequencedInterpolationDelay\": 100\n    }]\n}",
							"displayName": "JSON",
							"name": "json",
							"type": 1,
							"value": "{\n    \"type\": \"XYChart\",\n    \"data\": [{\n        \"category\": \"Category #1\",\n        \"value\": 3336\n    }, {\n        \"category\": \"Category #2\",\n        \"value\": 2517\n    }, {\n        \"category\": \"Category #3\",\n        \"value\": 784\n    }, {\n        \"category\": \"Category #4\",\n        \"value\": 2388\n    }, {\n        \"category\": \"Category #5\",\n        \"value\": 3581\n    }, {\n        \"category\": \"Category #6\",\n        \"value\": 690\n    }, {\n        \"category\": \"Category #7\",\n        \"value\": 4292\n    }, {\n        \"category\": \"Category #8\",\n        \"value\": 2254\n    }],\n    \"xAxes\": [{\n        \"type\": \"ValueAxis\",\n        \"renderer\": {\n            \"maxLabelPosition\": 0.98\n        }\n    }],\n    \"yAxes\": [{\n        \"type\": \"CategoryAxis\",\n        \"dataFields\": {\n            \"category\": \"category\"\n        },\n        \"renderer\": {\n            \"grid\": {\n                \"template\": {\n                    \"type\": \"Grid\",\n                    \"location\": 0\n                }\n            },\n            \"minGridDistance\": 20\n        }\n    }],\n    \"series\": [{\n        \"type\": \"ColumnSeries\",\n        \"columns\": {\n            \"template\": {\n                \"type\": \"Column\",\n                \"strokeOpacity\": 0,\n                \"tooltipText\": \"{categoryY}\\n{valueX}\",\n                \"tooltipPosition\": \"pointer\"\n            }\n        },\n        \"dataFields\": {\n            \"valueX\": \"value\",\n            \"categoryY\": \"category\"\n        },\n        \"sequencedInterpolation\": true,\n        \"sequencedInterpolationDelay\": 100\n    }]\n}"
						}
					]
				}
			],
			"settings": [],
			"stylePlugin": ""
		}
	],
	"path": "/am-charts-visual-editor-bar-chart-test",
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
	"title": "Visual Editor Bar Chart",
	"userId": "b7a9bac5-5fef-4aa6-bf12-d536c156e453"
}
,
{"contexts":[],"cssFile":"","derivativeId":"","displayType":"page","entityPermissions":{"deleteUserIds":["e36b42fe-b09c-4514-a519-e178bb52957e"],"readUserIds":["*"],"writeUserIds":["e36b42fe-b09c-4514-a519-e178bb52957e"]},"gridItems":[{"cols":100,"rows":1,"weight":0,"x":0,"y":0}],"id":"bd29f806-3b4b-4b79-9dac-7a5ae221f432","layoutSetting":{"settings":[]},"layoutType":"split","name":"hello_world","panels":[{"columnSetting":{"settings":[]},"label":"","name":"","panes":[{"contentPlugin":"snippet","label":"","linkedPageId":"","locked":false,"name":"","rule":{"condition":"","field":"","operator":"","rules":null,"value":""},"settings":[{"attributes":[],"computedValue":"text/html","displayName":"Content Type","floatValue":0,"intValue":0,"name":"contentType","type":1,"value":"text/html"},{"attributes":[],"computedValue":"Hello World","displayName":"Content","floatValue":0,"intValue":0,"name":"content","type":1,"value":"Hello World"},{"attributes":[],"computedValue":"","displayName":"jsScript","floatValue":0,"intValue":0,"name":"jsScript","type":1,"value":""}]}],"settings":[],"stylePlugin":""}],"path":"/hello-world","persistence":{"dataduct":{"plugin":"","settings":[]}},"rowSettings":[{"settings":[]}],"site":"spearhead","title":"Hello World","userId":"e36b42fe-b09c-4514-a519-e178bb52957e"}
,
{
	"contexts": [
		{
			"adaptor": "data",
			"data": {
				"exposedModule": "./JsonChartModule",
				"moduleName": "JsonChartModule",
				"remoteEntry": "http://localhost:3000/remoteEntry.js"
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
	"id": "c91aa514-0ad8-4797-a516-cce997c877d9",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "gridless",
	"name": "json_chart_example_1",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "amcharts5_json_chart",
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
							"computedValue": "{\n   \"refs\": {\n      \"data\": [\n         {\n            \"date\": 1652425200000,\n            \"value\": 92\n         },\n         {\n            \"date\": 1652511600000,\n            \"value\": 95\n         },\n         {\n            \"date\": 1652598000000,\n            \"value\": 100\n         },\n         {\n            \"date\": 1652684400000,\n            \"value\": 100\n         },\n         {\n            \"date\": 1652770800000,\n            \"value\": 96\n         },\n         {\n            \"date\": 1652857200000,\n            \"value\": 97\n         },\n         {\n            \"date\": 1652943600000,\n            \"value\": 94\n         },\n         {\n            \"date\": 1653030000000,\n            \"value\": 89\n         },\n         {\n            \"date\": 1653116400000,\n            \"value\": 89\n         },\n         {\n            \"date\": 1653202800000,\n            \"value\": 87\n         },\n         {\n            \"date\": 1653289200000,\n            \"value\": 84\n         },\n         {\n            \"date\": 1653375600000,\n            \"value\": 81\n         },\n         {\n            \"date\": 1653462000000,\n            \"value\": 85\n         },\n         {\n            \"date\": 1653548400000,\n            \"value\": 89\n         },\n         {\n            \"date\": 1653634800000,\n            \"value\": 86\n         },\n         {\n            \"date\": 1653721200000,\n            \"value\": 90\n         },\n         {\n            \"date\": 1653807600000,\n            \"value\": 93\n         },\n         {\n            \"date\": 1653894000000,\n            \"value\": 94\n         },\n         {\n            \"date\": 1653980400000,\n            \"value\": 94\n         },\n         {\n            \"date\": 1654066800000,\n            \"value\": 96\n         }\n      ],\n      \"xAxis\": {\n         \"type\": \"DateAxis\",\n         \"settings\": {\n            \"maxDeviation\": 0.5,\n            \"baseInterval\": {\n               \"timeUnit\": \"day\",\n               \"count\": 1\n            },\n            \"renderer\": {\n               \"type\": \"AxisRendererX\",\n               \"settings\": {\n                  \"pan\": \"zoom\"\n               }\n            },\n            \"tooltip\": {\n               \"type\": \"Tooltip\"\n            }\n         }\n      },\n      \"yAxis\": {\n         \"type\": \"ValueAxis\",\n         \"settings\": {\n            \"maxDeviation\": 1,\n            \"renderer\": {\n               \"type\": \"AxisRendererY\",\n               \"settings\": {\n                  \"pan\": \"zoom\"\n               }\n            }\n         }\n      }\n   },\n   \"type\": \"XYChart\",\n   \"settings\": {\n      \"panX\": false,\n      \"panY\": false,\n      \"wheelX\": \"panX\",\n      \"wheelY\": \"zoomX\",\n      \"cursor\": {\n         \"type\": \"XYCursor\",\n         \"settings\": {\n            \"behavior\": \"zoomX\"\n         },\n         \"properties\": {\n            \"lineY\": {\n               \"settings\": {\n                  \"visible\": false\n               }\n            }\n         }\n      },\n      \"scrollbarX\": {\n         \"type\": \"Scrollbar\",\n         \"settings\": {\n            \"orientation\": \"horizontal\"\n         }\n      }\n   },\n   \"properties\": {\n      \"xAxes\": [\n         \"#xAxis\"\n      ],\n      \"yAxes\": [\n         \"#yAxis\"\n      ],\n      \"series\": [\n         {\n            \"type\": \"LineSeries\",\n            \"settings\": {\n               \"name\": \"Series\",\n               \"xAxis\": \"#xAxis\",\n               \"yAxis\": \"#yAxis\",\n               \"valueYField\": \"value\",\n               \"valueXField\": \"date\",\n               \"tooltip\": {\n                  \"type\": \"Tooltip\",\n                  \"settings\": {\n                     \"labelText\": \"{valueX}: {valueY}\"\n                  }\n               }\n            },\n            \"properties\": {\n               \"data\": \"#data\"\n            }\n         }\n      ]\n   }\n}",
							"displayName": "JSON",
							"name": "json",
							"type": 1,
							"value": "{\n   \"refs\": {\n      \"data\": [\n         {\n            \"date\": 1652425200000,\n            \"value\": 92\n         },\n         {\n            \"date\": 1652511600000,\n            \"value\": 95\n         },\n         {\n            \"date\": 1652598000000,\n            \"value\": 100\n         },\n         {\n            \"date\": 1652684400000,\n            \"value\": 100\n         },\n         {\n            \"date\": 1652770800000,\n            \"value\": 96\n         },\n         {\n            \"date\": 1652857200000,\n            \"value\": 97\n         },\n         {\n            \"date\": 1652943600000,\n            \"value\": 94\n         },\n         {\n            \"date\": 1653030000000,\n            \"value\": 89\n         },\n         {\n            \"date\": 1653116400000,\n            \"value\": 89\n         },\n         {\n            \"date\": 1653202800000,\n            \"value\": 87\n         },\n         {\n            \"date\": 1653289200000,\n            \"value\": 84\n         },\n         {\n            \"date\": 1653375600000,\n            \"value\": 81\n         },\n         {\n            \"date\": 1653462000000,\n            \"value\": 85\n         },\n         {\n            \"date\": 1653548400000,\n            \"value\": 89\n         },\n         {\n            \"date\": 1653634800000,\n            \"value\": 86\n         },\n         {\n            \"date\": 1653721200000,\n            \"value\": 90\n         },\n         {\n            \"date\": 1653807600000,\n            \"value\": 93\n         },\n         {\n            \"date\": 1653894000000,\n            \"value\": 94\n         },\n         {\n            \"date\": 1653980400000,\n            \"value\": 94\n         },\n         {\n            \"date\": 1654066800000,\n            \"value\": 96\n         }\n      ],\n      \"xAxis\": {\n         \"type\": \"DateAxis\",\n         \"settings\": {\n            \"maxDeviation\": 0.5,\n            \"baseInterval\": {\n               \"timeUnit\": \"day\",\n               \"count\": 1\n            },\n            \"renderer\": {\n               \"type\": \"AxisRendererX\",\n               \"settings\": {\n                  \"pan\": \"zoom\"\n               }\n            },\n            \"tooltip\": {\n               \"type\": \"Tooltip\"\n            }\n         }\n      },\n      \"yAxis\": {\n         \"type\": \"ValueAxis\",\n         \"settings\": {\n            \"maxDeviation\": 1,\n            \"renderer\": {\n               \"type\": \"AxisRendererY\",\n               \"settings\": {\n                  \"pan\": \"zoom\"\n               }\n            }\n         }\n      }\n   },\n   \"type\": \"XYChart\",\n   \"settings\": {\n      \"panX\": false,\n      \"panY\": false,\n      \"wheelX\": \"panX\",\n      \"wheelY\": \"zoomX\",\n      \"cursor\": {\n         \"type\": \"XYCursor\",\n         \"settings\": {\n            \"behavior\": \"zoomX\"\n         },\n         \"properties\": {\n            \"lineY\": {\n               \"settings\": {\n                  \"visible\": false\n               }\n            }\n         }\n      },\n      \"scrollbarX\": {\n         \"type\": \"Scrollbar\",\n         \"settings\": {\n            \"orientation\": \"horizontal\"\n         }\n      }\n   },\n   \"properties\": {\n      \"xAxes\": [\n         \"#xAxis\"\n      ],\n      \"yAxes\": [\n         \"#yAxis\"\n      ],\n      \"series\": [\n         {\n            \"type\": \"LineSeries\",\n            \"settings\": {\n               \"name\": \"Series\",\n               \"xAxis\": \"#xAxis\",\n               \"yAxis\": \"#yAxis\",\n               \"valueYField\": \"value\",\n               \"valueXField\": \"date\",\n               \"tooltip\": {\n                  \"type\": \"Tooltip\",\n                  \"settings\": {\n                     \"labelText\": \"{valueX}: {valueY}\"\n                  }\n               }\n            },\n            \"properties\": {\n               \"data\": \"#data\"\n            }\n         }\n      ]\n   }\n}"
						}
					]
				}
			],
			"settings": [],
			"stylePlugin": ""
		}
	],
	"path": "/json-chart-example-1",
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
	"title": "Json Chart Example 1",
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
				"remoteEntry": "http://localhost:3000/remoteEntry.js"
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
	"id": "d75c2267-0eb1-4238-ad0e-7d4b0d1d4801",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "gridless",
	"name": "plugin-amcharts-refs-test-1",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "amcharts5_json_chart",
					"contexts": [],
					"label": "",
					"locked": false,
					"name": "",
					"settings": [
						{
							"attributes": [],
							"computedValue": "{\n  \"type\": \"XYChart\",\n  \"refs\": {\n    \"data\": [\n      { \"date\": 1652425200000, \"value\": 92 },\n      { \"date\": 1652511600000, \"value\": 95 },\n      { \"date\": 1652598000000, \"value\": 100 },\n      { \"date\": 1652684400000, \"value\": 100 },\n      { \"date\": 1652770800000, \"value\": 96 },\n      { \"date\": 1652857200000, \"value\": 97 },\n      { \"date\": 1652943600000, \"value\": 94 },\n      { \"date\": 1653030000000, \"value\": 89 },\n      { \"date\": 1653116400000, \"value\": 89 },\n      { \"date\": 1653202800000, \"value\": 87 },\n      { \"date\": 1653289200000, \"value\": 84 },\n      { \"date\": 1653375600000, \"value\": 81 },\n      { \"date\": 1653462000000, \"value\": 85 },\n      { \"date\": 1653548400000, \"value\": 89 },\n      { \"date\": 1653634800000, \"value\": 86 },\n      { \"date\": 1653721200000, \"value\": 90 },\n      { \"date\": 1653807600000, \"value\": 93 },\n      { \"date\": 1653894000000, \"value\": 94 },\n      { \"date\": 1653980400000, \"value\": 94 },\n      { \"date\": 1654066800000, \"value\": 96 }\n    ],\n    \"xAxis\": {\n      \"type\": \"DateAxis\",\n      \"settings\": {\n        \"baseInterval\": {\n          \"timeUnit\": \"day\",\n          \"count\": 1\n        },\n        \"renderer\": {\n          \"type\": \"AxisRendererX\"\n        }\n      }\n    },\n    \"yAxis\": {\n      \"type\": \"ValueAxis\",\n      \"settings\": {\n        \"renderer\": {\n          \"type\": \"AxisRendererY\"\n        }\n      }\n    },\n  },\n  \"settings\": {\n    \"panX\": false,\n    \"panY\": false,\n    \"wheelX\": \"panX\",\n    \"wheelY\": \"zoomX\",\n    \"scrollbarX\": {\n      \"type\": \"Scrollbar\",\n      \"settings\": {\n        \"orientation\": \"horizontal\"\n      }\n    }\n  },\n  \"properties\": {\n    \"xAxes\": [\n      \"#xAxis\"\n    ],\n    \"yAxes\": [\n      \"#yAxis\"\n    ],\n    \"series\": [\n      {\n        \"type\": \"LineSeries\",\n        \"settings\": {\n          \"name\": \"Series\",\n          \"xAxis\": \"#xAxis\",\n          \"yAxis\": \"#yAxis\",\n          \"valueYField\": \"value\",\n          \"valueXField\": \"date\",\n          \"tooltip\": {\n            \"type\": \"Tooltip\",\n            \"settings\": {\n              \"labelText\": \"{valueX}: {valueY}\"\n            }\n          },\n        },\n        \"properties\": {\n          \"data\": \"#data\"\n        }\n      }\n    ]\n  }\n}",
							"displayName": "JSON",
							"name": "json",
							"type": 1,
							"value": "{\n  \"type\": \"XYChart\",\n  \"refs\": {\n    \"data\": [\n      { \"date\": 1652425200000, \"value\": 92 },\n      { \"date\": 1652511600000, \"value\": 95 },\n      { \"date\": 1652598000000, \"value\": 100 },\n      { \"date\": 1652684400000, \"value\": 100 },\n      { \"date\": 1652770800000, \"value\": 96 },\n      { \"date\": 1652857200000, \"value\": 97 },\n      { \"date\": 1652943600000, \"value\": 94 },\n      { \"date\": 1653030000000, \"value\": 89 },\n      { \"date\": 1653116400000, \"value\": 89 },\n      { \"date\": 1653202800000, \"value\": 87 },\n      { \"date\": 1653289200000, \"value\": 84 },\n      { \"date\": 1653375600000, \"value\": 81 },\n      { \"date\": 1653462000000, \"value\": 85 },\n      { \"date\": 1653548400000, \"value\": 89 },\n      { \"date\": 1653634800000, \"value\": 86 },\n      { \"date\": 1653721200000, \"value\": 90 },\n      { \"date\": 1653807600000, \"value\": 93 },\n      { \"date\": 1653894000000, \"value\": 94 },\n      { \"date\": 1653980400000, \"value\": 94 },\n      { \"date\": 1654066800000, \"value\": 96 }\n    ],\n    \"xAxis\": {\n      \"type\": \"DateAxis\",\n      \"settings\": {\n        \"baseInterval\": {\n          \"timeUnit\": \"day\",\n          \"count\": 1\n        },\n        \"renderer\": {\n          \"type\": \"AxisRendererX\"\n        }\n      }\n    },\n    \"yAxis\": {\n      \"type\": \"ValueAxis\",\n      \"settings\": {\n        \"renderer\": {\n          \"type\": \"AxisRendererY\"\n        }\n      }\n    },\n  },\n  \"settings\": {\n    \"panX\": false,\n    \"panY\": false,\n    \"wheelX\": \"panX\",\n    \"wheelY\": \"zoomX\",\n    \"scrollbarX\": {\n      \"type\": \"Scrollbar\",\n      \"settings\": {\n        \"orientation\": \"horizontal\"\n      }\n    }\n  },\n  \"properties\": {\n    \"xAxes\": [\n      \"#xAxis\"\n    ],\n    \"yAxes\": [\n      \"#yAxis\"\n    ],\n    \"series\": [\n      {\n        \"type\": \"LineSeries\",\n        \"settings\": {\n          \"name\": \"Series\",\n          \"xAxis\": \"#xAxis\",\n          \"yAxis\": \"#yAxis\",\n          \"valueYField\": \"value\",\n          \"valueXField\": \"date\",\n          \"tooltip\": {\n            \"type\": \"Tooltip\",\n            \"settings\": {\n              \"labelText\": \"{valueX}: {valueY}\"\n            }\n          },\n        },\n        \"properties\": {\n          \"data\": \"#data\"\n        }\n      }\n    ]\n  }\n}"
						}
					]
				}
			],
			"settings": [],
			"stylePlugin": ""
		}
	],
	"path": "/plugin-amcharts-refs-test-1",
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
	"title": "plugin-amcharts-refs-test-1",
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
				"remoteEntry": "http://localhost:3000/remoteEntry.js"
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
	"id": "e39fa739-b354-45cb-8a35-5c9e54d28d6f",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "gridless",
	"name": "json_chart_example_1",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "amcharts5_json_chart",
					"contexts": [],
					"label": "",
					"locked": false,
					"name": "",
					"settings": [
						{
							"attributes": [],
							"computedValue": "{\n  refs: {\n    data: [\n      { date: 1652425200000, value: 92 },\n      { date: 1652511600000, value: 95 },\n      { date: 1652598000000, value: 100 },\n      { date: 1652684400000, value: 100 },\n      { date: 1652770800000, value: 96 },\n      { date: 1652857200000, value: 97 },\n      { date: 1652943600000, value: 94 },\n      { date: 1653030000000, value: 89 },\n      { date: 1653116400000, value: 89 },\n      { date: 1653202800000, value: 87 },\n      { date: 1653289200000, value: 84 },\n      { date: 1653375600000, value: 81 },\n      { date: 1653462000000, value: 85 },\n      { date: 1653548400000, value: 89 },\n      { date: 1653634800000, value: 86 },\n      { date: 1653721200000, value: 90 },\n      { date: 1653807600000, value: 93 },\n      { date: 1653894000000, value: 94 },\n      { date: 1653980400000, value: 94 },\n      { date: 1654066800000, value: 96 }\n    ],\n    xAxis: {\n      type: \"DateAxis\",\n      settings: {\n        maxDeviation: 0.5,\n        baseInterval: {\n          timeUnit: \"day\",\n          count: 1\n        },\n        renderer: {\n          type: \"AxisRendererX\",\n          settings: {\n            pan: \"zoom\"\n          }\n        },\n        tooltip: {\n          type: \"Tooltip\",\n        },\n      }\n    },\n    yAxis: {\n      type: \"ValueAxis\",\n      settings: {\n        maxDeviation: 1,\n        renderer: {\n          type: \"AxisRendererY\",\n          settings: {\n            pan: \"zoom\"\n          },\n        },\n      }\n    },\n  },\n  type: \"XYChart\",\n  settings: {\n    panX: false,\n    panY: false,\n    wheelX: \"panX\",\n    wheelY: \"zoomX\",\n    cursor: {\n      type: \"XYCursor\",\n      settings: {\n        behavior: \"zoomX\"\n      },\n      properties: {\n        lineY: {\n          settings: {\n            visible: false\n          },\n        },\n      },\n    },\n    scrollbarX: {\n      type: \"Scrollbar\",\n      settings: {\n        orientation: \"horizontal\"\n      }\n    },\n  },\n  properties: {\n    xAxes: [\n      \"#xAxis\",\n    ],\n    yAxes: [\n      \"#yAxis\",\n    ],\n    series: [{\n      type: \"LineSeries\",\n      settings: {\n        name: \"Series\",\n        xAxis: \"#xAxis\",\n        yAxis: \"#yAxis\",\n        valueYField: \"value\",\n        valueXField: \"date\",\n        tooltip: {\n          type: \"Tooltip\",\n          settings: {\n            labelText: \"{valueX}: {valueY}\"\n          }\n        },\n      },\n      properties: {\n        data: \"#data\"\n      }\n    }]\n  }\n}",
							"displayName": "JSON",
							"name": "json",
							"type": 1,
							"value": "{\n  refs: {\n    data: [\n      { date: 1652425200000, value: 92 },\n      { date: 1652511600000, value: 95 },\n      { date: 1652598000000, value: 100 },\n      { date: 1652684400000, value: 100 },\n      { date: 1652770800000, value: 96 },\n      { date: 1652857200000, value: 97 },\n      { date: 1652943600000, value: 94 },\n      { date: 1653030000000, value: 89 },\n      { date: 1653116400000, value: 89 },\n      { date: 1653202800000, value: 87 },\n      { date: 1653289200000, value: 84 },\n      { date: 1653375600000, value: 81 },\n      { date: 1653462000000, value: 85 },\n      { date: 1653548400000, value: 89 },\n      { date: 1653634800000, value: 86 },\n      { date: 1653721200000, value: 90 },\n      { date: 1653807600000, value: 93 },\n      { date: 1653894000000, value: 94 },\n      { date: 1653980400000, value: 94 },\n      { date: 1654066800000, value: 96 }\n    ],\n    xAxis: {\n      type: \"DateAxis\",\n      settings: {\n        maxDeviation: 0.5,\n        baseInterval: {\n          timeUnit: \"day\",\n          count: 1\n        },\n        renderer: {\n          type: \"AxisRendererX\",\n          settings: {\n            pan: \"zoom\"\n          }\n        },\n        tooltip: {\n          type: \"Tooltip\",\n        },\n      }\n    },\n    yAxis: {\n      type: \"ValueAxis\",\n      settings: {\n        maxDeviation: 1,\n        renderer: {\n          type: \"AxisRendererY\",\n          settings: {\n            pan: \"zoom\"\n          },\n        },\n      }\n    },\n  },\n  type: \"XYChart\",\n  settings: {\n    panX: false,\n    panY: false,\n    wheelX: \"panX\",\n    wheelY: \"zoomX\",\n    cursor: {\n      type: \"XYCursor\",\n      settings: {\n        behavior: \"zoomX\"\n      },\n      properties: {\n        lineY: {\n          settings: {\n            visible: false\n          },\n        },\n      },\n    },\n    scrollbarX: {\n      type: \"Scrollbar\",\n      settings: {\n        orientation: \"horizontal\"\n      }\n    },\n  },\n  properties: {\n    xAxes: [\n      \"#xAxis\",\n    ],\n    yAxes: [\n      \"#yAxis\",\n    ],\n    series: [{\n      type: \"LineSeries\",\n      settings: {\n        name: \"Series\",\n        xAxis: \"#xAxis\",\n        yAxis: \"#yAxis\",\n        valueYField: \"value\",\n        valueXField: \"date\",\n        tooltip: {\n          type: \"Tooltip\",\n          settings: {\n            labelText: \"{valueX}: {valueY}\"\n          }\n        },\n      },\n      properties: {\n        data: \"#data\"\n      }\n    }]\n  }\n}"
						}
					]
				}
			],
			"settings": [],
			"stylePlugin": ""
		}
	],
	"path": "/json-chart-example-1",
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
	"title": "Json Chart Example 1",
	"userId": "b7a9bac5-5fef-4aa6-bf12-d536c156e453"
}
];
