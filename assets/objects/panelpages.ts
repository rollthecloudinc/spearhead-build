export const panelpages = [
{
	"contexts": [
		{
			"adaptor": "data",
			"data": {
				"exposedModule": "./GalleryModule",
				"moduleName": "GalleryModule",
				"remoteEntry": "http://localhost:3000/remoteEntry.js"
			},
			"name": "gallery",
			"plugin": "module"
		}
	],
	"displayType": "page",
	"entityPermissions": {
		"deleteUserIds": [],
		"readUserIds": [
			""
		],
		"writeUserIds": []
	},
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		},
		{
			"cols": 50,
			"rows": 1,
			"weight": 1,
			"x": 1,
			"y": 0
		},
		{
			"cols": 33,
			"rows": 1,
			"weight": 2,
			"x": 2,
			"y": 0
		},
		{
			"cols": 25,
			"rows": 1,
			"weight": 3,
			"x": 3,
			"y": 0
		}
	],
	"id": "0340ec29-fc39-4d4a-92ba-09caa0fb9d8f",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"name": "test-gallery-int",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [],
			"settings": [],
			"stylePlugin": ""
		},
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [],
			"settings": [],
			"stylePlugin": ""
		},
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "gallery_gallery_item",
					"contexts": [],
					"label": "gallery",
					"locked": false,
					"name": "gallery",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "data",
							"displayName": "bindingOption",
							"name": "bindingOption",
							"type": 1,
							"value": "data"
						},
						{
							"attributes": [],
							"computedValue": "",
							"displayName": "query",
							"name": "query",
							"type": 1,
							"value": ""
						},
						{
							"attributes": [],
							"computedValue": "[.type]",
							"displayName": "typeMapping",
							"name": "typeMapping",
							"type": 1,
							"value": "[.type]"
						},
						{
							"attributes": [],
							"computedValue": "[.src]",
							"displayName": "imageMapping",
							"name": "imageMapping",
							"type": 1,
							"value": "[.src]"
						}
					]
				},
				{
					"contentPlugin": "datasource",
					"contexts": [],
					"label": "Data",
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
									"computedValue": "{\"images\":[\n{\"type\": \"image\", \"src\": \"https://cdn.pixabay.com/photo/2012/02/16/12/08/test-13394_1280.jpg\"},\n{\"type\": \"image\", \"src\": \"https://cdn.pixabay.com/photo/2012/02/16/12/08/test-13394_1280.jpg\"},\n{\"type\": \"image\", \"src\": \"https://cdn.pixabay.com/photo/2012/02/16/12/08/test-13394_1280.jpg\"},\n{\"type\": \"image\", \"src\": \"https://cdn.pixabay.com/photo/2012/02/16/12/08/test-13394_1280.jpg\"},\n{\"type\": \"image\", \"src\": \"https://cdn.pixabay.com/photo/2012/02/16/12/08/test-13394_1280.jpg\"}\n]}",
									"displayName": "data",
									"name": "data",
									"type": 1,
									"value": "{\"images\":[\n{\"type\": \"image\", \"src\": \"https://cdn.pixabay.com/photo/2012/02/16/12/08/test-13394_1280.jpg\"},\n{\"type\": \"image\", \"src\": \"https://cdn.pixabay.com/photo/2012/02/16/12/08/test-13394_1280.jpg\"},\n{\"type\": \"image\", \"src\": \"https://cdn.pixabay.com/photo/2012/02/16/12/08/test-13394_1280.jpg\"},\n{\"type\": \"image\", \"src\": \"https://cdn.pixabay.com/photo/2012/02/16/12/08/test-13394_1280.jpg\"},\n{\"type\": \"image\", \"src\": \"https://cdn.pixabay.com/photo/2012/02/16/12/08/test-13394_1280.jpg\"}\n]}"
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
									"attributes": [
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
													"computedValue": "selectMedia",
													"displayName": "id",
													"name": "id",
													"type": 1,
													"value": "selectMedia"
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
				},
				{
					"contentPlugin": "datasource",
					"contexts": [],
					"label": "Select Media",
					"locked": false,
					"name": "selectMedia",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "select",
							"displayName": "plugin",
							"name": "plugin",
							"type": 1,
							"value": "select"
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "$.images.*",
									"displayName": "query",
									"name": "query",
									"type": 1,
									"value": "$.images.*"
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
		},
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [],
			"settings": [],
			"stylePlugin": ""
		}
	],
	"path": "/test-gallery-int",
	"persistence": {
		"dataduct": {
			"settings": []
		}
	},
	"rowSettings": [
		{
			"settings": [
				{
					"attributes": [],
					"computedValue": "",
					"displayName": "Flex Grow",
					"name": "flexGrow",
					"type": 1,
					"value": ""
				},
				{
					"attributes": [],
					"computedValue": "",
					"displayName": "Flex Shrink",
					"name": "flexShrink",
					"type": 1,
					"value": ""
				},
				{
					"attributes": [],
					"computedValue": "",
					"displayName": "Flex Basis",
					"name": "flexBasis",
					"type": 1,
					"value": ""
				},
				{
					"attributes": [],
					"computedValue": "100%",
					"displayName": "Height",
					"name": "height",
					"type": 1,
					"value": "100%"
				},
				{
					"attributes": [],
					"computedValue": "",
					"displayName": "Direction",
					"name": "direction",
					"type": 1,
					"value": ""
				}
			]
		}
	],
	"site": "spearhead",
	"title": "Test Gallery int",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
{
	"contexts": [
		{
			"adaptor": "rest",
			"name": "ad",
			"plugin": "rest",
			"rest": {
				"body": {
					"content": "{}",
					"contentType": "application/json"
				},
				"method": "get",
				"params": [
					{
						"flags": [
							{
								"enabled": false,
								"name": "page"
							},
							{
								"enabled": false,
								"name": "limit"
							},
							{
								"enabled": false,
								"name": "offset"
							},
							{
								"enabled": false,
								"name": "searchString"
							}
						],
						"mapping": {
							"context": "",
							"testValue": "de35f42f-a551-11f0-89d0-1ac36c6edc87",
							"type": "route",
							"value": "arg1"
						}
					}
				],
				"url": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/rollthecloudinc/spearhead-objects/shapeshifter/property-listing-ad/:id"
			}
		},
		{
			"adaptor": "data",
			"data": {
				"exposedModule": "./GalleryModule",
				"moduleName": "GalleryModule",
				"remoteEntry": "http://localhost:3000/remoteEntry.js"
			},
			"name": "gallery",
			"plugin": "module"
		}
	],
	"cssFile": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/rollthecloudinc/spearhead-objects/media/test.css",
	"displayType": "page",
	"entityPermissions": {
		"deleteUserIds": [],
		"readUserIds": [
			"*"
		],
		"writeUserIds": []
	},
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		},
		{
			"cols": 50,
			"rows": 1,
			"weight": 1,
			"x": 1,
			"y": 0
		},
		{
			"cols": 33,
			"rows": 1,
			"weight": 2,
			"x": 2,
			"y": 0
		},
		{
			"cols": 25,
			"rows": 1,
			"weight": 3,
			"x": 3,
			"y": 0
		}
	],
	"id": "0904fb75-1311-4763-b6e3-043239fb3a89",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"name": "homes",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "panel",
					"contexts": [],
					"label": "Search Form",
					"locked": false,
					"name": "searchForm",
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
											"computedValue": "100",
											"displayName": "cols",
											"name": "cols",
											"type": 0,
											"value": "100"
										},
										{
											"attributes": [],
											"computedValue": "1",
											"displayName": "rows",
											"name": "rows",
											"type": 0,
											"value": "1"
										},
										{
											"attributes": [],
											"computedValue": "0",
											"displayName": "x",
											"name": "x",
											"type": 0,
											"value": "0"
										},
										{
											"attributes": [],
											"computedValue": "0",
											"displayName": "y",
											"name": "y",
											"type": 0,
											"value": "0"
										},
										{
											"attributes": [],
											"computedValue": "0",
											"displayName": "weight",
											"name": "weight",
											"type": 0,
											"value": "0"
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
							"displayName": "gridItems",
							"name": "gridItems",
							"type": 4,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": null,
											"displayName": "settings",
											"name": "settings",
											"type": 2,
											"value": null
										},
										{
											"attributes": [
												{
													"attributes": [
														{
															"attributes": [
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
																	"computedValue": "Search Phrase",
																	"displayName": "Content",
																	"name": "content",
																	"type": 1,
																	"value": "Search Phrase"
																},
																{
																	"attributes": [],
																	"computedValue": null,
																	"displayName": "jsScript",
																	"name": "jsScript",
																	"type": 1,
																	"value": null
																}
															],
															"computedValue": null,
															"displayName": "settings",
															"name": "settings",
															"type": 2,
															"value": null
														},
														{
															"attributes": [],
															"computedValue": "false",
															"displayName": "locked",
															"name": "locked",
															"type": 5,
															"value": "false"
														},
														{
															"attributes": [],
															"computedValue": null,
															"displayName": "contexts",
															"name": "contexts",
															"type": 4,
															"value": null
														},
														{
															"attributes": [],
															"computedValue": "textSearchLabel",
															"displayName": "name",
															"name": "name",
															"type": 1,
															"value": "textSearchLabel"
														},
														{
															"attributes": [],
															"computedValue": "Text Search Label",
															"displayName": "label",
															"name": "label",
															"type": 1,
															"value": "Text Search Label"
														},
														{
															"attributes": [],
															"computedValue": "snippet",
															"displayName": "contentPlugin",
															"name": "contentPlugin",
															"type": 1,
															"value": "snippet"
														},
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "",
																	"displayName": "condition",
																	"name": "condition",
																	"type": 1,
																	"value": ""
																},
																{
																	"attributes": [],
																	"computedValue": null,
																	"displayName": "rules",
																	"name": "rules",
																	"type": 4,
																	"value": null
																}
															],
															"computedValue": null,
															"displayName": "rule",
															"name": "rule",
															"type": 2,
															"value": null
														}
													],
													"computedValue": null,
													"displayName": "0",
													"name": "0",
													"type": 2,
													"value": null
												},
												{
													"attributes": [
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "",
																	"displayName": "value",
																	"name": "value",
																	"type": 1,
																	"value": ""
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
																			"computedValue": "",
																			"displayName": "id",
																			"name": "id",
																			"type": 1,
																			"value": ""
																		}
																	],
																	"computedValue": null,
																	"displayName": "datasourceBinding",
																	"name": "datasourceBinding",
																	"type": 2,
																	"value": null
																}
															],
															"computedValue": null,
															"displayName": "settings",
															"name": "settings",
															"type": 2,
															"value": null
														},
														{
															"attributes": [],
															"computedValue": "false",
															"displayName": "locked",
															"name": "locked",
															"type": 5,
															"value": "false"
														},
														{
															"attributes": [],
															"computedValue": null,
															"displayName": "contexts",
															"name": "contexts",
															"type": 4,
															"value": null
														},
														{
															"attributes": [],
															"computedValue": "textSearch",
															"displayName": "name",
															"name": "name",
															"type": 1,
															"value": "textSearch"
														},
														{
															"attributes": [],
															"computedValue": "Text Search",
															"displayName": "label",
															"name": "label",
															"type": 1,
															"value": "Text Search"
														},
														{
															"attributes": [],
															"computedValue": "form_input",
															"displayName": "contentPlugin",
															"name": "contentPlugin",
															"type": 1,
															"value": "form_input"
														},
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "",
																	"displayName": "condition",
																	"name": "condition",
																	"type": 1,
																	"value": ""
																},
																{
																	"attributes": [],
																	"computedValue": null,
																	"displayName": "rules",
																	"name": "rules",
																	"type": 4,
																	"value": null
																}
															],
															"computedValue": null,
															"displayName": "rule",
															"name": "rule",
															"type": 2,
															"value": null
														}
													],
													"computedValue": null,
													"displayName": "1",
													"name": "1",
													"type": 2,
													"value": null
												},
												{
													"attributes": [
														{
															"attributes": [
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
																			"computedValue": "[\n{\"title\": \"All\", \"value\": \"\"},\n{\"title\": \"1\", \"value\": \"1\"},\n{\"title\": \"1.5\", \"value\": \"1.5\"},\n{\"title\": \"2\", \"value\": \"2\"},\n{\"title\": \"2.5\", \"value\": \"2.5\"},\n{\"title\": \"3\", \"value\": \"3\"}\n]",
																			"displayName": "data",
																			"name": "data",
																			"type": 1,
																			"value": "[\n{\"title\": \"All\", \"value\": \"\"},\n{\"title\": \"1\", \"value\": \"1\"},\n{\"title\": \"1.5\", \"value\": \"1.5\"},\n{\"title\": \"2\", \"value\": \"2\"},\n{\"title\": \"2.5\", \"value\": \"2.5\"},\n{\"title\": \"3\", \"value\": \"3\"}\n]"
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
															],
															"computedValue": null,
															"displayName": "settings",
															"name": "settings",
															"type": 2,
															"value": null
														},
														{
															"attributes": [],
															"computedValue": "false",
															"displayName": "locked",
															"name": "locked",
															"type": 5,
															"value": "false"
														},
														{
															"attributes": [],
															"computedValue": null,
															"displayName": "contexts",
															"name": "contexts",
															"type": 4,
															"value": null
														},
														{
															"attributes": [],
															"computedValue": "beds",
															"displayName": "name",
															"name": "name",
															"type": 1,
															"value": "beds"
														},
														{
															"attributes": [],
															"computedValue": "Beds",
															"displayName": "label",
															"name": "label",
															"type": 1,
															"value": "Beds"
														},
														{
															"attributes": [],
															"computedValue": "datasource",
															"displayName": "contentPlugin",
															"name": "contentPlugin",
															"type": 1,
															"value": "datasource"
														},
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "",
																	"displayName": "condition",
																	"name": "condition",
																	"type": 1,
																	"value": ""
																},
																{
																	"attributes": [],
																	"computedValue": null,
																	"displayName": "rules",
																	"name": "rules",
																	"type": 4,
																	"value": null
																}
															],
															"computedValue": null,
															"displayName": "rule",
															"name": "rule",
															"type": 2,
															"value": null
														}
													],
													"computedValue": null,
													"displayName": "2",
													"name": "2",
													"type": 2,
													"value": null
												},
												{
													"attributes": [
														{
															"attributes": [
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
																	"computedValue": "Beds",
																	"displayName": "Content",
																	"name": "content",
																	"type": 1,
																	"value": "Beds"
																},
																{
																	"attributes": [],
																	"computedValue": null,
																	"displayName": "jsScript",
																	"name": "jsScript",
																	"type": 1,
																	"value": null
																}
															],
															"computedValue": null,
															"displayName": "settings",
															"name": "settings",
															"type": 2,
															"value": null
														},
														{
															"attributes": [],
															"computedValue": "false",
															"displayName": "locked",
															"name": "locked",
															"type": 5,
															"value": "false"
														},
														{
															"attributes": [],
															"computedValue": null,
															"displayName": "contexts",
															"name": "contexts",
															"type": 4,
															"value": null
														},
														{
															"attributes": [],
															"computedValue": "bedsSearchLabel",
															"displayName": "name",
															"name": "name",
															"type": 1,
															"value": "bedsSearchLabel"
														},
														{
															"attributes": [],
															"computedValue": "Beds Search Label",
															"displayName": "label",
															"name": "label",
															"type": 1,
															"value": "Beds Search Label"
														},
														{
															"attributes": [],
															"computedValue": "snippet",
															"displayName": "contentPlugin",
															"name": "contentPlugin",
															"type": 1,
															"value": "snippet"
														},
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "",
																	"displayName": "condition",
																	"name": "condition",
																	"type": 1,
																	"value": ""
																},
																{
																	"attributes": [],
																	"computedValue": null,
																	"displayName": "rules",
																	"name": "rules",
																	"type": 4,
																	"value": null
																}
															],
															"computedValue": null,
															"displayName": "rule",
															"name": "rule",
															"type": 2,
															"value": null
														}
													],
													"computedValue": null,
													"displayName": "3",
													"name": "3",
													"type": 2,
													"value": null
												},
												{
													"attributes": [
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "",
																	"displayName": "value",
																	"name": "value",
																	"type": 1,
																	"value": ""
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
																			"computedValue": "beds",
																			"displayName": "id",
																			"name": "id",
																			"type": 1,
																			"value": "beds"
																		}
																	],
																	"computedValue": null,
																	"displayName": "datasourceBinding",
																	"name": "datasourceBinding",
																	"type": 2,
																	"value": null
																},
																{
																	"attributes": [
																		{
																			"attributes": [],
																			"computedValue": "",
																			"displayName": "query",
																			"name": "query",
																			"type": 1,
																			"value": ""
																		},
																		{
																			"attributes": [],
																			"computedValue": "",
																			"displayName": "trackBy",
																			"name": "trackBy",
																			"type": 1,
																			"value": ""
																		},
																		{
																			"attributes": [],
																			"computedValue": "[.value]",
																			"displayName": "idMapping",
																			"name": "idMapping",
																			"type": 1,
																			"value": "[.value]"
																		},
																		{
																			"attributes": [],
																			"computedValue": "[.title]",
																			"displayName": "labelMapping",
																			"name": "labelMapping",
																			"type": 1,
																			"value": "[.title]"
																		},
																		{
																			"attributes": [],
																			"computedValue": "[.value]",
																			"displayName": "valueMapping",
																			"name": "valueMapping",
																			"type": 1,
																			"value": "[.value]"
																		},
																		{
																			"attributes": [],
																			"computedValue": "false",
																			"displayName": "multiple",
																			"name": "multiple",
																			"type": 5,
																			"value": "false"
																		},
																		{
																			"attributes": [],
																			"computedValue": "0",
																			"displayName": "limit",
																			"name": "limit",
																			"type": 0,
																			"value": "0"
																		}
																	],
																	"computedValue": null,
																	"displayName": "datasourceOptions",
																	"name": "datasourceOptions",
																	"type": 2,
																	"value": null
																}
															],
															"computedValue": null,
															"displayName": "settings",
															"name": "settings",
															"type": 2,
															"value": null
														},
														{
															"attributes": [],
															"computedValue": "false",
															"displayName": "locked",
															"name": "locked",
															"type": 5,
															"value": "false"
														},
														{
															"attributes": [],
															"computedValue": null,
															"displayName": "contexts",
															"name": "contexts",
															"type": 4,
															"value": null
														},
														{
															"attributes": [],
															"computedValue": "bedsSearch",
															"displayName": "name",
															"name": "name",
															"type": 1,
															"value": "bedsSearch"
														},
														{
															"attributes": [],
															"computedValue": "Beds Search",
															"displayName": "label",
															"name": "label",
															"type": 1,
															"value": "Beds Search"
														},
														{
															"attributes": [],
															"computedValue": "form_select",
															"displayName": "contentPlugin",
															"name": "contentPlugin",
															"type": 1,
															"value": "form_select"
														},
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "",
																	"displayName": "condition",
																	"name": "condition",
																	"type": 1,
																	"value": ""
																},
																{
																	"attributes": [],
																	"computedValue": null,
																	"displayName": "rules",
																	"name": "rules",
																	"type": 4,
																	"value": null
																}
															],
															"computedValue": null,
															"displayName": "rule",
															"name": "rule",
															"type": 2,
															"value": null
														}
													],
													"computedValue": null,
													"displayName": "4",
													"name": "4",
													"type": 2,
													"value": null
												}
											],
											"computedValue": null,
											"displayName": "panes",
											"name": "panes",
											"type": 4,
											"value": null
										},
										{
											"attributes": [],
											"computedValue": "undefined",
											"displayName": "name",
											"name": "name",
											"type": 0,
											"value": "undefined"
										},
										{
											"attributes": [],
											"computedValue": "undefined",
											"displayName": "label",
											"name": "label",
											"type": 0,
											"value": "undefined"
										},
										{
											"attributes": [],
											"computedValue": "",
											"displayName": "stylePlugin",
											"name": "stylePlugin",
											"type": 1,
											"value": ""
										},
										{
											"attributes": [
												{
													"attributes": [],
													"computedValue": null,
													"displayName": "settings",
													"name": "settings",
													"type": 2,
													"value": null
												}
											],
											"computedValue": null,
											"displayName": "columnSetting",
											"name": "columnSetting",
											"type": 2,
											"value": null
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
							"displayName": "panels",
							"name": "panels",
							"type": 4,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "ad",
											"displayName": "name",
											"name": "name",
											"type": 1,
											"value": "ad"
										},
										{
											"attributes": [],
											"computedValue": "rest",
											"displayName": "adaptor",
											"name": "adaptor",
											"type": 1,
											"value": "rest"
										},
										{
											"attributes": [],
											"computedValue": "rest",
											"displayName": "plugin",
											"name": "plugin",
											"type": 1,
											"value": "rest"
										},
										{
											"attributes": [
												{
													"attributes": [],
													"computedValue": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/rollthecloudinc/spearhead-objects/shapeshifter/property-listing-ad/:id",
													"displayName": "url",
													"name": "url",
													"type": 1,
													"value": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/rollthecloudinc/spearhead-objects/shapeshifter/property-listing-ad/:id"
												},
												{
													"attributes": [],
													"computedValue": "get",
													"displayName": "method",
													"name": "method",
													"type": 1,
													"value": "get"
												},
												{
													"attributes": [
														{
															"attributes": [
																{
																	"attributes": [
																		{
																			"attributes": [],
																			"computedValue": "route",
																			"displayName": "type",
																			"name": "type",
																			"type": 1,
																			"value": "route"
																		},
																		{
																			"attributes": [],
																			"computedValue": "arg1",
																			"displayName": "value",
																			"name": "value",
																			"type": 1,
																			"value": "arg1"
																		},
																		{
																			"attributes": [],
																			"computedValue": "de35f42f-a551-11f0-89d0-1ac36c6edc87",
																			"displayName": "testValue",
																			"name": "testValue",
																			"type": 1,
																			"value": "de35f42f-a551-11f0-89d0-1ac36c6edc87"
																		},
																		{
																			"attributes": [],
																			"computedValue": "",
																			"displayName": "context",
																			"name": "context",
																			"type": 1,
																			"value": ""
																		}
																	],
																	"computedValue": null,
																	"displayName": "mapping",
																	"name": "mapping",
																	"type": 2,
																	"value": null
																},
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "page",
																					"displayName": "name",
																					"name": "name",
																					"type": 1,
																					"value": "page"
																				},
																				{
																					"attributes": [],
																					"computedValue": "false",
																					"displayName": "enabled",
																					"name": "enabled",
																					"type": 5,
																					"value": "false"
																				}
																			],
																			"computedValue": null,
																			"displayName": "0",
																			"name": "0",
																			"type": 2,
																			"value": null
																		},
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "limit",
																					"displayName": "name",
																					"name": "name",
																					"type": 1,
																					"value": "limit"
																				},
																				{
																					"attributes": [],
																					"computedValue": "false",
																					"displayName": "enabled",
																					"name": "enabled",
																					"type": 5,
																					"value": "false"
																				}
																			],
																			"computedValue": null,
																			"displayName": "1",
																			"name": "1",
																			"type": 2,
																			"value": null
																		},
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "offset",
																					"displayName": "name",
																					"name": "name",
																					"type": 1,
																					"value": "offset"
																				},
																				{
																					"attributes": [],
																					"computedValue": "false",
																					"displayName": "enabled",
																					"name": "enabled",
																					"type": 5,
																					"value": "false"
																				}
																			],
																			"computedValue": null,
																			"displayName": "2",
																			"name": "2",
																			"type": 2,
																			"value": null
																		},
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "searchString",
																					"displayName": "name",
																					"name": "name",
																					"type": 1,
																					"value": "searchString"
																				},
																				{
																					"attributes": [],
																					"computedValue": "false",
																					"displayName": "enabled",
																					"name": "enabled",
																					"type": 5,
																					"value": "false"
																				}
																			],
																			"computedValue": null,
																			"displayName": "3",
																			"name": "3",
																			"type": 2,
																			"value": null
																		}
																	],
																	"computedValue": null,
																	"displayName": "flags",
																	"name": "flags",
																	"type": 4,
																	"value": null
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
													"displayName": "params",
													"name": "params",
													"type": 4,
													"value": null
												},
												{
													"attributes": [
														{
															"attributes": [],
															"computedValue": "{}",
															"displayName": "content",
															"name": "content",
															"type": 1,
															"value": "{}"
														},
														{
															"attributes": [],
															"computedValue": "application/json",
															"displayName": "contentType",
															"name": "contentType",
															"type": 1,
															"value": "application/json"
														}
													],
													"computedValue": null,
													"displayName": "body",
													"name": "body",
													"type": 2,
													"value": null
												}
											],
											"computedValue": null,
											"displayName": "rest",
											"name": "rest",
											"type": 2,
											"value": null
										}
									],
									"computedValue": null,
									"displayName": "0",
									"name": "0",
									"type": 2,
									"value": null
								},
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "gallery",
											"displayName": "name",
											"name": "name",
											"type": 1,
											"value": "gallery"
										},
										{
											"attributes": [],
											"computedValue": "data",
											"displayName": "adaptor",
											"name": "adaptor",
											"type": 1,
											"value": "data"
										},
										{
											"attributes": [],
											"computedValue": "module",
											"displayName": "plugin",
											"name": "plugin",
											"type": 1,
											"value": "module"
										},
										{
											"attributes": [
												{
													"attributes": [],
													"computedValue": "http://localhost:3000/remoteEntry.js",
													"displayName": "remoteEntry",
													"name": "remoteEntry",
													"type": 1,
													"value": "http://localhost:3000/remoteEntry.js"
												},
												{
													"attributes": [],
													"computedValue": "./GalleryModule",
													"displayName": "exposedModule",
													"name": "exposedModule",
													"type": 1,
													"value": "./GalleryModule"
												},
												{
													"attributes": [],
													"computedValue": "GalleryModule",
													"displayName": "moduleName",
													"name": "moduleName",
													"type": 1,
													"value": "GalleryModule"
												}
											],
											"computedValue": null,
											"displayName": "data",
											"name": "data",
											"type": 2,
											"value": null
										}
									],
									"computedValue": null,
									"displayName": "1",
									"name": "1",
									"type": 2,
									"value": null
								}
							],
							"computedValue": null,
							"displayName": "contexts",
							"name": "contexts",
							"type": 4,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": null,
											"displayName": "settings",
											"name": "settings",
											"type": 2,
											"value": null
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
							"displayName": "rowSettings",
							"name": "rowSettings",
							"type": 4,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": null,
									"displayName": "readUserIds",
									"name": "readUserIds",
									"type": 4,
									"value": null
								},
								{
									"attributes": [],
									"computedValue": null,
									"displayName": "writeUserIds",
									"name": "writeUserIds",
									"type": 4,
									"value": null
								},
								{
									"attributes": [],
									"computedValue": null,
									"displayName": "deleteUserIds",
									"name": "deleteUserIds",
									"type": 4,
									"value": null
								}
							],
							"computedValue": null,
							"displayName": "entityPermissions",
							"name": "entityPermissions",
							"type": 2,
							"value": null
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "id",
							"name": "id",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [],
							"computedValue": "split",
							"displayName": "layoutType",
							"name": "layoutType",
							"type": 1,
							"value": "split"
						},
						{
							"attributes": [],
							"computedValue": "form",
							"displayName": "displayType",
							"name": "displayType",
							"type": 1,
							"value": "form"
						},
						{
							"attributes": [],
							"computedValue": "searchForm",
							"displayName": "name",
							"name": "name",
							"type": 1,
							"value": "searchForm"
						},
						{
							"attributes": [],
							"computedValue": "Search Form",
							"displayName": "title",
							"name": "title",
							"type": 1,
							"value": "Search Form"
						},
						{
							"attributes": [],
							"computedValue": "spearhead",
							"displayName": "site",
							"name": "site",
							"type": 1,
							"value": "spearhead"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "userId",
							"name": "userId",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "path",
							"name": "path",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": null,
											"displayName": "settings",
											"name": "settings",
											"type": 2,
											"value": null
										},
										{
											"attributes": [],
											"computedValue": "undefined",
											"displayName": "plugin",
											"name": "plugin",
											"type": 0,
											"value": "undefined"
										}
									],
									"computedValue": null,
									"displayName": "dataduct",
									"name": "dataduct",
									"type": 2,
									"value": null
								}
							],
							"computedValue": null,
							"displayName": "persistence",
							"name": "persistence",
							"type": 2,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": null,
											"displayName": "listeners",
											"name": "listeners",
											"type": 4,
											"value": null
										}
									],
									"computedValue": null,
									"displayName": "interactions",
									"name": "interactions",
									"type": 2,
									"value": null
								}
							],
							"computedValue": null,
							"displayName": "interactions",
							"name": "interactions",
							"type": 2,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": null,
									"displayName": "settings",
									"name": "settings",
									"type": 2,
									"value": null
								}
							],
							"computedValue": null,
							"displayName": "layoutSetting",
							"name": "layoutSetting",
							"type": 2,
							"value": null
						}
					]
				}
			],
			"settings": [],
			"stylePlugin": ""
		},
		{
			"columnSetting": {
				"settings": [
					{
						"attributes": [],
						"computedValue": "100%",
						"displayName": "Height",
						"name": "height",
						"type": 1,
						"value": "100%"
					}
				]
			},
			"panes": [
				{
					"contentPlugin": "datasource",
					"contexts": [],
					"label": "Ads",
					"locked": false,
					"name": "ads",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "rest",
							"displayName": "plugin",
							"name": "plugin",
							"type": 1,
							"value": "rest"
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "https://77iwvhc4mf.execute-api.us-east-1.amazonaws.com/rollthecloudinc/spearhead-objects/search",
									"displayName": "url",
									"name": "url",
									"type": 1,
									"value": "https://77iwvhc4mf.execute-api.us-east-1.amazonaws.com/rollthecloudinc/spearhead-objects/search"
								},
								{
									"attributes": [
										{
											"attributes": [
												{
													"attributes": [
														{
															"attributes": [],
															"computedValue": "form",
															"displayName": "type",
															"name": "type",
															"type": 1,
															"value": "form"
														},
														{
															"attributes": [],
															"computedValue": "searchForm.textSearch",
															"displayName": "value",
															"name": "value",
															"type": 1,
															"value": "searchForm.textSearch"
														},
														{
															"attributes": [],
															"computedValue": "",
															"displayName": "testValue",
															"name": "testValue",
															"type": 1,
															"value": ""
														},
														{
															"attributes": [],
															"computedValue": "",
															"displayName": "context",
															"name": "context",
															"type": 1,
															"value": ""
														}
													],
													"computedValue": null,
													"displayName": "mapping",
													"name": "mapping",
													"type": 2,
													"value": null
												},
												{
													"attributes": [
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "page",
																	"displayName": "name",
																	"name": "name",
																	"type": 1,
																	"value": "page"
																},
																{
																	"attributes": [],
																	"computedValue": "false",
																	"displayName": "enabled",
																	"name": "enabled",
																	"type": 5,
																	"value": "false"
																}
															],
															"computedValue": null,
															"displayName": "0",
															"name": "0",
															"type": 2,
															"value": null
														},
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "limit",
																	"displayName": "name",
																	"name": "name",
																	"type": 1,
																	"value": "limit"
																},
																{
																	"attributes": [],
																	"computedValue": "false",
																	"displayName": "enabled",
																	"name": "enabled",
																	"type": 5,
																	"value": "false"
																}
															],
															"computedValue": null,
															"displayName": "1",
															"name": "1",
															"type": 2,
															"value": null
														},
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "offset",
																	"displayName": "name",
																	"name": "name",
																	"type": 1,
																	"value": "offset"
																},
																{
																	"attributes": [],
																	"computedValue": "false",
																	"displayName": "enabled",
																	"name": "enabled",
																	"type": 5,
																	"value": "false"
																}
															],
															"computedValue": null,
															"displayName": "2",
															"name": "2",
															"type": 2,
															"value": null
														},
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "searchString",
																	"displayName": "name",
																	"name": "name",
																	"type": 1,
																	"value": "searchString"
																},
																{
																	"attributes": [],
																	"computedValue": "false",
																	"displayName": "enabled",
																	"name": "enabled",
																	"type": 5,
																	"value": "false"
																}
															],
															"computedValue": null,
															"displayName": "3",
															"name": "3",
															"type": 2,
															"value": null
														}
													],
													"computedValue": null,
													"displayName": "flags",
													"name": "flags",
													"type": 4,
													"value": null
												}
											],
											"computedValue": null,
											"displayName": "0",
											"name": "0",
											"type": 2,
											"value": null
										},
										{
											"attributes": [
												{
													"attributes": [
														{
															"attributes": [],
															"computedValue": "form",
															"displayName": "type",
															"name": "type",
															"type": 1,
															"value": "form"
														},
														{
															"attributes": [],
															"computedValue": "searchForm.bedsSearch",
															"displayName": "value",
															"name": "value",
															"type": 1,
															"value": "searchForm.bedsSearch"
														},
														{
															"attributes": [],
															"computedValue": "",
															"displayName": "testValue",
															"name": "testValue",
															"type": 1,
															"value": ""
														},
														{
															"attributes": [],
															"computedValue": "",
															"displayName": "context",
															"name": "context",
															"type": 1,
															"value": ""
														}
													],
													"computedValue": null,
													"displayName": "mapping",
													"name": "mapping",
													"type": 2,
													"value": null
												},
												{
													"attributes": [
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "page",
																	"displayName": "name",
																	"name": "name",
																	"type": 1,
																	"value": "page"
																},
																{
																	"attributes": [],
																	"computedValue": "false",
																	"displayName": "enabled",
																	"name": "enabled",
																	"type": 5,
																	"value": "false"
																}
															],
															"computedValue": null,
															"displayName": "0",
															"name": "0",
															"type": 2,
															"value": null
														},
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "limit",
																	"displayName": "name",
																	"name": "name",
																	"type": 1,
																	"value": "limit"
																},
																{
																	"attributes": [],
																	"computedValue": "false",
																	"displayName": "enabled",
																	"name": "enabled",
																	"type": 5,
																	"value": "false"
																}
															],
															"computedValue": null,
															"displayName": "1",
															"name": "1",
															"type": 2,
															"value": null
														},
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "offset",
																	"displayName": "name",
																	"name": "name",
																	"type": 1,
																	"value": "offset"
																},
																{
																	"attributes": [],
																	"computedValue": "false",
																	"displayName": "enabled",
																	"name": "enabled",
																	"type": 5,
																	"value": "false"
																}
															],
															"computedValue": null,
															"displayName": "2",
															"name": "2",
															"type": 2,
															"value": null
														},
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "searchString",
																	"displayName": "name",
																	"name": "name",
																	"type": 1,
																	"value": "searchString"
																},
																{
																	"attributes": [],
																	"computedValue": "false",
																	"displayName": "enabled",
																	"name": "enabled",
																	"type": 5,
																	"value": "false"
																}
															],
															"computedValue": null,
															"displayName": "3",
															"name": "3",
															"type": 2,
															"value": null
														}
													],
													"computedValue": null,
													"displayName": "flags",
													"name": "flags",
													"type": 4,
													"value": null
												}
											],
											"computedValue": null,
											"displayName": "1",
											"name": "1",
											"type": 2,
											"value": null
										}
									],
									"computedValue": null,
									"displayName": "params",
									"name": "params",
									"type": 4,
									"value": null
								},
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "{\n  \"query\": {\n  \"index\": \"property-listing-ad-location-category\",\n\t\"composite\": {\n\t\t\"location\": \"detroit\",\n\t\t\"category\": \"general\"\n\t },\n\"bool\": {\n  \"all\": [\n    {\n       \"matchPhrase\": {\n          \"field\": \"description\",\n          \"value\": \"[:textSearch]\"\n      }\n    },\n   {\n      \"filter\": {\n        \"field\": \"property.bedrooms\",\n         \"value\": \"[:bedsSearch]\"\n      }\n   }\n  ]\n}\n}}",
											"displayName": "content",
											"name": "content",
											"type": 1,
											"value": "{\n  \"query\": {\n  \"index\": \"property-listing-ad-location-category\",\n\t\"composite\": {\n\t\t\"location\": \"detroit\",\n\t\t\"category\": \"general\"\n\t },\n\"bool\": {\n  \"all\": [\n    {\n       \"matchPhrase\": {\n          \"field\": \"description\",\n          \"value\": \"[:textSearch]\"\n      }\n    },\n   {\n      \"filter\": {\n        \"field\": \"property.bedrooms\",\n         \"value\": \"[:bedsSearch]\"\n      }\n   }\n  ]\n}\n}}"
										},
										{
											"attributes": [],
											"computedValue": "application/json",
											"displayName": "contentType",
											"name": "contentType",
											"type": 1,
											"value": "application/json"
										},
										{
											"attributes": [],
											"computedValue": "",
											"displayName": "jsScript",
											"name": "jsScript",
											"type": 1,
											"value": ""
										}
									],
									"computedValue": null,
									"displayName": "body",
									"name": "body",
									"type": 2,
									"value": null
								},
								{
									"attributes": [],
									"computedValue": "post",
									"displayName": "method",
									"name": "method",
									"type": 1,
									"value": "post"
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
									"attributes": [
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
													"computedValue": "selectHits",
													"displayName": "id",
													"name": "id",
													"type": 1,
													"value": "selectHits"
												}
											],
											"computedValue": null,
											"displayName": "0",
											"name": "0",
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
													"computedValue": "adDescription",
													"displayName": "id",
													"name": "id",
													"type": 1,
													"value": "adDescription"
												}
											],
											"computedValue": null,
											"displayName": "1",
											"name": "1",
											"type": 2,
											"value": null
										}
									],
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
				},
				{
					"contentPlugin": "datasource",
					"contexts": [],
					"label": "Select Hits",
					"locked": false,
					"name": "selectHits",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "select",
							"displayName": "plugin",
							"name": "plugin",
							"type": 1,
							"value": "select"
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "$[0].hits.*",
									"displayName": "query",
									"name": "query",
									"type": 1,
									"value": "$[0].hits.*"
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
				},
				{
					"contentPlugin": "snippet",
					"contexts": [],
					"label": "Ad Description",
					"locked": false,
					"name": "adDescription",
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
							"computedValue": "<classifieds-ui-page-router-link href=\"[_page.path]/listing/[.id]\" text=\"[.title]\"></classifieds-ui-page-router-link>",
							"displayName": "Content",
							"name": "content",
							"type": 1,
							"value": "<classifieds-ui-page-router-link href=\"[_page.path]/listing/[.id]\" text=\"[.title]\"></classifieds-ui-page-router-link>"
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
			"stylePlugin": "virtuallist"
		},
		{
			"columnSetting": {
				"settings": [
					{
						"attributes": [],
						"computedValue": "100%",
						"displayName": "Height",
						"name": "height",
						"type": 1,
						"value": "100%"
					}
				]
			},
			"panes": [
				{
					"contentPlugin": "gallery_gallery_item",
					"contexts": [],
					"label": "Gallery",
					"locked": false,
					"name": "gallery",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "galleryDummyData",
							"displayName": "bindingOption",
							"name": "bindingOption",
							"type": 1,
							"value": "galleryDummyData"
						},
						{
							"attributes": [],
							"computedValue": "",
							"displayName": "query",
							"name": "query",
							"type": 1,
							"value": ""
						},
						{
							"attributes": [],
							"computedValue": "[.type]",
							"displayName": "typeMapping",
							"name": "typeMapping",
							"type": 1,
							"value": "[.type]"
						},
						{
							"attributes": [],
							"computedValue": "[.src]",
							"displayName": "imageMapping",
							"name": "imageMapping",
							"type": 1,
							"value": "[.src]"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "videoMapping",
							"name": "videoMapping",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "youtubeMapping",
							"name": "youtubeMapping",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "iframeMapping",
							"name": "iframeMapping",
							"type": 0,
							"value": "undefined"
						}
					]
				},
				{
					"contentPlugin": "datasource",
					"contexts": [],
					"label": "Gallery Dummy Data",
					"locked": false,
					"name": "galleryDummyData",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "context",
							"displayName": "plugin",
							"name": "plugin",
							"type": 1,
							"value": "context"
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "ad",
									"displayName": "name",
									"name": "name",
									"type": 1,
									"value": "ad"
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
									"attributes": [
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
													"computedValue": "selectImages",
													"displayName": "id",
													"name": "id",
													"type": 1,
													"value": "selectImages"
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
				},
				{
					"contentPlugin": "datasource",
					"contexts": [],
					"label": "Select Images",
					"locked": false,
					"name": "selectImages",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "select",
							"displayName": "plugin",
							"name": "plugin",
							"type": 1,
							"value": "select"
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "$[0].photos.*",
									"displayName": "query",
									"name": "query",
									"type": 1,
									"value": "$[0].photos.*"
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
		},
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "snippet",
					"contexts": [],
					"label": "title",
					"locked": false,
					"name": "title",
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
							"computedValue": "<h2>[ad.title]</h2>",
							"displayName": "Content",
							"name": "content",
							"type": 1,
							"value": "<h2>[ad.title]</h2>"
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
				},
				{
					"contentPlugin": "snippet",
					"contexts": [],
					"label": "Description",
					"locked": false,
					"name": "description",
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
							"computedValue": "[ad.description]",
							"displayName": "Content",
							"name": "content",
							"type": 1,
							"value": "[ad.description]"
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
			"settings": [
				{
					"attributes": [
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "mapping",
									"name": "mapping",
									"type": 1,
									"value": ""
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
					"displayName": "labels",
					"name": "labels",
					"type": 4,
					"value": null
				}
			],
			"stylePlugin": ""
		}
	],
	"path": "/homes",
	"persistence": {
		"dataduct": {
			"settings": []
		}
	},
	"rowSettings": [
		{
			"settings": [
				{
					"attributes": [],
					"computedValue": "",
					"displayName": "Flex Grow",
					"name": "flexGrow",
					"type": 1,
					"value": ""
				},
				{
					"attributes": [],
					"computedValue": "",
					"displayName": "Flex Shrink",
					"name": "flexShrink",
					"type": 1,
					"value": ""
				},
				{
					"attributes": [],
					"computedValue": "",
					"displayName": "Flex Basis",
					"name": "flexBasis",
					"type": 1,
					"value": ""
				},
				{
					"attributes": [],
					"computedValue": "100%",
					"displayName": "Height",
					"name": "height",
					"type": 1,
					"value": "100%"
				},
				{
					"attributes": [],
					"computedValue": "",
					"displayName": "Direction",
					"name": "direction",
					"type": 1,
					"value": ""
				}
			]
		}
	],
	"site": "spearhead",
	"title": "Homes",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
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
	"contexts": [],
	"displayType": "page",
	"entityPermissions": {
		"deleteUserIds": [],
		"readUserIds": [
			"*"
		],
		"writeUserIds": []
	},
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "2d94ada8-53f4-4e45-b7e5-8c07c796856d",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"name": "testDatasourceSelectv1",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "datasource",
					"contexts": [],
					"label": "Data",
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
									"computedValue": "{\"options\": [\n{\"label\": \"one\", \"value\":\"1\"},\n{\"label\": \"two\", \"value\":\"2\"},\n{\"label\": \"three\", \"value\":\"3\"}\n]}",
									"displayName": "data",
									"name": "data",
									"type": 1,
									"value": "{\"options\": [\n{\"label\": \"one\", \"value\":\"1\"},\n{\"label\": \"two\", \"value\":\"2\"},\n{\"label\": \"three\", \"value\":\"3\"}\n]}"
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
									"attributes": [
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
													"computedValue": "selectOptions",
													"displayName": "id",
													"name": "id",
													"type": 1,
													"value": "selectOptions"
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
				},
				{
					"contentPlugin": "form_select",
					"contexts": [],
					"label": "select",
					"locked": false,
					"name": "select",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": ""
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
									"computedValue": "data",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": "data"
								}
							],
							"computedValue": null,
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "query",
									"name": "query",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "trackBy",
									"name": "trackBy",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "[.value]",
									"displayName": "idMapping",
									"name": "idMapping",
									"type": 1,
									"value": "[.value]"
								},
								{
									"attributes": [],
									"computedValue": "[.label]",
									"displayName": "labelMapping",
									"name": "labelMapping",
									"type": 1,
									"value": "[.label]"
								},
								{
									"attributes": [],
									"computedValue": "[.value]",
									"displayName": "valueMapping",
									"name": "valueMapping",
									"type": 1,
									"value": "[.value]"
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "multiple",
									"name": "multiple",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "limit",
									"name": "limit",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": null,
							"displayName": "datasourceOptions",
							"name": "datasourceOptions",
							"type": 2,
							"value": null
						}
					]
				},
				{
					"contentPlugin": "datasource",
					"contexts": [],
					"label": "Select Options",
					"locked": false,
					"name": "selectOptions",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "select",
							"displayName": "plugin",
							"name": "plugin",
							"type": 1,
							"value": "select"
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "$.options.*",
									"displayName": "query",
									"name": "query",
									"type": 1,
									"value": "$.options.*"
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
	"path": "/test-datasource-select-v1",
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
	"title": "Test Datasource Select v1",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
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
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "37ebba18-506d-41c4-bff7-b6ef0affa67d",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"name": "homes",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "datasource",
					"contexts": [],
					"label": "Ads",
					"locked": false,
					"name": "ads",
					"settings": [
						{
							"attributes": [],
							"computedValue": "rest",
							"displayName": "plugin",
							"name": "plugin",
							"type": 1,
							"value": "rest"
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "https://77iwvhc4mf.execute-api.us-east-1.amazonaws.com/rollthecloudinc/spearhead-objects/search",
									"displayName": "url",
									"name": "url",
									"type": 1,
									"value": "https://77iwvhc4mf.execute-api.us-east-1.amazonaws.com/rollthecloudinc/spearhead-objects/search"
								},
								{
									"attributes": [],
									"computedValue": null,
									"displayName": "params",
									"name": "params",
									"type": 4,
									"value": null
								},
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "\n  {\"query\": {\n  \"index\": \"property-listing-ad-location-category\",\n\t\"composite\": {\n\t\t\"location\": \"detroit\",\n\t\t\"category\": \"general\"\n\t }\n}\n}",
											"displayName": "content",
											"name": "content",
											"type": 1,
											"value": "\n  {\"query\": {\n  \"index\": \"property-listing-ad-location-category\",\n\t\"composite\": {\n\t\t\"location\": \"detroit\",\n\t\t\"category\": \"general\"\n\t }\n}\n}"
										},
										{
											"attributes": [],
											"computedValue": "application/json",
											"displayName": "contentType",
											"name": "contentType",
											"type": 1,
											"value": "application/json"
										},
										{
											"attributes": [],
											"computedValue": "",
											"displayName": "jsScript",
											"name": "jsScript",
											"type": 1,
											"value": ""
										}
									],
									"computedValue": null,
									"displayName": "body",
									"name": "body",
									"type": 2,
									"value": null
								},
								{
									"attributes": [],
									"computedValue": "post",
									"displayName": "method",
									"name": "method",
									"type": 1,
									"value": "post"
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
				},
				{
					"contentPlugin": "snippet",
					"contexts": [],
					"label": "",
					"locked": false,
					"name": "",
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
							"computedValue": "Hello World!",
							"displayName": "Content",
							"name": "content",
							"type": 1,
							"value": "Hello World!"
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
	"path": "/homes",
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
	"title": "Homes",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
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
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "41cc92a0-bd34-4c06-a386-bd61b89bced8",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"name": "homes",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "datasource",
					"contexts": [],
					"label": "Ads",
					"locked": false,
					"name": "ads",
					"settings": [
						{
							"attributes": [],
							"computedValue": "rest",
							"displayName": "plugin",
							"name": "plugin",
							"type": 1,
							"value": "rest"
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "https://77iwvhc4mf.execute-api.us-east-1.amazonaws.com/rollthecloudinc/spearhead-objects/search",
									"displayName": "url",
									"name": "url",
									"type": 1,
									"value": "https://77iwvhc4mf.execute-api.us-east-1.amazonaws.com/rollthecloudinc/spearhead-objects/search"
								},
								{
									"attributes": [],
									"computedValue": null,
									"displayName": "params",
									"name": "params",
									"type": 4,
									"value": null
								},
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "{\n  \"query\": {\n  \"index\": \"property-listing-ad-location-category\",\n\t\"composite\": {\n\t\t\"location\": \"detroit\",\n\t\t\"category\": \"general\"\n\t }\n}}",
											"displayName": "content",
											"name": "content",
											"type": 1,
											"value": "{\n  \"query\": {\n  \"index\": \"property-listing-ad-location-category\",\n\t\"composite\": {\n\t\t\"location\": \"detroit\",\n\t\t\"category\": \"general\"\n\t }\n}}"
										},
										{
											"attributes": [],
											"computedValue": "application/json",
											"displayName": "contentType",
											"name": "contentType",
											"type": 1,
											"value": "application/json"
										},
										{
											"attributes": [],
											"computedValue": "",
											"displayName": "jsScript",
											"name": "jsScript",
											"type": 1,
											"value": ""
										}
									],
									"computedValue": null,
									"displayName": "body",
									"name": "body",
									"type": 2,
									"value": null
								},
								{
									"attributes": [],
									"computedValue": "post",
									"displayName": "method",
									"name": "method",
									"type": 1,
									"value": "post"
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
	"path": "/homes",
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
	"title": "Homes",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
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
		"settings": [
			{
				"attributes": [],
				"computedValue": "column",
				"displayName": "Direction",
				"name": "direction",
				"type": 1,
				"value": "column"
			}
		]
	},
	"layoutType": "gridless",
	"name": "plugin-amcharts-refs-test-1",
	"panels": [
		{
			"columnSetting": {
				"settings": [
					{
						"attributes": [],
						"computedValue": "100%",
						"displayName": "Height",
						"name": "height",
						"type": 1,
						"value": "100%"
					}
				]
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
											"computedValue": "undefined",
											"displayName": "type",
											"name": "type",
											"type": 0,
											"value": "undefined"
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
							"computedValue": "{\n  \"type\": \"XYChart\",\n  \"refs\": {\n    \"data\": [],\n    \"xAxis\": {\n      \"type\": \"DateAxis\",\n      \"settings\": {\n        \"maxDeviation\": 0.5,\n        \"baseInterval\": {\n          \"timeUnit\": \"day\",\n          \"count\": 1\n        },\n        \"renderer\": {\n          \"type\": \"AxisRendererX\"\n        }\n      }\n    },\n    \"yAxis\": {\n      \"type\": \"ValueAxis\",\n      \"settings\": {\n        \"maxDeviation\": 1,\n        \"renderer\": {\n          \"type\": \"AxisRendererY\"\n        }\n      }\n    }\n  },\n  \"settings\": {\n    \"panX\": false,\n    \"panY\": false,\n    \"wheelX\": \"panX\",\n    \"wheelY\": \"zoomX\",\n    \"scrollbarX\": {\n      \"type\": \"Scrollbar\",\n      \"settings\": {\n        \"orientation\": \"horizontal\"\n      }\n    }\n  },\n  \"properties\": {\n    \"xAxes\": [\n      \"#xAxis\"\n    ],\n    \"yAxes\": [\n      \"#yAxis\"\n    ],\n    \"series\": [\n      {\n        \"type\": \"LineSeries\",\n        \"settings\": {\n          \"name\": \"Series\",\n          \"xAxis\": \"#xAxis\",\n          \"yAxis\": \"#yAxis\",\n          \"valueYField\": \"value\",\n          \"valueXField\": \"date\",\n          \"tooltip\": {\n            \"type\": \"Tooltip\",\n            \"settings\": {\n              \"labelText\": \"{valueX}: {valueY}\"\n            }\n          }\n        },\n        \"properties\": {\n          \"data\": \"#data\"\n        }\n      }\n    ]\n  }\n}",
							"displayName": "json",
							"name": "json",
							"type": 1,
							"value": "{\n  \"type\": \"XYChart\",\n  \"refs\": {\n    \"data\": [],\n    \"xAxis\": {\n      \"type\": \"DateAxis\",\n      \"settings\": {\n        \"maxDeviation\": 0.5,\n        \"baseInterval\": {\n          \"timeUnit\": \"day\",\n          \"count\": 1\n        },\n        \"renderer\": {\n          \"type\": \"AxisRendererX\"\n        }\n      }\n    },\n    \"yAxis\": {\n      \"type\": \"ValueAxis\",\n      \"settings\": {\n        \"maxDeviation\": 1,\n        \"renderer\": {\n          \"type\": \"AxisRendererY\"\n        }\n      }\n    }\n  },\n  \"settings\": {\n    \"panX\": false,\n    \"panY\": false,\n    \"wheelX\": \"panX\",\n    \"wheelY\": \"zoomX\",\n    \"scrollbarX\": {\n      \"type\": \"Scrollbar\",\n      \"settings\": {\n        \"orientation\": \"horizontal\"\n      }\n    }\n  },\n  \"properties\": {\n    \"xAxes\": [\n      \"#xAxis\"\n    ],\n    \"yAxes\": [\n      \"#yAxis\"\n    ],\n    \"series\": [\n      {\n        \"type\": \"LineSeries\",\n        \"settings\": {\n          \"name\": \"Series\",\n          \"xAxis\": \"#xAxis\",\n          \"yAxis\": \"#yAxis\",\n          \"valueYField\": \"value\",\n          \"valueXField\": \"date\",\n          \"tooltip\": {\n            \"type\": \"Tooltip\",\n            \"settings\": {\n              \"labelText\": \"{valueX}: {valueY}\"\n            }\n          }\n        },\n        \"properties\": {\n          \"data\": \"#data\"\n        }\n      }\n    ]\n  }\n}"
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
		},
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [],
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
			"settings": [
				{
					"attributes": [],
					"computedValue": "1",
					"displayName": "Flex Grow",
					"name": "flexGrow",
					"type": 1,
					"value": "1"
				},
				{
					"attributes": [],
					"computedValue": "1",
					"displayName": "Flex Shrink",
					"name": "flexShrink",
					"type": 1,
					"value": "1"
				},
				{
					"attributes": [],
					"computedValue": "1",
					"displayName": "Flex Basis",
					"name": "flexBasis",
					"type": 1,
					"value": "1"
				},
				{
					"attributes": [],
					"computedValue": "100%",
					"displayName": "Height",
					"name": "height",
					"type": 1,
					"value": "100%"
				},
				{
					"attributes": [],
					"computedValue": "row",
					"displayName": "Direction",
					"name": "direction",
					"type": 1,
					"value": "row"
				}
			]
		},
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
      "adaptor": "rest",
      "data": null,
      "datasource": null,
      "name": "character",
      "plugin": "rest",
      "rest": {
        "params": [
          {
            "flags": [
              {
                "enabled": false,
                "name": "page"
              },
              {
                "enabled": false,
                "name": "limit"
              },
              {
                "enabled": false,
                "name": "offset"
              },
              {
                "enabled": false,
                "name": "searchString"
              }
            ],
            "mapping": {
              "context": "",
              "testValue": "1017100",
              "type": "route",
              "value": "arg1"
            }
          }
        ],
        "url": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/marvel/characters/:characterId"
      },
      "snippet": null,
      "tokens": null
    }
  ],
  "cssFile": "",
  "derivativeId": "",
  "displayType": "page",
  "entityPermissions": {
    "deleteUserIds": [
      "e36b42fe-b09c-4514-a519-e178bb52957e"
    ],
    "readUserIds": [
      "*"
    ],
    "writeUserIds": [
      "e36b42fe-b09c-4514-a519-e178bb52957e"
    ]
  },
  "gridItems": [
    {
      "cols": 100,
      "rows": 1,
      "weight": 0,
      "x": 0,
      "y": 0
    },
    {
      "cols": 50,
      "rows": 1,
      "weight": 1,
      "x": 1,
      "y": 0
    },
    {
      "cols": 33,
      "rows": 1,
      "weight": 2,
      "x": 2,
      "y": 0
    },
    {
      "cols": 25,
      "rows": 1,
      "weight": 3,
      "x": 3,
      "y": 0
    }
  ],
  "id": "63a4219d-254e-11ec-ab14-c613312e594f",
  "layoutSetting": {
    "settings": []
  },
  "layoutType": "split",
  "name": "dev_test_virtual_list_flex_v1",
  "panels": [
    {
      "columnSetting": {
        "settings": [
          {
            "attributes": [],
            "computedValue": "100%",
            "displayName": "Height",
            "floatValue": 0,
            "intValue": 0,
            "name": "height",
            "type": 1,
            "value": "100%"
          }
        ]
      },
      "label": "",
      "name": "",
      "panes": [
        {
          "contentPlugin": "panel",
          "label": "filter Form",
          "linkedPageId": "",
          "locked": false,
          "name": "filter_form",
          "rule": {
            "condition": "",
            "field": "",
            "operator": "",
            "rules": [],
            "value": ""
          },
          "settings": [
            {
              "attributes": [
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "100",
                      "displayName": "cols",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "cols",
                      "type": 0,
                      "value": "100"
                    },
                    {
                      "attributes": [],
                      "computedValue": "1",
                      "displayName": "rows",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "rows",
                      "type": 0,
                      "value": "1"
                    },
                    {
                      "attributes": [],
                      "computedValue": "0",
                      "displayName": "x",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "x",
                      "type": 0,
                      "value": "0"
                    },
                    {
                      "attributes": [],
                      "computedValue": "0",
                      "displayName": "y",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "y",
                      "type": 0,
                      "value": "0"
                    },
                    {
                      "attributes": [],
                      "computedValue": "0",
                      "displayName": "weight",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "weight",
                      "type": 0,
                      "value": "0"
                    }
                  ],
                  "computedValue": "",
                  "displayName": "0",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "0",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "gridItems",
              "floatValue": 0,
              "intValue": 0,
              "name": "gridItems",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "settings",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "settings",
                      "type": 2,
                      "value": ""
                    },
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "panes",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "panes",
                      "type": 4,
                      "value": ""
                    },
                    {
                      "attributes": [],
                      "computedValue": "undefined",
                      "displayName": "name",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "name",
                      "type": 0,
                      "value": "undefined"
                    },
                    {
                      "attributes": [],
                      "computedValue": "undefined",
                      "displayName": "label",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "label",
                      "type": 0,
                      "value": "undefined"
                    },
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "stylePlugin",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "stylePlugin",
                      "type": 1,
                      "value": ""
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [],
                          "computedValue": "",
                          "displayName": "settings",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "settings",
                          "type": 2,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "columnSetting",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "columnSetting",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "0",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "0",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "panels",
              "floatValue": 0,
              "intValue": 0,
              "name": "panels",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "character",
                      "displayName": "name",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "name",
                      "type": 1,
                      "value": "character"
                    },
                    {
                      "attributes": [],
                      "computedValue": "rest",
                      "displayName": "adaptor",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "adaptor",
                      "type": 1,
                      "value": "rest"
                    },
                    {
                      "attributes": [],
                      "computedValue": "rest",
                      "displayName": "plugin",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "plugin",
                      "type": 1,
                      "value": "rest"
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [],
                          "computedValue": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/marvel/characters/:characterId",
                          "displayName": "url",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "url",
                          "type": 1,
                          "value": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/marvel/characters/:characterId"
                        },
                        {
                          "attributes": [],
                          "computedValue": "undefined",
                          "displayName": "method",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "method",
                          "type": 0,
                          "value": "undefined"
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [
                                    {
                                      "attributes": [],
                                      "computedValue": "route",
                                      "displayName": "type",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "type",
                                      "type": 1,
                                      "value": "route"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "arg1",
                                      "displayName": "value",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "value",
                                      "type": 1,
                                      "value": "arg1"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "1017100",
                                      "displayName": "testValue",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "testValue",
                                      "type": 1,
                                      "value": "1017100"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "",
                                      "displayName": "context",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "context",
                                      "type": 1,
                                      "value": ""
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "mapping",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "mapping",
                                  "type": 2,
                                  "value": ""
                                },
                                {
                                  "attributes": [
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "page",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "page"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "0",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "0",
                                      "type": 2,
                                      "value": ""
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "limit",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "limit"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "1",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "1",
                                      "type": 2,
                                      "value": ""
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "offset",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "offset"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "2",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "2",
                                      "type": 2,
                                      "value": ""
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "searchString",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "searchString"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "3",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "3",
                                      "type": 2,
                                      "value": ""
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "flags",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "flags",
                                  "type": 4,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "0",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "0",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "params",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "params",
                          "type": 4,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "rest",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "rest",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "0",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "0",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "contexts",
              "floatValue": 0,
              "intValue": 0,
              "name": "contexts",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "settings",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "settings",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "0",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "0",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "rowSettings",
              "floatValue": 0,
              "intValue": 0,
              "name": "rowSettings",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "readUserIds",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "readUserIds",
                  "type": 4,
                  "value": ""
                },
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "writeUserIds",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "writeUserIds",
                  "type": 4,
                  "value": ""
                },
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "deleteUserIds",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "deleteUserIds",
                  "type": 4,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "entityPermissions",
              "floatValue": 0,
              "intValue": 0,
              "name": "entityPermissions",
              "type": 2,
              "value": ""
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "id",
              "floatValue": 0,
              "intValue": 0,
              "name": "id",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "split",
              "displayName": "layoutType",
              "floatValue": 0,
              "intValue": 0,
              "name": "layoutType",
              "type": 1,
              "value": "split"
            },
            {
              "attributes": [],
              "computedValue": "form",
              "displayName": "displayType",
              "floatValue": 0,
              "intValue": 0,
              "name": "displayType",
              "type": 1,
              "value": "form"
            },
            {
              "attributes": [],
              "computedValue": "filter_form",
              "displayName": "name",
              "floatValue": 0,
              "intValue": 0,
              "name": "name",
              "type": 1,
              "value": "filter_form"
            },
            {
              "attributes": [],
              "computedValue": "filter form",
              "displayName": "title",
              "floatValue": 0,
              "intValue": 0,
              "name": "title",
              "type": 1,
              "value": "filter form"
            },
            {
              "attributes": [],
              "computedValue": "ipe",
              "displayName": "site",
              "floatValue": 0,
              "intValue": 0,
              "name": "site",
              "type": 1,
              "value": "ipe"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "userId",
              "floatValue": 0,
              "intValue": 0,
              "name": "userId",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "path",
              "floatValue": 0,
              "intValue": 0,
              "name": "path",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "settings",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "settings",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "layoutSetting",
              "floatValue": 0,
              "intValue": 0,
              "name": "layoutSetting",
              "type": 2,
              "value": ""
            }
          ]
        }
      ],
      "settings": [],
      "stylePlugin": ""
    },
    {
      "columnSetting": {
        "settings": [
          {
            "attributes": [],
            "computedValue": "100%",
            "displayName": "Height",
            "floatValue": 0,
            "intValue": 0,
            "name": "height",
            "type": 1,
            "value": "100%"
          }
        ]
      },
      "label": "",
      "name": "",
      "panes": [
        {
          "contentPlugin": "datasource",
          "label": "",
          "linkedPageId": "",
          "locked": false,
          "name": "",
          "rule": {
            "condition": "",
            "field": "",
            "operator": "",
            "rules": [],
            "value": ""
          },
          "settings": [
            {
              "attributes": [],
              "computedValue": "rest",
              "displayName": "plugin",
              "floatValue": 0,
              "intValue": 0,
              "name": "plugin",
              "type": 1,
              "value": "rest"
            },
            {
              "attributes": [
                {
                  "attributes": [],
                  "computedValue": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/marvel/characters?orderBy=name&limit=:limit&offset=:offset&nameStartsWith=:nameStartsWith",
                  "displayName": "url",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "url",
                  "type": 1,
                  "value": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/marvel/characters?orderBy=name&limit=:limit&offset=:offset&nameStartsWith=:nameStartsWith"
                },
                {
                  "attributes": [
                    {
                      "attributes": [
                        {
                          "attributes": [
                            {
                              "attributes": [],
                              "computedValue": "standardpagination",
                              "displayName": "type",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "type",
                              "type": 1,
                              "value": "standardpagination"
                            },
                            {
                              "attributes": [],
                              "computedValue": "20",
                              "displayName": "value",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "value",
                              "type": 1,
                              "value": "20"
                            },
                            {
                              "attributes": [],
                              "computedValue": "20",
                              "displayName": "testValue",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "testValue",
                              "type": 1,
                              "value": "20"
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "context",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "context",
                              "type": 1,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "mapping",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "mapping",
                          "type": 2,
                          "value": ""
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "page",
                                  "displayName": "name",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "name",
                                  "type": 1,
                                  "value": "page"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "false",
                                  "displayName": "enabled",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "enabled",
                                  "type": 5,
                                  "value": "false"
                                }
                              ],
                              "computedValue": "",
                              "displayName": "0",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "0",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "limit",
                                  "displayName": "name",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "name",
                                  "type": 1,
                                  "value": "limit"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "true",
                                  "displayName": "enabled",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "enabled",
                                  "type": 5,
                                  "value": "true"
                                }
                              ],
                              "computedValue": "",
                              "displayName": "1",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "1",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "offset",
                                  "displayName": "name",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "name",
                                  "type": 1,
                                  "value": "offset"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "false",
                                  "displayName": "enabled",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "enabled",
                                  "type": 5,
                                  "value": "false"
                                }
                              ],
                              "computedValue": "",
                              "displayName": "2",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "2",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "searchString",
                                  "displayName": "name",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "name",
                                  "type": 1,
                                  "value": "searchString"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "false",
                                  "displayName": "enabled",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "enabled",
                                  "type": 5,
                                  "value": "false"
                                }
                              ],
                              "computedValue": "",
                              "displayName": "3",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "3",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "flags",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "flags",
                          "type": 4,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "0",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "0",
                      "type": 2,
                      "value": ""
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [
                            {
                              "attributes": [],
                              "computedValue": "standardpagination",
                              "displayName": "type",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "type",
                              "type": 1,
                              "value": "standardpagination"
                            },
                            {
                              "attributes": [],
                              "computedValue": "0",
                              "displayName": "value",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "value",
                              "type": 1,
                              "value": "0"
                            },
                            {
                              "attributes": [],
                              "computedValue": "0",
                              "displayName": "testValue",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "testValue",
                              "type": 1,
                              "value": "0"
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "context",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "context",
                              "type": 1,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "mapping",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "mapping",
                          "type": 2,
                          "value": ""
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "page",
                                  "displayName": "name",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "name",
                                  "type": 1,
                                  "value": "page"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "false",
                                  "displayName": "enabled",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "enabled",
                                  "type": 5,
                                  "value": "false"
                                }
                              ],
                              "computedValue": "",
                              "displayName": "0",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "0",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "limit",
                                  "displayName": "name",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "name",
                                  "type": 1,
                                  "value": "limit"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "false",
                                  "displayName": "enabled",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "enabled",
                                  "type": 5,
                                  "value": "false"
                                }
                              ],
                              "computedValue": "",
                              "displayName": "1",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "1",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "offset",
                                  "displayName": "name",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "name",
                                  "type": 1,
                                  "value": "offset"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "true",
                                  "displayName": "enabled",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "enabled",
                                  "type": 5,
                                  "value": "true"
                                }
                              ],
                              "computedValue": "",
                              "displayName": "2",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "2",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "searchString",
                                  "displayName": "name",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "name",
                                  "type": 1,
                                  "value": "searchString"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "false",
                                  "displayName": "enabled",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "enabled",
                                  "type": 5,
                                  "value": "false"
                                }
                              ],
                              "computedValue": "",
                              "displayName": "3",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "3",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "flags",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "flags",
                          "type": 4,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "1",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "1",
                      "type": 2,
                      "value": ""
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [
                            {
                              "attributes": [],
                              "computedValue": "form",
                              "displayName": "type",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "type",
                              "type": 1,
                              "value": "form"
                            },
                            {
                              "attributes": [],
                              "computedValue": "filter_form.nameStartsWith",
                              "displayName": "value",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "value",
                              "type": 1,
                              "value": "filter_form.nameStartsWith"
                            },
                            {
                              "attributes": [],
                              "computedValue": "john",
                              "displayName": "testValue",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "testValue",
                              "type": 1,
                              "value": "john"
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "context",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "context",
                              "type": 1,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "mapping",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "mapping",
                          "type": 2,
                          "value": ""
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "page",
                                  "displayName": "name",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "name",
                                  "type": 1,
                                  "value": "page"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "false",
                                  "displayName": "enabled",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "enabled",
                                  "type": 5,
                                  "value": "false"
                                }
                              ],
                              "computedValue": "",
                              "displayName": "0",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "0",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "limit",
                                  "displayName": "name",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "name",
                                  "type": 1,
                                  "value": "limit"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "false",
                                  "displayName": "enabled",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "enabled",
                                  "type": 5,
                                  "value": "false"
                                }
                              ],
                              "computedValue": "",
                              "displayName": "1",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "1",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "offset",
                                  "displayName": "name",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "name",
                                  "type": 1,
                                  "value": "offset"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "false",
                                  "displayName": "enabled",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "enabled",
                                  "type": 5,
                                  "value": "false"
                                }
                              ],
                              "computedValue": "",
                              "displayName": "2",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "2",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "searchString",
                                  "displayName": "name",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "name",
                                  "type": 1,
                                  "value": "searchString"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "false",
                                  "displayName": "enabled",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "enabled",
                                  "type": 5,
                                  "value": "false"
                                }
                              ],
                              "computedValue": "",
                              "displayName": "3",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "3",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "flags",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "flags",
                          "type": 4,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "2",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "2",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "params",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "params",
                  "type": 4,
                  "value": ""
                },
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "x",
                      "displayName": "content",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "content",
                      "type": 1,
                      "value": "x"
                    },
                    {
                      "attributes": [],
                      "computedValue": "application/json",
                      "displayName": "contentType",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "contentType",
                      "type": 1,
                      "value": "application/json"
                    },
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "jsScript",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "jsScript",
                      "type": 1,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "body",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "body",
                  "type": 2,
                  "value": ""
                },
                {
                  "attributes": [],
                  "computedValue": "get",
                  "displayName": "method",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "method",
                  "type": 1,
                  "value": "get"
                }
              ],
              "computedValue": "",
              "displayName": "settings",
              "floatValue": 0,
              "intValue": 0,
              "name": "settings",
              "type": 2,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [],
                  "computedValue": "pane",
                  "displayName": "type",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "type",
                  "type": 1,
                  "value": "pane"
                },
                {
                  "attributes": [
                    {
                      "attributes": [
                        {
                          "attributes": [],
                          "computedValue": "pane",
                          "displayName": "type",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "type",
                          "type": 1,
                          "value": "pane"
                        },
                        {
                          "attributes": [],
                          "computedValue": "character_tpl",
                          "displayName": "id",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "id",
                          "type": 1,
                          "value": "character_tpl"
                        }
                      ],
                      "computedValue": "",
                      "displayName": "0",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "0",
                      "type": 2,
                      "value": ""
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [],
                          "computedValue": "pane",
                          "displayName": "type",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "type",
                          "type": 1,
                          "value": "pane"
                        },
                        {
                          "attributes": [],
                          "computedValue": "select_characters",
                          "displayName": "id",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "id",
                          "type": 1,
                          "value": "select_characters"
                        }
                      ],
                      "computedValue": "",
                      "displayName": "1",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "1",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "bindings",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "bindings",
                  "type": 4,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "renderer",
              "floatValue": 0,
              "intValue": 0,
              "name": "renderer",
              "type": 2,
              "value": ""
            }
          ]
        },
        {
          "contentPlugin": "datasource",
          "label": "select_characters",
          "linkedPageId": "",
          "locked": false,
          "name": "select_characters",
          "rule": {
            "condition": "",
            "field": "",
            "operator": "",
            "rules": [],
            "value": ""
          },
          "settings": [
            {
              "attributes": [],
              "computedValue": "select",
              "displayName": "plugin",
              "floatValue": 0,
              "intValue": 0,
              "name": "plugin",
              "type": 1,
              "value": "select"
            },
            {
              "attributes": [
                {
                  "attributes": [],
                  "computedValue": "$..data.results.*",
                  "displayName": "query",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "query",
                  "type": 1,
                  "value": "$..data.results.*"
                }
              ],
              "computedValue": "",
              "displayName": "settings",
              "floatValue": 0,
              "intValue": 0,
              "name": "settings",
              "type": 2,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [],
                  "computedValue": "pane",
                  "displayName": "type",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "type",
                  "type": 1,
                  "value": "pane"
                },
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "bindings",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "bindings",
                  "type": 4,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "renderer",
              "floatValue": 0,
              "intValue": 0,
              "name": "renderer",
              "type": 2,
              "value": ""
            }
          ]
        },
        {
          "contentPlugin": "snippet",
          "label": "character_tpl",
          "linkedPageId": "",
          "locked": false,
          "name": "character_tpl",
          "rule": {
            "condition": "",
            "field": "",
            "operator": "",
            "rules": [],
            "value": ""
          },
          "settings": [
            {
              "attributes": [],
              "computedValue": "text/html",
              "displayName": "Content Type",
              "floatValue": 0,
              "intValue": 0,
              "name": "contentType",
              "type": 1,
              "value": "text/html"
            },
            {
              "attributes": [],
              "computedValue": "<div style=\"height: 75px;\">\n<classifieds-ui-page-router-link href=\"[_page.path]/character/[.id]\" text=\"[.name]\"></classifieds-ui-page-router-link>\n</div>\n",
              "displayName": "Content",
              "floatValue": 0,
              "intValue": 0,
              "name": "content",
              "type": 1,
              "value": "<div style=\"height: 75px;\">\n<classifieds-ui-page-router-link href=\"[_page.path]/character/[.id]\" text=\"[.name]\"></classifieds-ui-page-router-link>\n</div>\n"
            },
            {
              "attributes": [],
              "computedValue": "",
              "displayName": "jsScript",
              "floatValue": 0,
              "intValue": 0,
              "name": "jsScript",
              "type": 1,
              "value": ""
            }
          ]
        }
      ],
      "settings": [],
      "stylePlugin": "virtuallist"
    },
    {
      "columnSetting": {
        "settings": []
      },
      "label": "",
      "name": "",
      "panes": [
        {
          "contentPlugin": "panel",
          "label": "276c66e1-286f-4a8f-9953-938f42f3fb36",
          "linkedPageId": "",
          "locked": false,
          "name": "276c66e1-286f-4a8f-9953-938f42f3fb36",
          "rule": {
            "condition": "",
            "field": "",
            "operator": "",
            "rules": [],
            "value": ""
          },
          "settings": [
            {
              "attributes": [
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "100",
                      "displayName": "cols",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "cols",
                      "type": 0,
                      "value": "100"
                    },
                    {
                      "attributes": [],
                      "computedValue": "1",
                      "displayName": "rows",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "rows",
                      "type": 0,
                      "value": "1"
                    },
                    {
                      "attributes": [],
                      "computedValue": "0",
                      "displayName": "x",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "x",
                      "type": 0,
                      "value": "0"
                    },
                    {
                      "attributes": [],
                      "computedValue": "0",
                      "displayName": "y",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "y",
                      "type": 0,
                      "value": "0"
                    },
                    {
                      "attributes": [],
                      "computedValue": "0",
                      "displayName": "weight",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "weight",
                      "type": 0,
                      "value": "0"
                    }
                  ],
                  "computedValue": "",
                  "displayName": "0",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "0",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "gridItems",
              "floatValue": 0,
              "intValue": 0,
              "name": "gridItems",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "settings",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "settings",
                      "type": 2,
                      "value": ""
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "text/markdown",
                                  "displayName": "Content Type",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "contentType",
                                  "type": 1,
                                  "value": "text/markdown"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "# [character.data.results.0.name]\n[character.data.results.0.id]",
                                  "displayName": "Content",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "content",
                                  "type": 1,
                                  "value": "# [character.data.results.0.name]\n[character.data.results.0.id]"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "jsScript",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "jsScript",
                                  "type": 1,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "settings",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "settings",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "false",
                              "displayName": "locked",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "locked",
                              "type": 5,
                              "value": "false"
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "contexts",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contexts",
                              "type": 4,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "name",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "name",
                              "type": 1,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "label",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "label",
                              "type": 1,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "snippet",
                              "displayName": "contentPlugin",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contentPlugin",
                              "type": 1,
                              "value": "snippet"
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "condition",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "condition",
                                  "type": 1,
                                  "value": ""
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "rules",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "rules",
                                  "type": 4,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "rule",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "rule",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "0",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "0",
                          "type": 2,
                          "value": ""
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "text/markdown",
                                  "displayName": "Content Type",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "contentType",
                                  "type": 1,
                                  "value": "text/markdown"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "<img src=\"[character.data.results.0.thumbnail.path].[character.data.results.0.thumbnail.extension]\" style=\"max-width: 100%;\">",
                                  "displayName": "Content",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "content",
                                  "type": 1,
                                  "value": "<img src=\"[character.data.results.0.thumbnail.path].[character.data.results.0.thumbnail.extension]\" style=\"max-width: 100%;\">"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "jsScript",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "jsScript",
                                  "type": 1,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "settings",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "settings",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "false",
                              "displayName": "locked",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "locked",
                              "type": 5,
                              "value": "false"
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "contexts",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contexts",
                              "type": 4,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "name",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "name",
                              "type": 1,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "label",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "label",
                              "type": 1,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "snippet",
                              "displayName": "contentPlugin",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contentPlugin",
                              "type": 1,
                              "value": "snippet"
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "condition",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "condition",
                                  "type": 1,
                                  "value": ""
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "rules",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "rules",
                                  "type": 4,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "rule",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "rule",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "1",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "1",
                          "type": 2,
                          "value": ""
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "text/markdown",
                                  "displayName": "Content Type",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "contentType",
                                  "type": 1,
                                  "value": "text/markdown"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "[character.data.results.0.description]",
                                  "displayName": "Content",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "content",
                                  "type": 1,
                                  "value": "[character.data.results.0.description]"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "jsScript",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "jsScript",
                                  "type": 1,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "settings",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "settings",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "false",
                              "displayName": "locked",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "locked",
                              "type": 5,
                              "value": "false"
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "contexts",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contexts",
                              "type": 4,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "name",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "name",
                              "type": 1,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "label",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "label",
                              "type": 1,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "snippet",
                              "displayName": "contentPlugin",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contentPlugin",
                              "type": 1,
                              "value": "snippet"
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "condition",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "condition",
                                  "type": 1,
                                  "value": ""
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "rules",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "rules",
                                  "type": 4,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "rule",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "rule",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "2",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "2",
                          "type": 2,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "panes",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "panes",
                      "type": 4,
                      "value": ""
                    },
                    {
                      "attributes": [],
                      "computedValue": "undefined",
                      "displayName": "name",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "name",
                      "type": 0,
                      "value": "undefined"
                    },
                    {
                      "attributes": [],
                      "computedValue": "undefined",
                      "displayName": "label",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "label",
                      "type": 0,
                      "value": "undefined"
                    },
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "stylePlugin",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "stylePlugin",
                      "type": 1,
                      "value": ""
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [],
                          "computedValue": "",
                          "displayName": "settings",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "settings",
                          "type": 2,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "columnSetting",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "columnSetting",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "0",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "0",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "panels",
              "floatValue": 0,
              "intValue": 0,
              "name": "panels",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "character",
                      "displayName": "name",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "name",
                      "type": 1,
                      "value": "character"
                    },
                    {
                      "attributes": [],
                      "computedValue": "rest",
                      "displayName": "adaptor",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "adaptor",
                      "type": 1,
                      "value": "rest"
                    },
                    {
                      "attributes": [],
                      "computedValue": "rest",
                      "displayName": "plugin",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "plugin",
                      "type": 1,
                      "value": "rest"
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [],
                          "computedValue": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/marvel/characters/:characterId",
                          "displayName": "url",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "url",
                          "type": 1,
                          "value": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/marvel/characters/:characterId"
                        },
                        {
                          "attributes": [],
                          "computedValue": "undefined",
                          "displayName": "method",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "method",
                          "type": 0,
                          "value": "undefined"
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [
                                    {
                                      "attributes": [],
                                      "computedValue": "route",
                                      "displayName": "type",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "type",
                                      "type": 1,
                                      "value": "route"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "arg1",
                                      "displayName": "value",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "value",
                                      "type": 1,
                                      "value": "arg1"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "1017100",
                                      "displayName": "testValue",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "testValue",
                                      "type": 1,
                                      "value": "1017100"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "",
                                      "displayName": "context",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "context",
                                      "type": 1,
                                      "value": ""
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "mapping",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "mapping",
                                  "type": 2,
                                  "value": ""
                                },
                                {
                                  "attributes": [
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "page",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "page"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "0",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "0",
                                      "type": 2,
                                      "value": ""
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "limit",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "limit"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "1",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "1",
                                      "type": 2,
                                      "value": ""
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "offset",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "offset"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "2",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "2",
                                      "type": 2,
                                      "value": ""
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "searchString",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "searchString"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "3",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "3",
                                      "type": 2,
                                      "value": ""
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "flags",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "flags",
                                  "type": 4,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "0",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "0",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "params",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "params",
                          "type": 4,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "rest",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "rest",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "0",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "0",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "contexts",
              "floatValue": 0,
              "intValue": 0,
              "name": "contexts",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "settings",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "settings",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "0",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "0",
                  "type": 2,
                  "value": ""
                },
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "settings",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "settings",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "1",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "1",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "rowSettings",
              "floatValue": 0,
              "intValue": 0,
              "name": "rowSettings",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "readUserIds",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "readUserIds",
                  "type": 4,
                  "value": ""
                },
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "writeUserIds",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "writeUserIds",
                  "type": 4,
                  "value": ""
                },
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "deleteUserIds",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "deleteUserIds",
                  "type": 4,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "entityPermissions",
              "floatValue": 0,
              "intValue": 0,
              "name": "entityPermissions",
              "type": 2,
              "value": ""
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "id",
              "floatValue": 0,
              "intValue": 0,
              "name": "id",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "split",
              "displayName": "layoutType",
              "floatValue": 0,
              "intValue": 0,
              "name": "layoutType",
              "type": 1,
              "value": "split"
            },
            {
              "attributes": [],
              "computedValue": "page",
              "displayName": "displayType",
              "floatValue": 0,
              "intValue": 0,
              "name": "displayType",
              "type": 1,
              "value": "page"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "name",
              "floatValue": 0,
              "intValue": 0,
              "name": "name",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "title",
              "floatValue": 0,
              "intValue": 0,
              "name": "title",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "ipe",
              "displayName": "site",
              "floatValue": 0,
              "intValue": 0,
              "name": "site",
              "type": 1,
              "value": "ipe"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "userId",
              "floatValue": 0,
              "intValue": 0,
              "name": "userId",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "path",
              "floatValue": 0,
              "intValue": 0,
              "name": "path",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "settings",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "settings",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "layoutSetting",
              "floatValue": 0,
              "intValue": 0,
              "name": "layoutSetting",
              "type": 2,
              "value": ""
            }
          ]
        }
      ],
      "settings": [],
      "stylePlugin": ""
    },
    {
      "columnSetting": {
        "settings": [
          {
            "attributes": [],
            "computedValue": "",
            "displayName": "Height",
            "floatValue": 0,
            "intValue": 0,
            "name": "height",
            "type": 1,
            "value": ""
          }
        ]
      },
      "label": "right_panel",
      "name": "right_panel",
      "panes": [
        {
          "contentPlugin": "panel",
          "label": "c40a5eba-1081-45f7-b02e-7102980d7a2e",
          "linkedPageId": "",
          "locked": false,
          "name": "c40a5eba-1081-45f7-b02e-7102980d7a2e",
          "rule": {
            "condition": "",
            "field": "",
            "operator": "",
            "rules": [],
            "value": ""
          },
          "settings": [
            {
              "attributes": [],
              "computedValue": "",
              "displayName": "gridItems",
              "floatValue": 0,
              "intValue": 0,
              "name": "gridItems",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "settings",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "settings",
                      "type": 2,
                      "value": ""
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "text/markdown",
                                  "displayName": "Content Type",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "contentType",
                                  "type": 1,
                                  "value": "text/markdown"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "Comics",
                                  "displayName": "Content",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "content",
                                  "type": 1,
                                  "value": "Comics"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "jsScript",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "jsScript",
                                  "type": 1,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "settings",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "settings",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "false",
                              "displayName": "locked",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "locked",
                              "type": 5,
                              "value": "false"
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "contexts",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contexts",
                              "type": 4,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "tab_title",
                              "displayName": "name",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "name",
                              "type": 1,
                              "value": "tab_title"
                            },
                            {
                              "attributes": [],
                              "computedValue": "tab title",
                              "displayName": "label",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "label",
                              "type": 1,
                              "value": "tab title"
                            },
                            {
                              "attributes": [],
                              "computedValue": "snippet",
                              "displayName": "contentPlugin",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contentPlugin",
                              "type": 1,
                              "value": "snippet"
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "condition",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "condition",
                                  "type": 1,
                                  "value": ""
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "rules",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "rules",
                                  "type": 4,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "rule",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "rule",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "0",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "0",
                          "type": 2,
                          "value": ""
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "context",
                                  "displayName": "plugin",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "plugin",
                                  "type": 1,
                                  "value": "context"
                                },
                                {
                                  "attributes": [
                                    {
                                      "attributes": [],
                                      "computedValue": "character",
                                      "displayName": "name",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "name",
                                      "type": 1,
                                      "value": "character"
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "settings",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "settings",
                                  "type": 2,
                                  "value": ""
                                },
                                {
                                  "attributes": [
                                    {
                                      "attributes": [],
                                      "computedValue": "pane",
                                      "displayName": "type",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "type",
                                      "type": 1,
                                      "value": "pane"
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [
                                            {
                                              "attributes": [],
                                              "computedValue": "pane",
                                              "displayName": "type",
                                              "floatValue": 0,
                                              "intValue": 0,
                                              "name": "type",
                                              "type": 1,
                                              "value": "pane"
                                            },
                                            {
                                              "attributes": [],
                                              "computedValue": "comic_tpl",
                                              "displayName": "id",
                                              "floatValue": 0,
                                              "intValue": 0,
                                              "name": "id",
                                              "type": 1,
                                              "value": "comic_tpl"
                                            }
                                          ],
                                          "computedValue": "",
                                          "displayName": "0",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "0",
                                          "type": 2,
                                          "value": ""
                                        },
                                        {
                                          "attributes": [
                                            {
                                              "attributes": [],
                                              "computedValue": "pane",
                                              "displayName": "type",
                                              "floatValue": 0,
                                              "intValue": 0,
                                              "name": "type",
                                              "type": 1,
                                              "value": "pane"
                                            },
                                            {
                                              "attributes": [],
                                              "computedValue": "select_comics",
                                              "displayName": "id",
                                              "floatValue": 0,
                                              "intValue": 0,
                                              "name": "id",
                                              "type": 1,
                                              "value": "select_comics"
                                            }
                                          ],
                                          "computedValue": "",
                                          "displayName": "1",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "1",
                                          "type": 2,
                                          "value": ""
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "bindings",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "bindings",
                                      "type": 4,
                                      "value": ""
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "renderer",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "renderer",
                                  "type": 2,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "settings",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "settings",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "false",
                              "displayName": "locked",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "locked",
                              "type": 5,
                              "value": "false"
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "contexts",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contexts",
                              "type": 4,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "character_ref",
                              "displayName": "name",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "name",
                              "type": 1,
                              "value": "character_ref"
                            },
                            {
                              "attributes": [],
                              "computedValue": "character_ref",
                              "displayName": "label",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "label",
                              "type": 1,
                              "value": "character_ref"
                            },
                            {
                              "attributes": [],
                              "computedValue": "datasource",
                              "displayName": "contentPlugin",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contentPlugin",
                              "type": 1,
                              "value": "datasource"
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "condition",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "condition",
                                  "type": 1,
                                  "value": ""
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "rules",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "rules",
                                  "type": 4,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "rule",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "rule",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "1",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "1",
                          "type": 2,
                          "value": ""
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "select",
                                  "displayName": "plugin",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "plugin",
                                  "type": 1,
                                  "value": "select"
                                },
                                {
                                  "attributes": [
                                    {
                                      "attributes": [],
                                      "computedValue": "$..data.results.0.comics.items[0,1,2,3,4]",
                                      "displayName": "query",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "query",
                                      "type": 1,
                                      "value": "$..data.results.0.comics.items[0,1,2,3,4]"
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "settings",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "settings",
                                  "type": 2,
                                  "value": ""
                                },
                                {
                                  "attributes": [
                                    {
                                      "attributes": [],
                                      "computedValue": "pane",
                                      "displayName": "type",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "type",
                                      "type": 1,
                                      "value": "pane"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "",
                                      "displayName": "bindings",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "bindings",
                                      "type": 4,
                                      "value": ""
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "renderer",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "renderer",
                                  "type": 2,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "settings",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "settings",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "false",
                              "displayName": "locked",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "locked",
                              "type": 5,
                              "value": "false"
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "contexts",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contexts",
                              "type": 4,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "select_comics",
                              "displayName": "name",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "name",
                              "type": 1,
                              "value": "select_comics"
                            },
                            {
                              "attributes": [],
                              "computedValue": "select_comics",
                              "displayName": "label",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "label",
                              "type": 1,
                              "value": "select_comics"
                            },
                            {
                              "attributes": [],
                              "computedValue": "datasource",
                              "displayName": "contentPlugin",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contentPlugin",
                              "type": 1,
                              "value": "datasource"
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "condition",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "condition",
                                  "type": 1,
                                  "value": ""
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "rules",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "rules",
                                  "type": 4,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "rule",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "rule",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "2",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "2",
                          "type": 2,
                          "value": ""
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "text/markdown",
                                  "displayName": "Content Type",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "contentType",
                                  "type": 1,
                                  "value": "text/markdown"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "[.name]",
                                  "displayName": "Content",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "content",
                                  "type": 1,
                                  "value": "[.name]"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "jsScript",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "jsScript",
                                  "type": 1,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "settings",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "settings",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "false",
                              "displayName": "locked",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "locked",
                              "type": 5,
                              "value": "false"
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "contexts",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contexts",
                              "type": 4,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "comic_tpl",
                              "displayName": "name",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "name",
                              "type": 1,
                              "value": "comic_tpl"
                            },
                            {
                              "attributes": [],
                              "computedValue": "comic_tpl",
                              "displayName": "label",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "label",
                              "type": 1,
                              "value": "comic_tpl"
                            },
                            {
                              "attributes": [],
                              "computedValue": "snippet",
                              "displayName": "contentPlugin",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contentPlugin",
                              "type": 1,
                              "value": "snippet"
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "condition",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "condition",
                                  "type": 1,
                                  "value": ""
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "rules",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "rules",
                                  "type": 4,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "rule",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "rule",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "3",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "3",
                          "type": 2,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "panes",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "panes",
                      "type": 4,
                      "value": ""
                    },
                    {
                      "attributes": [],
                      "computedValue": "comics",
                      "displayName": "name",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "name",
                      "type": 1,
                      "value": "comics"
                    },
                    {
                      "attributes": [],
                      "computedValue": "comics",
                      "displayName": "label",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "label",
                      "type": 1,
                      "value": "comics"
                    },
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "stylePlugin",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "stylePlugin",
                      "type": 1,
                      "value": ""
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [
                            {
                              "attributes": [],
                              "computedValue": "100%",
                              "displayName": "Height",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "height",
                              "type": 1,
                              "value": "100%"
                            }
                          ],
                          "computedValue": "",
                          "displayName": "settings",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "settings",
                          "type": 2,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "columnSetting",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "columnSetting",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "0",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "0",
                  "type": 2,
                  "value": ""
                },
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "settings",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "settings",
                      "type": 2,
                      "value": ""
                    },
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "panes",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "panes",
                      "type": 4,
                      "value": ""
                    },
                    {
                      "attributes": [],
                      "computedValue": "undefined",
                      "displayName": "name",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "name",
                      "type": 0,
                      "value": "undefined"
                    },
                    {
                      "attributes": [],
                      "computedValue": "undefined",
                      "displayName": "label",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "label",
                      "type": 0,
                      "value": "undefined"
                    },
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "stylePlugin",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "stylePlugin",
                      "type": 1,
                      "value": ""
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [],
                          "computedValue": "",
                          "displayName": "settings",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "settings",
                          "type": 2,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "columnSetting",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "columnSetting",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "1",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "1",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "panels",
              "floatValue": 0,
              "intValue": 0,
              "name": "panels",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "character",
                      "displayName": "name",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "name",
                      "type": 1,
                      "value": "character"
                    },
                    {
                      "attributes": [],
                      "computedValue": "rest",
                      "displayName": "adaptor",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "adaptor",
                      "type": 1,
                      "value": "rest"
                    },
                    {
                      "attributes": [],
                      "computedValue": "rest",
                      "displayName": "plugin",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "plugin",
                      "type": 1,
                      "value": "rest"
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [],
                          "computedValue": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/marvel/characters/:characterId",
                          "displayName": "url",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "url",
                          "type": 1,
                          "value": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/marvel/characters/:characterId"
                        },
                        {
                          "attributes": [],
                          "computedValue": "undefined",
                          "displayName": "method",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "method",
                          "type": 0,
                          "value": "undefined"
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [
                                    {
                                      "attributes": [],
                                      "computedValue": "route",
                                      "displayName": "type",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "type",
                                      "type": 1,
                                      "value": "route"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "arg1",
                                      "displayName": "value",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "value",
                                      "type": 1,
                                      "value": "arg1"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "1017100",
                                      "displayName": "testValue",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "testValue",
                                      "type": 1,
                                      "value": "1017100"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "",
                                      "displayName": "context",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "context",
                                      "type": 1,
                                      "value": ""
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "mapping",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "mapping",
                                  "type": 2,
                                  "value": ""
                                },
                                {
                                  "attributes": [
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "page",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "page"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "0",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "0",
                                      "type": 2,
                                      "value": ""
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "limit",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "limit"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "1",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "1",
                                      "type": 2,
                                      "value": ""
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "offset",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "offset"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "2",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "2",
                                      "type": 2,
                                      "value": ""
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "searchString",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "searchString"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "3",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "3",
                                      "type": 2,
                                      "value": ""
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "flags",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "flags",
                                  "type": 4,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "0",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "0",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "params",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "params",
                          "type": 4,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "rest",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "rest",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "0",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "0",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "contexts",
              "floatValue": 0,
              "intValue": 0,
              "name": "contexts",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [
                    {
                      "attributes": [
                        {
                          "attributes": [],
                          "computedValue": "",
                          "displayName": "Flex Grow",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "flexGrow",
                          "type": 1,
                          "value": ""
                        },
                        {
                          "attributes": [],
                          "computedValue": "",
                          "displayName": "Flex Shrink",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "flexShrink",
                          "type": 1,
                          "value": ""
                        },
                        {
                          "attributes": [],
                          "computedValue": "",
                          "displayName": "Flex Basis",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "flexBasis",
                          "type": 1,
                          "value": ""
                        },
                        {
                          "attributes": [],
                          "computedValue": "100%",
                          "displayName": "Height",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "height",
                          "type": 1,
                          "value": "100%"
                        },
                        {
                          "attributes": [],
                          "computedValue": "",
                          "displayName": "Direction",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "direction",
                          "type": 1,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "settings",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "settings",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "0",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "0",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "rowSettings",
              "floatValue": 0,
              "intValue": 0,
              "name": "rowSettings",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "readUserIds",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "readUserIds",
                  "type": 4,
                  "value": ""
                },
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "writeUserIds",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "writeUserIds",
                  "type": 4,
                  "value": ""
                },
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "deleteUserIds",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "deleteUserIds",
                  "type": 4,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "entityPermissions",
              "floatValue": 0,
              "intValue": 0,
              "name": "entityPermissions",
              "type": 2,
              "value": ""
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "id",
              "floatValue": 0,
              "intValue": 0,
              "name": "id",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "gridless",
              "displayName": "layoutType",
              "floatValue": 0,
              "intValue": 0,
              "name": "layoutType",
              "type": 1,
              "value": "gridless"
            },
            {
              "attributes": [],
              "computedValue": "page",
              "displayName": "displayType",
              "floatValue": 0,
              "intValue": 0,
              "name": "displayType",
              "type": 1,
              "value": "page"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "name",
              "floatValue": 0,
              "intValue": 0,
              "name": "name",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "title",
              "floatValue": 0,
              "intValue": 0,
              "name": "title",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "ipe",
              "displayName": "site",
              "floatValue": 0,
              "intValue": 0,
              "name": "site",
              "type": 1,
              "value": "ipe"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "userId",
              "floatValue": 0,
              "intValue": 0,
              "name": "userId",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "path",
              "floatValue": 0,
              "intValue": 0,
              "name": "path",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "settings",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "settings",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "layoutSetting",
              "floatValue": 0,
              "intValue": 0,
              "name": "layoutSetting",
              "type": 2,
              "value": ""
            }
          ]
        },
        {
          "contentPlugin": "panel",
          "label": "1e704bb6-d886-4196-931b-70327374ef8d",
          "linkedPageId": "",
          "locked": false,
          "name": "1e704bb6-d886-4196-931b-70327374ef8d",
          "rule": {
            "condition": "",
            "field": "",
            "operator": "",
            "rules": [],
            "value": ""
          },
          "settings": [
            {
              "attributes": [],
              "computedValue": "",
              "displayName": "gridItems",
              "floatValue": 0,
              "intValue": 0,
              "name": "gridItems",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "settings",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "settings",
                      "type": 2,
                      "value": ""
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "text/markdown",
                                  "displayName": "Content Type",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "contentType",
                                  "type": 1,
                                  "value": "text/markdown"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "Series",
                                  "displayName": "Content",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "content",
                                  "type": 1,
                                  "value": "Series"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "jsScript",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "jsScript",
                                  "type": 1,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "settings",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "settings",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "false",
                              "displayName": "locked",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "locked",
                              "type": 5,
                              "value": "false"
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "contexts",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contexts",
                              "type": 4,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "tab_title",
                              "displayName": "name",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "name",
                              "type": 1,
                              "value": "tab_title"
                            },
                            {
                              "attributes": [],
                              "computedValue": "tab_title",
                              "displayName": "label",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "label",
                              "type": 1,
                              "value": "tab_title"
                            },
                            {
                              "attributes": [],
                              "computedValue": "snippet",
                              "displayName": "contentPlugin",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contentPlugin",
                              "type": 1,
                              "value": "snippet"
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "condition",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "condition",
                                  "type": 1,
                                  "value": ""
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "rules",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "rules",
                                  "type": 4,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "rule",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "rule",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "0",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "0",
                          "type": 2,
                          "value": ""
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "context",
                                  "displayName": "plugin",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "plugin",
                                  "type": 1,
                                  "value": "context"
                                },
                                {
                                  "attributes": [
                                    {
                                      "attributes": [],
                                      "computedValue": "character",
                                      "displayName": "name",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "name",
                                      "type": 1,
                                      "value": "character"
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "settings",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "settings",
                                  "type": 2,
                                  "value": ""
                                },
                                {
                                  "attributes": [
                                    {
                                      "attributes": [],
                                      "computedValue": "pane",
                                      "displayName": "type",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "type",
                                      "type": 1,
                                      "value": "pane"
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [
                                            {
                                              "attributes": [],
                                              "computedValue": "pane",
                                              "displayName": "type",
                                              "floatValue": 0,
                                              "intValue": 0,
                                              "name": "type",
                                              "type": 1,
                                              "value": "pane"
                                            },
                                            {
                                              "attributes": [],
                                              "computedValue": "series_tpl",
                                              "displayName": "id",
                                              "floatValue": 0,
                                              "intValue": 0,
                                              "name": "id",
                                              "type": 1,
                                              "value": "series_tpl"
                                            }
                                          ],
                                          "computedValue": "",
                                          "displayName": "0",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "0",
                                          "type": 2,
                                          "value": ""
                                        },
                                        {
                                          "attributes": [
                                            {
                                              "attributes": [],
                                              "computedValue": "pane",
                                              "displayName": "type",
                                              "floatValue": 0,
                                              "intValue": 0,
                                              "name": "type",
                                              "type": 1,
                                              "value": "pane"
                                            },
                                            {
                                              "attributes": [],
                                              "computedValue": "select_series",
                                              "displayName": "id",
                                              "floatValue": 0,
                                              "intValue": 0,
                                              "name": "id",
                                              "type": 1,
                                              "value": "select_series"
                                            }
                                          ],
                                          "computedValue": "",
                                          "displayName": "1",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "1",
                                          "type": 2,
                                          "value": ""
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "bindings",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "bindings",
                                      "type": 4,
                                      "value": ""
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "renderer",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "renderer",
                                  "type": 2,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "settings",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "settings",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "false",
                              "displayName": "locked",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "locked",
                              "type": 5,
                              "value": "false"
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "contexts",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contexts",
                              "type": 4,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "character_ref",
                              "displayName": "name",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "name",
                              "type": 1,
                              "value": "character_ref"
                            },
                            {
                              "attributes": [],
                              "computedValue": "character_ref",
                              "displayName": "label",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "label",
                              "type": 1,
                              "value": "character_ref"
                            },
                            {
                              "attributes": [],
                              "computedValue": "datasource",
                              "displayName": "contentPlugin",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contentPlugin",
                              "type": 1,
                              "value": "datasource"
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "condition",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "condition",
                                  "type": 1,
                                  "value": ""
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "rules",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "rules",
                                  "type": 4,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "rule",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "rule",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "1",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "1",
                          "type": 2,
                          "value": ""
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "select",
                                  "displayName": "plugin",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "plugin",
                                  "type": 1,
                                  "value": "select"
                                },
                                {
                                  "attributes": [
                                    {
                                      "attributes": [],
                                      "computedValue": "$..data.results.0.series.items.*",
                                      "displayName": "query",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "query",
                                      "type": 1,
                                      "value": "$..data.results.0.series.items.*"
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "settings",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "settings",
                                  "type": 2,
                                  "value": ""
                                },
                                {
                                  "attributes": [
                                    {
                                      "attributes": [],
                                      "computedValue": "pane",
                                      "displayName": "type",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "type",
                                      "type": 1,
                                      "value": "pane"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "",
                                      "displayName": "bindings",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "bindings",
                                      "type": 4,
                                      "value": ""
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "renderer",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "renderer",
                                  "type": 2,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "settings",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "settings",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "false",
                              "displayName": "locked",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "locked",
                              "type": 5,
                              "value": "false"
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "contexts",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contexts",
                              "type": 4,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "select_series",
                              "displayName": "name",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "name",
                              "type": 1,
                              "value": "select_series"
                            },
                            {
                              "attributes": [],
                              "computedValue": "select_series",
                              "displayName": "label",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "label",
                              "type": 1,
                              "value": "select_series"
                            },
                            {
                              "attributes": [],
                              "computedValue": "datasource",
                              "displayName": "contentPlugin",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contentPlugin",
                              "type": 1,
                              "value": "datasource"
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "condition",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "condition",
                                  "type": 1,
                                  "value": ""
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "rules",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "rules",
                                  "type": 4,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "rule",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "rule",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "2",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "2",
                          "type": 2,
                          "value": ""
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "text/markdown",
                                  "displayName": "Content Type",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "contentType",
                                  "type": 1,
                                  "value": "text/markdown"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "[.name]",
                                  "displayName": "Content",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "content",
                                  "type": 1,
                                  "value": "[.name]"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "jsScript",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "jsScript",
                                  "type": 1,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "settings",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "settings",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "false",
                              "displayName": "locked",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "locked",
                              "type": 5,
                              "value": "false"
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "contexts",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contexts",
                              "type": 4,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "series_tpl",
                              "displayName": "name",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "name",
                              "type": 1,
                              "value": "series_tpl"
                            },
                            {
                              "attributes": [],
                              "computedValue": "series_tpl",
                              "displayName": "label",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "label",
                              "type": 1,
                              "value": "series_tpl"
                            },
                            {
                              "attributes": [],
                              "computedValue": "snippet",
                              "displayName": "contentPlugin",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contentPlugin",
                              "type": 1,
                              "value": "snippet"
                            },
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "condition",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "condition",
                                  "type": 1,
                                  "value": ""
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "rules",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "rules",
                                  "type": 4,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "rule",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "rule",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "3",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "3",
                          "type": 2,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "panes",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "panes",
                      "type": 4,
                      "value": ""
                    },
                    {
                      "attributes": [],
                      "computedValue": "undefined",
                      "displayName": "name",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "name",
                      "type": 0,
                      "value": "undefined"
                    },
                    {
                      "attributes": [],
                      "computedValue": "undefined",
                      "displayName": "label",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "label",
                      "type": 0,
                      "value": "undefined"
                    },
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "stylePlugin",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "stylePlugin",
                      "type": 1,
                      "value": ""
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [],
                          "computedValue": "",
                          "displayName": "settings",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "settings",
                          "type": 2,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "columnSetting",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "columnSetting",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "0",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "0",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "panels",
              "floatValue": 0,
              "intValue": 0,
              "name": "panels",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "character",
                      "displayName": "name",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "name",
                      "type": 1,
                      "value": "character"
                    },
                    {
                      "attributes": [],
                      "computedValue": "rest",
                      "displayName": "adaptor",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "adaptor",
                      "type": 1,
                      "value": "rest"
                    },
                    {
                      "attributes": [],
                      "computedValue": "rest",
                      "displayName": "plugin",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "plugin",
                      "type": 1,
                      "value": "rest"
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [],
                          "computedValue": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/marvel/characters/:characterId",
                          "displayName": "url",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "url",
                          "type": 1,
                          "value": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/marvel/characters/:characterId"
                        },
                        {
                          "attributes": [],
                          "computedValue": "undefined",
                          "displayName": "method",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "method",
                          "type": 0,
                          "value": "undefined"
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [
                                    {
                                      "attributes": [],
                                      "computedValue": "route",
                                      "displayName": "type",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "type",
                                      "type": 1,
                                      "value": "route"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "arg1",
                                      "displayName": "value",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "value",
                                      "type": 1,
                                      "value": "arg1"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "1017100",
                                      "displayName": "testValue",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "testValue",
                                      "type": 1,
                                      "value": "1017100"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "",
                                      "displayName": "context",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "context",
                                      "type": 1,
                                      "value": ""
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "mapping",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "mapping",
                                  "type": 2,
                                  "value": ""
                                },
                                {
                                  "attributes": [
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "page",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "page"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "0",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "0",
                                      "type": 2,
                                      "value": ""
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "limit",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "limit"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "1",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "1",
                                      "type": 2,
                                      "value": ""
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "offset",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "offset"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "2",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "2",
                                      "type": 2,
                                      "value": ""
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "searchString",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "searchString"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "3",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "3",
                                      "type": 2,
                                      "value": ""
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "flags",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "flags",
                                  "type": 4,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "0",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "0",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "params",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "params",
                          "type": 4,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "rest",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "rest",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "0",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "0",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "contexts",
              "floatValue": 0,
              "intValue": 0,
              "name": "contexts",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [],
              "computedValue": "",
              "displayName": "rowSettings",
              "floatValue": 0,
              "intValue": 0,
              "name": "rowSettings",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "readUserIds",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "readUserIds",
                  "type": 4,
                  "value": ""
                },
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "writeUserIds",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "writeUserIds",
                  "type": 4,
                  "value": ""
                },
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "deleteUserIds",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "deleteUserIds",
                  "type": 4,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "entityPermissions",
              "floatValue": 0,
              "intValue": 0,
              "name": "entityPermissions",
              "type": 2,
              "value": ""
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "id",
              "floatValue": 0,
              "intValue": 0,
              "name": "id",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "gridless",
              "displayName": "layoutType",
              "floatValue": 0,
              "intValue": 0,
              "name": "layoutType",
              "type": 1,
              "value": "gridless"
            },
            {
              "attributes": [],
              "computedValue": "page",
              "displayName": "displayType",
              "floatValue": 0,
              "intValue": 0,
              "name": "displayType",
              "type": 1,
              "value": "page"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "name",
              "floatValue": 0,
              "intValue": 0,
              "name": "name",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "title",
              "floatValue": 0,
              "intValue": 0,
              "name": "title",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "ipe",
              "displayName": "site",
              "floatValue": 0,
              "intValue": 0,
              "name": "site",
              "type": 1,
              "value": "ipe"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "userId",
              "floatValue": 0,
              "intValue": 0,
              "name": "userId",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "path",
              "floatValue": 0,
              "intValue": 0,
              "name": "path",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "settings",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "settings",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "layoutSetting",
              "floatValue": 0,
              "intValue": 0,
              "name": "layoutSetting",
              "type": 2,
              "value": ""
            }
          ]
        },
        {
          "contentPlugin": "panel",
          "label": "1a3ad36e-b741-46d8-9d4b-500276778060",
          "linkedPageId": "",
          "locked": false,
          "name": "1a3ad36e-b741-46d8-9d4b-500276778060",
          "rule": {
            "condition": "",
            "field": "",
            "operator": "",
            "rules": [],
            "value": ""
          },
          "settings": [
            {
              "attributes": [],
              "computedValue": "",
              "displayName": "gridItems",
              "floatValue": 0,
              "intValue": 0,
              "name": "gridItems",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "settings",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "settings",
                      "type": 2,
                      "value": ""
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "text/markdown",
                                  "displayName": "Content Type",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "contentType",
                                  "type": 1,
                                  "value": "text/markdown"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "Stories",
                                  "displayName": "Content",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "content",
                                  "type": 1,
                                  "value": "Stories"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "jsScript",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "jsScript",
                                  "type": 1,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "settings",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "settings",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "false",
                              "displayName": "locked",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "locked",
                              "type": 5,
                              "value": "false"
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "contexts",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contexts",
                              "type": 4,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "name",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "name",
                              "type": 1,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "label",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "label",
                              "type": 1,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "snippet",
                              "displayName": "contentPlugin",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contentPlugin",
                              "type": 1,
                              "value": "snippet"
                            }
                          ],
                          "computedValue": "",
                          "displayName": "0",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "0",
                          "type": 2,
                          "value": ""
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "text/markdown",
                                  "displayName": "Content Type",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "contentType",
                                  "type": 1,
                                  "value": "text/markdown"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "Stories list",
                                  "displayName": "Content",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "content",
                                  "type": 1,
                                  "value": "Stories list"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "jsScript",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "jsScript",
                                  "type": 1,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "settings",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "settings",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "false",
                              "displayName": "locked",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "locked",
                              "type": 5,
                              "value": "false"
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "contexts",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contexts",
                              "type": 4,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "name",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "name",
                              "type": 1,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "label",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "label",
                              "type": 1,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "snippet",
                              "displayName": "contentPlugin",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contentPlugin",
                              "type": 1,
                              "value": "snippet"
                            }
                          ],
                          "computedValue": "",
                          "displayName": "1",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "1",
                          "type": 2,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "panes",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "panes",
                      "type": 4,
                      "value": ""
                    },
                    {
                      "attributes": [],
                      "computedValue": "undefined",
                      "displayName": "name",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "name",
                      "type": 0,
                      "value": "undefined"
                    },
                    {
                      "attributes": [],
                      "computedValue": "undefined",
                      "displayName": "label",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "label",
                      "type": 0,
                      "value": "undefined"
                    },
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "stylePlugin",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "stylePlugin",
                      "type": 1,
                      "value": ""
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [],
                          "computedValue": "",
                          "displayName": "settings",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "settings",
                          "type": 2,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "columnSetting",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "columnSetting",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "0",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "0",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "panels",
              "floatValue": 0,
              "intValue": 0,
              "name": "panels",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "character",
                      "displayName": "name",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "name",
                      "type": 1,
                      "value": "character"
                    },
                    {
                      "attributes": [],
                      "computedValue": "rest",
                      "displayName": "adaptor",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "adaptor",
                      "type": 1,
                      "value": "rest"
                    },
                    {
                      "attributes": [],
                      "computedValue": "rest",
                      "displayName": "plugin",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "plugin",
                      "type": 1,
                      "value": "rest"
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [],
                          "computedValue": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/marvel/characters/:characterId",
                          "displayName": "url",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "url",
                          "type": 1,
                          "value": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/marvel/characters/:characterId"
                        },
                        {
                          "attributes": [],
                          "computedValue": "undefined",
                          "displayName": "method",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "method",
                          "type": 0,
                          "value": "undefined"
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [
                                    {
                                      "attributes": [],
                                      "computedValue": "route",
                                      "displayName": "type",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "type",
                                      "type": 1,
                                      "value": "route"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "arg1",
                                      "displayName": "value",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "value",
                                      "type": 1,
                                      "value": "arg1"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "1017100",
                                      "displayName": "testValue",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "testValue",
                                      "type": 1,
                                      "value": "1017100"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "",
                                      "displayName": "context",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "context",
                                      "type": 1,
                                      "value": ""
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "mapping",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "mapping",
                                  "type": 2,
                                  "value": ""
                                },
                                {
                                  "attributes": [
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "page",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "page"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "0",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "0",
                                      "type": 2,
                                      "value": ""
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "limit",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "limit"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "1",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "1",
                                      "type": 2,
                                      "value": ""
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "offset",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "offset"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "2",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "2",
                                      "type": 2,
                                      "value": ""
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "searchString",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "searchString"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "3",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "3",
                                      "type": 2,
                                      "value": ""
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "flags",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "flags",
                                  "type": 4,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "0",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "0",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "params",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "params",
                          "type": 4,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "rest",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "rest",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "0",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "0",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "contexts",
              "floatValue": 0,
              "intValue": 0,
              "name": "contexts",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [],
              "computedValue": "",
              "displayName": "rowSettings",
              "floatValue": 0,
              "intValue": 0,
              "name": "rowSettings",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "readUserIds",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "readUserIds",
                  "type": 4,
                  "value": ""
                },
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "writeUserIds",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "writeUserIds",
                  "type": 4,
                  "value": ""
                },
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "deleteUserIds",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "deleteUserIds",
                  "type": 4,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "entityPermissions",
              "floatValue": 0,
              "intValue": 0,
              "name": "entityPermissions",
              "type": 2,
              "value": ""
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "id",
              "floatValue": 0,
              "intValue": 0,
              "name": "id",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "gridless",
              "displayName": "layoutType",
              "floatValue": 0,
              "intValue": 0,
              "name": "layoutType",
              "type": 1,
              "value": "gridless"
            },
            {
              "attributes": [],
              "computedValue": "page",
              "displayName": "displayType",
              "floatValue": 0,
              "intValue": 0,
              "name": "displayType",
              "type": 1,
              "value": "page"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "name",
              "floatValue": 0,
              "intValue": 0,
              "name": "name",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "title",
              "floatValue": 0,
              "intValue": 0,
              "name": "title",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "ipe",
              "displayName": "site",
              "floatValue": 0,
              "intValue": 0,
              "name": "site",
              "type": 1,
              "value": "ipe"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "userId",
              "floatValue": 0,
              "intValue": 0,
              "name": "userId",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "path",
              "floatValue": 0,
              "intValue": 0,
              "name": "path",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "settings",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "settings",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "layoutSetting",
              "floatValue": 0,
              "intValue": 0,
              "name": "layoutSetting",
              "type": 2,
              "value": ""
            }
          ]
        },
        {
          "contentPlugin": "panel",
          "label": "58458438-44ef-4e53-a08f-e91bc0cede2d",
          "linkedPageId": "",
          "locked": false,
          "name": "58458438-44ef-4e53-a08f-e91bc0cede2d",
          "rule": {
            "condition": "",
            "field": "",
            "operator": "",
            "rules": [],
            "value": ""
          },
          "settings": [
            {
              "attributes": [],
              "computedValue": "",
              "displayName": "gridItems",
              "floatValue": 0,
              "intValue": 0,
              "name": "gridItems",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "settings",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "settings",
                      "type": 2,
                      "value": ""
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "text/markdown",
                                  "displayName": "Content Type",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "contentType",
                                  "type": 1,
                                  "value": "text/markdown"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "Events",
                                  "displayName": "Content",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "content",
                                  "type": 1,
                                  "value": "Events"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "jsScript",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "jsScript",
                                  "type": 1,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "settings",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "settings",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "false",
                              "displayName": "locked",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "locked",
                              "type": 5,
                              "value": "false"
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "contexts",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contexts",
                              "type": 4,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "name",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "name",
                              "type": 1,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "label",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "label",
                              "type": 1,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "snippet",
                              "displayName": "contentPlugin",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contentPlugin",
                              "type": 1,
                              "value": "snippet"
                            }
                          ],
                          "computedValue": "",
                          "displayName": "0",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "0",
                          "type": 2,
                          "value": ""
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [],
                                  "computedValue": "text/markdown",
                                  "displayName": "Content Type",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "contentType",
                                  "type": 1,
                                  "value": "text/markdown"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "Events list",
                                  "displayName": "Content",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "content",
                                  "type": 1,
                                  "value": "Events list"
                                },
                                {
                                  "attributes": [],
                                  "computedValue": "",
                                  "displayName": "jsScript",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "jsScript",
                                  "type": 1,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "settings",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "settings",
                              "type": 2,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "false",
                              "displayName": "locked",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "locked",
                              "type": 5,
                              "value": "false"
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "contexts",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contexts",
                              "type": 4,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "name",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "name",
                              "type": 1,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "",
                              "displayName": "label",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "label",
                              "type": 1,
                              "value": ""
                            },
                            {
                              "attributes": [],
                              "computedValue": "snippet",
                              "displayName": "contentPlugin",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "contentPlugin",
                              "type": 1,
                              "value": "snippet"
                            }
                          ],
                          "computedValue": "",
                          "displayName": "1",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "1",
                          "type": 2,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "panes",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "panes",
                      "type": 4,
                      "value": ""
                    },
                    {
                      "attributes": [],
                      "computedValue": "undefined",
                      "displayName": "name",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "name",
                      "type": 0,
                      "value": "undefined"
                    },
                    {
                      "attributes": [],
                      "computedValue": "undefined",
                      "displayName": "label",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "label",
                      "type": 0,
                      "value": "undefined"
                    },
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "stylePlugin",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "stylePlugin",
                      "type": 1,
                      "value": ""
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [],
                          "computedValue": "",
                          "displayName": "settings",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "settings",
                          "type": 2,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "columnSetting",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "columnSetting",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "0",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "0",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "panels",
              "floatValue": 0,
              "intValue": 0,
              "name": "panels",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "character",
                      "displayName": "name",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "name",
                      "type": 1,
                      "value": "character"
                    },
                    {
                      "attributes": [],
                      "computedValue": "rest",
                      "displayName": "adaptor",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "adaptor",
                      "type": 1,
                      "value": "rest"
                    },
                    {
                      "attributes": [],
                      "computedValue": "rest",
                      "displayName": "plugin",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "plugin",
                      "type": 1,
                      "value": "rest"
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [],
                          "computedValue": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/marvel/characters/:characterId",
                          "displayName": "url",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "url",
                          "type": 1,
                          "value": "https://m7k310bu9a.execute-api.us-east-1.amazonaws.com/marvel/characters/:characterId"
                        },
                        {
                          "attributes": [],
                          "computedValue": "undefined",
                          "displayName": "method",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "method",
                          "type": 0,
                          "value": "undefined"
                        },
                        {
                          "attributes": [
                            {
                              "attributes": [
                                {
                                  "attributes": [
                                    {
                                      "attributes": [],
                                      "computedValue": "route",
                                      "displayName": "type",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "type",
                                      "type": 1,
                                      "value": "route"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "arg1",
                                      "displayName": "value",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "value",
                                      "type": 1,
                                      "value": "arg1"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "1017100",
                                      "displayName": "testValue",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "testValue",
                                      "type": 1,
                                      "value": "1017100"
                                    },
                                    {
                                      "attributes": [],
                                      "computedValue": "",
                                      "displayName": "context",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "context",
                                      "type": 1,
                                      "value": ""
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "mapping",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "mapping",
                                  "type": 2,
                                  "value": ""
                                },
                                {
                                  "attributes": [
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "page",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "page"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "0",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "0",
                                      "type": 2,
                                      "value": ""
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "limit",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "limit"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "1",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "1",
                                      "type": 2,
                                      "value": ""
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "offset",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "offset"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "2",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "2",
                                      "type": 2,
                                      "value": ""
                                    },
                                    {
                                      "attributes": [
                                        {
                                          "attributes": [],
                                          "computedValue": "searchString",
                                          "displayName": "name",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "name",
                                          "type": 1,
                                          "value": "searchString"
                                        },
                                        {
                                          "attributes": [],
                                          "computedValue": "false",
                                          "displayName": "enabled",
                                          "floatValue": 0,
                                          "intValue": 0,
                                          "name": "enabled",
                                          "type": 5,
                                          "value": "false"
                                        }
                                      ],
                                      "computedValue": "",
                                      "displayName": "3",
                                      "floatValue": 0,
                                      "intValue": 0,
                                      "name": "3",
                                      "type": 2,
                                      "value": ""
                                    }
                                  ],
                                  "computedValue": "",
                                  "displayName": "flags",
                                  "floatValue": 0,
                                  "intValue": 0,
                                  "name": "flags",
                                  "type": 4,
                                  "value": ""
                                }
                              ],
                              "computedValue": "",
                              "displayName": "0",
                              "floatValue": 0,
                              "intValue": 0,
                              "name": "0",
                              "type": 2,
                              "value": ""
                            }
                          ],
                          "computedValue": "",
                          "displayName": "params",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "params",
                          "type": 4,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "rest",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "rest",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "0",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "0",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "contexts",
              "floatValue": 0,
              "intValue": 0,
              "name": "contexts",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [],
              "computedValue": "",
              "displayName": "rowSettings",
              "floatValue": 0,
              "intValue": 0,
              "name": "rowSettings",
              "type": 4,
              "value": ""
            },
            {
              "attributes": [
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "readUserIds",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "readUserIds",
                  "type": 4,
                  "value": ""
                },
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "writeUserIds",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "writeUserIds",
                  "type": 4,
                  "value": ""
                },
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "deleteUserIds",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "deleteUserIds",
                  "type": 4,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "entityPermissions",
              "floatValue": 0,
              "intValue": 0,
              "name": "entityPermissions",
              "type": 2,
              "value": ""
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "id",
              "floatValue": 0,
              "intValue": 0,
              "name": "id",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "gridless",
              "displayName": "layoutType",
              "floatValue": 0,
              "intValue": 0,
              "name": "layoutType",
              "type": 1,
              "value": "gridless"
            },
            {
              "attributes": [],
              "computedValue": "page",
              "displayName": "displayType",
              "floatValue": 0,
              "intValue": 0,
              "name": "displayType",
              "type": 1,
              "value": "page"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "name",
              "floatValue": 0,
              "intValue": 0,
              "name": "name",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "title",
              "floatValue": 0,
              "intValue": 0,
              "name": "title",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "ipe",
              "displayName": "site",
              "floatValue": 0,
              "intValue": 0,
              "name": "site",
              "type": 1,
              "value": "ipe"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "userId",
              "floatValue": 0,
              "intValue": 0,
              "name": "userId",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [],
              "computedValue": "undefined",
              "displayName": "path",
              "floatValue": 0,
              "intValue": 0,
              "name": "path",
              "type": 0,
              "value": "undefined"
            },
            {
              "attributes": [
                {
                  "attributes": [],
                  "computedValue": "",
                  "displayName": "settings",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "settings",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "layoutSetting",
              "floatValue": 0,
              "intValue": 0,
              "name": "layoutSetting",
              "type": 2,
              "value": ""
            }
          ]
        }
      ],
      "settings": [
        {
          "attributes": [
            {
              "attributes": [
                {
                  "attributes": [
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "panelPage",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "panelPage",
                      "type": 2,
                      "value": ""
                    },
                    {
                      "attributes": [],
                      "computedValue": "",
                      "displayName": "panel",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "panel",
                      "type": 2,
                      "value": ""
                    },
                    {
                      "attributes": [],
                      "computedValue": "0",
                      "displayName": "pane",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "pane",
                      "type": 0,
                      "value": "0"
                    },
                    {
                      "attributes": [
                        {
                          "attributes": [],
                          "computedValue": "0",
                          "displayName": "panelPage",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "panelPage",
                          "type": 0,
                          "value": "0"
                        },
                        {
                          "attributes": [],
                          "computedValue": "0",
                          "displayName": "panel",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "panel",
                          "type": 0,
                          "value": "0"
                        },
                        {
                          "attributes": [],
                          "computedValue": "0",
                          "displayName": "pane",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "pane",
                          "type": 0,
                          "value": "0"
                        },
                        {
                          "attributes": [],
                          "computedValue": "",
                          "displayName": "nested",
                          "floatValue": 0,
                          "intValue": 0,
                          "name": "nested",
                          "type": 2,
                          "value": ""
                        }
                      ],
                      "computedValue": "",
                      "displayName": "nested",
                      "floatValue": 0,
                      "intValue": 0,
                      "name": "nested",
                      "type": 2,
                      "value": ""
                    }
                  ],
                  "computedValue": "",
                  "displayName": "mapping",
                  "floatValue": 0,
                  "intValue": 0,
                  "name": "mapping",
                  "type": 2,
                  "value": ""
                }
              ],
              "computedValue": "",
              "displayName": "0",
              "floatValue": 0,
              "intValue": 0,
              "name": "0",
              "type": 2,
              "value": ""
            }
          ],
          "computedValue": "",
          "displayName": "labels",
          "floatValue": 0,
          "intValue": 0,
          "name": "labels",
          "type": 4,
          "value": ""
        }
      ],
      "stylePlugin": "tabs"
    }
  ],
  "path": "/dev-test-virtual-list-flex-v1",
  "persistence": {
    "dataduct": {
      "plugin": "",
      "settings": []
    }
  },
  "rowSettings": [
    {
      "settings": [
        {
          "attributes": [],
          "computedValue": "",
          "displayName": "Flex Grow",
          "floatValue": 0,
          "intValue": 0,
          "name": "flexGrow",
          "type": 1,
          "value": ""
        },
        {
          "attributes": [],
          "computedValue": "",
          "displayName": "Flex Shrink",
          "floatValue": 0,
          "intValue": 0,
          "name": "flexShrink",
          "type": 1,
          "value": ""
        },
        {
          "attributes": [],
          "computedValue": "",
          "displayName": "Flex Basis",
          "floatValue": 0,
          "intValue": 0,
          "name": "flexBasis",
          "type": 1,
          "value": ""
        },
        {
          "attributes": [],
          "computedValue": "100%",
          "displayName": "Height",
          "floatValue": 0,
          "intValue": 0,
          "name": "height",
          "type": 1,
          "value": "100%"
        },
        {
          "attributes": [],
          "computedValue": "",
          "displayName": "Direction",
          "floatValue": 0,
          "intValue": 0,
          "name": "direction",
          "type": 1,
          "value": ""
        }
      ]
    }
  ],
  "site": "ipe",
  "title": "Dev Test Virtual List Flex v1",
  "userId": "e36b42fe-b09c-4514-a519-e178bb52957e"
}
,
{
	"contexts": [],
	"displayType": "form",
	"entityPermissions": {
		"deleteUserIds": [],
		"readUserIds": [
			"*"
		],
		"writeUserIds": []
	},
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "6b4bc3f2-5138-491b-a718-e342f6828a62",
	"interactions": {
		"interactions": {
			"listeners": [
				{
					"event": {
						"plugin": "dom",
						"settings": {
							"params": [
								{
									"flags": [
										{
											"enabled": false,
											"name": "page"
										},
										{
											"enabled": false,
											"name": "limit"
										},
										{
											"enabled": false,
											"name": "offset"
										},
										{
											"enabled": false,
											"name": "searchString"
										}
									],
									"mapping": {
										"context": "",
										"testValue": "",
										"type": "static",
										"value": "click"
									}
								},
								{
									"flags": [
										{
											"enabled": false,
											"name": "page"
										},
										{
											"enabled": false,
											"name": "limit"
										},
										{
											"enabled": false,
											"name": "offset"
										},
										{
											"enabled": false,
											"name": "searchString"
										}
									],
									"mapping": {
										"context": "",
										"testValue": "",
										"type": "static",
										"value": ".form-submit"
									}
								}
							],
							"paramsString": "type=:type&target=:target"
						}
					},
					"handler": {
						"plugin": "panels_form_submit",
						"settings": {
							"params": [
								{
									"flags": [
										{
											"enabled": false,
											"name": "page"
										},
										{
											"enabled": false,
											"name": "limit"
										},
										{
											"enabled": false,
											"name": "offset"
										},
										{
											"enabled": false,
											"name": "searchString"
										}
									],
									"mapping": {
										"context": "",
										"testValue": "",
										"type": "static",
										"value": "test-simple-form"
									}
								}
							],
							"paramsString": "name=:name"
						}
					}
				}
			]
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"name": "test-simple-form",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "form_input",
					"contexts": [],
					"label": "Text",
					"locked": false,
					"name": "text",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": ""
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
									"computedValue": "",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": null,
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "query",
									"name": "query",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "trackBy",
									"name": "trackBy",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "idMapping",
									"name": "idMapping",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "labelMapping",
									"name": "labelMapping",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "valueMapping",
									"name": "valueMapping",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "false",
									"displayName": "multiple",
									"name": "multiple",
									"type": 5,
									"value": "false"
								},
								{
									"attributes": [],
									"computedValue": "0",
									"displayName": "limit",
									"name": "limit",
									"type": 0,
									"value": "0"
								}
							],
							"computedValue": null,
							"displayName": "datasourceOptions",
							"name": "datasourceOptions",
							"type": 2,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [
												{
													"attributes": [],
													"computedValue": "required",
													"displayName": "name",
													"name": "name",
													"type": 1,
													"value": "required"
												},
												{
													"attributes": [],
													"computedValue": "required",
													"displayName": "validator",
													"name": "validator",
													"type": 1,
													"value": "required"
												},
												{
													"attributes": [],
													"computedValue": "field is required.",
													"displayName": "overrideErrorMessage",
													"name": "overrideErrorMessage",
													"type": 1,
													"value": "field is required."
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
									"displayName": "validators",
									"name": "validators",
									"type": 4,
									"value": null
								}
							],
							"computedValue": null,
							"displayName": "validation",
							"name": "validation",
							"type": 2,
							"value": null
						}
					]
				},
				{
					"contentPlugin": "form_textarea",
					"contexts": [],
					"label": "Textarea",
					"locked": false,
					"name": "textarea",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": ""
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
									"computedValue": "",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": null,
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": null
						}
					]
				},
				{
					"contentPlugin": "form_datepicker",
					"contexts": [],
					"label": "datepick",
					"locked": false,
					"name": "datepick",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": ""
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
									"computedValue": "",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": null,
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": null
						}
					]
				},
				{
					"contentPlugin": "form_checkbox",
					"contexts": [],
					"label": "checkbox",
					"locked": false,
					"name": "checkbox",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": ""
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
									"computedValue": "",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": null,
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": null
						}
					]
				},
				{
					"contentPlugin": "form_slider",
					"contexts": [],
					"label": "slider",
					"locked": false,
					"name": "slider",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": ""
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
									"computedValue": "",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": null,
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": null
						}
					]
				},
				{
					"contentPlugin": "datasource",
					"contexts": [],
					"label": "Nums",
					"locked": false,
					"name": "nums",
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
									"computedValue": "[\n{\"label\": \"One\", \"value\": \"1\"}\n]",
									"displayName": "data",
									"name": "data",
									"type": 1,
									"value": "[\n{\"label\": \"One\", \"value\": \"1\"}\n]"
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
				},
				{
					"contentPlugin": "form_select",
					"contexts": [],
					"label": "select",
					"locked": false,
					"name": "select",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": ""
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
									"computedValue": "nums",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": "nums"
								}
							],
							"computedValue": null,
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "query",
									"name": "query",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "trackBy",
									"name": "trackBy",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "[.value]",
									"displayName": "idMapping",
									"name": "idMapping",
									"type": 1,
									"value": "[.value]"
								},
								{
									"attributes": [],
									"computedValue": "[.label]",
									"displayName": "labelMapping",
									"name": "labelMapping",
									"type": 1,
									"value": "[.label]"
								},
								{
									"attributes": [],
									"computedValue": "[.value]",
									"displayName": "valueMapping",
									"name": "valueMapping",
									"type": 1,
									"value": "[.value]"
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "multiple",
									"name": "multiple",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "limit",
									"name": "limit",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": null,
							"displayName": "datasourceOptions",
							"name": "datasourceOptions",
							"type": 2,
							"value": null
						}
					]
				},
				{
					"contentPlugin": "form_toggle",
					"contexts": [],
					"label": "toggle",
					"locked": false,
					"name": "toggle",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": ""
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
									"computedValue": "",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": null,
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": null
						}
					]
				},
				{
					"contentPlugin": "form_hidden",
					"contexts": [],
					"label": "Id",
					"locked": false,
					"name": "id",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": ""
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
									"computedValue": "",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": null,
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": null
						}
					]
				},
				{
					"contentPlugin": "panel",
					"contexts": [],
					"label": "terms",
					"locked": false,
					"name": "terms",
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
											"computedValue": "100",
											"displayName": "cols",
											"name": "cols",
											"type": 0,
											"value": "100"
										},
										{
											"attributes": [],
											"computedValue": "1",
											"displayName": "rows",
											"name": "rows",
											"type": 0,
											"value": "1"
										},
										{
											"attributes": [],
											"computedValue": "0",
											"displayName": "x",
											"name": "x",
											"type": 0,
											"value": "0"
										},
										{
											"attributes": [],
											"computedValue": "0",
											"displayName": "y",
											"name": "y",
											"type": 0,
											"value": "0"
										},
										{
											"attributes": [],
											"computedValue": "0",
											"displayName": "weight",
											"name": "weight",
											"type": 0,
											"value": "0"
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
							"displayName": "gridItems",
							"name": "gridItems",
							"type": 4,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": null,
											"displayName": "settings",
											"name": "settings",
											"type": 2,
											"value": null
										},
										{
											"attributes": [
												{
													"attributes": [
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "",
																	"displayName": "value",
																	"name": "value",
																	"type": 1,
																	"value": ""
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
																			"computedValue": "",
																			"displayName": "id",
																			"name": "id",
																			"type": 1,
																			"value": ""
																		}
																	],
																	"computedValue": null,
																	"displayName": "datasourceBinding",
																	"name": "datasourceBinding",
																	"type": 2,
																	"value": null
																},
																{
																	"attributes": [
																		{
																			"attributes": [],
																			"computedValue": "",
																			"displayName": "query",
																			"name": "query",
																			"type": 1,
																			"value": ""
																		},
																		{
																			"attributes": [],
																			"computedValue": "",
																			"displayName": "trackBy",
																			"name": "trackBy",
																			"type": 1,
																			"value": ""
																		},
																		{
																			"attributes": [],
																			"computedValue": "",
																			"displayName": "idMapping",
																			"name": "idMapping",
																			"type": 1,
																			"value": ""
																		},
																		{
																			"attributes": [],
																			"computedValue": "",
																			"displayName": "labelMapping",
																			"name": "labelMapping",
																			"type": 1,
																			"value": ""
																		},
																		{
																			"attributes": [],
																			"computedValue": "",
																			"displayName": "valueMapping",
																			"name": "valueMapping",
																			"type": 1,
																			"value": ""
																		},
																		{
																			"attributes": [],
																			"computedValue": "false",
																			"displayName": "multiple",
																			"name": "multiple",
																			"type": 5,
																			"value": "false"
																		},
																		{
																			"attributes": [],
																			"computedValue": "0",
																			"displayName": "limit",
																			"name": "limit",
																			"type": 0,
																			"value": "0"
																		}
																	],
																	"computedValue": null,
																	"displayName": "datasourceOptions",
																	"name": "datasourceOptions",
																	"type": 2,
																	"value": null
																},
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "required",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "required"
																						},
																						{
																							"attributes": [],
																							"computedValue": "required",
																							"displayName": "validator",
																							"name": "validator",
																							"type": 1,
																							"value": "required"
																						},
																						{
																							"attributes": [],
																							"computedValue": "This field is required.",
																							"displayName": "overrideErrorMessage",
																							"name": "overrideErrorMessage",
																							"type": 1,
																							"value": "This field is required."
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
																			"displayName": "validators",
																			"name": "validators",
																			"type": 4,
																			"value": null
																		}
																	],
																	"computedValue": null,
																	"displayName": "validation",
																	"name": "validation",
																	"type": 2,
																	"value": null
																}
															],
															"computedValue": null,
															"displayName": "settings",
															"name": "settings",
															"type": 2,
															"value": null
														},
														{
															"attributes": [],
															"computedValue": "false",
															"displayName": "locked",
															"name": "locked",
															"type": 5,
															"value": "false"
														},
														{
															"attributes": [],
															"computedValue": null,
															"displayName": "contexts",
															"name": "contexts",
															"type": 4,
															"value": null
														},
														{
															"attributes": [],
															"computedValue": "term",
															"displayName": "name",
															"name": "name",
															"type": 1,
															"value": "term"
														},
														{
															"attributes": [],
															"computedValue": "Term",
															"displayName": "label",
															"name": "label",
															"type": 1,
															"value": "Term"
														},
														{
															"attributes": [],
															"computedValue": "form_input",
															"displayName": "contentPlugin",
															"name": "contentPlugin",
															"type": 1,
															"value": "form_input"
														},
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "",
																	"displayName": "condition",
																	"name": "condition",
																	"type": 1,
																	"value": ""
																},
																{
																	"attributes": [],
																	"computedValue": null,
																	"displayName": "rules",
																	"name": "rules",
																	"type": 4,
																	"value": null
																}
															],
															"computedValue": null,
															"displayName": "rule",
															"name": "rule",
															"type": 2,
															"value": null
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
											"displayName": "panes",
											"name": "panes",
											"type": 4,
											"value": null
										},
										{
											"attributes": [],
											"computedValue": "undefined",
											"displayName": "name",
											"name": "name",
											"type": 0,
											"value": "undefined"
										},
										{
											"attributes": [],
											"computedValue": "undefined",
											"displayName": "label",
											"name": "label",
											"type": 0,
											"value": "undefined"
										},
										{
											"attributes": [],
											"computedValue": "",
											"displayName": "stylePlugin",
											"name": "stylePlugin",
											"type": 1,
											"value": ""
										},
										{
											"attributes": [
												{
													"attributes": [],
													"computedValue": null,
													"displayName": "settings",
													"name": "settings",
													"type": 2,
													"value": null
												}
											],
											"computedValue": null,
											"displayName": "columnSetting",
											"name": "columnSetting",
											"type": 2,
											"value": null
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
							"displayName": "panels",
							"name": "panels",
							"type": 4,
							"value": null
						},
						{
							"attributes": [],
							"computedValue": null,
							"displayName": "contexts",
							"name": "contexts",
							"type": 4,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": null,
											"displayName": "settings",
											"name": "settings",
											"type": 2,
											"value": null
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
							"displayName": "rowSettings",
							"name": "rowSettings",
							"type": 4,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": null,
									"displayName": "readUserIds",
									"name": "readUserIds",
									"type": 4,
									"value": null
								},
								{
									"attributes": [],
									"computedValue": null,
									"displayName": "writeUserIds",
									"name": "writeUserIds",
									"type": 4,
									"value": null
								},
								{
									"attributes": [],
									"computedValue": null,
									"displayName": "deleteUserIds",
									"name": "deleteUserIds",
									"type": 4,
									"value": null
								}
							],
							"computedValue": null,
							"displayName": "entityPermissions",
							"name": "entityPermissions",
							"type": 2,
							"value": null
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "id",
							"name": "id",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [],
							"computedValue": "split",
							"displayName": "layoutType",
							"name": "layoutType",
							"type": 1,
							"value": "split"
						},
						{
							"attributes": [],
							"computedValue": "form",
							"displayName": "displayType",
							"name": "displayType",
							"type": 1,
							"value": "form"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "name",
							"name": "name",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "title",
							"name": "title",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [],
							"computedValue": "spearhead",
							"displayName": "site",
							"name": "site",
							"type": 1,
							"value": "spearhead"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "userId",
							"name": "userId",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "path",
							"name": "path",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": null,
											"displayName": "settings",
											"name": "settings",
											"type": 2,
											"value": null
										},
										{
											"attributes": [],
											"computedValue": "undefined",
											"displayName": "plugin",
											"name": "plugin",
											"type": 0,
											"value": "undefined"
										}
									],
									"computedValue": null,
									"displayName": "dataduct",
									"name": "dataduct",
									"type": 2,
									"value": null
								}
							],
							"computedValue": null,
							"displayName": "persistence",
							"name": "persistence",
							"type": 2,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": null,
											"displayName": "listeners",
											"name": "listeners",
											"type": 4,
											"value": null
										}
									],
									"computedValue": null,
									"displayName": "interactions",
									"name": "interactions",
									"type": 2,
									"value": null
								}
							],
							"computedValue": null,
							"displayName": "interactions",
							"name": "interactions",
							"type": 2,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": null,
									"displayName": "settings",
									"name": "settings",
									"type": 2,
									"value": null
								}
							],
							"computedValue": null,
							"displayName": "layoutSetting",
							"name": "layoutSetting",
							"type": 2,
							"value": null
						}
					]
				},
				{
					"contentPlugin": "snippet",
					"contexts": [],
					"label": "form-submit",
					"locked": false,
					"name": "form-submit",
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
							"computedValue": "<div class=\"form-submit\">Submit</div>",
							"displayName": "Content",
							"name": "content",
							"type": 1,
							"value": "<div class=\"form-submit\">Submit</div>"
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
	"path": "/test-simple-form",
	"persistence": {
		"dataduct": {
			"plugin": "entity",
			"settings": [
				{
					"attributes": [],
					"computedValue": "TestSimpleForm",
					"displayName": "entityName",
					"name": "entityName",
					"type": 1,
					"value": "TestSimpleForm"
				},
				{
					"attributes": [],
					"computedValue": "",
					"displayName": "queryString",
					"name": "queryString",
					"type": 1,
					"value": ""
				},
				{
					"attributes": [],
					"displayName": "params",
					"name": "params",
					"type": 4
				}
			]
		}
	},
	"rowSettings": [
		{
			"settings": []
		}
	],
	"site": "spearhead",
	"title": "Test Simple Form",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
{
	"contexts": [],
	"displayType": "page",
	"entityPermissions": {
		"deleteUserIds": [],
		"readUserIds": [],
		"writeUserIds": []
	},
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "7254396c-2464-41d3-a2df-8f6294a486ac",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [],
			"settings": [],
			"stylePlugin": ""
		}
	],
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
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
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
	"id": "888b9746-9cc1-43dc-8edb-1868e64b36a5",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "gridless",
	"name": "test_2025",
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
							"computedValue": "Hello World! Modify",
							"displayName": "Content",
							"name": "content",
							"type": 1,
							"value": "Hello World! Modify"
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
	"path": "/test-2025",
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
	"title": "Test 2025",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
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
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "95fe8adf-f60b-4e2e-bc02-9026a4531144",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"name": "test-dialog-interaction",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [],
			"settings": [],
			"stylePlugin": ""
		}
	],
	"path": "/test-dialog-interaction",
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
	"title": "Test Dialog Interaction",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
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
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "96050a0f-cc1a-4a31-bc47-8c9fe065745a",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"name": "hello2025",
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
							"computedValue": "Hello",
							"displayName": "Content",
							"name": "content",
							"type": 1,
							"value": "Hello"
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
	"path": "/hello-2025",
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
	"title": "Hello 2025",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
{
	"contexts": [],
	"displayType": "page",
	"entityPermissions": {
		"deleteUserIds": [],
		"readUserIds": [],
		"writeUserIds": []
	},
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "a2399ab6-d16b-480d-b015-88eed8dc8f64",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [],
			"settings": [],
			"stylePlugin": ""
		}
	],
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
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
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
	"id": "a5291ca2-8fec-4011-9fc5-7574cbf944cc",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "gridless",
	"name": "justwork",
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
							"computedValue": "Hellow World 123",
							"displayName": "Content",
							"name": "content",
							"type": 1,
							"value": "Hellow World 123"
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
	"path": "/justwork",
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
	"title": "justwork",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
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
	"id": "ad3dd72c-f153-4689-8da8-f94e01230457",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "gridless",
	"name": "hello2025",
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
							"computedValue": "Hello",
							"displayName": "Content",
							"name": "content",
							"type": 1,
							"value": "Hello"
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
	"path": "/hello-2025",
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
	"title": "Hello 2025",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
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
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "bad7cc2e-75fe-4137-9c36-d7777273ff80",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"name": "upload-file-form",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "form_media",
					"contexts": [],
					"label": "",
					"locked": false,
					"name": "",
					"settings": [
						{
							"attributes": [],
							"computedValue": "",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": ""
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
									"computedValue": "",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": null,
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
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
	"path": "/upload-file-form",
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
	"title": "Upload File Form",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
{
	"contexts": [
		{
			"adaptor": "data",
			"data": {
				"value": [
					{},
					{},
					{}
				]
			},
			"name": "terms",
			"plugin": "state"
		},
		{
			"adaptor": "datasource",
			"datasource": {
				"params": [],
				"plugin": "data",
				"renderer": {
					"bindings": [],
					"data": {
						"content": "",
						"contentType": ""
					},
					"query": "",
					"trackBy": "",
					"type": "pane"
				},
				"settings": [
					{
						"attributes": [],
						"computedValue": "[{\"id\":1,\"name\":\"batman\"},{\"id\":2,\"name\":\"superman\"}]",
						"displayName": "data",
						"intValue": 0,
						"name": "data",
						"type": 1,
						"value": "[{\"id\":1,\"name\":\"batman\"},{\"id\":2,\"name\":\"superman\"}]"
					}
				]
			},
			"name": "characters",
			"plugin": "datasource"
		},
		{
			"adaptor": "datasource",
			"datasource": {
				"params": [],
				"plugin": "crud_adaptor",
				"renderer": {
					"bindings": [],
					"data": {
						"content": "",
						"contentType": ""
					},
					"query": "",
					"trackBy": "",
					"type": "pane"
				},
				"settings": [
					{
						"attributes": [],
						"computedValue": "aws_s3_entity",
						"displayName": "adaptorName",
						"intValue": 0,
						"name": "adaptorName",
						"type": 1,
						"value": "aws_s3_entity"
					},
					{
						"attributes": [],
						"computedValue": "bucket=:bucket&prefix=:prefix",
						"displayName": "optionsString",
						"intValue": 0,
						"name": "optionsString",
						"type": 1,
						"value": "bucket=:bucket&prefix=:prefix"
					},
					{
						"attributes": [],
						"computedValue": "identity=:identity",
						"displayName": "paramsString",
						"intValue": 0,
						"name": "paramsString",
						"type": 1,
						"value": "identity=:identity"
					},
					{
						"attributes": [
							{
								"attributes": [
									{
										"attributes": [
											{
												"attributes": [],
												"computedValue": "static",
												"displayName": "type",
												"intValue": 0,
												"name": "type",
												"type": 1,
												"value": "static"
											},
											{
												"attributes": [],
												"computedValue": "classifieds-ui-prod",
												"displayName": "value",
												"intValue": 0,
												"name": "value",
												"type": 1,
												"value": "classifieds-ui-prod"
											},
											{
												"attributes": [],
												"computedValue": "classifieds-ui-prod",
												"displayName": "testValue",
												"intValue": 0,
												"name": "testValue",
												"type": 1,
												"value": "classifieds-ui-prod"
											},
											{
												"attributes": [],
												"computedValue": "",
												"displayName": "context",
												"intValue": 0,
												"name": "context",
												"type": 1,
												"value": ""
											}
										],
										"computedValue": "",
										"displayName": "mapping",
										"intValue": 0,
										"name": "mapping",
										"type": 2,
										"value": ""
									},
									{
										"attributes": [
											{
												"attributes": [
													{
														"attributes": [],
														"computedValue": "page",
														"displayName": "name",
														"intValue": 0,
														"name": "name",
														"type": 1,
														"value": "page"
													},
													{
														"attributes": [],
														"computedValue": "false",
														"displayName": "enabled",
														"intValue": 0,
														"name": "enabled",
														"type": 5,
														"value": "false"
													}
												],
												"computedValue": "",
												"displayName": "0",
												"intValue": 0,
												"name": "0",
												"type": 2,
												"value": ""
											},
											{
												"attributes": [
													{
														"attributes": [],
														"computedValue": "limit",
														"displayName": "name",
														"intValue": 0,
														"name": "name",
														"type": 1,
														"value": "limit"
													},
													{
														"attributes": [],
														"computedValue": "false",
														"displayName": "enabled",
														"intValue": 0,
														"name": "enabled",
														"type": 5,
														"value": "false"
													}
												],
												"computedValue": "",
												"displayName": "1",
												"intValue": 0,
												"name": "1",
												"type": 2,
												"value": ""
											},
											{
												"attributes": [
													{
														"attributes": [],
														"computedValue": "offset",
														"displayName": "name",
														"intValue": 0,
														"name": "name",
														"type": 1,
														"value": "offset"
													},
													{
														"attributes": [],
														"computedValue": "false",
														"displayName": "enabled",
														"intValue": 0,
														"name": "enabled",
														"type": 5,
														"value": "false"
													}
												],
												"computedValue": "",
												"displayName": "2",
												"intValue": 0,
												"name": "2",
												"type": 2,
												"value": ""
											},
											{
												"attributes": [
													{
														"attributes": [],
														"computedValue": "searchString",
														"displayName": "name",
														"intValue": 0,
														"name": "name",
														"type": 1,
														"value": "searchString"
													},
													{
														"attributes": [],
														"computedValue": "false",
														"displayName": "enabled",
														"intValue": 0,
														"name": "enabled",
														"type": 5,
														"value": "false"
													}
												],
												"computedValue": "",
												"displayName": "3",
												"intValue": 0,
												"name": "3",
												"type": 2,
												"value": ""
											}
										],
										"computedValue": "",
										"displayName": "flags",
										"intValue": 0,
										"name": "flags",
										"type": 4,
										"value": ""
									}
								],
								"computedValue": "",
								"displayName": "0",
								"intValue": 0,
								"name": "0",
								"type": 2,
								"value": ""
							},
							{
								"attributes": [
									{
										"attributes": [
											{
												"attributes": [],
												"computedValue": "static",
												"displayName": "type",
												"intValue": 0,
												"name": "type",
												"type": 1,
												"value": "static"
											},
											{
												"attributes": [],
												"computedValue": "ads/",
												"displayName": "value",
												"intValue": 0,
												"name": "value",
												"type": 1,
												"value": "ads/"
											},
											{
												"attributes": [],
												"computedValue": "ads/",
												"displayName": "testValue",
												"intValue": 0,
												"name": "testValue",
												"type": 1,
												"value": "ads/"
											},
											{
												"attributes": [],
												"computedValue": "",
												"displayName": "context",
												"intValue": 0,
												"name": "context",
												"type": 1,
												"value": ""
											}
										],
										"computedValue": "",
										"displayName": "mapping",
										"intValue": 0,
										"name": "mapping",
										"type": 2,
										"value": ""
									},
									{
										"attributes": [
											{
												"attributes": [
													{
														"attributes": [],
														"computedValue": "page",
														"displayName": "name",
														"intValue": 0,
														"name": "name",
														"type": 1,
														"value": "page"
													},
													{
														"attributes": [],
														"computedValue": "false",
														"displayName": "enabled",
														"intValue": 0,
														"name": "enabled",
														"type": 5,
														"value": "false"
													}
												],
												"computedValue": "",
												"displayName": "0",
												"intValue": 0,
												"name": "0",
												"type": 2,
												"value": ""
											},
											{
												"attributes": [
													{
														"attributes": [],
														"computedValue": "limit",
														"displayName": "name",
														"intValue": 0,
														"name": "name",
														"type": 1,
														"value": "limit"
													},
													{
														"attributes": [],
														"computedValue": "false",
														"displayName": "enabled",
														"intValue": 0,
														"name": "enabled",
														"type": 5,
														"value": "false"
													}
												],
												"computedValue": "",
												"displayName": "1",
												"intValue": 0,
												"name": "1",
												"type": 2,
												"value": ""
											},
											{
												"attributes": [
													{
														"attributes": [],
														"computedValue": "offset",
														"displayName": "name",
														"intValue": 0,
														"name": "name",
														"type": 1,
														"value": "offset"
													},
													{
														"attributes": [],
														"computedValue": "false",
														"displayName": "enabled",
														"intValue": 0,
														"name": "enabled",
														"type": 5,
														"value": "false"
													}
												],
												"computedValue": "",
												"displayName": "2",
												"intValue": 0,
												"name": "2",
												"type": 2,
												"value": ""
											},
											{
												"attributes": [
													{
														"attributes": [],
														"computedValue": "searchString",
														"displayName": "name",
														"intValue": 0,
														"name": "name",
														"type": 1,
														"value": "searchString"
													},
													{
														"attributes": [],
														"computedValue": "false",
														"displayName": "enabled",
														"intValue": 0,
														"name": "enabled",
														"type": 5,
														"value": "false"
													}
												],
												"computedValue": "",
												"displayName": "3",
												"intValue": 0,
												"name": "3",
												"type": 2,
												"value": ""
											}
										],
										"computedValue": "",
										"displayName": "flags",
										"intValue": 0,
										"name": "flags",
										"type": 4,
										"value": ""
									}
								],
								"computedValue": "",
								"displayName": "1",
								"intValue": 0,
								"name": "1",
								"type": 2,
								"value": ""
							}
						],
						"computedValue": "",
						"displayName": "options",
						"intValue": 0,
						"name": "options",
						"type": 4,
						"value": ""
					},
					{
						"attributes": [
							{
								"attributes": [
									{
										"attributes": [
											{
												"attributes": [],
												"computedValue": "route",
												"displayName": "type",
												"intValue": 0,
												"name": "type",
												"type": 1,
												"value": "route"
											},
											{
												"attributes": [],
												"computedValue": "arg0",
												"displayName": "value",
												"intValue": 0,
												"name": "value",
												"type": 1,
												"value": "arg0"
											},
											{
												"attributes": [],
												"computedValue": "",
												"displayName": "testValue",
												"intValue": 0,
												"name": "testValue",
												"type": 1,
												"value": ""
											},
											{
												"attributes": [],
												"computedValue": "",
												"displayName": "context",
												"intValue": 0,
												"name": "context",
												"type": 1,
												"value": ""
											}
										],
										"computedValue": "",
										"displayName": "mapping",
										"intValue": 0,
										"name": "mapping",
										"type": 2,
										"value": ""
									},
									{
										"attributes": [
											{
												"attributes": [
													{
														"attributes": [],
														"computedValue": "page",
														"displayName": "name",
														"intValue": 0,
														"name": "name",
														"type": 1,
														"value": "page"
													},
													{
														"attributes": [],
														"computedValue": "false",
														"displayName": "enabled",
														"intValue": 0,
														"name": "enabled",
														"type": 5,
														"value": "false"
													}
												],
												"computedValue": "",
												"displayName": "0",
												"intValue": 0,
												"name": "0",
												"type": 2,
												"value": ""
											},
											{
												"attributes": [
													{
														"attributes": [],
														"computedValue": "limit",
														"displayName": "name",
														"intValue": 0,
														"name": "name",
														"type": 1,
														"value": "limit"
													},
													{
														"attributes": [],
														"computedValue": "false",
														"displayName": "enabled",
														"intValue": 0,
														"name": "enabled",
														"type": 5,
														"value": "false"
													}
												],
												"computedValue": "",
												"displayName": "1",
												"intValue": 0,
												"name": "1",
												"type": 2,
												"value": ""
											},
											{
												"attributes": [
													{
														"attributes": [],
														"computedValue": "offset",
														"displayName": "name",
														"intValue": 0,
														"name": "name",
														"type": 1,
														"value": "offset"
													},
													{
														"attributes": [],
														"computedValue": "false",
														"displayName": "enabled",
														"intValue": 0,
														"name": "enabled",
														"type": 5,
														"value": "false"
													}
												],
												"computedValue": "",
												"displayName": "2",
												"intValue": 0,
												"name": "2",
												"type": 2,
												"value": ""
											},
											{
												"attributes": [
													{
														"attributes": [],
														"computedValue": "searchString",
														"displayName": "name",
														"intValue": 0,
														"name": "name",
														"type": 1,
														"value": "searchString"
													},
													{
														"attributes": [],
														"computedValue": "false",
														"displayName": "enabled",
														"intValue": 0,
														"name": "enabled",
														"type": 5,
														"value": "false"
													}
												],
												"computedValue": "",
												"displayName": "3",
												"intValue": 0,
												"name": "3",
												"type": 2,
												"value": ""
											}
										],
										"computedValue": "",
										"displayName": "flags",
										"intValue": 0,
										"name": "flags",
										"type": 4,
										"value": ""
									}
								],
								"computedValue": "",
								"displayName": "0",
								"intValue": 0,
								"name": "0",
								"type": 2,
								"value": ""
							}
						],
						"computedValue": "",
						"displayName": "params",
						"intValue": 0,
						"name": "params",
						"type": 4,
						"value": ""
					}
				]
			},
			"name": "ad",
			"plugin": "datasource"
		}
	],
	"displayType": "form",
	"entityPermissions": {
		"deleteUserIds": [],
		"readUserIds": [
			"*"
		],
		"writeUserIds": []
	},
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "bb66aa62-8635-4015-86c9-ba4f208b0856",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"name": "native_forms_rebuild_v1",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "datasource",
					"contexts": [],
					"label": "characters_context_ref",
					"locked": false,
					"name": "characters_context_ref",
					"rule": {
						"condition": "",
						"field": "",
						"operator": "",
						"rules": [],
						"value": ""
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "context",
							"displayName": "plugin",
							"name": "plugin",
							"type": 1,
							"value": "context"
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "characters",
									"displayName": "name",
									"name": "name",
									"type": 1,
									"value": "characters"
								}
							],
							"computedValue": "",
							"displayName": "settings",
							"name": "settings",
							"type": 2,
							"value": ""
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
									"attributes": [
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
													"computedValue": "select_characters",
													"displayName": "id",
													"name": "id",
													"type": 1,
													"value": "select_characters"
												}
											],
											"computedValue": "",
											"displayName": "0",
											"name": "0",
											"type": 2,
											"value": ""
										}
									],
									"computedValue": "",
									"displayName": "bindings",
									"name": "bindings",
									"type": 4,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "renderer",
							"name": "renderer",
							"type": 2,
							"value": ""
						}
					]
				},
				{
					"contentPlugin": "datasource",
					"contexts": [],
					"label": "creators",
					"locked": false,
					"name": "creators",
					"rule": {
						"condition": "",
						"field": "",
						"operator": "",
						"rules": [],
						"value": ""
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "rest",
							"displayName": "plugin",
							"name": "plugin",
							"type": 1,
							"value": "rest"
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "https://gateway.marvel.com:443/v1/public/creators?apikey=12097554cc585301fc38efd51b21fb06&nameStartsWith=:nameStartsWith",
									"displayName": "url",
									"name": "url",
									"type": 1,
									"value": "https://gateway.marvel.com:443/v1/public/creators?apikey=12097554cc585301fc38efd51b21fb06&nameStartsWith=:nameStartsWith"
								},
								{
									"attributes": [
										{
											"attributes": [
												{
													"attributes": [
														{
															"attributes": [],
															"computedValue": "inputparam",
															"displayName": "type",
															"name": "type",
															"type": 1,
															"value": "inputparam"
														},
														{
															"attributes": [],
															"computedValue": "term",
															"displayName": "value",
															"name": "value",
															"type": 1,
															"value": "term"
														},
														{
															"attributes": [],
															"computedValue": "john",
															"displayName": "testValue",
															"name": "testValue",
															"type": 1,
															"value": "john"
														},
														{
															"attributes": [],
															"computedValue": "",
															"displayName": "context",
															"name": "context",
															"type": 1,
															"value": ""
														}
													],
													"computedValue": "",
													"displayName": "mapping",
													"name": "mapping",
													"type": 2,
													"value": ""
												},
												{
													"attributes": [
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "page",
																	"displayName": "name",
																	"name": "name",
																	"type": 1,
																	"value": "page"
																},
																{
																	"attributes": [],
																	"computedValue": "false",
																	"displayName": "enabled",
																	"name": "enabled",
																	"type": 5,
																	"value": "false"
																}
															],
															"computedValue": "",
															"displayName": "0",
															"name": "0",
															"type": 2,
															"value": ""
														},
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "limit",
																	"displayName": "name",
																	"name": "name",
																	"type": 1,
																	"value": "limit"
																},
																{
																	"attributes": [],
																	"computedValue": "false",
																	"displayName": "enabled",
																	"name": "enabled",
																	"type": 5,
																	"value": "false"
																}
															],
															"computedValue": "",
															"displayName": "1",
															"name": "1",
															"type": 2,
															"value": ""
														},
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "offset",
																	"displayName": "name",
																	"name": "name",
																	"type": 1,
																	"value": "offset"
																},
																{
																	"attributes": [],
																	"computedValue": "false",
																	"displayName": "enabled",
																	"name": "enabled",
																	"type": 5,
																	"value": "false"
																}
															],
															"computedValue": "",
															"displayName": "2",
															"name": "2",
															"type": 2,
															"value": ""
														},
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "searchString",
																	"displayName": "name",
																	"name": "name",
																	"type": 1,
																	"value": "searchString"
																},
																{
																	"attributes": [],
																	"computedValue": "false",
																	"displayName": "enabled",
																	"name": "enabled",
																	"type": 5,
																	"value": "false"
																}
															],
															"computedValue": "",
															"displayName": "3",
															"name": "3",
															"type": 2,
															"value": ""
														}
													],
													"computedValue": "",
													"displayName": "flags",
													"name": "flags",
													"type": 4,
													"value": ""
												}
											],
											"computedValue": "",
											"displayName": "0",
											"name": "0",
											"type": 2,
											"value": ""
										}
									],
									"computedValue": "",
									"displayName": "params",
									"name": "params",
									"type": 4,
									"value": ""
								},
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "",
											"displayName": "content",
											"name": "content",
											"type": 1,
											"value": ""
										},
										{
											"attributes": [],
											"computedValue": "application/json",
											"displayName": "contentType",
											"name": "contentType",
											"type": 1,
											"value": "application/json"
										},
										{
											"attributes": [],
											"computedValue": "",
											"displayName": "jsScript",
											"name": "jsScript",
											"type": 1,
											"value": ""
										}
									],
									"computedValue": "",
									"displayName": "body",
									"name": "body",
									"type": 2,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "get",
									"displayName": "method",
									"name": "method",
									"type": 1,
									"value": "get"
								}
							],
							"computedValue": "",
							"displayName": "settings",
							"name": "settings",
							"type": 2,
							"value": ""
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
									"attributes": [
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
													"computedValue": "select_creators",
													"displayName": "id",
													"name": "id",
													"type": 1,
													"value": "select_creators"
												}
											],
											"computedValue": "",
											"displayName": "0",
											"name": "0",
											"type": 2,
											"value": ""
										}
									],
									"computedValue": "",
									"displayName": "bindings",
									"name": "bindings",
									"type": 4,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "renderer",
							"name": "renderer",
							"type": 2,
							"value": ""
						}
					]
				},
				{
					"contentPlugin": "datasource",
					"contexts": [],
					"label": "select_creators",
					"locked": false,
					"name": "select_creators",
					"rule": {
						"condition": "",
						"field": "",
						"operator": "",
						"rules": [],
						"value": ""
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "select",
							"displayName": "plugin",
							"name": "plugin",
							"type": 1,
							"value": "select"
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "$..data.results.*",
									"displayName": "query",
									"name": "query",
									"type": 1,
									"value": "$..data.results.*"
								}
							],
							"computedValue": "",
							"displayName": "settings",
							"name": "settings",
							"type": 2,
							"value": ""
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
									"computedValue": "",
									"displayName": "bindings",
									"name": "bindings",
									"type": 4,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "renderer",
							"name": "renderer",
							"type": 2,
							"value": ""
						}
					]
				},
				{
					"contentPlugin": "form_input",
					"contexts": [],
					"label": "text",
					"locked": false,
					"name": "text",
					"rule": {
						"condition": "",
						"field": "",
						"operator": "",
						"rules": [],
						"value": ""
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "[ad.results.0.text]",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": "[ad.results.0.text]"
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
									"computedValue": "",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": null,
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "query",
									"name": "query",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "trackBy",
									"name": "trackBy",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "idMapping",
									"name": "idMapping",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "labelMapping",
									"name": "labelMapping",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "valueMapping",
									"name": "valueMapping",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "false",
									"displayName": "multiple",
									"name": "multiple",
									"type": 5,
									"value": "false"
								},
								{
									"attributes": [],
									"computedValue": "0",
									"displayName": "limit",
									"name": "limit",
									"type": 0,
									"value": "0"
								}
							],
							"computedValue": null,
							"displayName": "datasourceOptions",
							"name": "datasourceOptions",
							"type": 2,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": null,
									"displayName": "validators",
									"name": "validators",
									"type": 4,
									"value": null
								}
							],
							"computedValue": null,
							"displayName": "validation",
							"name": "validation",
							"type": 2,
							"value": null
						}
					]
				},
				{
					"contentPlugin": "form_select",
					"contexts": [],
					"label": "select",
					"locked": false,
					"name": "select",
					"rule": {
						"condition": "",
						"field": "",
						"operator": "",
						"rules": [],
						"value": ""
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "[ad.results.0.select]",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": "[ad.results.0.select]"
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
									"computedValue": "characters_context_ref",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": "characters_context_ref"
								}
							],
							"computedValue": "",
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": ""
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "query",
									"name": "query",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "trackBy",
									"name": "trackBy",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "[.id]",
									"displayName": "idMapping",
									"name": "idMapping",
									"type": 1,
									"value": "[.id]"
								},
								{
									"attributes": [],
									"computedValue": "[.name]",
									"displayName": "labelMapping",
									"name": "labelMapping",
									"type": 1,
									"value": "[.name]"
								},
								{
									"attributes": [],
									"computedValue": "[.id]",
									"displayName": "valueMapping",
									"name": "valueMapping",
									"type": 1,
									"value": "[.id]"
								},
								{
									"attributes": [],
									"computedValue": "false",
									"displayName": "multiple",
									"name": "multiple",
									"type": 5,
									"value": "false"
								},
								{
									"attributes": [],
									"computedValue": "0",
									"displayName": "limit",
									"name": "limit",
									"type": 0,
									"value": "0"
								}
							],
							"computedValue": "",
							"displayName": "datasourceOptions",
							"name": "datasourceOptions",
							"type": 2,
							"value": ""
						}
					]
				},
				{
					"contentPlugin": "form_textarea",
					"contexts": [],
					"label": "textarea",
					"locked": false,
					"name": "textarea",
					"rule": {
						"condition": "",
						"field": "",
						"operator": "",
						"rules": [],
						"value": ""
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "[ad.results.0.textarea]",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": "[ad.results.0.textarea]"
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
									"computedValue": "",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": ""
						}
					]
				},
				{
					"contentPlugin": "form_radiogroup",
					"contexts": [],
					"label": "radiogroup",
					"locked": false,
					"name": "radiogroup",
					"rule": {
						"condition": "",
						"field": "",
						"operator": "",
						"rules": [],
						"value": ""
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "[ad.results.0.radiogroup]",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": "[ad.results.0.radiogroup]"
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
									"computedValue": "characters_context_ref",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": "characters_context_ref"
								}
							],
							"computedValue": "",
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": ""
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "query",
									"name": "query",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "trackBy",
									"name": "trackBy",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "[.id]",
									"displayName": "idMapping",
									"name": "idMapping",
									"type": 1,
									"value": "[.id]"
								},
								{
									"attributes": [],
									"computedValue": "[.name]",
									"displayName": "labelMapping",
									"name": "labelMapping",
									"type": 1,
									"value": "[.name]"
								},
								{
									"attributes": [],
									"computedValue": "[.id]",
									"displayName": "valueMapping",
									"name": "valueMapping",
									"type": 1,
									"value": "[.id]"
								},
								{
									"attributes": [],
									"computedValue": "false",
									"displayName": "multiple",
									"name": "multiple",
									"type": 5,
									"value": "false"
								},
								{
									"attributes": [],
									"computedValue": "0",
									"displayName": "limit",
									"name": "limit",
									"type": 0,
									"value": "0"
								}
							],
							"computedValue": "",
							"displayName": "datasourceOptions",
							"name": "datasourceOptions",
							"type": 2,
							"value": ""
						}
					]
				},
				{
					"contentPlugin": "form_slider",
					"contexts": [],
					"label": "slider",
					"locked": false,
					"name": "slider",
					"rule": {
						"condition": "",
						"field": "",
						"operator": "",
						"rules": [],
						"value": ""
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "[ad.results.0.slider]",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": "[ad.results.0.slider]"
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
									"computedValue": "",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": ""
						}
					]
				},
				{
					"contentPlugin": "form_toggle",
					"contexts": [],
					"label": "toggle",
					"locked": false,
					"name": "toggle",
					"rule": {
						"condition": "",
						"field": "",
						"operator": "",
						"rules": [],
						"value": ""
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "[ad.results.0.toggle]",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": "[ad.results.0.toggle]"
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
									"computedValue": "",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": ""
						}
					]
				},
				{
					"contentPlugin": "form_checkbox",
					"contexts": [],
					"label": "checkbox",
					"locked": false,
					"name": "checkbox",
					"rule": {
						"condition": "",
						"field": "",
						"operator": "",
						"rules": [],
						"value": ""
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "[ad.results.0.checkbox]",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": "[ad.results.0.checkbox]"
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
									"computedValue": "",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": ""
						}
					]
				},
				{
					"contentPlugin": "form_datepicker",
					"contexts": [],
					"label": "datepicker",
					"locked": false,
					"name": "datepicker",
					"rule": {
						"condition": "",
						"field": "",
						"operator": "",
						"rules": [],
						"value": ""
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "[ad.results.0.datepicker]",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": "[ad.results.0.datepicker]"
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
									"computedValue": "",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": ""
						}
					]
				},
				{
					"contentPlugin": "form_autocomplete",
					"contexts": [],
					"label": "autocomplete",
					"locked": false,
					"name": "autocomplete",
					"rule": {
						"condition": "",
						"field": "",
						"operator": "",
						"rules": [],
						"value": ""
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "[ad.results.0.autocomplete]",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": "[ad.results.0.autocomplete]"
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
									"computedValue": "creators",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": "creators"
								}
							],
							"computedValue": "",
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": ""
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "query",
									"name": "query",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "trackBy",
									"name": "trackBy",
									"type": 1,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "[.id]",
									"displayName": "idMapping",
									"name": "idMapping",
									"type": 1,
									"value": "[.id]"
								},
								{
									"attributes": [],
									"computedValue": "[.fullName]",
									"displayName": "labelMapping",
									"name": "labelMapping",
									"type": 1,
									"value": "[.fullName]"
								},
								{
									"attributes": [],
									"computedValue": "[.id]",
									"displayName": "valueMapping",
									"name": "valueMapping",
									"type": 1,
									"value": "[.id]"
								},
								{
									"attributes": [],
									"computedValue": "false",
									"displayName": "multiple",
									"name": "multiple",
									"type": 5,
									"value": "false"
								},
								{
									"attributes": [],
									"computedValue": "0",
									"displayName": "limit",
									"name": "limit",
									"type": 0,
									"value": "0"
								}
							],
							"computedValue": "",
							"displayName": "datasourceOptions",
							"name": "datasourceOptions",
							"type": 2,
							"value": ""
						}
					]
				},
				{
					"contentPlugin": "panel",
					"contexts": [],
					"label": "nested",
					"locked": false,
					"name": "nested",
					"rule": {
						"condition": "",
						"field": "",
						"operator": "",
						"rules": [],
						"value": ""
					},
					"settings": [
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "100",
											"displayName": "cols",
											"name": "cols",
											"type": 0,
											"value": "100"
										},
										{
											"attributes": [],
											"computedValue": "1",
											"displayName": "rows",
											"name": "rows",
											"type": 0,
											"value": "1"
										},
										{
											"attributes": [],
											"computedValue": "0",
											"displayName": "x",
											"name": "x",
											"type": 0,
											"value": "0"
										},
										{
											"attributes": [],
											"computedValue": "0",
											"displayName": "y",
											"name": "y",
											"type": 0,
											"value": "0"
										},
										{
											"attributes": [],
											"computedValue": "0",
											"displayName": "weight",
											"name": "weight",
											"type": 0,
											"value": "0"
										}
									],
									"computedValue": "",
									"displayName": "0",
									"name": "0",
									"type": 2,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "gridItems",
							"name": "gridItems",
							"type": 4,
							"value": ""
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "",
											"displayName": "settings",
											"name": "settings",
											"type": 2,
											"value": ""
										},
										{
											"attributes": [
												{
													"attributes": [
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "[ad.results.0.nested.nestedValue]",
																	"displayName": "value",
																	"name": "value",
																	"type": 1,
																	"value": "[ad.results.0.nested.nestedValue]"
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
																			"computedValue": "",
																			"displayName": "id",
																			"name": "id",
																			"type": 1,
																			"value": ""
																		}
																	],
																	"computedValue": "",
																	"displayName": "datasourceBinding",
																	"name": "datasourceBinding",
																	"type": 2,
																	"value": ""
																}
															],
															"computedValue": "",
															"displayName": "settings",
															"name": "settings",
															"type": 2,
															"value": ""
														},
														{
															"attributes": [],
															"computedValue": "false",
															"displayName": "locked",
															"name": "locked",
															"type": 5,
															"value": "false"
														},
														{
															"attributes": [],
															"computedValue": "",
															"displayName": "contexts",
															"name": "contexts",
															"type": 4,
															"value": ""
														},
														{
															"attributes": [],
															"computedValue": "nestedValue",
															"displayName": "name",
															"name": "name",
															"type": 1,
															"value": "nestedValue"
														},
														{
															"attributes": [],
															"computedValue": "nestedValue",
															"displayName": "label",
															"name": "label",
															"type": 1,
															"value": "nestedValue"
														},
														{
															"attributes": [],
															"computedValue": "form_input",
															"displayName": "contentPlugin",
															"name": "contentPlugin",
															"type": 1,
															"value": "form_input"
														},
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "",
																	"displayName": "condition",
																	"name": "condition",
																	"type": 1,
																	"value": ""
																},
																{
																	"attributes": [],
																	"computedValue": "",
																	"displayName": "rules",
																	"name": "rules",
																	"type": 4,
																	"value": ""
																}
															],
															"computedValue": "",
															"displayName": "rule",
															"name": "rule",
															"type": 2,
															"value": ""
														}
													],
													"computedValue": "",
													"displayName": "0",
													"name": "0",
													"type": 2,
													"value": ""
												}
											],
											"computedValue": "",
											"displayName": "panes",
											"name": "panes",
											"type": 4,
											"value": ""
										},
										{
											"attributes": [],
											"computedValue": "undefined",
											"displayName": "name",
											"name": "name",
											"type": 0,
											"value": "undefined"
										},
										{
											"attributes": [],
											"computedValue": "undefined",
											"displayName": "label",
											"name": "label",
											"type": 0,
											"value": "undefined"
										},
										{
											"attributes": [],
											"computedValue": "",
											"displayName": "stylePlugin",
											"name": "stylePlugin",
											"type": 1,
											"value": ""
										},
										{
											"attributes": [
												{
													"attributes": [],
													"computedValue": "",
													"displayName": "settings",
													"name": "settings",
													"type": 2,
													"value": ""
												}
											],
											"computedValue": "",
											"displayName": "columnSetting",
											"name": "columnSetting",
											"type": 2,
											"value": ""
										}
									],
									"computedValue": "",
									"displayName": "0",
									"name": "0",
									"type": 2,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "panels",
							"name": "panels",
							"type": 4,
							"value": ""
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "terms",
											"displayName": "name",
											"name": "name",
											"type": 1,
											"value": "terms"
										},
										{
											"attributes": [],
											"computedValue": "data",
											"displayName": "adaptor",
											"name": "adaptor",
											"type": 1,
											"value": "data"
										},
										{
											"attributes": [],
											"computedValue": "state",
											"displayName": "plugin",
											"name": "plugin",
											"type": 1,
											"value": "state"
										},
										{
											"attributes": [
												{
													"attributes": [
														{
															"attributes": [],
															"computedValue": "",
															"displayName": "0",
															"name": "0",
															"type": 2,
															"value": ""
														},
														{
															"attributes": [],
															"computedValue": "",
															"displayName": "1",
															"name": "1",
															"type": 2,
															"value": ""
														},
														{
															"attributes": [],
															"computedValue": "",
															"displayName": "2",
															"name": "2",
															"type": 2,
															"value": ""
														}
													],
													"computedValue": "",
													"displayName": "value",
													"name": "value",
													"type": 4,
													"value": ""
												}
											],
											"computedValue": "",
											"displayName": "data",
											"name": "data",
											"type": 2,
											"value": ""
										}
									],
									"computedValue": "",
									"displayName": "0",
									"name": "0",
									"type": 2,
									"value": ""
								},
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "characters",
											"displayName": "name",
											"name": "name",
											"type": 1,
											"value": "characters"
										},
										{
											"attributes": [],
											"computedValue": "datasource",
											"displayName": "adaptor",
											"name": "adaptor",
											"type": 1,
											"value": "datasource"
										},
										{
											"attributes": [],
											"computedValue": "datasource",
											"displayName": "plugin",
											"name": "plugin",
											"type": 1,
											"value": "datasource"
										},
										{
											"attributes": [
												{
													"attributes": [
														{
															"attributes": [],
															"computedValue": "[{\"id\":1,\"name\":\"batman\"},{\"id\":2,\"name\":\"superman\"}]",
															"displayName": "data",
															"name": "data",
															"type": 1,
															"value": "[{\"id\":1,\"name\":\"batman\"},{\"id\":2,\"name\":\"superman\"}]"
														}
													],
													"computedValue": "",
													"displayName": "settings",
													"name": "settings",
													"type": 2,
													"value": ""
												},
												{
													"attributes": [],
													"computedValue": "",
													"displayName": "params",
													"name": "params",
													"type": 4,
													"value": ""
												},
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
															"computedValue": "pane",
															"displayName": "type",
															"name": "type",
															"type": 1,
															"value": "pane"
														},
														{
															"attributes": [],
															"computedValue": "undefined",
															"displayName": "query",
															"name": "query",
															"type": 0,
															"value": "undefined"
														},
														{
															"attributes": [],
															"computedValue": "undefined",
															"displayName": "trackBy",
															"name": "trackBy",
															"type": 0,
															"value": "undefined"
														},
														{
															"attributes": [],
															"computedValue": "",
															"displayName": "bindings",
															"name": "bindings",
															"type": 4,
															"value": ""
														}
													],
													"computedValue": "",
													"displayName": "renderer",
													"name": "renderer",
													"type": 2,
													"value": ""
												}
											],
											"computedValue": "",
											"displayName": "datasource",
											"name": "datasource",
											"type": 2,
											"value": ""
										}
									],
									"computedValue": "",
									"displayName": "1",
									"name": "1",
									"type": 2,
									"value": ""
								},
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "ad",
											"displayName": "name",
											"name": "name",
											"type": 1,
											"value": "ad"
										},
										{
											"attributes": [],
											"computedValue": "datasource",
											"displayName": "adaptor",
											"name": "adaptor",
											"type": 1,
											"value": "datasource"
										},
										{
											"attributes": [],
											"computedValue": "datasource",
											"displayName": "plugin",
											"name": "plugin",
											"type": 1,
											"value": "datasource"
										},
										{
											"attributes": [
												{
													"attributes": [
														{
															"attributes": [],
															"computedValue": "aws_s3_entity",
															"displayName": "adaptorName",
															"name": "adaptorName",
															"type": 1,
															"value": "aws_s3_entity"
														},
														{
															"attributes": [],
															"computedValue": "bucket=:bucket&prefix=:prefix",
															"displayName": "optionsString",
															"name": "optionsString",
															"type": 1,
															"value": "bucket=:bucket&prefix=:prefix"
														},
														{
															"attributes": [],
															"computedValue": "identity=:identity",
															"displayName": "paramsString",
															"name": "paramsString",
															"type": 1,
															"value": "identity=:identity"
														},
														{
															"attributes": [
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "static",
																					"displayName": "type",
																					"name": "type",
																					"type": 1,
																					"value": "static"
																				},
																				{
																					"attributes": [],
																					"computedValue": "classifieds-ui-prod",
																					"displayName": "value",
																					"name": "value",
																					"type": 1,
																					"value": "classifieds-ui-prod"
																				},
																				{
																					"attributes": [],
																					"computedValue": "classifieds-ui-prod",
																					"displayName": "testValue",
																					"name": "testValue",
																					"type": 1,
																					"value": "classifieds-ui-prod"
																				},
																				{
																					"attributes": [],
																					"computedValue": "",
																					"displayName": "context",
																					"name": "context",
																					"type": 1,
																					"value": ""
																				}
																			],
																			"computedValue": "",
																			"displayName": "mapping",
																			"name": "mapping",
																			"type": 2,
																			"value": ""
																		},
																		{
																			"attributes": [
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "page",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "page"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "0",
																					"name": "0",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "limit",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "limit"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "1",
																					"name": "1",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "offset",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "offset"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "2",
																					"name": "2",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "searchString",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "searchString"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "3",
																					"name": "3",
																					"type": 2,
																					"value": ""
																				}
																			],
																			"computedValue": "",
																			"displayName": "flags",
																			"name": "flags",
																			"type": 4,
																			"value": ""
																		}
																	],
																	"computedValue": "",
																	"displayName": "0",
																	"name": "0",
																	"type": 2,
																	"value": ""
																},
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "static",
																					"displayName": "type",
																					"name": "type",
																					"type": 1,
																					"value": "static"
																				},
																				{
																					"attributes": [],
																					"computedValue": "ads/",
																					"displayName": "value",
																					"name": "value",
																					"type": 1,
																					"value": "ads/"
																				},
																				{
																					"attributes": [],
																					"computedValue": "ads/",
																					"displayName": "testValue",
																					"name": "testValue",
																					"type": 1,
																					"value": "ads/"
																				},
																				{
																					"attributes": [],
																					"computedValue": "",
																					"displayName": "context",
																					"name": "context",
																					"type": 1,
																					"value": ""
																				}
																			],
																			"computedValue": "",
																			"displayName": "mapping",
																			"name": "mapping",
																			"type": 2,
																			"value": ""
																		},
																		{
																			"attributes": [
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "page",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "page"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "0",
																					"name": "0",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "limit",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "limit"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "1",
																					"name": "1",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "offset",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "offset"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "2",
																					"name": "2",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "searchString",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "searchString"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "3",
																					"name": "3",
																					"type": 2,
																					"value": ""
																				}
																			],
																			"computedValue": "",
																			"displayName": "flags",
																			"name": "flags",
																			"type": 4,
																			"value": ""
																		}
																	],
																	"computedValue": "",
																	"displayName": "1",
																	"name": "1",
																	"type": 2,
																	"value": ""
																}
															],
															"computedValue": "",
															"displayName": "options",
															"name": "options",
															"type": 4,
															"value": ""
														},
														{
															"attributes": [
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "route",
																					"displayName": "type",
																					"name": "type",
																					"type": 1,
																					"value": "route"
																				},
																				{
																					"attributes": [],
																					"computedValue": "arg0",
																					"displayName": "value",
																					"name": "value",
																					"type": 1,
																					"value": "arg0"
																				},
																				{
																					"attributes": [],
																					"computedValue": "",
																					"displayName": "testValue",
																					"name": "testValue",
																					"type": 1,
																					"value": ""
																				},
																				{
																					"attributes": [],
																					"computedValue": "",
																					"displayName": "context",
																					"name": "context",
																					"type": 1,
																					"value": ""
																				}
																			],
																			"computedValue": "",
																			"displayName": "mapping",
																			"name": "mapping",
																			"type": 2,
																			"value": ""
																		},
																		{
																			"attributes": [
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "page",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "page"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "0",
																					"name": "0",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "limit",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "limit"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "1",
																					"name": "1",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "offset",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "offset"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "2",
																					"name": "2",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "searchString",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "searchString"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "3",
																					"name": "3",
																					"type": 2,
																					"value": ""
																				}
																			],
																			"computedValue": "",
																			"displayName": "flags",
																			"name": "flags",
																			"type": 4,
																			"value": ""
																		}
																	],
																	"computedValue": "",
																	"displayName": "0",
																	"name": "0",
																	"type": 2,
																	"value": ""
																}
															],
															"computedValue": "",
															"displayName": "params",
															"name": "params",
															"type": 4,
															"value": ""
														}
													],
													"computedValue": "",
													"displayName": "settings",
													"name": "settings",
													"type": 2,
													"value": ""
												},
												{
													"attributes": [],
													"computedValue": "",
													"displayName": "params",
													"name": "params",
													"type": 4,
													"value": ""
												},
												{
													"attributes": [],
													"computedValue": "crud_adaptor",
													"displayName": "plugin",
													"name": "plugin",
													"type": 1,
													"value": "crud_adaptor"
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
															"computedValue": "undefined",
															"displayName": "query",
															"name": "query",
															"type": 0,
															"value": "undefined"
														},
														{
															"attributes": [],
															"computedValue": "undefined",
															"displayName": "trackBy",
															"name": "trackBy",
															"type": 0,
															"value": "undefined"
														},
														{
															"attributes": [],
															"computedValue": "",
															"displayName": "bindings",
															"name": "bindings",
															"type": 4,
															"value": ""
														}
													],
													"computedValue": "",
													"displayName": "renderer",
													"name": "renderer",
													"type": 2,
													"value": ""
												}
											],
											"computedValue": "",
											"displayName": "datasource",
											"name": "datasource",
											"type": 2,
											"value": ""
										}
									],
									"computedValue": "",
									"displayName": "2",
									"name": "2",
									"type": 2,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "contexts",
							"name": "contexts",
							"type": 4,
							"value": ""
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "",
											"displayName": "settings",
											"name": "settings",
											"type": 2,
											"value": ""
										}
									],
									"computedValue": "",
									"displayName": "0",
									"name": "0",
									"type": 2,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "rowSettings",
							"name": "rowSettings",
							"type": 4,
							"value": ""
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "readUserIds",
									"name": "readUserIds",
									"type": 4,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "writeUserIds",
									"name": "writeUserIds",
									"type": 4,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "deleteUserIds",
									"name": "deleteUserIds",
									"type": 4,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "entityPermissions",
							"name": "entityPermissions",
							"type": 2,
							"value": ""
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "id",
							"name": "id",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [],
							"computedValue": "split",
							"displayName": "layoutType",
							"name": "layoutType",
							"type": 1,
							"value": "split"
						},
						{
							"attributes": [],
							"computedValue": "form",
							"displayName": "displayType",
							"name": "displayType",
							"type": 1,
							"value": "form"
						},
						{
							"attributes": [],
							"computedValue": "nested_form",
							"displayName": "name",
							"name": "name",
							"type": 1,
							"value": "nested_form"
						},
						{
							"attributes": [],
							"computedValue": "nested_form",
							"displayName": "title",
							"name": "title",
							"type": 1,
							"value": "nested_form"
						},
						{
							"attributes": [],
							"computedValue": "spearhead",
							"displayName": "site",
							"name": "site",
							"type": 1,
							"value": "spearhead"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "userId",
							"name": "userId",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "path",
							"name": "path",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "",
											"displayName": "settings",
											"name": "settings",
											"type": 2,
											"value": ""
										},
										{
											"attributes": [],
											"computedValue": "undefined",
											"displayName": "plugin",
											"name": "plugin",
											"type": 0,
											"value": "undefined"
										}
									],
									"computedValue": "",
									"displayName": "dataduct",
									"name": "dataduct",
									"type": 2,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "persistence",
							"name": "persistence",
							"type": 2,
							"value": ""
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "settings",
									"name": "settings",
									"type": 2,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "layoutSetting",
							"name": "layoutSetting",
							"type": 2,
							"value": ""
						}
					]
				},
				{
					"contentPlugin": "panel",
					"contexts": [],
					"label": "",
					"locked": false,
					"name": "",
					"rule": {
						"condition": "",
						"field": "",
						"operator": "",
						"rules": [],
						"value": ""
					},
					"settings": [
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "100",
											"displayName": "cols",
											"name": "cols",
											"type": 0,
											"value": "100"
										},
										{
											"attributes": [],
											"computedValue": "1",
											"displayName": "rows",
											"name": "rows",
											"type": 0,
											"value": "1"
										},
										{
											"attributes": [],
											"computedValue": "0",
											"displayName": "x",
											"name": "x",
											"type": 0,
											"value": "0"
										},
										{
											"attributes": [],
											"computedValue": "0",
											"displayName": "y",
											"name": "y",
											"type": 0,
											"value": "0"
										},
										{
											"attributes": [],
											"computedValue": "0",
											"displayName": "weight",
											"name": "weight",
											"type": 0,
											"value": "0"
										}
									],
									"computedValue": "",
									"displayName": "0",
									"name": "0",
									"type": 2,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "gridItems",
							"name": "gridItems",
							"type": 4,
							"value": ""
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [
												{
													"attributes": [],
													"computedValue": "$.ad.results[0].terms",
													"displayName": "valuesMapping",
													"name": "valuesMapping",
													"type": 1,
													"value": "$.ad.results[0].terms"
												}
											],
											"computedValue": "",
											"displayName": "settings",
											"name": "settings",
											"type": 2,
											"value": ""
										},
										{
											"attributes": [
												{
													"attributes": [
														{
															"attributes": [
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "100",
																					"displayName": "cols",
																					"name": "cols",
																					"type": 0,
																					"value": "100"
																				},
																				{
																					"attributes": [],
																					"computedValue": "1",
																					"displayName": "rows",
																					"name": "rows",
																					"type": 0,
																					"value": "1"
																				},
																				{
																					"attributes": [],
																					"computedValue": "0",
																					"displayName": "x",
																					"name": "x",
																					"type": 0,
																					"value": "0"
																				},
																				{
																					"attributes": [],
																					"computedValue": "0",
																					"displayName": "y",
																					"name": "y",
																					"type": 0,
																					"value": "0"
																				},
																				{
																					"attributes": [],
																					"computedValue": "0",
																					"displayName": "weight",
																					"name": "weight",
																					"type": 0,
																					"value": "0"
																				}
																			],
																			"computedValue": "",
																			"displayName": "0",
																			"name": "0",
																			"type": 2,
																			"value": ""
																		}
																	],
																	"computedValue": "",
																	"displayName": "gridItems",
																	"name": "gridItems",
																	"type": 4,
																	"value": ""
																},
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "",
																					"displayName": "settings",
																					"name": "settings",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [
																								{
																									"attributes": [
																										{
																											"attributes": [],
																											"computedValue": "[ad.results.0.terms.$i.humanName]",
																											"displayName": "value",
																											"name": "value",
																											"type": 1,
																											"value": "[ad.results.0.terms.$i.humanName]"
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
																													"computedValue": "",
																													"displayName": "id",
																													"name": "id",
																													"type": 1,
																													"value": ""
																												}
																											],
																											"computedValue": "",
																											"displayName": "datasourceBinding",
																											"name": "datasourceBinding",
																											"type": 2,
																											"value": ""
																										}
																									],
																									"computedValue": "",
																									"displayName": "settings",
																									"name": "settings",
																									"type": 2,
																									"value": ""
																								},
																								{
																									"attributes": [],
																									"computedValue": "false",
																									"displayName": "locked",
																									"name": "locked",
																									"type": 5,
																									"value": "false"
																								},
																								{
																									"attributes": [],
																									"computedValue": "",
																									"displayName": "contexts",
																									"name": "contexts",
																									"type": 4,
																									"value": ""
																								},
																								{
																									"attributes": [],
																									"computedValue": "humanName",
																									"displayName": "name",
																									"name": "name",
																									"type": 1,
																									"value": "humanName"
																								},
																								{
																									"attributes": [],
																									"computedValue": "humanName",
																									"displayName": "label",
																									"name": "label",
																									"type": 1,
																									"value": "humanName"
																								},
																								{
																									"attributes": [],
																									"computedValue": "form_input",
																									"displayName": "contentPlugin",
																									"name": "contentPlugin",
																									"type": 1,
																									"value": "form_input"
																								},
																								{
																									"attributes": [
																										{
																											"attributes": [],
																											"computedValue": "",
																											"displayName": "condition",
																											"name": "condition",
																											"type": 1,
																											"value": ""
																										},
																										{
																											"attributes": [],
																											"computedValue": "",
																											"displayName": "rules",
																											"name": "rules",
																											"type": 4,
																											"value": ""
																										}
																									],
																									"computedValue": "",
																									"displayName": "rule",
																									"name": "rule",
																									"type": 2,
																									"value": ""
																								}
																							],
																							"computedValue": "",
																							"displayName": "0",
																							"name": "0",
																							"type": 2,
																							"value": ""
																						},
																						{
																							"attributes": [
																								{
																									"attributes": [
																										{
																											"attributes": [
																												{
																													"attributes": [
																														{
																															"attributes": [],
																															"computedValue": "100",
																															"displayName": "cols",
																															"name": "cols",
																															"type": 0,
																															"value": "100"
																														},
																														{
																															"attributes": [],
																															"computedValue": "1",
																															"displayName": "rows",
																															"name": "rows",
																															"type": 0,
																															"value": "1"
																														},
																														{
																															"attributes": [],
																															"computedValue": "0",
																															"displayName": "x",
																															"name": "x",
																															"type": 0,
																															"value": "0"
																														},
																														{
																															"attributes": [],
																															"computedValue": "0",
																															"displayName": "y",
																															"name": "y",
																															"type": 0,
																															"value": "0"
																														},
																														{
																															"attributes": [],
																															"computedValue": "0",
																															"displayName": "weight",
																															"name": "weight",
																															"type": 0,
																															"value": "0"
																														}
																													],
																													"computedValue": "",
																													"displayName": "0",
																													"name": "0",
																													"type": 2,
																													"value": ""
																												}
																											],
																											"computedValue": "",
																											"displayName": "gridItems",
																											"name": "gridItems",
																											"type": 4,
																											"value": ""
																										},
																										{
																											"attributes": [
																												{
																													"attributes": [
																														{
																															"attributes": [
																																{
																																	"attributes": [],
																																	"computedValue": "$.ad.results[0].terms[$i].terms",
																																	"displayName": "valuesMapping",
																																	"name": "valuesMapping",
																																	"type": 1,
																																	"value": "$.ad.results[0].terms[$i].terms"
																																}
																															],
																															"computedValue": "",
																															"displayName": "settings",
																															"name": "settings",
																															"type": 2,
																															"value": ""
																														},
																														{
																															"attributes": [
																																{
																																	"attributes": [
																																		{
																																			"attributes": [
																																				{
																																					"attributes": [
																																						{
																																							"attributes": [
																																								{
																																									"attributes": [],
																																									"computedValue": "100",
																																									"displayName": "cols",
																																									"name": "cols",
																																									"type": 0,
																																									"value": "100"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "1",
																																									"displayName": "rows",
																																									"name": "rows",
																																									"type": 0,
																																									"value": "1"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "0",
																																									"displayName": "x",
																																									"name": "x",
																																									"type": 0,
																																									"value": "0"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "0",
																																									"displayName": "y",
																																									"name": "y",
																																									"type": 0,
																																									"value": "0"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "0",
																																									"displayName": "weight",
																																									"name": "weight",
																																									"type": 0,
																																									"value": "0"
																																								}
																																							],
																																							"computedValue": "",
																																							"displayName": "0",
																																							"name": "0",
																																							"type": 2,
																																							"value": ""
																																						}
																																					],
																																					"computedValue": "",
																																					"displayName": "gridItems",
																																					"name": "gridItems",
																																					"type": 4,
																																					"value": ""
																																				},
																																				{
																																					"attributes": [
																																						{
																																							"attributes": [
																																								{
																																									"attributes": [],
																																									"computedValue": "",
																																									"displayName": "settings",
																																									"name": "settings",
																																									"type": 2,
																																									"value": ""
																																								},
																																								{
																																									"attributes": [
																																										{
																																											"attributes": [
																																												{
																																													"attributes": [
																																														{
																																															"attributes": [],
																																															"computedValue": "[ad.results.0.terms.$i.terms.$i.humanName]",
																																															"displayName": "value",
																																															"name": "value",
																																															"type": 1,
																																															"value": "[ad.results.0.terms.$i.terms.$i.humanName]"
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
																																																	"computedValue": "",
																																																	"displayName": "id",
																																																	"name": "id",
																																																	"type": 1,
																																																	"value": ""
																																																}
																																															],
																																															"computedValue": "",
																																															"displayName": "datasourceBinding",
																																															"name": "datasourceBinding",
																																															"type": 2,
																																															"value": ""
																																														}
																																													],
																																													"computedValue": "",
																																													"displayName": "settings",
																																													"name": "settings",
																																													"type": 2,
																																													"value": ""
																																												},
																																												{
																																													"attributes": [],
																																													"computedValue": "false",
																																													"displayName": "locked",
																																													"name": "locked",
																																													"type": 5,
																																													"value": "false"
																																												},
																																												{
																																													"attributes": [],
																																													"computedValue": "",
																																													"displayName": "contexts",
																																													"name": "contexts",
																																													"type": 4,
																																													"value": ""
																																												},
																																												{
																																													"attributes": [],
																																													"computedValue": "humanName",
																																													"displayName": "name",
																																													"name": "name",
																																													"type": 1,
																																													"value": "humanName"
																																												},
																																												{
																																													"attributes": [],
																																													"computedValue": "humanName",
																																													"displayName": "label",
																																													"name": "label",
																																													"type": 1,
																																													"value": "humanName"
																																												},
																																												{
																																													"attributes": [],
																																													"computedValue": "form_input",
																																													"displayName": "contentPlugin",
																																													"name": "contentPlugin",
																																													"type": 1,
																																													"value": "form_input"
																																												},
																																												{
																																													"attributes": [
																																														{
																																															"attributes": [],
																																															"computedValue": "",
																																															"displayName": "condition",
																																															"name": "condition",
																																															"type": 1,
																																															"value": ""
																																														},
																																														{
																																															"attributes": [],
																																															"computedValue": "",
																																															"displayName": "rules",
																																															"name": "rules",
																																															"type": 4,
																																															"value": ""
																																														}
																																													],
																																													"computedValue": "",
																																													"displayName": "rule",
																																													"name": "rule",
																																													"type": 2,
																																													"value": ""
																																												}
																																											],
																																											"computedValue": "",
																																											"displayName": "0",
																																											"name": "0",
																																											"type": 2,
																																											"value": ""
																																										}
																																									],
																																									"computedValue": "",
																																									"displayName": "panes",
																																									"name": "panes",
																																									"type": 4,
																																									"value": ""
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "undefined",
																																									"displayName": "name",
																																									"name": "name",
																																									"type": 0,
																																									"value": "undefined"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "undefined",
																																									"displayName": "label",
																																									"name": "label",
																																									"type": 0,
																																									"value": "undefined"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "",
																																									"displayName": "stylePlugin",
																																									"name": "stylePlugin",
																																									"type": 1,
																																									"value": ""
																																								},
																																								{
																																									"attributes": [
																																										{
																																											"attributes": [],
																																											"computedValue": "",
																																											"displayName": "settings",
																																											"name": "settings",
																																											"type": 2,
																																											"value": ""
																																										}
																																									],
																																									"computedValue": "",
																																									"displayName": "columnSetting",
																																									"name": "columnSetting",
																																									"type": 2,
																																									"value": ""
																																								}
																																							],
																																							"computedValue": "",
																																							"displayName": "0",
																																							"name": "0",
																																							"type": 2,
																																							"value": ""
																																						}
																																					],
																																					"computedValue": "",
																																					"displayName": "panels",
																																					"name": "panels",
																																					"type": 4,
																																					"value": ""
																																				},
																																				{
																																					"attributes": [
																																						{
																																							"attributes": [
																																								{
																																									"attributes": [],
																																									"computedValue": "terms",
																																									"displayName": "name",
																																									"name": "name",
																																									"type": 1,
																																									"value": "terms"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "data",
																																									"displayName": "adaptor",
																																									"name": "adaptor",
																																									"type": 1,
																																									"value": "data"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "state",
																																									"displayName": "plugin",
																																									"name": "plugin",
																																									"type": 1,
																																									"value": "state"
																																								},
																																								{
																																									"attributes": [
																																										{
																																											"attributes": [
																																												{
																																													"attributes": [],
																																													"computedValue": "",
																																													"displayName": "0",
																																													"name": "0",
																																													"type": 2,
																																													"value": ""
																																												},
																																												{
																																													"attributes": [],
																																													"computedValue": "",
																																													"displayName": "1",
																																													"name": "1",
																																													"type": 2,
																																													"value": ""
																																												},
																																												{
																																													"attributes": [],
																																													"computedValue": "",
																																													"displayName": "2",
																																													"name": "2",
																																													"type": 2,
																																													"value": ""
																																												}
																																											],
																																											"computedValue": "",
																																											"displayName": "value",
																																											"name": "value",
																																											"type": 4,
																																											"value": ""
																																										}
																																									],
																																									"computedValue": "",
																																									"displayName": "data",
																																									"name": "data",
																																									"type": 2,
																																									"value": ""
																																								}
																																							],
																																							"computedValue": "",
																																							"displayName": "0",
																																							"name": "0",
																																							"type": 2,
																																							"value": ""
																																						},
																																						{
																																							"attributes": [
																																								{
																																									"attributes": [],
																																									"computedValue": "characters",
																																									"displayName": "name",
																																									"name": "name",
																																									"type": 1,
																																									"value": "characters"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "datasource",
																																									"displayName": "adaptor",
																																									"name": "adaptor",
																																									"type": 1,
																																									"value": "datasource"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "datasource",
																																									"displayName": "plugin",
																																									"name": "plugin",
																																									"type": 1,
																																									"value": "datasource"
																																								},
																																								{
																																									"attributes": [
																																										{
																																											"attributes": [
																																												{
																																													"attributes": [],
																																													"computedValue": "[{\"id\":1,\"name\":\"batman\"},{\"id\":2,\"name\":\"superman\"}]",
																																													"displayName": "data",
																																													"name": "data",
																																													"type": 1,
																																													"value": "[{\"id\":1,\"name\":\"batman\"},{\"id\":2,\"name\":\"superman\"}]"
																																												}
																																											],
																																											"computedValue": "",
																																											"displayName": "settings",
																																											"name": "settings",
																																											"type": 2,
																																											"value": ""
																																										},
																																										{
																																											"attributes": [],
																																											"computedValue": "",
																																											"displayName": "params",
																																											"name": "params",
																																											"type": 4,
																																											"value": ""
																																										},
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
																																													"computedValue": "pane",
																																													"displayName": "type",
																																													"name": "type",
																																													"type": 1,
																																													"value": "pane"
																																												},
																																												{
																																													"attributes": [],
																																													"computedValue": "undefined",
																																													"displayName": "query",
																																													"name": "query",
																																													"type": 0,
																																													"value": "undefined"
																																												},
																																												{
																																													"attributes": [],
																																													"computedValue": "undefined",
																																													"displayName": "trackBy",
																																													"name": "trackBy",
																																													"type": 0,
																																													"value": "undefined"
																																												},
																																												{
																																													"attributes": [],
																																													"computedValue": "",
																																													"displayName": "bindings",
																																													"name": "bindings",
																																													"type": 4,
																																													"value": ""
																																												}
																																											],
																																											"computedValue": "",
																																											"displayName": "renderer",
																																											"name": "renderer",
																																											"type": 2,
																																											"value": ""
																																										}
																																									],
																																									"computedValue": "",
																																									"displayName": "datasource",
																																									"name": "datasource",
																																									"type": 2,
																																									"value": ""
																																								}
																																							],
																																							"computedValue": "",
																																							"displayName": "1",
																																							"name": "1",
																																							"type": 2,
																																							"value": ""
																																						},
																																						{
																																							"attributes": [
																																								{
																																									"attributes": [],
																																									"computedValue": "ad",
																																									"displayName": "name",
																																									"name": "name",
																																									"type": 1,
																																									"value": "ad"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "datasource",
																																									"displayName": "adaptor",
																																									"name": "adaptor",
																																									"type": 1,
																																									"value": "datasource"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "datasource",
																																									"displayName": "plugin",
																																									"name": "plugin",
																																									"type": 1,
																																									"value": "datasource"
																																								},
																																								{
																																									"attributes": [
																																										{
																																											"attributes": [
																																												{
																																													"attributes": [],
																																													"computedValue": "aws_s3_entity",
																																													"displayName": "adaptorName",
																																													"name": "adaptorName",
																																													"type": 1,
																																													"value": "aws_s3_entity"
																																												},
																																												{
																																													"attributes": [],
																																													"computedValue": "bucket=:bucket&prefix=:prefix",
																																													"displayName": "optionsString",
																																													"name": "optionsString",
																																													"type": 1,
																																													"value": "bucket=:bucket&prefix=:prefix"
																																												},
																																												{
																																													"attributes": [],
																																													"computedValue": "identity=:identity",
																																													"displayName": "paramsString",
																																													"name": "paramsString",
																																													"type": 1,
																																													"value": "identity=:identity"
																																												},
																																												{
																																													"attributes": [
																																														{
																																															"attributes": [
																																																{
																																																	"attributes": [
																																																		{
																																																			"attributes": [],
																																																			"computedValue": "static",
																																																			"displayName": "type",
																																																			"name": "type",
																																																			"type": 1,
																																																			"value": "static"
																																																		},
																																																		{
																																																			"attributes": [],
																																																			"computedValue": "classifieds-ui-prod",
																																																			"displayName": "value",
																																																			"name": "value",
																																																			"type": 1,
																																																			"value": "classifieds-ui-prod"
																																																		},
																																																		{
																																																			"attributes": [],
																																																			"computedValue": "classifieds-ui-prod",
																																																			"displayName": "testValue",
																																																			"name": "testValue",
																																																			"type": 1,
																																																			"value": "classifieds-ui-prod"
																																																		},
																																																		{
																																																			"attributes": [],
																																																			"computedValue": "",
																																																			"displayName": "context",
																																																			"name": "context",
																																																			"type": 1,
																																																			"value": ""
																																																		}
																																																	],
																																																	"computedValue": "",
																																																	"displayName": "mapping",
																																																	"name": "mapping",
																																																	"type": 2,
																																																	"value": ""
																																																},
																																																{
																																																	"attributes": [
																																																		{
																																																			"attributes": [
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "page",
																																																					"displayName": "name",
																																																					"name": "name",
																																																					"type": 1,
																																																					"value": "page"
																																																				},
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "false",
																																																					"displayName": "enabled",
																																																					"name": "enabled",
																																																					"type": 5,
																																																					"value": "false"
																																																				}
																																																			],
																																																			"computedValue": "",
																																																			"displayName": "0",
																																																			"name": "0",
																																																			"type": 2,
																																																			"value": ""
																																																		},
																																																		{
																																																			"attributes": [
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "limit",
																																																					"displayName": "name",
																																																					"name": "name",
																																																					"type": 1,
																																																					"value": "limit"
																																																				},
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "false",
																																																					"displayName": "enabled",
																																																					"name": "enabled",
																																																					"type": 5,
																																																					"value": "false"
																																																				}
																																																			],
																																																			"computedValue": "",
																																																			"displayName": "1",
																																																			"name": "1",
																																																			"type": 2,
																																																			"value": ""
																																																		},
																																																		{
																																																			"attributes": [
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "offset",
																																																					"displayName": "name",
																																																					"name": "name",
																																																					"type": 1,
																																																					"value": "offset"
																																																				},
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "false",
																																																					"displayName": "enabled",
																																																					"name": "enabled",
																																																					"type": 5,
																																																					"value": "false"
																																																				}
																																																			],
																																																			"computedValue": "",
																																																			"displayName": "2",
																																																			"name": "2",
																																																			"type": 2,
																																																			"value": ""
																																																		},
																																																		{
																																																			"attributes": [
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "searchString",
																																																					"displayName": "name",
																																																					"name": "name",
																																																					"type": 1,
																																																					"value": "searchString"
																																																				},
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "false",
																																																					"displayName": "enabled",
																																																					"name": "enabled",
																																																					"type": 5,
																																																					"value": "false"
																																																				}
																																																			],
																																																			"computedValue": "",
																																																			"displayName": "3",
																																																			"name": "3",
																																																			"type": 2,
																																																			"value": ""
																																																		}
																																																	],
																																																	"computedValue": "",
																																																	"displayName": "flags",
																																																	"name": "flags",
																																																	"type": 4,
																																																	"value": ""
																																																}
																																															],
																																															"computedValue": "",
																																															"displayName": "0",
																																															"name": "0",
																																															"type": 2,
																																															"value": ""
																																														},
																																														{
																																															"attributes": [
																																																{
																																																	"attributes": [
																																																		{
																																																			"attributes": [],
																																																			"computedValue": "static",
																																																			"displayName": "type",
																																																			"name": "type",
																																																			"type": 1,
																																																			"value": "static"
																																																		},
																																																		{
																																																			"attributes": [],
																																																			"computedValue": "ads/",
																																																			"displayName": "value",
																																																			"name": "value",
																																																			"type": 1,
																																																			"value": "ads/"
																																																		},
																																																		{
																																																			"attributes": [],
																																																			"computedValue": "ads/",
																																																			"displayName": "testValue",
																																																			"name": "testValue",
																																																			"type": 1,
																																																			"value": "ads/"
																																																		},
																																																		{
																																																			"attributes": [],
																																																			"computedValue": "",
																																																			"displayName": "context",
																																																			"name": "context",
																																																			"type": 1,
																																																			"value": ""
																																																		}
																																																	],
																																																	"computedValue": "",
																																																	"displayName": "mapping",
																																																	"name": "mapping",
																																																	"type": 2,
																																																	"value": ""
																																																},
																																																{
																																																	"attributes": [
																																																		{
																																																			"attributes": [
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "page",
																																																					"displayName": "name",
																																																					"name": "name",
																																																					"type": 1,
																																																					"value": "page"
																																																				},
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "false",
																																																					"displayName": "enabled",
																																																					"name": "enabled",
																																																					"type": 5,
																																																					"value": "false"
																																																				}
																																																			],
																																																			"computedValue": "",
																																																			"displayName": "0",
																																																			"name": "0",
																																																			"type": 2,
																																																			"value": ""
																																																		},
																																																		{
																																																			"attributes": [
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "limit",
																																																					"displayName": "name",
																																																					"name": "name",
																																																					"type": 1,
																																																					"value": "limit"
																																																				},
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "false",
																																																					"displayName": "enabled",
																																																					"name": "enabled",
																																																					"type": 5,
																																																					"value": "false"
																																																				}
																																																			],
																																																			"computedValue": "",
																																																			"displayName": "1",
																																																			"name": "1",
																																																			"type": 2,
																																																			"value": ""
																																																		},
																																																		{
																																																			"attributes": [
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "offset",
																																																					"displayName": "name",
																																																					"name": "name",
																																																					"type": 1,
																																																					"value": "offset"
																																																				},
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "false",
																																																					"displayName": "enabled",
																																																					"name": "enabled",
																																																					"type": 5,
																																																					"value": "false"
																																																				}
																																																			],
																																																			"computedValue": "",
																																																			"displayName": "2",
																																																			"name": "2",
																																																			"type": 2,
																																																			"value": ""
																																																		},
																																																		{
																																																			"attributes": [
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "searchString",
																																																					"displayName": "name",
																																																					"name": "name",
																																																					"type": 1,
																																																					"value": "searchString"
																																																				},
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "false",
																																																					"displayName": "enabled",
																																																					"name": "enabled",
																																																					"type": 5,
																																																					"value": "false"
																																																				}
																																																			],
																																																			"computedValue": "",
																																																			"displayName": "3",
																																																			"name": "3",
																																																			"type": 2,
																																																			"value": ""
																																																		}
																																																	],
																																																	"computedValue": "",
																																																	"displayName": "flags",
																																																	"name": "flags",
																																																	"type": 4,
																																																	"value": ""
																																																}
																																															],
																																															"computedValue": "",
																																															"displayName": "1",
																																															"name": "1",
																																															"type": 2,
																																															"value": ""
																																														}
																																													],
																																													"computedValue": "",
																																													"displayName": "options",
																																													"name": "options",
																																													"type": 4,
																																													"value": ""
																																												},
																																												{
																																													"attributes": [
																																														{
																																															"attributes": [
																																																{
																																																	"attributes": [
																																																		{
																																																			"attributes": [],
																																																			"computedValue": "route",
																																																			"displayName": "type",
																																																			"name": "type",
																																																			"type": 1,
																																																			"value": "route"
																																																		},
																																																		{
																																																			"attributes": [],
																																																			"computedValue": "arg0",
																																																			"displayName": "value",
																																																			"name": "value",
																																																			"type": 1,
																																																			"value": "arg0"
																																																		},
																																																		{
																																																			"attributes": [],
																																																			"computedValue": "",
																																																			"displayName": "testValue",
																																																			"name": "testValue",
																																																			"type": 1,
																																																			"value": ""
																																																		},
																																																		{
																																																			"attributes": [],
																																																			"computedValue": "",
																																																			"displayName": "context",
																																																			"name": "context",
																																																			"type": 1,
																																																			"value": ""
																																																		}
																																																	],
																																																	"computedValue": "",
																																																	"displayName": "mapping",
																																																	"name": "mapping",
																																																	"type": 2,
																																																	"value": ""
																																																},
																																																{
																																																	"attributes": [
																																																		{
																																																			"attributes": [
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "page",
																																																					"displayName": "name",
																																																					"name": "name",
																																																					"type": 1,
																																																					"value": "page"
																																																				},
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "false",
																																																					"displayName": "enabled",
																																																					"name": "enabled",
																																																					"type": 5,
																																																					"value": "false"
																																																				}
																																																			],
																																																			"computedValue": "",
																																																			"displayName": "0",
																																																			"name": "0",
																																																			"type": 2,
																																																			"value": ""
																																																		},
																																																		{
																																																			"attributes": [
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "limit",
																																																					"displayName": "name",
																																																					"name": "name",
																																																					"type": 1,
																																																					"value": "limit"
																																																				},
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "false",
																																																					"displayName": "enabled",
																																																					"name": "enabled",
																																																					"type": 5,
																																																					"value": "false"
																																																				}
																																																			],
																																																			"computedValue": "",
																																																			"displayName": "1",
																																																			"name": "1",
																																																			"type": 2,
																																																			"value": ""
																																																		},
																																																		{
																																																			"attributes": [
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "offset",
																																																					"displayName": "name",
																																																					"name": "name",
																																																					"type": 1,
																																																					"value": "offset"
																																																				},
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "false",
																																																					"displayName": "enabled",
																																																					"name": "enabled",
																																																					"type": 5,
																																																					"value": "false"
																																																				}
																																																			],
																																																			"computedValue": "",
																																																			"displayName": "2",
																																																			"name": "2",
																																																			"type": 2,
																																																			"value": ""
																																																		},
																																																		{
																																																			"attributes": [
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "searchString",
																																																					"displayName": "name",
																																																					"name": "name",
																																																					"type": 1,
																																																					"value": "searchString"
																																																				},
																																																				{
																																																					"attributes": [],
																																																					"computedValue": "false",
																																																					"displayName": "enabled",
																																																					"name": "enabled",
																																																					"type": 5,
																																																					"value": "false"
																																																				}
																																																			],
																																																			"computedValue": "",
																																																			"displayName": "3",
																																																			"name": "3",
																																																			"type": 2,
																																																			"value": ""
																																																		}
																																																	],
																																																	"computedValue": "",
																																																	"displayName": "flags",
																																																	"name": "flags",
																																																	"type": 4,
																																																	"value": ""
																																																}
																																															],
																																															"computedValue": "",
																																															"displayName": "0",
																																															"name": "0",
																																															"type": 2,
																																															"value": ""
																																														}
																																													],
																																													"computedValue": "",
																																													"displayName": "params",
																																													"name": "params",
																																													"type": 4,
																																													"value": ""
																																												}
																																											],
																																											"computedValue": "",
																																											"displayName": "settings",
																																											"name": "settings",
																																											"type": 2,
																																											"value": ""
																																										},
																																										{
																																											"attributes": [],
																																											"computedValue": "",
																																											"displayName": "params",
																																											"name": "params",
																																											"type": 4,
																																											"value": ""
																																										},
																																										{
																																											"attributes": [],
																																											"computedValue": "crud_adaptor",
																																											"displayName": "plugin",
																																											"name": "plugin",
																																											"type": 1,
																																											"value": "crud_adaptor"
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
																																													"computedValue": "undefined",
																																													"displayName": "query",
																																													"name": "query",
																																													"type": 0,
																																													"value": "undefined"
																																												},
																																												{
																																													"attributes": [],
																																													"computedValue": "undefined",
																																													"displayName": "trackBy",
																																													"name": "trackBy",
																																													"type": 0,
																																													"value": "undefined"
																																												},
																																												{
																																													"attributes": [],
																																													"computedValue": "",
																																													"displayName": "bindings",
																																													"name": "bindings",
																																													"type": 4,
																																													"value": ""
																																												}
																																											],
																																											"computedValue": "",
																																											"displayName": "renderer",
																																											"name": "renderer",
																																											"type": 2,
																																											"value": ""
																																										}
																																									],
																																									"computedValue": "",
																																									"displayName": "datasource",
																																									"name": "datasource",
																																									"type": 2,
																																									"value": ""
																																								}
																																							],
																																							"computedValue": "",
																																							"displayName": "2",
																																							"name": "2",
																																							"type": 2,
																																							"value": ""
																																						}
																																					],
																																					"computedValue": "",
																																					"displayName": "contexts",
																																					"name": "contexts",
																																					"type": 4,
																																					"value": ""
																																				},
																																				{
																																					"attributes": [
																																						{
																																							"attributes": [
																																								{
																																									"attributes": [],
																																									"computedValue": "",
																																									"displayName": "settings",
																																									"name": "settings",
																																									"type": 2,
																																									"value": ""
																																								}
																																							],
																																							"computedValue": "",
																																							"displayName": "0",
																																							"name": "0",
																																							"type": 2,
																																							"value": ""
																																						}
																																					],
																																					"computedValue": "",
																																					"displayName": "rowSettings",
																																					"name": "rowSettings",
																																					"type": 4,
																																					"value": ""
																																				},
																																				{
																																					"attributes": [
																																						{
																																							"attributes": [],
																																							"computedValue": "",
																																							"displayName": "readUserIds",
																																							"name": "readUserIds",
																																							"type": 4,
																																							"value": ""
																																						},
																																						{
																																							"attributes": [],
																																							"computedValue": "",
																																							"displayName": "writeUserIds",
																																							"name": "writeUserIds",
																																							"type": 4,
																																							"value": ""
																																						},
																																						{
																																							"attributes": [],
																																							"computedValue": "",
																																							"displayName": "deleteUserIds",
																																							"name": "deleteUserIds",
																																							"type": 4,
																																							"value": ""
																																						}
																																					],
																																					"computedValue": "",
																																					"displayName": "entityPermissions",
																																					"name": "entityPermissions",
																																					"type": 2,
																																					"value": ""
																																				},
																																				{
																																					"attributes": [],
																																					"computedValue": "undefined",
																																					"displayName": "id",
																																					"name": "id",
																																					"type": 0,
																																					"value": "undefined"
																																				},
																																				{
																																					"attributes": [],
																																					"computedValue": "split",
																																					"displayName": "layoutType",
																																					"name": "layoutType",
																																					"type": 1,
																																					"value": "split"
																																				},
																																				{
																																					"attributes": [],
																																					"computedValue": "form",
																																					"displayName": "displayType",
																																					"name": "displayType",
																																					"type": 1,
																																					"value": "form"
																																				},
																																				{
																																					"attributes": [],
																																					"computedValue": "terms_form2",
																																					"displayName": "name",
																																					"name": "name",
																																					"type": 1,
																																					"value": "terms_form2"
																																				},
																																				{
																																					"attributes": [],
																																					"computedValue": "terms_form2",
																																					"displayName": "title",
																																					"name": "title",
																																					"type": 1,
																																					"value": "terms_form2"
																																				},
																																				{
																																					"attributes": [],
																																					"computedValue": "spearhead",
																																					"displayName": "site",
																																					"name": "site",
																																					"type": 1,
																																					"value": "spearhead"
																																				},
																																				{
																																					"attributes": [],
																																					"computedValue": "undefined",
																																					"displayName": "userId",
																																					"name": "userId",
																																					"type": 0,
																																					"value": "undefined"
																																				},
																																				{
																																					"attributes": [],
																																					"computedValue": "undefined",
																																					"displayName": "path",
																																					"name": "path",
																																					"type": 0,
																																					"value": "undefined"
																																				},
																																				{
																																					"attributes": [
																																						{
																																							"attributes": [
																																								{
																																									"attributes": [],
																																									"computedValue": "",
																																									"displayName": "settings",
																																									"name": "settings",
																																									"type": 2,
																																									"value": ""
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "undefined",
																																									"displayName": "plugin",
																																									"name": "plugin",
																																									"type": 0,
																																									"value": "undefined"
																																								}
																																							],
																																							"computedValue": "",
																																							"displayName": "dataduct",
																																							"name": "dataduct",
																																							"type": 2,
																																							"value": ""
																																						}
																																					],
																																					"computedValue": "",
																																					"displayName": "persistence",
																																					"name": "persistence",
																																					"type": 2,
																																					"value": ""
																																				},
																																				{
																																					"attributes": [
																																						{
																																							"attributes": [],
																																							"computedValue": "",
																																							"displayName": "settings",
																																							"name": "settings",
																																							"type": 2,
																																							"value": ""
																																						}
																																					],
																																					"computedValue": "",
																																					"displayName": "layoutSetting",
																																					"name": "layoutSetting",
																																					"type": 2,
																																					"value": ""
																																				}
																																			],
																																			"computedValue": "",
																																			"displayName": "settings",
																																			"name": "settings",
																																			"type": 2,
																																			"value": ""
																																		},
																																		{
																																			"attributes": [],
																																			"computedValue": "false",
																																			"displayName": "locked",
																																			"name": "locked",
																																			"type": 5,
																																			"value": "false"
																																		},
																																		{
																																			"attributes": [],
																																			"computedValue": "",
																																			"displayName": "contexts",
																																			"name": "contexts",
																																			"type": 4,
																																			"value": ""
																																		},
																																		{
																																			"attributes": [],
																																			"computedValue": "terms",
																																			"displayName": "name",
																																			"name": "name",
																																			"type": 1,
																																			"value": "terms"
																																		},
																																		{
																																			"attributes": [],
																																			"computedValue": "terms",
																																			"displayName": "label",
																																			"name": "label",
																																			"type": 1,
																																			"value": "terms"
																																		},
																																		{
																																			"attributes": [],
																																			"computedValue": "panel",
																																			"displayName": "contentPlugin",
																																			"name": "contentPlugin",
																																			"type": 1,
																																			"value": "panel"
																																		},
																																		{
																																			"attributes": [
																																				{
																																					"attributes": [],
																																					"computedValue": "",
																																					"displayName": "condition",
																																					"name": "condition",
																																					"type": 1,
																																					"value": ""
																																				},
																																				{
																																					"attributes": [],
																																					"computedValue": "",
																																					"displayName": "rules",
																																					"name": "rules",
																																					"type": 4,
																																					"value": ""
																																				}
																																			],
																																			"computedValue": "",
																																			"displayName": "rule",
																																			"name": "rule",
																																			"type": 2,
																																			"value": ""
																																		}
																																	],
																																	"computedValue": "",
																																	"displayName": "0",
																																	"name": "0",
																																	"type": 2,
																																	"value": ""
																																}
																															],
																															"computedValue": "",
																															"displayName": "panes",
																															"name": "panes",
																															"type": 4,
																															"value": ""
																														},
																														{
																															"attributes": [],
																															"computedValue": "undefined",
																															"displayName": "name",
																															"name": "name",
																															"type": 0,
																															"value": "undefined"
																														},
																														{
																															"attributes": [],
																															"computedValue": "undefined",
																															"displayName": "label",
																															"name": "label",
																															"type": 0,
																															"value": "undefined"
																														},
																														{
																															"attributes": [],
																															"computedValue": "form_section",
																															"displayName": "stylePlugin",
																															"name": "stylePlugin",
																															"type": 1,
																															"value": "form_section"
																														},
																														{
																															"attributes": [
																																{
																																	"attributes": [],
																																	"computedValue": "",
																																	"displayName": "settings",
																																	"name": "settings",
																																	"type": 2,
																																	"value": ""
																																}
																															],
																															"computedValue": "",
																															"displayName": "columnSetting",
																															"name": "columnSetting",
																															"type": 2,
																															"value": ""
																														}
																													],
																													"computedValue": "",
																													"displayName": "0",
																													"name": "0",
																													"type": 2,
																													"value": ""
																												}
																											],
																											"computedValue": "",
																											"displayName": "panels",
																											"name": "panels",
																											"type": 4,
																											"value": ""
																										},
																										{
																											"attributes": [
																												{
																													"attributes": [
																														{
																															"attributes": [],
																															"computedValue": "terms",
																															"displayName": "name",
																															"name": "name",
																															"type": 1,
																															"value": "terms"
																														},
																														{
																															"attributes": [],
																															"computedValue": "data",
																															"displayName": "adaptor",
																															"name": "adaptor",
																															"type": 1,
																															"value": "data"
																														},
																														{
																															"attributes": [],
																															"computedValue": "state",
																															"displayName": "plugin",
																															"name": "plugin",
																															"type": 1,
																															"value": "state"
																														},
																														{
																															"attributes": [
																																{
																																	"attributes": [
																																		{
																																			"attributes": [],
																																			"computedValue": "",
																																			"displayName": "0",
																																			"name": "0",
																																			"type": 2,
																																			"value": ""
																																		},
																																		{
																																			"attributes": [],
																																			"computedValue": "",
																																			"displayName": "1",
																																			"name": "1",
																																			"type": 2,
																																			"value": ""
																																		},
																																		{
																																			"attributes": [],
																																			"computedValue": "",
																																			"displayName": "2",
																																			"name": "2",
																																			"type": 2,
																																			"value": ""
																																		}
																																	],
																																	"computedValue": "",
																																	"displayName": "value",
																																	"name": "value",
																																	"type": 4,
																																	"value": ""
																																}
																															],
																															"computedValue": "",
																															"displayName": "data",
																															"name": "data",
																															"type": 2,
																															"value": ""
																														}
																													],
																													"computedValue": "",
																													"displayName": "0",
																													"name": "0",
																													"type": 2,
																													"value": ""
																												},
																												{
																													"attributes": [
																														{
																															"attributes": [],
																															"computedValue": "characters",
																															"displayName": "name",
																															"name": "name",
																															"type": 1,
																															"value": "characters"
																														},
																														{
																															"attributes": [],
																															"computedValue": "datasource",
																															"displayName": "adaptor",
																															"name": "adaptor",
																															"type": 1,
																															"value": "datasource"
																														},
																														{
																															"attributes": [],
																															"computedValue": "datasource",
																															"displayName": "plugin",
																															"name": "plugin",
																															"type": 1,
																															"value": "datasource"
																														},
																														{
																															"attributes": [
																																{
																																	"attributes": [
																																		{
																																			"attributes": [],
																																			"computedValue": "[{\"id\":1,\"name\":\"batman\"},{\"id\":2,\"name\":\"superman\"}]",
																																			"displayName": "data",
																																			"name": "data",
																																			"type": 1,
																																			"value": "[{\"id\":1,\"name\":\"batman\"},{\"id\":2,\"name\":\"superman\"}]"
																																		}
																																	],
																																	"computedValue": "",
																																	"displayName": "settings",
																																	"name": "settings",
																																	"type": 2,
																																	"value": ""
																																},
																																{
																																	"attributes": [],
																																	"computedValue": "",
																																	"displayName": "params",
																																	"name": "params",
																																	"type": 4,
																																	"value": ""
																																},
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
																																			"computedValue": "pane",
																																			"displayName": "type",
																																			"name": "type",
																																			"type": 1,
																																			"value": "pane"
																																		},
																																		{
																																			"attributes": [],
																																			"computedValue": "undefined",
																																			"displayName": "query",
																																			"name": "query",
																																			"type": 0,
																																			"value": "undefined"
																																		},
																																		{
																																			"attributes": [],
																																			"computedValue": "undefined",
																																			"displayName": "trackBy",
																																			"name": "trackBy",
																																			"type": 0,
																																			"value": "undefined"
																																		},
																																		{
																																			"attributes": [],
																																			"computedValue": "",
																																			"displayName": "bindings",
																																			"name": "bindings",
																																			"type": 4,
																																			"value": ""
																																		}
																																	],
																																	"computedValue": "",
																																	"displayName": "renderer",
																																	"name": "renderer",
																																	"type": 2,
																																	"value": ""
																																}
																															],
																															"computedValue": "",
																															"displayName": "datasource",
																															"name": "datasource",
																															"type": 2,
																															"value": ""
																														}
																													],
																													"computedValue": "",
																													"displayName": "1",
																													"name": "1",
																													"type": 2,
																													"value": ""
																												},
																												{
																													"attributes": [
																														{
																															"attributes": [],
																															"computedValue": "ad",
																															"displayName": "name",
																															"name": "name",
																															"type": 1,
																															"value": "ad"
																														},
																														{
																															"attributes": [],
																															"computedValue": "datasource",
																															"displayName": "adaptor",
																															"name": "adaptor",
																															"type": 1,
																															"value": "datasource"
																														},
																														{
																															"attributes": [],
																															"computedValue": "datasource",
																															"displayName": "plugin",
																															"name": "plugin",
																															"type": 1,
																															"value": "datasource"
																														},
																														{
																															"attributes": [
																																{
																																	"attributes": [
																																		{
																																			"attributes": [],
																																			"computedValue": "aws_s3_entity",
																																			"displayName": "adaptorName",
																																			"name": "adaptorName",
																																			"type": 1,
																																			"value": "aws_s3_entity"
																																		},
																																		{
																																			"attributes": [],
																																			"computedValue": "bucket=:bucket&prefix=:prefix",
																																			"displayName": "optionsString",
																																			"name": "optionsString",
																																			"type": 1,
																																			"value": "bucket=:bucket&prefix=:prefix"
																																		},
																																		{
																																			"attributes": [],
																																			"computedValue": "identity=:identity",
																																			"displayName": "paramsString",
																																			"name": "paramsString",
																																			"type": 1,
																																			"value": "identity=:identity"
																																		},
																																		{
																																			"attributes": [
																																				{
																																					"attributes": [
																																						{
																																							"attributes": [
																																								{
																																									"attributes": [],
																																									"computedValue": "static",
																																									"displayName": "type",
																																									"name": "type",
																																									"type": 1,
																																									"value": "static"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "classifieds-ui-prod",
																																									"displayName": "value",
																																									"name": "value",
																																									"type": 1,
																																									"value": "classifieds-ui-prod"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "classifieds-ui-prod",
																																									"displayName": "testValue",
																																									"name": "testValue",
																																									"type": 1,
																																									"value": "classifieds-ui-prod"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "",
																																									"displayName": "context",
																																									"name": "context",
																																									"type": 1,
																																									"value": ""
																																								}
																																							],
																																							"computedValue": "",
																																							"displayName": "mapping",
																																							"name": "mapping",
																																							"type": 2,
																																							"value": ""
																																						},
																																						{
																																							"attributes": [
																																								{
																																									"attributes": [
																																										{
																																											"attributes": [],
																																											"computedValue": "page",
																																											"displayName": "name",
																																											"name": "name",
																																											"type": 1,
																																											"value": "page"
																																										},
																																										{
																																											"attributes": [],
																																											"computedValue": "false",
																																											"displayName": "enabled",
																																											"name": "enabled",
																																											"type": 5,
																																											"value": "false"
																																										}
																																									],
																																									"computedValue": "",
																																									"displayName": "0",
																																									"name": "0",
																																									"type": 2,
																																									"value": ""
																																								},
																																								{
																																									"attributes": [
																																										{
																																											"attributes": [],
																																											"computedValue": "limit",
																																											"displayName": "name",
																																											"name": "name",
																																											"type": 1,
																																											"value": "limit"
																																										},
																																										{
																																											"attributes": [],
																																											"computedValue": "false",
																																											"displayName": "enabled",
																																											"name": "enabled",
																																											"type": 5,
																																											"value": "false"
																																										}
																																									],
																																									"computedValue": "",
																																									"displayName": "1",
																																									"name": "1",
																																									"type": 2,
																																									"value": ""
																																								},
																																								{
																																									"attributes": [
																																										{
																																											"attributes": [],
																																											"computedValue": "offset",
																																											"displayName": "name",
																																											"name": "name",
																																											"type": 1,
																																											"value": "offset"
																																										},
																																										{
																																											"attributes": [],
																																											"computedValue": "false",
																																											"displayName": "enabled",
																																											"name": "enabled",
																																											"type": 5,
																																											"value": "false"
																																										}
																																									],
																																									"computedValue": "",
																																									"displayName": "2",
																																									"name": "2",
																																									"type": 2,
																																									"value": ""
																																								},
																																								{
																																									"attributes": [
																																										{
																																											"attributes": [],
																																											"computedValue": "searchString",
																																											"displayName": "name",
																																											"name": "name",
																																											"type": 1,
																																											"value": "searchString"
																																										},
																																										{
																																											"attributes": [],
																																											"computedValue": "false",
																																											"displayName": "enabled",
																																											"name": "enabled",
																																											"type": 5,
																																											"value": "false"
																																										}
																																									],
																																									"computedValue": "",
																																									"displayName": "3",
																																									"name": "3",
																																									"type": 2,
																																									"value": ""
																																								}
																																							],
																																							"computedValue": "",
																																							"displayName": "flags",
																																							"name": "flags",
																																							"type": 4,
																																							"value": ""
																																						}
																																					],
																																					"computedValue": "",
																																					"displayName": "0",
																																					"name": "0",
																																					"type": 2,
																																					"value": ""
																																				},
																																				{
																																					"attributes": [
																																						{
																																							"attributes": [
																																								{
																																									"attributes": [],
																																									"computedValue": "static",
																																									"displayName": "type",
																																									"name": "type",
																																									"type": 1,
																																									"value": "static"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "ads/",
																																									"displayName": "value",
																																									"name": "value",
																																									"type": 1,
																																									"value": "ads/"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "ads/",
																																									"displayName": "testValue",
																																									"name": "testValue",
																																									"type": 1,
																																									"value": "ads/"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "",
																																									"displayName": "context",
																																									"name": "context",
																																									"type": 1,
																																									"value": ""
																																								}
																																							],
																																							"computedValue": "",
																																							"displayName": "mapping",
																																							"name": "mapping",
																																							"type": 2,
																																							"value": ""
																																						},
																																						{
																																							"attributes": [
																																								{
																																									"attributes": [
																																										{
																																											"attributes": [],
																																											"computedValue": "page",
																																											"displayName": "name",
																																											"name": "name",
																																											"type": 1,
																																											"value": "page"
																																										},
																																										{
																																											"attributes": [],
																																											"computedValue": "false",
																																											"displayName": "enabled",
																																											"name": "enabled",
																																											"type": 5,
																																											"value": "false"
																																										}
																																									],
																																									"computedValue": "",
																																									"displayName": "0",
																																									"name": "0",
																																									"type": 2,
																																									"value": ""
																																								},
																																								{
																																									"attributes": [
																																										{
																																											"attributes": [],
																																											"computedValue": "limit",
																																											"displayName": "name",
																																											"name": "name",
																																											"type": 1,
																																											"value": "limit"
																																										},
																																										{
																																											"attributes": [],
																																											"computedValue": "false",
																																											"displayName": "enabled",
																																											"name": "enabled",
																																											"type": 5,
																																											"value": "false"
																																										}
																																									],
																																									"computedValue": "",
																																									"displayName": "1",
																																									"name": "1",
																																									"type": 2,
																																									"value": ""
																																								},
																																								{
																																									"attributes": [
																																										{
																																											"attributes": [],
																																											"computedValue": "offset",
																																											"displayName": "name",
																																											"name": "name",
																																											"type": 1,
																																											"value": "offset"
																																										},
																																										{
																																											"attributes": [],
																																											"computedValue": "false",
																																											"displayName": "enabled",
																																											"name": "enabled",
																																											"type": 5,
																																											"value": "false"
																																										}
																																									],
																																									"computedValue": "",
																																									"displayName": "2",
																																									"name": "2",
																																									"type": 2,
																																									"value": ""
																																								},
																																								{
																																									"attributes": [
																																										{
																																											"attributes": [],
																																											"computedValue": "searchString",
																																											"displayName": "name",
																																											"name": "name",
																																											"type": 1,
																																											"value": "searchString"
																																										},
																																										{
																																											"attributes": [],
																																											"computedValue": "false",
																																											"displayName": "enabled",
																																											"name": "enabled",
																																											"type": 5,
																																											"value": "false"
																																										}
																																									],
																																									"computedValue": "",
																																									"displayName": "3",
																																									"name": "3",
																																									"type": 2,
																																									"value": ""
																																								}
																																							],
																																							"computedValue": "",
																																							"displayName": "flags",
																																							"name": "flags",
																																							"type": 4,
																																							"value": ""
																																						}
																																					],
																																					"computedValue": "",
																																					"displayName": "1",
																																					"name": "1",
																																					"type": 2,
																																					"value": ""
																																				}
																																			],
																																			"computedValue": "",
																																			"displayName": "options",
																																			"name": "options",
																																			"type": 4,
																																			"value": ""
																																		},
																																		{
																																			"attributes": [
																																				{
																																					"attributes": [
																																						{
																																							"attributes": [
																																								{
																																									"attributes": [],
																																									"computedValue": "route",
																																									"displayName": "type",
																																									"name": "type",
																																									"type": 1,
																																									"value": "route"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "arg0",
																																									"displayName": "value",
																																									"name": "value",
																																									"type": 1,
																																									"value": "arg0"
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "",
																																									"displayName": "testValue",
																																									"name": "testValue",
																																									"type": 1,
																																									"value": ""
																																								},
																																								{
																																									"attributes": [],
																																									"computedValue": "",
																																									"displayName": "context",
																																									"name": "context",
																																									"type": 1,
																																									"value": ""
																																								}
																																							],
																																							"computedValue": "",
																																							"displayName": "mapping",
																																							"name": "mapping",
																																							"type": 2,
																																							"value": ""
																																						},
																																						{
																																							"attributes": [
																																								{
																																									"attributes": [
																																										{
																																											"attributes": [],
																																											"computedValue": "page",
																																											"displayName": "name",
																																											"name": "name",
																																											"type": 1,
																																											"value": "page"
																																										},
																																										{
																																											"attributes": [],
																																											"computedValue": "false",
																																											"displayName": "enabled",
																																											"name": "enabled",
																																											"type": 5,
																																											"value": "false"
																																										}
																																									],
																																									"computedValue": "",
																																									"displayName": "0",
																																									"name": "0",
																																									"type": 2,
																																									"value": ""
																																								},
																																								{
																																									"attributes": [
																																										{
																																											"attributes": [],
																																											"computedValue": "limit",
																																											"displayName": "name",
																																											"name": "name",
																																											"type": 1,
																																											"value": "limit"
																																										},
																																										{
																																											"attributes": [],
																																											"computedValue": "false",
																																											"displayName": "enabled",
																																											"name": "enabled",
																																											"type": 5,
																																											"value": "false"
																																										}
																																									],
																																									"computedValue": "",
																																									"displayName": "1",
																																									"name": "1",
																																									"type": 2,
																																									"value": ""
																																								},
																																								{
																																									"attributes": [
																																										{
																																											"attributes": [],
																																											"computedValue": "offset",
																																											"displayName": "name",
																																											"name": "name",
																																											"type": 1,
																																											"value": "offset"
																																										},
																																										{
																																											"attributes": [],
																																											"computedValue": "false",
																																											"displayName": "enabled",
																																											"name": "enabled",
																																											"type": 5,
																																											"value": "false"
																																										}
																																									],
																																									"computedValue": "",
																																									"displayName": "2",
																																									"name": "2",
																																									"type": 2,
																																									"value": ""
																																								},
																																								{
																																									"attributes": [
																																										{
																																											"attributes": [],
																																											"computedValue": "searchString",
																																											"displayName": "name",
																																											"name": "name",
																																											"type": 1,
																																											"value": "searchString"
																																										},
																																										{
																																											"attributes": [],
																																											"computedValue": "false",
																																											"displayName": "enabled",
																																											"name": "enabled",
																																											"type": 5,
																																											"value": "false"
																																										}
																																									],
																																									"computedValue": "",
																																									"displayName": "3",
																																									"name": "3",
																																									"type": 2,
																																									"value": ""
																																								}
																																							],
																																							"computedValue": "",
																																							"displayName": "flags",
																																							"name": "flags",
																																							"type": 4,
																																							"value": ""
																																						}
																																					],
																																					"computedValue": "",
																																					"displayName": "0",
																																					"name": "0",
																																					"type": 2,
																																					"value": ""
																																				}
																																			],
																																			"computedValue": "",
																																			"displayName": "params",
																																			"name": "params",
																																			"type": 4,
																																			"value": ""
																																		}
																																	],
																																	"computedValue": "",
																																	"displayName": "settings",
																																	"name": "settings",
																																	"type": 2,
																																	"value": ""
																																},
																																{
																																	"attributes": [],
																																	"computedValue": "",
																																	"displayName": "params",
																																	"name": "params",
																																	"type": 4,
																																	"value": ""
																																},
																																{
																																	"attributes": [],
																																	"computedValue": "crud_adaptor",
																																	"displayName": "plugin",
																																	"name": "plugin",
																																	"type": 1,
																																	"value": "crud_adaptor"
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
																																			"computedValue": "undefined",
																																			"displayName": "query",
																																			"name": "query",
																																			"type": 0,
																																			"value": "undefined"
																																		},
																																		{
																																			"attributes": [],
																																			"computedValue": "undefined",
																																			"displayName": "trackBy",
																																			"name": "trackBy",
																																			"type": 0,
																																			"value": "undefined"
																																		},
																																		{
																																			"attributes": [],
																																			"computedValue": "",
																																			"displayName": "bindings",
																																			"name": "bindings",
																																			"type": 4,
																																			"value": ""
																																		}
																																	],
																																	"computedValue": "",
																																	"displayName": "renderer",
																																	"name": "renderer",
																																	"type": 2,
																																	"value": ""
																																}
																															],
																															"computedValue": "",
																															"displayName": "datasource",
																															"name": "datasource",
																															"type": 2,
																															"value": ""
																														}
																													],
																													"computedValue": "",
																													"displayName": "2",
																													"name": "2",
																													"type": 2,
																													"value": ""
																												}
																											],
																											"computedValue": "",
																											"displayName": "contexts",
																											"name": "contexts",
																											"type": 4,
																											"value": ""
																										},
																										{
																											"attributes": [
																												{
																													"attributes": [
																														{
																															"attributes": [],
																															"computedValue": "",
																															"displayName": "settings",
																															"name": "settings",
																															"type": 2,
																															"value": ""
																														}
																													],
																													"computedValue": "",
																													"displayName": "0",
																													"name": "0",
																													"type": 2,
																													"value": ""
																												}
																											],
																											"computedValue": "",
																											"displayName": "rowSettings",
																											"name": "rowSettings",
																											"type": 4,
																											"value": ""
																										},
																										{
																											"attributes": [
																												{
																													"attributes": [],
																													"computedValue": "",
																													"displayName": "readUserIds",
																													"name": "readUserIds",
																													"type": 4,
																													"value": ""
																												},
																												{
																													"attributes": [],
																													"computedValue": "",
																													"displayName": "writeUserIds",
																													"name": "writeUserIds",
																													"type": 4,
																													"value": ""
																												},
																												{
																													"attributes": [],
																													"computedValue": "",
																													"displayName": "deleteUserIds",
																													"name": "deleteUserIds",
																													"type": 4,
																													"value": ""
																												}
																											],
																											"computedValue": "",
																											"displayName": "entityPermissions",
																											"name": "entityPermissions",
																											"type": 2,
																											"value": ""
																										},
																										{
																											"attributes": [],
																											"computedValue": "undefined",
																											"displayName": "id",
																											"name": "id",
																											"type": 0,
																											"value": "undefined"
																										},
																										{
																											"attributes": [],
																											"computedValue": "split",
																											"displayName": "layoutType",
																											"name": "layoutType",
																											"type": 1,
																											"value": "split"
																										},
																										{
																											"attributes": [],
																											"computedValue": "form",
																											"displayName": "displayType",
																											"name": "displayType",
																											"type": 1,
																											"value": "form"
																										},
																										{
																											"attributes": [],
																											"computedValue": "undefined",
																											"displayName": "name",
																											"name": "name",
																											"type": 0,
																											"value": "undefined"
																										},
																										{
																											"attributes": [],
																											"computedValue": "undefined",
																											"displayName": "title",
																											"name": "title",
																											"type": 0,
																											"value": "undefined"
																										},
																										{
																											"attributes": [],
																											"computedValue": "spearhead",
																											"displayName": "site",
																											"name": "site",
																											"type": 1,
																											"value": "spearhead"
																										},
																										{
																											"attributes": [],
																											"computedValue": "undefined",
																											"displayName": "userId",
																											"name": "userId",
																											"type": 0,
																											"value": "undefined"
																										},
																										{
																											"attributes": [],
																											"computedValue": "undefined",
																											"displayName": "path",
																											"name": "path",
																											"type": 0,
																											"value": "undefined"
																										},
																										{
																											"attributes": [
																												{
																													"attributes": [
																														{
																															"attributes": [],
																															"computedValue": "",
																															"displayName": "settings",
																															"name": "settings",
																															"type": 2,
																															"value": ""
																														},
																														{
																															"attributes": [],
																															"computedValue": "undefined",
																															"displayName": "plugin",
																															"name": "plugin",
																															"type": 0,
																															"value": "undefined"
																														}
																													],
																													"computedValue": "",
																													"displayName": "dataduct",
																													"name": "dataduct",
																													"type": 2,
																													"value": ""
																												}
																											],
																											"computedValue": "",
																											"displayName": "persistence",
																											"name": "persistence",
																											"type": 2,
																											"value": ""
																										},
																										{
																											"attributes": [
																												{
																													"attributes": [],
																													"computedValue": "",
																													"displayName": "settings",
																													"name": "settings",
																													"type": 2,
																													"value": ""
																												}
																											],
																											"computedValue": "",
																											"displayName": "layoutSetting",
																											"name": "layoutSetting",
																											"type": 2,
																											"value": ""
																										}
																									],
																									"computedValue": "",
																									"displayName": "settings",
																									"name": "settings",
																									"type": 2,
																									"value": ""
																								},
																								{
																									"attributes": [],
																									"computedValue": "false",
																									"displayName": "locked",
																									"name": "locked",
																									"type": 5,
																									"value": "false"
																								},
																								{
																									"attributes": [],
																									"computedValue": "",
																									"displayName": "contexts",
																									"name": "contexts",
																									"type": 4,
																									"value": ""
																								},
																								{
																									"attributes": [],
																									"computedValue": "",
																									"displayName": "name",
																									"name": "name",
																									"type": 1,
																									"value": ""
																								},
																								{
																									"attributes": [],
																									"computedValue": "",
																									"displayName": "label",
																									"name": "label",
																									"type": 1,
																									"value": ""
																								},
																								{
																									"attributes": [],
																									"computedValue": "panel",
																									"displayName": "contentPlugin",
																									"name": "contentPlugin",
																									"type": 1,
																									"value": "panel"
																								},
																								{
																									"attributes": [
																										{
																											"attributes": [],
																											"computedValue": "",
																											"displayName": "condition",
																											"name": "condition",
																											"type": 1,
																											"value": ""
																										},
																										{
																											"attributes": [],
																											"computedValue": "",
																											"displayName": "rules",
																											"name": "rules",
																											"type": 4,
																											"value": ""
																										}
																									],
																									"computedValue": "",
																									"displayName": "rule",
																									"name": "rule",
																									"type": 2,
																									"value": ""
																								}
																							],
																							"computedValue": "",
																							"displayName": "1",
																							"name": "1",
																							"type": 2,
																							"value": ""
																						}
																					],
																					"computedValue": "",
																					"displayName": "panes",
																					"name": "panes",
																					"type": 4,
																					"value": ""
																				},
																				{
																					"attributes": [],
																					"computedValue": "undefined",
																					"displayName": "name",
																					"name": "name",
																					"type": 0,
																					"value": "undefined"
																				},
																				{
																					"attributes": [],
																					"computedValue": "undefined",
																					"displayName": "label",
																					"name": "label",
																					"type": 0,
																					"value": "undefined"
																				},
																				{
																					"attributes": [],
																					"computedValue": "",
																					"displayName": "stylePlugin",
																					"name": "stylePlugin",
																					"type": 1,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "",
																							"displayName": "settings",
																							"name": "settings",
																							"type": 2,
																							"value": ""
																						}
																					],
																					"computedValue": "",
																					"displayName": "columnSetting",
																					"name": "columnSetting",
																					"type": 2,
																					"value": ""
																				}
																			],
																			"computedValue": "",
																			"displayName": "0",
																			"name": "0",
																			"type": 2,
																			"value": ""
																		}
																	],
																	"computedValue": "",
																	"displayName": "panels",
																	"name": "panels",
																	"type": 4,
																	"value": ""
																},
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "terms",
																					"displayName": "name",
																					"name": "name",
																					"type": 1,
																					"value": "terms"
																				},
																				{
																					"attributes": [],
																					"computedValue": "data",
																					"displayName": "adaptor",
																					"name": "adaptor",
																					"type": 1,
																					"value": "data"
																				},
																				{
																					"attributes": [],
																					"computedValue": "state",
																					"displayName": "plugin",
																					"name": "plugin",
																					"type": 1,
																					"value": "state"
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [
																								{
																									"attributes": [],
																									"computedValue": "",
																									"displayName": "0",
																									"name": "0",
																									"type": 2,
																									"value": ""
																								},
																								{
																									"attributes": [],
																									"computedValue": "",
																									"displayName": "1",
																									"name": "1",
																									"type": 2,
																									"value": ""
																								},
																								{
																									"attributes": [],
																									"computedValue": "",
																									"displayName": "2",
																									"name": "2",
																									"type": 2,
																									"value": ""
																								}
																							],
																							"computedValue": "",
																							"displayName": "value",
																							"name": "value",
																							"type": 4,
																							"value": ""
																						}
																					],
																					"computedValue": "",
																					"displayName": "data",
																					"name": "data",
																					"type": 2,
																					"value": ""
																				}
																			],
																			"computedValue": "",
																			"displayName": "0",
																			"name": "0",
																			"type": 2,
																			"value": ""
																		},
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "characters",
																					"displayName": "name",
																					"name": "name",
																					"type": 1,
																					"value": "characters"
																				},
																				{
																					"attributes": [],
																					"computedValue": "datasource",
																					"displayName": "adaptor",
																					"name": "adaptor",
																					"type": 1,
																					"value": "datasource"
																				},
																				{
																					"attributes": [],
																					"computedValue": "datasource",
																					"displayName": "plugin",
																					"name": "plugin",
																					"type": 1,
																					"value": "datasource"
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [
																								{
																									"attributes": [],
																									"computedValue": "[{\"id\":1,\"name\":\"batman\"},{\"id\":2,\"name\":\"superman\"}]",
																									"displayName": "data",
																									"name": "data",
																									"type": 1,
																									"value": "[{\"id\":1,\"name\":\"batman\"},{\"id\":2,\"name\":\"superman\"}]"
																								}
																							],
																							"computedValue": "",
																							"displayName": "settings",
																							"name": "settings",
																							"type": 2,
																							"value": ""
																						},
																						{
																							"attributes": [],
																							"computedValue": "",
																							"displayName": "params",
																							"name": "params",
																							"type": 4,
																							"value": ""
																						},
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
																									"computedValue": "pane",
																									"displayName": "type",
																									"name": "type",
																									"type": 1,
																									"value": "pane"
																								},
																								{
																									"attributes": [],
																									"computedValue": "undefined",
																									"displayName": "query",
																									"name": "query",
																									"type": 0,
																									"value": "undefined"
																								},
																								{
																									"attributes": [],
																									"computedValue": "undefined",
																									"displayName": "trackBy",
																									"name": "trackBy",
																									"type": 0,
																									"value": "undefined"
																								},
																								{
																									"attributes": [],
																									"computedValue": "",
																									"displayName": "bindings",
																									"name": "bindings",
																									"type": 4,
																									"value": ""
																								}
																							],
																							"computedValue": "",
																							"displayName": "renderer",
																							"name": "renderer",
																							"type": 2,
																							"value": ""
																						}
																					],
																					"computedValue": "",
																					"displayName": "datasource",
																					"name": "datasource",
																					"type": 2,
																					"value": ""
																				}
																			],
																			"computedValue": "",
																			"displayName": "1",
																			"name": "1",
																			"type": 2,
																			"value": ""
																		},
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "ad",
																					"displayName": "name",
																					"name": "name",
																					"type": 1,
																					"value": "ad"
																				},
																				{
																					"attributes": [],
																					"computedValue": "datasource",
																					"displayName": "adaptor",
																					"name": "adaptor",
																					"type": 1,
																					"value": "datasource"
																				},
																				{
																					"attributes": [],
																					"computedValue": "datasource",
																					"displayName": "plugin",
																					"name": "plugin",
																					"type": 1,
																					"value": "datasource"
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [
																								{
																									"attributes": [],
																									"computedValue": "aws_s3_entity",
																									"displayName": "adaptorName",
																									"name": "adaptorName",
																									"type": 1,
																									"value": "aws_s3_entity"
																								},
																								{
																									"attributes": [],
																									"computedValue": "bucket=:bucket&prefix=:prefix",
																									"displayName": "optionsString",
																									"name": "optionsString",
																									"type": 1,
																									"value": "bucket=:bucket&prefix=:prefix"
																								},
																								{
																									"attributes": [],
																									"computedValue": "identity=:identity",
																									"displayName": "paramsString",
																									"name": "paramsString",
																									"type": 1,
																									"value": "identity=:identity"
																								},
																								{
																									"attributes": [
																										{
																											"attributes": [
																												{
																													"attributes": [
																														{
																															"attributes": [],
																															"computedValue": "static",
																															"displayName": "type",
																															"name": "type",
																															"type": 1,
																															"value": "static"
																														},
																														{
																															"attributes": [],
																															"computedValue": "classifieds-ui-prod",
																															"displayName": "value",
																															"name": "value",
																															"type": 1,
																															"value": "classifieds-ui-prod"
																														},
																														{
																															"attributes": [],
																															"computedValue": "classifieds-ui-prod",
																															"displayName": "testValue",
																															"name": "testValue",
																															"type": 1,
																															"value": "classifieds-ui-prod"
																														},
																														{
																															"attributes": [],
																															"computedValue": "",
																															"displayName": "context",
																															"name": "context",
																															"type": 1,
																															"value": ""
																														}
																													],
																													"computedValue": "",
																													"displayName": "mapping",
																													"name": "mapping",
																													"type": 2,
																													"value": ""
																												},
																												{
																													"attributes": [
																														{
																															"attributes": [
																																{
																																	"attributes": [],
																																	"computedValue": "page",
																																	"displayName": "name",
																																	"name": "name",
																																	"type": 1,
																																	"value": "page"
																																},
																																{
																																	"attributes": [],
																																	"computedValue": "false",
																																	"displayName": "enabled",
																																	"name": "enabled",
																																	"type": 5,
																																	"value": "false"
																																}
																															],
																															"computedValue": "",
																															"displayName": "0",
																															"name": "0",
																															"type": 2,
																															"value": ""
																														},
																														{
																															"attributes": [
																																{
																																	"attributes": [],
																																	"computedValue": "limit",
																																	"displayName": "name",
																																	"name": "name",
																																	"type": 1,
																																	"value": "limit"
																																},
																																{
																																	"attributes": [],
																																	"computedValue": "false",
																																	"displayName": "enabled",
																																	"name": "enabled",
																																	"type": 5,
																																	"value": "false"
																																}
																															],
																															"computedValue": "",
																															"displayName": "1",
																															"name": "1",
																															"type": 2,
																															"value": ""
																														},
																														{
																															"attributes": [
																																{
																																	"attributes": [],
																																	"computedValue": "offset",
																																	"displayName": "name",
																																	"name": "name",
																																	"type": 1,
																																	"value": "offset"
																																},
																																{
																																	"attributes": [],
																																	"computedValue": "false",
																																	"displayName": "enabled",
																																	"name": "enabled",
																																	"type": 5,
																																	"value": "false"
																																}
																															],
																															"computedValue": "",
																															"displayName": "2",
																															"name": "2",
																															"type": 2,
																															"value": ""
																														},
																														{
																															"attributes": [
																																{
																																	"attributes": [],
																																	"computedValue": "searchString",
																																	"displayName": "name",
																																	"name": "name",
																																	"type": 1,
																																	"value": "searchString"
																																},
																																{
																																	"attributes": [],
																																	"computedValue": "false",
																																	"displayName": "enabled",
																																	"name": "enabled",
																																	"type": 5,
																																	"value": "false"
																																}
																															],
																															"computedValue": "",
																															"displayName": "3",
																															"name": "3",
																															"type": 2,
																															"value": ""
																														}
																													],
																													"computedValue": "",
																													"displayName": "flags",
																													"name": "flags",
																													"type": 4,
																													"value": ""
																												}
																											],
																											"computedValue": "",
																											"displayName": "0",
																											"name": "0",
																											"type": 2,
																											"value": ""
																										},
																										{
																											"attributes": [
																												{
																													"attributes": [
																														{
																															"attributes": [],
																															"computedValue": "static",
																															"displayName": "type",
																															"name": "type",
																															"type": 1,
																															"value": "static"
																														},
																														{
																															"attributes": [],
																															"computedValue": "ads/",
																															"displayName": "value",
																															"name": "value",
																															"type": 1,
																															"value": "ads/"
																														},
																														{
																															"attributes": [],
																															"computedValue": "ads/",
																															"displayName": "testValue",
																															"name": "testValue",
																															"type": 1,
																															"value": "ads/"
																														},
																														{
																															"attributes": [],
																															"computedValue": "",
																															"displayName": "context",
																															"name": "context",
																															"type": 1,
																															"value": ""
																														}
																													],
																													"computedValue": "",
																													"displayName": "mapping",
																													"name": "mapping",
																													"type": 2,
																													"value": ""
																												},
																												{
																													"attributes": [
																														{
																															"attributes": [
																																{
																																	"attributes": [],
																																	"computedValue": "page",
																																	"displayName": "name",
																																	"name": "name",
																																	"type": 1,
																																	"value": "page"
																																},
																																{
																																	"attributes": [],
																																	"computedValue": "false",
																																	"displayName": "enabled",
																																	"name": "enabled",
																																	"type": 5,
																																	"value": "false"
																																}
																															],
																															"computedValue": "",
																															"displayName": "0",
																															"name": "0",
																															"type": 2,
																															"value": ""
																														},
																														{
																															"attributes": [
																																{
																																	"attributes": [],
																																	"computedValue": "limit",
																																	"displayName": "name",
																																	"name": "name",
																																	"type": 1,
																																	"value": "limit"
																																},
																																{
																																	"attributes": [],
																																	"computedValue": "false",
																																	"displayName": "enabled",
																																	"name": "enabled",
																																	"type": 5,
																																	"value": "false"
																																}
																															],
																															"computedValue": "",
																															"displayName": "1",
																															"name": "1",
																															"type": 2,
																															"value": ""
																														},
																														{
																															"attributes": [
																																{
																																	"attributes": [],
																																	"computedValue": "offset",
																																	"displayName": "name",
																																	"name": "name",
																																	"type": 1,
																																	"value": "offset"
																																},
																																{
																																	"attributes": [],
																																	"computedValue": "false",
																																	"displayName": "enabled",
																																	"name": "enabled",
																																	"type": 5,
																																	"value": "false"
																																}
																															],
																															"computedValue": "",
																															"displayName": "2",
																															"name": "2",
																															"type": 2,
																															"value": ""
																														},
																														{
																															"attributes": [
																																{
																																	"attributes": [],
																																	"computedValue": "searchString",
																																	"displayName": "name",
																																	"name": "name",
																																	"type": 1,
																																	"value": "searchString"
																																},
																																{
																																	"attributes": [],
																																	"computedValue": "false",
																																	"displayName": "enabled",
																																	"name": "enabled",
																																	"type": 5,
																																	"value": "false"
																																}
																															],
																															"computedValue": "",
																															"displayName": "3",
																															"name": "3",
																															"type": 2,
																															"value": ""
																														}
																													],
																													"computedValue": "",
																													"displayName": "flags",
																													"name": "flags",
																													"type": 4,
																													"value": ""
																												}
																											],
																											"computedValue": "",
																											"displayName": "1",
																											"name": "1",
																											"type": 2,
																											"value": ""
																										}
																									],
																									"computedValue": "",
																									"displayName": "options",
																									"name": "options",
																									"type": 4,
																									"value": ""
																								},
																								{
																									"attributes": [
																										{
																											"attributes": [
																												{
																													"attributes": [
																														{
																															"attributes": [],
																															"computedValue": "route",
																															"displayName": "type",
																															"name": "type",
																															"type": 1,
																															"value": "route"
																														},
																														{
																															"attributes": [],
																															"computedValue": "arg0",
																															"displayName": "value",
																															"name": "value",
																															"type": 1,
																															"value": "arg0"
																														},
																														{
																															"attributes": [],
																															"computedValue": "",
																															"displayName": "testValue",
																															"name": "testValue",
																															"type": 1,
																															"value": ""
																														},
																														{
																															"attributes": [],
																															"computedValue": "",
																															"displayName": "context",
																															"name": "context",
																															"type": 1,
																															"value": ""
																														}
																													],
																													"computedValue": "",
																													"displayName": "mapping",
																													"name": "mapping",
																													"type": 2,
																													"value": ""
																												},
																												{
																													"attributes": [
																														{
																															"attributes": [
																																{
																																	"attributes": [],
																																	"computedValue": "page",
																																	"displayName": "name",
																																	"name": "name",
																																	"type": 1,
																																	"value": "page"
																																},
																																{
																																	"attributes": [],
																																	"computedValue": "false",
																																	"displayName": "enabled",
																																	"name": "enabled",
																																	"type": 5,
																																	"value": "false"
																																}
																															],
																															"computedValue": "",
																															"displayName": "0",
																															"name": "0",
																															"type": 2,
																															"value": ""
																														},
																														{
																															"attributes": [
																																{
																																	"attributes": [],
																																	"computedValue": "limit",
																																	"displayName": "name",
																																	"name": "name",
																																	"type": 1,
																																	"value": "limit"
																																},
																																{
																																	"attributes": [],
																																	"computedValue": "false",
																																	"displayName": "enabled",
																																	"name": "enabled",
																																	"type": 5,
																																	"value": "false"
																																}
																															],
																															"computedValue": "",
																															"displayName": "1",
																															"name": "1",
																															"type": 2,
																															"value": ""
																														},
																														{
																															"attributes": [
																																{
																																	"attributes": [],
																																	"computedValue": "offset",
																																	"displayName": "name",
																																	"name": "name",
																																	"type": 1,
																																	"value": "offset"
																																},
																																{
																																	"attributes": [],
																																	"computedValue": "false",
																																	"displayName": "enabled",
																																	"name": "enabled",
																																	"type": 5,
																																	"value": "false"
																																}
																															],
																															"computedValue": "",
																															"displayName": "2",
																															"name": "2",
																															"type": 2,
																															"value": ""
																														},
																														{
																															"attributes": [
																																{
																																	"attributes": [],
																																	"computedValue": "searchString",
																																	"displayName": "name",
																																	"name": "name",
																																	"type": 1,
																																	"value": "searchString"
																																},
																																{
																																	"attributes": [],
																																	"computedValue": "false",
																																	"displayName": "enabled",
																																	"name": "enabled",
																																	"type": 5,
																																	"value": "false"
																																}
																															],
																															"computedValue": "",
																															"displayName": "3",
																															"name": "3",
																															"type": 2,
																															"value": ""
																														}
																													],
																													"computedValue": "",
																													"displayName": "flags",
																													"name": "flags",
																													"type": 4,
																													"value": ""
																												}
																											],
																											"computedValue": "",
																											"displayName": "0",
																											"name": "0",
																											"type": 2,
																											"value": ""
																										}
																									],
																									"computedValue": "",
																									"displayName": "params",
																									"name": "params",
																									"type": 4,
																									"value": ""
																								}
																							],
																							"computedValue": "",
																							"displayName": "settings",
																							"name": "settings",
																							"type": 2,
																							"value": ""
																						},
																						{
																							"attributes": [],
																							"computedValue": "",
																							"displayName": "params",
																							"name": "params",
																							"type": 4,
																							"value": ""
																						},
																						{
																							"attributes": [],
																							"computedValue": "crud_adaptor",
																							"displayName": "plugin",
																							"name": "plugin",
																							"type": 1,
																							"value": "crud_adaptor"
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
																									"computedValue": "undefined",
																									"displayName": "query",
																									"name": "query",
																									"type": 0,
																									"value": "undefined"
																								},
																								{
																									"attributes": [],
																									"computedValue": "undefined",
																									"displayName": "trackBy",
																									"name": "trackBy",
																									"type": 0,
																									"value": "undefined"
																								},
																								{
																									"attributes": [],
																									"computedValue": "",
																									"displayName": "bindings",
																									"name": "bindings",
																									"type": 4,
																									"value": ""
																								}
																							],
																							"computedValue": "",
																							"displayName": "renderer",
																							"name": "renderer",
																							"type": 2,
																							"value": ""
																						}
																					],
																					"computedValue": "",
																					"displayName": "datasource",
																					"name": "datasource",
																					"type": 2,
																					"value": ""
																				}
																			],
																			"computedValue": "",
																			"displayName": "2",
																			"name": "2",
																			"type": 2,
																			"value": ""
																		}
																	],
																	"computedValue": "",
																	"displayName": "contexts",
																	"name": "contexts",
																	"type": 4,
																	"value": ""
																},
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "",
																					"displayName": "settings",
																					"name": "settings",
																					"type": 2,
																					"value": ""
																				}
																			],
																			"computedValue": "",
																			"displayName": "0",
																			"name": "0",
																			"type": 2,
																			"value": ""
																		}
																	],
																	"computedValue": "",
																	"displayName": "rowSettings",
																	"name": "rowSettings",
																	"type": 4,
																	"value": ""
																},
																{
																	"attributes": [
																		{
																			"attributes": [],
																			"computedValue": "",
																			"displayName": "readUserIds",
																			"name": "readUserIds",
																			"type": 4,
																			"value": ""
																		},
																		{
																			"attributes": [],
																			"computedValue": "",
																			"displayName": "writeUserIds",
																			"name": "writeUserIds",
																			"type": 4,
																			"value": ""
																		},
																		{
																			"attributes": [],
																			"computedValue": "",
																			"displayName": "deleteUserIds",
																			"name": "deleteUserIds",
																			"type": 4,
																			"value": ""
																		}
																	],
																	"computedValue": "",
																	"displayName": "entityPermissions",
																	"name": "entityPermissions",
																	"type": 2,
																	"value": ""
																},
																{
																	"attributes": [],
																	"computedValue": "undefined",
																	"displayName": "id",
																	"name": "id",
																	"type": 0,
																	"value": "undefined"
																},
																{
																	"attributes": [],
																	"computedValue": "split",
																	"displayName": "layoutType",
																	"name": "layoutType",
																	"type": 1,
																	"value": "split"
																},
																{
																	"attributes": [],
																	"computedValue": "form",
																	"displayName": "displayType",
																	"name": "displayType",
																	"type": 1,
																	"value": "form"
																},
																{
																	"attributes": [],
																	"computedValue": "terms_form",
																	"displayName": "name",
																	"name": "name",
																	"type": 1,
																	"value": "terms_form"
																},
																{
																	"attributes": [],
																	"computedValue": "terms_form",
																	"displayName": "title",
																	"name": "title",
																	"type": 1,
																	"value": "terms_form"
																},
																{
																	"attributes": [],
																	"computedValue": "spearhead",
																	"displayName": "site",
																	"name": "site",
																	"type": 1,
																	"value": "spearhead"
																},
																{
																	"attributes": [],
																	"computedValue": "undefined",
																	"displayName": "userId",
																	"name": "userId",
																	"type": 0,
																	"value": "undefined"
																},
																{
																	"attributes": [],
																	"computedValue": "undefined",
																	"displayName": "path",
																	"name": "path",
																	"type": 0,
																	"value": "undefined"
																},
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "",
																					"displayName": "settings",
																					"name": "settings",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [],
																					"computedValue": "undefined",
																					"displayName": "plugin",
																					"name": "plugin",
																					"type": 0,
																					"value": "undefined"
																				}
																			],
																			"computedValue": "",
																			"displayName": "dataduct",
																			"name": "dataduct",
																			"type": 2,
																			"value": ""
																		}
																	],
																	"computedValue": "",
																	"displayName": "persistence",
																	"name": "persistence",
																	"type": 2,
																	"value": ""
																},
																{
																	"attributes": [
																		{
																			"attributes": [],
																			"computedValue": "",
																			"displayName": "settings",
																			"name": "settings",
																			"type": 2,
																			"value": ""
																		}
																	],
																	"computedValue": "",
																	"displayName": "layoutSetting",
																	"name": "layoutSetting",
																	"type": 2,
																	"value": ""
																}
															],
															"computedValue": "",
															"displayName": "settings",
															"name": "settings",
															"type": 2,
															"value": ""
														},
														{
															"attributes": [],
															"computedValue": "false",
															"displayName": "locked",
															"name": "locked",
															"type": 5,
															"value": "false"
														},
														{
															"attributes": [],
															"computedValue": "",
															"displayName": "contexts",
															"name": "contexts",
															"type": 4,
															"value": ""
														},
														{
															"attributes": [],
															"computedValue": "terms",
															"displayName": "name",
															"name": "name",
															"type": 1,
															"value": "terms"
														},
														{
															"attributes": [],
															"computedValue": "terms",
															"displayName": "label",
															"name": "label",
															"type": 1,
															"value": "terms"
														},
														{
															"attributes": [],
															"computedValue": "panel",
															"displayName": "contentPlugin",
															"name": "contentPlugin",
															"type": 1,
															"value": "panel"
														},
														{
															"attributes": [
																{
																	"attributes": [],
																	"computedValue": "",
																	"displayName": "condition",
																	"name": "condition",
																	"type": 1,
																	"value": ""
																},
																{
																	"attributes": [],
																	"computedValue": "",
																	"displayName": "rules",
																	"name": "rules",
																	"type": 4,
																	"value": ""
																}
															],
															"computedValue": "",
															"displayName": "rule",
															"name": "rule",
															"type": 2,
															"value": ""
														}
													],
													"computedValue": "",
													"displayName": "0",
													"name": "0",
													"type": 2,
													"value": ""
												}
											],
											"computedValue": "",
											"displayName": "panes",
											"name": "panes",
											"type": 4,
											"value": ""
										},
										{
											"attributes": [],
											"computedValue": "undefined",
											"displayName": "name",
											"name": "name",
											"type": 0,
											"value": "undefined"
										},
										{
											"attributes": [],
											"computedValue": "undefined",
											"displayName": "label",
											"name": "label",
											"type": 0,
											"value": "undefined"
										},
										{
											"attributes": [],
											"computedValue": "form_section",
											"displayName": "stylePlugin",
											"name": "stylePlugin",
											"type": 1,
											"value": "form_section"
										},
										{
											"attributes": [
												{
													"attributes": [],
													"computedValue": "",
													"displayName": "settings",
													"name": "settings",
													"type": 2,
													"value": ""
												}
											],
											"computedValue": "",
											"displayName": "columnSetting",
											"name": "columnSetting",
											"type": 2,
											"value": ""
										}
									],
									"computedValue": "",
									"displayName": "0",
									"name": "0",
									"type": 2,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "panels",
							"name": "panels",
							"type": 4,
							"value": ""
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "terms",
											"displayName": "name",
											"name": "name",
											"type": 1,
											"value": "terms"
										},
										{
											"attributes": [],
											"computedValue": "data",
											"displayName": "adaptor",
											"name": "adaptor",
											"type": 1,
											"value": "data"
										},
										{
											"attributes": [],
											"computedValue": "state",
											"displayName": "plugin",
											"name": "plugin",
											"type": 1,
											"value": "state"
										},
										{
											"attributes": [
												{
													"attributes": [
														{
															"attributes": [],
															"computedValue": "",
															"displayName": "0",
															"name": "0",
															"type": 2,
															"value": ""
														},
														{
															"attributes": [],
															"computedValue": "",
															"displayName": "1",
															"name": "1",
															"type": 2,
															"value": ""
														},
														{
															"attributes": [],
															"computedValue": "",
															"displayName": "2",
															"name": "2",
															"type": 2,
															"value": ""
														}
													],
													"computedValue": "",
													"displayName": "value",
													"name": "value",
													"type": 4,
													"value": ""
												}
											],
											"computedValue": "",
											"displayName": "data",
											"name": "data",
											"type": 2,
											"value": ""
										}
									],
									"computedValue": "",
									"displayName": "0",
									"name": "0",
									"type": 2,
									"value": ""
								},
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "characters",
											"displayName": "name",
											"name": "name",
											"type": 1,
											"value": "characters"
										},
										{
											"attributes": [],
											"computedValue": "datasource",
											"displayName": "adaptor",
											"name": "adaptor",
											"type": 1,
											"value": "datasource"
										},
										{
											"attributes": [],
											"computedValue": "datasource",
											"displayName": "plugin",
											"name": "plugin",
											"type": 1,
											"value": "datasource"
										},
										{
											"attributes": [
												{
													"attributes": [
														{
															"attributes": [],
															"computedValue": "[{\"id\":1,\"name\":\"batman\"},{\"id\":2,\"name\":\"superman\"}]",
															"displayName": "data",
															"name": "data",
															"type": 1,
															"value": "[{\"id\":1,\"name\":\"batman\"},{\"id\":2,\"name\":\"superman\"}]"
														}
													],
													"computedValue": "",
													"displayName": "settings",
													"name": "settings",
													"type": 2,
													"value": ""
												},
												{
													"attributes": [],
													"computedValue": "",
													"displayName": "params",
													"name": "params",
													"type": 4,
													"value": ""
												},
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
															"computedValue": "pane",
															"displayName": "type",
															"name": "type",
															"type": 1,
															"value": "pane"
														},
														{
															"attributes": [],
															"computedValue": "undefined",
															"displayName": "query",
															"name": "query",
															"type": 0,
															"value": "undefined"
														},
														{
															"attributes": [],
															"computedValue": "undefined",
															"displayName": "trackBy",
															"name": "trackBy",
															"type": 0,
															"value": "undefined"
														},
														{
															"attributes": [],
															"computedValue": "",
															"displayName": "bindings",
															"name": "bindings",
															"type": 4,
															"value": ""
														}
													],
													"computedValue": "",
													"displayName": "renderer",
													"name": "renderer",
													"type": 2,
													"value": ""
												}
											],
											"computedValue": "",
											"displayName": "datasource",
											"name": "datasource",
											"type": 2,
											"value": ""
										}
									],
									"computedValue": "",
									"displayName": "1",
									"name": "1",
									"type": 2,
									"value": ""
								},
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "ad",
											"displayName": "name",
											"name": "name",
											"type": 1,
											"value": "ad"
										},
										{
											"attributes": [],
											"computedValue": "datasource",
											"displayName": "adaptor",
											"name": "adaptor",
											"type": 1,
											"value": "datasource"
										},
										{
											"attributes": [],
											"computedValue": "datasource",
											"displayName": "plugin",
											"name": "plugin",
											"type": 1,
											"value": "datasource"
										},
										{
											"attributes": [
												{
													"attributes": [
														{
															"attributes": [],
															"computedValue": "aws_s3_entity",
															"displayName": "adaptorName",
															"name": "adaptorName",
															"type": 1,
															"value": "aws_s3_entity"
														},
														{
															"attributes": [],
															"computedValue": "bucket=:bucket&prefix=:prefix",
															"displayName": "optionsString",
															"name": "optionsString",
															"type": 1,
															"value": "bucket=:bucket&prefix=:prefix"
														},
														{
															"attributes": [],
															"computedValue": "identity=:identity",
															"displayName": "paramsString",
															"name": "paramsString",
															"type": 1,
															"value": "identity=:identity"
														},
														{
															"attributes": [
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "static",
																					"displayName": "type",
																					"name": "type",
																					"type": 1,
																					"value": "static"
																				},
																				{
																					"attributes": [],
																					"computedValue": "classifieds-ui-prod",
																					"displayName": "value",
																					"name": "value",
																					"type": 1,
																					"value": "classifieds-ui-prod"
																				},
																				{
																					"attributes": [],
																					"computedValue": "classifieds-ui-prod",
																					"displayName": "testValue",
																					"name": "testValue",
																					"type": 1,
																					"value": "classifieds-ui-prod"
																				},
																				{
																					"attributes": [],
																					"computedValue": "",
																					"displayName": "context",
																					"name": "context",
																					"type": 1,
																					"value": ""
																				}
																			],
																			"computedValue": "",
																			"displayName": "mapping",
																			"name": "mapping",
																			"type": 2,
																			"value": ""
																		},
																		{
																			"attributes": [
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "page",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "page"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "0",
																					"name": "0",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "limit",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "limit"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "1",
																					"name": "1",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "offset",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "offset"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "2",
																					"name": "2",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "searchString",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "searchString"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "3",
																					"name": "3",
																					"type": 2,
																					"value": ""
																				}
																			],
																			"computedValue": "",
																			"displayName": "flags",
																			"name": "flags",
																			"type": 4,
																			"value": ""
																		}
																	],
																	"computedValue": "",
																	"displayName": "0",
																	"name": "0",
																	"type": 2,
																	"value": ""
																},
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "static",
																					"displayName": "type",
																					"name": "type",
																					"type": 1,
																					"value": "static"
																				},
																				{
																					"attributes": [],
																					"computedValue": "ads/",
																					"displayName": "value",
																					"name": "value",
																					"type": 1,
																					"value": "ads/"
																				},
																				{
																					"attributes": [],
																					"computedValue": "ads/",
																					"displayName": "testValue",
																					"name": "testValue",
																					"type": 1,
																					"value": "ads/"
																				},
																				{
																					"attributes": [],
																					"computedValue": "",
																					"displayName": "context",
																					"name": "context",
																					"type": 1,
																					"value": ""
																				}
																			],
																			"computedValue": "",
																			"displayName": "mapping",
																			"name": "mapping",
																			"type": 2,
																			"value": ""
																		},
																		{
																			"attributes": [
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "page",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "page"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "0",
																					"name": "0",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "limit",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "limit"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "1",
																					"name": "1",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "offset",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "offset"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "2",
																					"name": "2",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "searchString",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "searchString"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "3",
																					"name": "3",
																					"type": 2,
																					"value": ""
																				}
																			],
																			"computedValue": "",
																			"displayName": "flags",
																			"name": "flags",
																			"type": 4,
																			"value": ""
																		}
																	],
																	"computedValue": "",
																	"displayName": "1",
																	"name": "1",
																	"type": 2,
																	"value": ""
																}
															],
															"computedValue": "",
															"displayName": "options",
															"name": "options",
															"type": 4,
															"value": ""
														},
														{
															"attributes": [
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "route",
																					"displayName": "type",
																					"name": "type",
																					"type": 1,
																					"value": "route"
																				},
																				{
																					"attributes": [],
																					"computedValue": "arg0",
																					"displayName": "value",
																					"name": "value",
																					"type": 1,
																					"value": "arg0"
																				},
																				{
																					"attributes": [],
																					"computedValue": "",
																					"displayName": "testValue",
																					"name": "testValue",
																					"type": 1,
																					"value": ""
																				},
																				{
																					"attributes": [],
																					"computedValue": "",
																					"displayName": "context",
																					"name": "context",
																					"type": 1,
																					"value": ""
																				}
																			],
																			"computedValue": "",
																			"displayName": "mapping",
																			"name": "mapping",
																			"type": 2,
																			"value": ""
																		},
																		{
																			"attributes": [
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "page",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "page"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "0",
																					"name": "0",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "limit",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "limit"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "1",
																					"name": "1",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "offset",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "offset"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "2",
																					"name": "2",
																					"type": 2,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": "searchString",
																							"displayName": "name",
																							"name": "name",
																							"type": 1,
																							"value": "searchString"
																						},
																						{
																							"attributes": [],
																							"computedValue": "false",
																							"displayName": "enabled",
																							"name": "enabled",
																							"type": 5,
																							"value": "false"
																						}
																					],
																					"computedValue": "",
																					"displayName": "3",
																					"name": "3",
																					"type": 2,
																					"value": ""
																				}
																			],
																			"computedValue": "",
																			"displayName": "flags",
																			"name": "flags",
																			"type": 4,
																			"value": ""
																		}
																	],
																	"computedValue": "",
																	"displayName": "0",
																	"name": "0",
																	"type": 2,
																	"value": ""
																}
															],
															"computedValue": "",
															"displayName": "params",
															"name": "params",
															"type": 4,
															"value": ""
														}
													],
													"computedValue": "",
													"displayName": "settings",
													"name": "settings",
													"type": 2,
													"value": ""
												},
												{
													"attributes": [],
													"computedValue": "",
													"displayName": "params",
													"name": "params",
													"type": 4,
													"value": ""
												},
												{
													"attributes": [],
													"computedValue": "crud_adaptor",
													"displayName": "plugin",
													"name": "plugin",
													"type": 1,
													"value": "crud_adaptor"
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
															"computedValue": "undefined",
															"displayName": "query",
															"name": "query",
															"type": 0,
															"value": "undefined"
														},
														{
															"attributes": [],
															"computedValue": "undefined",
															"displayName": "trackBy",
															"name": "trackBy",
															"type": 0,
															"value": "undefined"
														},
														{
															"attributes": [],
															"computedValue": "",
															"displayName": "bindings",
															"name": "bindings",
															"type": 4,
															"value": ""
														}
													],
													"computedValue": "",
													"displayName": "renderer",
													"name": "renderer",
													"type": 2,
													"value": ""
												}
											],
											"computedValue": "",
											"displayName": "datasource",
											"name": "datasource",
											"type": 2,
											"value": ""
										}
									],
									"computedValue": "",
									"displayName": "2",
									"name": "2",
									"type": 2,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "contexts",
							"name": "contexts",
							"type": 4,
							"value": ""
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "",
											"displayName": "settings",
											"name": "settings",
											"type": 2,
											"value": ""
										}
									],
									"computedValue": "",
									"displayName": "0",
									"name": "0",
									"type": 2,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "rowSettings",
							"name": "rowSettings",
							"type": 4,
							"value": ""
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "readUserIds",
									"name": "readUserIds",
									"type": 4,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "writeUserIds",
									"name": "writeUserIds",
									"type": 4,
									"value": ""
								},
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "deleteUserIds",
									"name": "deleteUserIds",
									"type": 4,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "entityPermissions",
							"name": "entityPermissions",
							"type": 2,
							"value": ""
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "id",
							"name": "id",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [],
							"computedValue": "split",
							"displayName": "layoutType",
							"name": "layoutType",
							"type": 1,
							"value": "split"
						},
						{
							"attributes": [],
							"computedValue": "form",
							"displayName": "displayType",
							"name": "displayType",
							"type": 1,
							"value": "form"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "name",
							"name": "name",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "title",
							"name": "title",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [],
							"computedValue": "spearhead",
							"displayName": "site",
							"name": "site",
							"type": 1,
							"value": "spearhead"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "userId",
							"name": "userId",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "path",
							"name": "path",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "",
											"displayName": "settings",
											"name": "settings",
											"type": 2,
											"value": ""
										},
										{
											"attributes": [],
											"computedValue": "undefined",
											"displayName": "plugin",
											"name": "plugin",
											"type": 0,
											"value": "undefined"
										}
									],
									"computedValue": "",
									"displayName": "dataduct",
									"name": "dataduct",
									"type": 2,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "persistence",
							"name": "persistence",
							"type": 2,
							"value": ""
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": "",
									"displayName": "settings",
									"name": "settings",
									"type": 2,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "layoutSetting",
							"name": "layoutSetting",
							"type": 2,
							"value": ""
						}
					]
				},
				{
					"contentPlugin": "form_hidden",
					"contexts": [],
					"label": "id",
					"locked": false,
					"name": "id",
					"rule": {
						"condition": "",
						"field": "",
						"operator": "",
						"rules": [],
						"value": ""
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "[ad.results.0.id]",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": "[ad.results.0.id]"
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
									"computedValue": "",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": "",
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": ""
						}
					]
				}
			],
			"settings": [],
			"stylePlugin": ""
		}
	],
	"path": "/native_forms_rebuild_v1",
	"persistence": {
		"dataduct": {
			"plugin": "crud",
			"settings": [
				{
					"attributes": [],
					"computedValue": "rest",
					"displayName": "adaptorName",
					"name": "adaptorName",
					"type": 1,
					"value": "rest"
				},
				{
					"attributes": [],
					"computedValue": "entityName=:entityName",
					"displayName": "optionsString",
					"name": "optionsString",
					"type": 1,
					"value": "entityName=:entityName"
				},
				{
					"attributes": [],
					"computedValue": "",
					"displayName": "paramsString",
					"name": "paramsString",
					"type": 1,
					"value": ""
				},
				{
					"attributes": [
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "static",
											"displayName": "type",
											"name": "type",
											"type": 1,
											"value": "static"
										},
										{
											"attributes": [],
											"computedValue": "TestAnAdQuell",
											"displayName": "value",
											"name": "value",
											"type": 1,
											"value": "TestAnAdQuell"
										},
										{
											"attributes": [],
											"computedValue": "TestAnAdQuell",
											"displayName": "testValue",
											"name": "testValue",
											"type": 1,
											"value": "TestAnAdQuell"
										},
										{
											"attributes": [],
											"computedValue": "",
											"displayName": "context",
											"name": "context",
											"type": 1,
											"value": ""
										}
									],
									"displayName": "mapping",
									"name": "mapping",
									"type": 2
								},
								{
									"attributes": [
										{
											"attributes": [
												{
													"attributes": [],
													"computedValue": "page",
													"displayName": "name",
													"name": "name",
													"type": 1,
													"value": "page"
												},
												{
													"attributes": [],
													"computedValue": "false",
													"displayName": "enabled",
													"name": "enabled",
													"type": 5,
													"value": "false"
												}
											],
											"displayName": "0",
											"name": "0",
											"type": 2
										},
										{
											"attributes": [
												{
													"attributes": [],
													"computedValue": "limit",
													"displayName": "name",
													"name": "name",
													"type": 1,
													"value": "limit"
												},
												{
													"attributes": [],
													"computedValue": "false",
													"displayName": "enabled",
													"name": "enabled",
													"type": 5,
													"value": "false"
												}
											],
											"displayName": "1",
											"name": "1",
											"type": 2
										},
										{
											"attributes": [
												{
													"attributes": [],
													"computedValue": "offset",
													"displayName": "name",
													"name": "name",
													"type": 1,
													"value": "offset"
												},
												{
													"attributes": [],
													"computedValue": "false",
													"displayName": "enabled",
													"name": "enabled",
													"type": 5,
													"value": "false"
												}
											],
											"displayName": "2",
											"name": "2",
											"type": 2
										},
										{
											"attributes": [
												{
													"attributes": [],
													"computedValue": "searchString",
													"displayName": "name",
													"name": "name",
													"type": 1,
													"value": "searchString"
												},
												{
													"attributes": [],
													"computedValue": "false",
													"displayName": "enabled",
													"name": "enabled",
													"type": 5,
													"value": "false"
												}
											],
											"displayName": "3",
											"name": "3",
											"type": 2
										}
									],
									"displayName": "flags",
									"name": "flags",
									"type": 4
								}
							],
							"displayName": "0",
							"name": "0",
							"type": 2
						}
					],
					"displayName": "options",
					"name": "options",
					"type": 4
				},
				{
					"attributes": [],
					"displayName": "params",
					"name": "params",
					"type": 4
				}
			]
		}
	},
	"rowSettings": [
		{
			"settings": []
		}
	],
	"site": "spearhead",
	"title": "native_forms_rebuild_v1",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
{"contexts":[],"cssFile":"","derivativeId":"","displayType":"page","entityPermissions":{"deleteUserIds":["e36b42fe-b09c-4514-a519-e178bb52957e"],"readUserIds":["*"],"writeUserIds":["e36b42fe-b09c-4514-a519-e178bb52957e"]},"gridItems":[{"cols":100,"rows":1,"weight":0,"x":0,"y":0}],"id":"bd29f806-3b4b-4b79-9dac-7a5ae221f432","layoutSetting":{"settings":[]},"layoutType":"split","name":"hello_world","panels":[{"columnSetting":{"settings":[]},"label":"","name":"","panes":[{"contentPlugin":"snippet","label":"","linkedPageId":"","locked":false,"name":"","rule":{"condition":"","field":"","operator":"","rules":null,"value":""},"settings":[{"attributes":[],"computedValue":"text/html","displayName":"Content Type","floatValue":0,"intValue":0,"name":"contentType","type":1,"value":"text/html"},{"attributes":[],"computedValue":"Hello World","displayName":"Content","floatValue":0,"intValue":0,"name":"content","type":1,"value":"Hello World"},{"attributes":[],"computedValue":"","displayName":"jsScript","floatValue":0,"intValue":0,"name":"jsScript","type":1,"value":""}]}],"settings":[],"stylePlugin":""}],"path":"/hello-world","persistence":{"dataduct":{"plugin":"","settings":[]}},"rowSettings":[{"settings":[]}],"site":"spearhead","title":"Hello World","userId":"e36b42fe-b09c-4514-a519-e178bb52957e"}
,
{
	"contexts": [],
	"displayType": "page",
	"entityPermissions": {
		"deleteUserIds": [],
		"readUserIds": [],
		"writeUserIds": []
	},
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "bd4c1820-952c-47c8-9478-5a49d45a7bc0",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [],
			"settings": [],
			"stylePlugin": ""
		}
	],
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
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
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
	"id": "c38d4c9a-c2c7-4d9a-9d89-6a5c5425a372",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "gridless",
	"name": "justwork",
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
							"computedValue": "Hellow World 123 345",
							"displayName": "Content",
							"name": "content",
							"type": 1,
							"value": "Hellow World 123 345"
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
	"path": "/justwork",
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
	"title": "justwork",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
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
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "c3a91907-8bfb-460f-9e50-f7c84e8dbfe4",
	"interactions": {
		"interactions": {
			"listeners": [
				{
					"event": {
						"plugin": "dom",
						"settings": {
							"params": [
								{
									"flags": [
										{
											"enabled": false,
											"name": "page"
										},
										{
											"enabled": false,
											"name": "limit"
										},
										{
											"enabled": false,
											"name": "offset"
										},
										{
											"enabled": false,
											"name": "searchString"
										}
									],
									"mapping": {
										"context": "",
										"testValue": "",
										"type": "static",
										"value": "click"
									}
								},
								{
									"flags": [
										{
											"enabled": false,
											"name": "page"
										},
										{
											"enabled": false,
											"name": "limit"
										},
										{
											"enabled": false,
											"name": "offset"
										},
										{
											"enabled": false,
											"name": "searchString"
										}
									],
									"mapping": {
										"context": "",
										"testValue": "",
										"type": "static",
										"value": ".open-dialog"
									}
								}
							],
							"paramsString": "type=:type&target=:target"
						}
					},
					"handler": {
						"plugin": "panels_dialog",
						"settings": {
							"params": [
								{
									"flags": [
										{
											"enabled": false,
											"name": "page"
										},
										{
											"enabled": false,
											"name": "limit"
										},
										{
											"enabled": false,
											"name": "offset"
										},
										{
											"enabled": false,
											"name": "searchString"
										}
									],
									"mapping": {
										"context": "",
										"testValue": "",
										"type": "static",
										"value": "6b4bc3f2-5138-491b-a718-e342f6828a62"
									}
								}
							],
							"paramsString": "panelPageId=:panelPageId"
						}
					}
				}
			]
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"name": "test-dialog-interaction",
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
							"computedValue": "<div class=\"open-dialog\">Open Dialog</div>",
							"displayName": "Content",
							"name": "content",
							"type": 1,
							"value": "<div class=\"open-dialog\">Open Dialog</div>"
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
	"path": "/test-dialog-interaction",
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
	"title": "Test Dialog Interaction",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
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
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "c8feab31-84b9-49a1-95a3-989ad3211eac",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"name": "datasource-test",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "snippet",
					"contexts": [],
					"label": "Body",
					"locked": false,
					"name": "body",
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
							"computedValue": "[.body]",
							"displayName": "Content",
							"name": "content",
							"type": 1,
							"value": "[.body]"
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
				},
				{
					"contentPlugin": "datasource",
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
									"computedValue": "[\n{\"body\": \"data here\"},\n{\"body\": \"data here\"},\n{\"body\": \"data here\"}\n]",
									"displayName": "data",
									"name": "data",
									"type": 1,
									"value": "[\n{\"body\": \"data here\"},\n{\"body\": \"data here\"},\n{\"body\": \"data here\"}\n]"
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
									"attributes": [
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
													"computedValue": "body",
													"displayName": "id",
													"name": "id",
													"type": 1,
													"value": "body"
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
	"path": "/datasource-test",
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
	"title": "Datasource Test",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
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
	"contexts": [],
	"displayType": "page",
	"entityPermissions": {
		"deleteUserIds": [],
		"readUserIds": [
			""
		],
		"writeUserIds": []
	},
	"gridItems": [],
	"id": "cdcb0c14-3dd8-492c-9013-74aa861087f9",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "gridless",
	"name": "justsave",
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
							"computedValue": "hello",
							"displayName": "Content",
							"name": "content",
							"type": 1,
							"value": "hello"
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
	"path": "/justsave",
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
	"title": "justsave",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
{
	"contexts": [],
	"displayType": "form",
	"entityPermissions": {
		"deleteUserIds": [],
		"readUserIds": [
			"*"
		],
		"writeUserIds": []
	},
	"gridItems": [],
	"id": "d4a8f35d-bcf4-412a-a67c-7f6d3fcff2b2",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "gridless",
	"name": "post-ad-v1",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "form_input",
					"contexts": [],
					"label": "Title",
					"locked": false,
					"name": "title",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "Title",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": "Title"
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
									"computedValue": "",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": null,
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
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
	"path": "/post",
	"persistence": {
		"dataduct": {
			"plugin": "crud",
			"settings": [
				{
					"attributes": [],
					"computedValue": "rest",
					"displayName": "adaptorName",
					"name": "adaptorName",
					"type": 1,
					"value": "rest"
				},
				{
					"attributes": [],
					"computedValue": "entityName=:entityName",
					"displayName": "optionsString",
					"name": "optionsString",
					"type": 1,
					"value": "entityName=:entityName"
				},
				{
					"attributes": [],
					"computedValue": "",
					"displayName": "paramsString",
					"name": "paramsString",
					"type": 1,
					"value": ""
				},
				{
					"attributes": [
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "static",
											"displayName": "type",
											"name": "type",
											"type": 1,
											"value": "static"
										},
										{
											"attributes": [],
											"computedValue": "TestAnAdQuell",
											"displayName": "value",
											"name": "value",
											"type": 1,
											"value": "TestAnAdQuell"
										},
										{
											"attributes": [],
											"computedValue": "TestAnAdQuell",
											"displayName": "testValue",
											"name": "testValue",
											"type": 1,
											"value": "TestAnAdQuell"
										},
										{
											"attributes": [],
											"computedValue": "",
											"displayName": "context",
											"name": "context",
											"type": 1,
											"value": ""
										}
									],
									"displayName": "mapping",
									"name": "mapping",
									"type": 2
								},
								{
									"attributes": [
										{
											"attributes": [
												{
													"attributes": [],
													"computedValue": "page",
													"displayName": "name",
													"name": "name",
													"type": 1,
													"value": "page"
												},
												{
													"attributes": [],
													"computedValue": "false",
													"displayName": "enabled",
													"name": "enabled",
													"type": 5,
													"value": "false"
												}
											],
											"displayName": "0",
											"name": "0",
											"type": 2
										},
										{
											"attributes": [
												{
													"attributes": [],
													"computedValue": "limit",
													"displayName": "name",
													"name": "name",
													"type": 1,
													"value": "limit"
												},
												{
													"attributes": [],
													"computedValue": "false",
													"displayName": "enabled",
													"name": "enabled",
													"type": 5,
													"value": "false"
												}
											],
											"displayName": "1",
											"name": "1",
											"type": 2
										},
										{
											"attributes": [
												{
													"attributes": [],
													"computedValue": "offset",
													"displayName": "name",
													"name": "name",
													"type": 1,
													"value": "offset"
												},
												{
													"attributes": [],
													"computedValue": "false",
													"displayName": "enabled",
													"name": "enabled",
													"type": 5,
													"value": "false"
												}
											],
											"displayName": "2",
											"name": "2",
											"type": 2
										},
										{
											"attributes": [
												{
													"attributes": [],
													"computedValue": "searchString",
													"displayName": "name",
													"name": "name",
													"type": 1,
													"value": "searchString"
												},
												{
													"attributes": [],
													"computedValue": "false",
													"displayName": "enabled",
													"name": "enabled",
													"type": 5,
													"value": "false"
												}
											],
											"displayName": "3",
											"name": "3",
											"type": 2
										}
									],
									"displayName": "flags",
									"name": "flags",
									"type": 4
								}
							],
							"displayName": "0",
							"name": "0",
							"type": 2
						}
					],
					"displayName": "options",
					"name": "options",
					"type": 4
				},
				{
					"attributes": [],
					"displayName": "params",
					"name": "params",
					"type": 4
				}
			]
		}
	},
	"rowSettings": [
		{
			"settings": []
		}
	],
	"site": "spearhead",
	"title": "Post Ad v1",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
{
	"contexts": [],
	"displayType": "page",
	"entityPermissions": {
		"deleteUserIds": [],
		"readUserIds": [
			""
		],
		"writeUserIds": []
	},
	"gridItems": [],
	"id": "d52e24fa-470f-4d7c-815e-41f33f89b2bc",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "gridless",
	"name": "justsave",
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
							"computedValue": "hello",
							"displayName": "Content",
							"name": "content",
							"type": 1,
							"value": "hello"
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
	"path": "/justsave",
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
	"title": "justsave",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
{
	"contexts": [],
	"displayType": "page",
	"entityPermissions": {
		"deleteUserIds": [],
		"readUserIds": [],
		"writeUserIds": []
	},
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "d5f9de5b-e56f-4cfb-a2ca-677637e1e3d7",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [],
			"settings": [],
			"stylePlugin": ""
		}
	],
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
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
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
,
{
	"contexts": [],
	"displayType": "page",
	"entityPermissions": {
		"deleteUserIds": [],
		"readUserIds": [],
		"writeUserIds": []
	},
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "e9f7488d-bd52-4f42-b850-4afc6a217c20",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [],
			"settings": [],
			"stylePlugin": ""
		}
	],
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
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
{
	"contexts": [],
	"displayType": "form",
	"entityPermissions": {
		"deleteUserIds": [],
		"readUserIds": [
			"*"
		],
		"writeUserIds": []
	},
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "eaa608c2-17fd-48ad-924e-8a29fc8c72cb",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"name": "upload-file-form",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "form_media",
					"contexts": [],
					"label": "File",
					"locked": false,
					"name": "file",
					"rule": {
						"condition": "",
						"rules": []
					},
					"settings": [
						{
							"attributes": [],
							"computedValue": "",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": ""
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
									"computedValue": "",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": null,
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
							"type": 2,
							"value": null
						}
					]
				},
				{
					"contentPlugin": "panel",
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
											"computedValue": "100",
											"displayName": "cols",
											"name": "cols",
											"type": 0,
											"value": "100"
										},
										{
											"attributes": [],
											"computedValue": "1",
											"displayName": "rows",
											"name": "rows",
											"type": 0,
											"value": "1"
										},
										{
											"attributes": [],
											"computedValue": "0",
											"displayName": "x",
											"name": "x",
											"type": 0,
											"value": "0"
										},
										{
											"attributes": [],
											"computedValue": "0",
											"displayName": "y",
											"name": "y",
											"type": 0,
											"value": "0"
										},
										{
											"attributes": [],
											"computedValue": "0",
											"displayName": "weight",
											"name": "weight",
											"type": 0,
											"value": "0"
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
							"displayName": "gridItems",
							"name": "gridItems",
							"type": 4,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [
												{
													"attributes": [],
													"computedValue": "$.images.*",
													"displayName": "valuesMapping",
													"name": "valuesMapping",
													"type": 1,
													"value": "$.images.*"
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
													"attributes": [
														{
															"attributes": [
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "100",
																					"displayName": "cols",
																					"name": "cols",
																					"type": 0,
																					"value": "100"
																				},
																				{
																					"attributes": [],
																					"computedValue": "1",
																					"displayName": "rows",
																					"name": "rows",
																					"type": 0,
																					"value": "1"
																				},
																				{
																					"attributes": [],
																					"computedValue": "0",
																					"displayName": "x",
																					"name": "x",
																					"type": 0,
																					"value": "0"
																				},
																				{
																					"attributes": [],
																					"computedValue": "0",
																					"displayName": "y",
																					"name": "y",
																					"type": 0,
																					"value": "0"
																				},
																				{
																					"attributes": [],
																					"computedValue": "0",
																					"displayName": "weight",
																					"name": "weight",
																					"type": 0,
																					"value": "0"
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
																	"displayName": "gridItems",
																	"name": "gridItems",
																	"type": 4,
																	"value": null
																},
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": null,
																					"displayName": "settings",
																					"name": "settings",
																					"type": 2,
																					"value": null
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [
																								{
																									"attributes": [
																										{
																											"attributes": [],
																											"computedValue": "",
																											"displayName": "value",
																											"name": "value",
																											"type": 1,
																											"value": ""
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
																													"computedValue": "",
																													"displayName": "id",
																													"name": "id",
																													"type": 1,
																													"value": ""
																												}
																											],
																											"computedValue": null,
																											"displayName": "datasourceBinding",
																											"name": "datasourceBinding",
																											"type": 2,
																											"value": null
																										}
																									],
																									"computedValue": null,
																									"displayName": "settings",
																									"name": "settings",
																									"type": 2,
																									"value": null
																								},
																								{
																									"attributes": [],
																									"computedValue": "false",
																									"displayName": "locked",
																									"name": "locked",
																									"type": 5,
																									"value": "false"
																								},
																								{
																									"attributes": [],
																									"computedValue": null,
																									"displayName": "contexts",
																									"name": "contexts",
																									"type": 4,
																									"value": null
																								},
																								{
																									"attributes": [],
																									"computedValue": "file",
																									"displayName": "name",
																									"name": "name",
																									"type": 1,
																									"value": "file"
																								},
																								{
																									"attributes": [],
																									"computedValue": "File",
																									"displayName": "label",
																									"name": "label",
																									"type": 1,
																									"value": "File"
																								},
																								{
																									"attributes": [],
																									"computedValue": "form_media",
																									"displayName": "contentPlugin",
																									"name": "contentPlugin",
																									"type": 1,
																									"value": "form_media"
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
																					"displayName": "panes",
																					"name": "panes",
																					"type": 4,
																					"value": null
																				},
																				{
																					"attributes": [],
																					"computedValue": "undefined",
																					"displayName": "name",
																					"name": "name",
																					"type": 0,
																					"value": "undefined"
																				},
																				{
																					"attributes": [],
																					"computedValue": "undefined",
																					"displayName": "label",
																					"name": "label",
																					"type": 0,
																					"value": "undefined"
																				},
																				{
																					"attributes": [],
																					"computedValue": "",
																					"displayName": "stylePlugin",
																					"name": "stylePlugin",
																					"type": 1,
																					"value": ""
																				},
																				{
																					"attributes": [
																						{
																							"attributes": [],
																							"computedValue": null,
																							"displayName": "settings",
																							"name": "settings",
																							"type": 2,
																							"value": null
																						}
																					],
																					"computedValue": null,
																					"displayName": "columnSetting",
																					"name": "columnSetting",
																					"type": 2,
																					"value": null
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
																	"displayName": "panels",
																	"name": "panels",
																	"type": 4,
																	"value": null
																},
																{
																	"attributes": [],
																	"computedValue": null,
																	"displayName": "contexts",
																	"name": "contexts",
																	"type": 4,
																	"value": null
																},
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": null,
																					"displayName": "settings",
																					"name": "settings",
																					"type": 2,
																					"value": null
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
																	"displayName": "rowSettings",
																	"name": "rowSettings",
																	"type": 4,
																	"value": null
																},
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": "",
																					"displayName": "0",
																					"name": "0",
																					"type": 1,
																					"value": ""
																				}
																			],
																			"computedValue": null,
																			"displayName": "readUserIds",
																			"name": "readUserIds",
																			"type": 4,
																			"value": null
																		},
																		{
																			"attributes": [],
																			"computedValue": null,
																			"displayName": "writeUserIds",
																			"name": "writeUserIds",
																			"type": 4,
																			"value": null
																		},
																		{
																			"attributes": [],
																			"computedValue": null,
																			"displayName": "deleteUserIds",
																			"name": "deleteUserIds",
																			"type": 4,
																			"value": null
																		}
																	],
																	"computedValue": null,
																	"displayName": "entityPermissions",
																	"name": "entityPermissions",
																	"type": 2,
																	"value": null
																},
																{
																	"attributes": [],
																	"computedValue": "undefined",
																	"displayName": "id",
																	"name": "id",
																	"type": 0,
																	"value": "undefined"
																},
																{
																	"attributes": [],
																	"computedValue": "split",
																	"displayName": "layoutType",
																	"name": "layoutType",
																	"type": 1,
																	"value": "split"
																},
																{
																	"attributes": [],
																	"computedValue": "form",
																	"displayName": "displayType",
																	"name": "displayType",
																	"type": 1,
																	"value": "form"
																},
																{
																	"attributes": [],
																	"computedValue": "photos",
																	"displayName": "name",
																	"name": "name",
																	"type": 1,
																	"value": "photos"
																},
																{
																	"attributes": [],
																	"computedValue": "Photos",
																	"displayName": "title",
																	"name": "title",
																	"type": 1,
																	"value": "Photos"
																},
																{
																	"attributes": [],
																	"computedValue": "spearhead",
																	"displayName": "site",
																	"name": "site",
																	"type": 1,
																	"value": "spearhead"
																},
																{
																	"attributes": [],
																	"computedValue": "undefined",
																	"displayName": "userId",
																	"name": "userId",
																	"type": 0,
																	"value": "undefined"
																},
																{
																	"attributes": [],
																	"computedValue": "undefined",
																	"displayName": "path",
																	"name": "path",
																	"type": 0,
																	"value": "undefined"
																},
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": null,
																					"displayName": "settings",
																					"name": "settings",
																					"type": 2,
																					"value": null
																				}
																			],
																			"computedValue": null,
																			"displayName": "dataduct",
																			"name": "dataduct",
																			"type": 2,
																			"value": null
																		}
																	],
																	"computedValue": null,
																	"displayName": "persistence",
																	"name": "persistence",
																	"type": 2,
																	"value": null
																},
																{
																	"attributes": [
																		{
																			"attributes": [
																				{
																					"attributes": [],
																					"computedValue": null,
																					"displayName": "listeners",
																					"name": "listeners",
																					"type": 4,
																					"value": null
																				}
																			],
																			"computedValue": null,
																			"displayName": "interactions",
																			"name": "interactions",
																			"type": 2,
																			"value": null
																		}
																	],
																	"computedValue": null,
																	"displayName": "interactions",
																	"name": "interactions",
																	"type": 2,
																	"value": null
																},
																{
																	"attributes": [
																		{
																			"attributes": [],
																			"computedValue": null,
																			"displayName": "settings",
																			"name": "settings",
																			"type": 2,
																			"value": null
																		}
																	],
																	"computedValue": null,
																	"displayName": "layoutSetting",
																	"name": "layoutSetting",
																	"type": 2,
																	"value": null
																}
															],
															"computedValue": null,
															"displayName": "settings",
															"name": "settings",
															"type": 2,
															"value": null
														},
														{
															"attributes": [],
															"computedValue": "false",
															"displayName": "locked",
															"name": "locked",
															"type": 5,
															"value": "false"
														},
														{
															"attributes": [],
															"computedValue": null,
															"displayName": "contexts",
															"name": "contexts",
															"type": 4,
															"value": null
														},
														{
															"attributes": [],
															"computedValue": "photos",
															"displayName": "name",
															"name": "name",
															"type": 1,
															"value": "photos"
														},
														{
															"attributes": [],
															"computedValue": "Photos",
															"displayName": "label",
															"name": "label",
															"type": 1,
															"value": "Photos"
														},
														{
															"attributes": [],
															"computedValue": "panel",
															"displayName": "contentPlugin",
															"name": "contentPlugin",
															"type": 1,
															"value": "panel"
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
											"displayName": "panes",
											"name": "panes",
											"type": 4,
											"value": null
										},
										{
											"attributes": [],
											"computedValue": "images",
											"displayName": "name",
											"name": "name",
											"type": 1,
											"value": "images"
										},
										{
											"attributes": [],
											"computedValue": "Images",
											"displayName": "label",
											"name": "label",
											"type": 1,
											"value": "Images"
										},
										{
											"attributes": [],
											"computedValue": "form_section",
											"displayName": "stylePlugin",
											"name": "stylePlugin",
											"type": 1,
											"value": "form_section"
										},
										{
											"attributes": [
												{
													"attributes": [],
													"computedValue": null,
													"displayName": "settings",
													"name": "settings",
													"type": 2,
													"value": null
												}
											],
											"computedValue": null,
											"displayName": "columnSetting",
											"name": "columnSetting",
											"type": 2,
											"value": null
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
							"displayName": "panels",
							"name": "panels",
							"type": 4,
							"value": null
						},
						{
							"attributes": [],
							"computedValue": null,
							"displayName": "contexts",
							"name": "contexts",
							"type": 4,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": null,
											"displayName": "settings",
											"name": "settings",
											"type": 2,
											"value": null
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
							"displayName": "rowSettings",
							"name": "rowSettings",
							"type": 4,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": "",
											"displayName": "0",
											"name": "0",
											"type": 1,
											"value": ""
										}
									],
									"computedValue": null,
									"displayName": "readUserIds",
									"name": "readUserIds",
									"type": 4,
									"value": null
								},
								{
									"attributes": [],
									"computedValue": null,
									"displayName": "writeUserIds",
									"name": "writeUserIds",
									"type": 4,
									"value": null
								},
								{
									"attributes": [],
									"computedValue": null,
									"displayName": "deleteUserIds",
									"name": "deleteUserIds",
									"type": 4,
									"value": null
								}
							],
							"computedValue": null,
							"displayName": "entityPermissions",
							"name": "entityPermissions",
							"type": 2,
							"value": null
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "id",
							"name": "id",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [],
							"computedValue": "split",
							"displayName": "layoutType",
							"name": "layoutType",
							"type": 1,
							"value": "split"
						},
						{
							"attributes": [],
							"computedValue": "form",
							"displayName": "displayType",
							"name": "displayType",
							"type": 1,
							"value": "form"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "name",
							"name": "name",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "title",
							"name": "title",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [],
							"computedValue": "spearhead",
							"displayName": "site",
							"name": "site",
							"type": 1,
							"value": "spearhead"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "userId",
							"name": "userId",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [],
							"computedValue": "undefined",
							"displayName": "path",
							"name": "path",
							"type": 0,
							"value": "undefined"
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": null,
											"displayName": "settings",
											"name": "settings",
											"type": 2,
											"value": null
										},
										{
											"attributes": [],
											"computedValue": "undefined",
											"displayName": "plugin",
											"name": "plugin",
											"type": 0,
											"value": "undefined"
										}
									],
									"computedValue": null,
									"displayName": "dataduct",
									"name": "dataduct",
									"type": 2,
									"value": null
								}
							],
							"computedValue": null,
							"displayName": "persistence",
							"name": "persistence",
							"type": 2,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [
										{
											"attributes": [],
											"computedValue": null,
											"displayName": "listeners",
											"name": "listeners",
											"type": 4,
											"value": null
										}
									],
									"computedValue": null,
									"displayName": "interactions",
									"name": "interactions",
									"type": 2,
									"value": null
								}
							],
							"computedValue": null,
							"displayName": "interactions",
							"name": "interactions",
							"type": 2,
							"value": null
						},
						{
							"attributes": [
								{
									"attributes": [],
									"computedValue": null,
									"displayName": "settings",
									"name": "settings",
									"type": 2,
									"value": null
								}
							],
							"computedValue": null,
							"displayName": "layoutSetting",
							"name": "layoutSetting",
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
	"path": "/upload-file-form",
	"persistence": {
		"dataduct": {
			"plugin": "entity",
			"settings": [
				{
					"attributes": [],
					"computedValue": "TestMedia",
					"displayName": "entityName",
					"name": "entityName",
					"type": 1,
					"value": "TestMedia"
				},
				{
					"attributes": [],
					"computedValue": "",
					"displayName": "queryString",
					"name": "queryString",
					"type": 1,
					"value": ""
				},
				{
					"attributes": [],
					"displayName": "params",
					"name": "params",
					"type": 4
				}
			]
		}
	},
	"rowSettings": [
		{
			"settings": []
		}
	],
	"site": "spearhead",
	"title": "Upload File Form",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
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
	"id": "ecacb624-716e-47fd-b62d-4ad4f4b9cf1f",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "gridless",
	"name": "test_2025",
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
							"computedValue": "Hello World!",
							"displayName": "Content",
							"name": "content",
							"type": 1,
							"value": "Hello World!"
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
	"path": "/test-2025",
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
	"title": "Test 2025",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
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
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "ef53a364-bca8-4f7a-a458-44138d423f5f",
	"interactions": {
		"interactions": {
			"listeners": [
				{
					"event": {
						"plugin": "dom",
						"settings": {
							"params": [
								{
									"flags": [
										{
											"enabled": false,
											"name": "page"
										},
										{
											"enabled": false,
											"name": "limit"
										},
										{
											"enabled": false,
											"name": "offset"
										},
										{
											"enabled": false,
											"name": "searchString"
										}
									],
									"mapping": {
										"context": "",
										"testValue": "",
										"type": "static",
										"value": "click"
									}
								},
								{
									"flags": [
										{
											"enabled": false,
											"name": "page"
										},
										{
											"enabled": false,
											"name": "limit"
										},
										{
											"enabled": false,
											"name": "offset"
										},
										{
											"enabled": false,
											"name": "searchString"
										}
									],
									"mapping": {
										"context": "",
										"testValue": "",
										"type": "static",
										"value": ".form-submit"
									}
								}
							],
							"paramsString": "type=:type&target=:target"
						}
					},
					"handler": {
						"plugin": "hello_world",
						"settings": {}
					}
				}
			]
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"name": "interactions-basic-example",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "snippet",
					"contexts": [],
					"label": "Submit Form",
					"locked": false,
					"name": "submit-form",
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
							"computedValue": "<div class=\"form-submit\">Submit Form</div>",
							"displayName": "Content",
							"name": "content",
							"type": 1,
							"value": "<div class=\"form-submit\">Submit Form</div>"
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
	"path": "/interactions-basic-example",
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
	"title": "Interactions Basic Example",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
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
	"id": "f3ecdb90-080e-4791-afaf-073d43bc8228",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "gridless",
	"name": "justwork",
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
							"computedValue": "Hellow World 123",
							"displayName": "Content",
							"name": "content",
							"type": 1,
							"value": "Hellow World 123"
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
	"path": "/justwork",
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
	"title": "justwork",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
{
	"contexts": [
		{
			"adaptor": "data",
			"data": {
				"exposedModule": "./DownloadModule",
				"moduleName": "DownloadModule",
				"remoteEntry": "https://solid.rollthecloud.com/remoteEntry.json"
			},
			"name": "module",
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
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "fbac7b08-0607-41e0-aebe-57d072b3c428",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"name": "test-module-federation",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "plugin_download",
					"contexts": [],
					"label": "",
					"locked": false,
					"name": "",
					"settings": []
				}
			],
			"settings": [],
			"stylePlugin": ""
		}
	],
	"path": "/test-module-federation",
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
	"title": "Test Module Federation",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
,
{
	"contexts": [],
	"displayType": "form",
	"entityPermissions": {
		"deleteUserIds": [],
		"readUserIds": [
			"*"
		],
		"writeUserIds": []
	},
	"gridItems": [
		{
			"cols": 100,
			"rows": 1,
			"weight": 0,
			"x": 0,
			"y": 0
		}
	],
	"id": "fc69e899-1c7d-47cc-bc63-260037d76381",
	"interactions": {
		"interactions": {
			"listeners": []
		}
	},
	"layoutSetting": {
		"settings": []
	},
	"layoutType": "split",
	"name": "test-simple-form",
	"panels": [
		{
			"columnSetting": {
				"settings": []
			},
			"panes": [
				{
					"contentPlugin": "form_input",
					"contexts": [],
					"label": "Text",
					"locked": false,
					"name": "text",
					"settings": [
						{
							"attributes": [],
							"computedValue": "",
							"displayName": "value",
							"name": "value",
							"type": 1,
							"value": ""
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
									"computedValue": "",
									"displayName": "id",
									"name": "id",
									"type": 1,
									"value": ""
								}
							],
							"computedValue": null,
							"displayName": "datasourceBinding",
							"name": "datasourceBinding",
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
	"path": "/test-simple-form",
	"persistence": {
		"dataduct": {
			"plugin": "entity",
			"settings": [
				{
					"attributes": [],
					"computedValue": "TestSimpleForm",
					"displayName": "entityName",
					"name": "entityName",
					"type": 1,
					"value": "TestSimpleForm"
				},
				{
					"attributes": [],
					"computedValue": "",
					"displayName": "queryString",
					"name": "queryString",
					"type": 1,
					"value": ""
				},
				{
					"attributes": [],
					"displayName": "params",
					"name": "params",
					"type": 4
				}
			]
		}
	},
	"rowSettings": [
		{
			"settings": []
		}
	],
	"site": "spearhead",
	"title": "Test Simple Form",
	"userId": "44e8b438-a061-70ca-faa7-3d3e93c015cb"
}
];
