var com = { qmino : { miredot : {}}};
com.qmino.miredot.restApiSource = {"licenceType":"FREE","miredotRevision":"780bc70fd738","hideLogoOnTop":false,"allowUsageTracking":false,"licenceErrorMessage":null,"miredotVersion":"1.6.0","validLicence":true,"projectTitle":"Newborn info service","jsonDocEnabled":false,"projectVersion":"1.0-SNAPSHOT","singlePage":false,"jsonDocHidden":true,"buildSystem":"maven 3","projectName":"Barn 2 web app","dateOfGeneration":"2015-06-08 23:16:23"};
com.qmino.miredot.restApiSource.tos = {

};

com.qmino.miredot.restApiSource.enums = {

};
com.qmino.miredot.restApiSource.interfaces = [
	{
		"beschrijving": "",
		"url": "/info/length",
		"http": "GET",
		"title": null,
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"rolesAllowed": null,
		"permitAll": false,
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [],
		"hash": "2020132856",
		"inputs": {
                "PATH": [],
                "QUERY": [{"name": "userToken", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "QUERY"}],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/info/picture",
		"http": "GET",
		"title": null,
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["image/jpeg"],
		"roles": [],
		"rolesAllowed": null,
		"permitAll": false,
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [],
		"hash": "88754774",
		"inputs": {
                "PATH": [],
                "QUERY": [{"name": "userToken", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "QUERY"}],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/login/getToken/{user}/{password}",
		"http": "GET",
		"title": null,
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"rolesAllowed": null,
		"permitAll": false,
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [],
		"hash": "-1925918202",
		"inputs": {
                "PATH": [
                    {"name": "user", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "PATH"},
                    {"name": "password", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/info/firstname",
		"http": "GET",
		"title": null,
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"rolesAllowed": null,
		"permitAll": false,
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [],
		"hash": "-26454061",
		"inputs": {
                "PATH": [],
                "QUERY": [{"name": "userToken", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "QUERY"}],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/login/listUsers",
		"http": "GET",
		"title": null,
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"rolesAllowed": null,
		"permitAll": false,
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [],
		"hash": "566599232",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/info/dateOfBirth",
		"http": "GET",
		"title": null,
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"rolesAllowed": null,
		"permitAll": false,
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [],
		"hash": "-526036622",
		"inputs": {
                "PATH": [],
                "QUERY": [{"name": "userToken", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "QUERY"}],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/login/addUser",
		"http": "POST",
		"title": null,
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"rolesAllowed": null,
		"permitAll": false,
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [],
		"hash": "-1835610895",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [
                    {"name": "adminToken", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "FORM"},
                    {"name": "user", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "FORM"},
                    {"name": "password", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "FORM"}
                ],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/info/middlename",
		"http": "GET",
		"title": null,
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"rolesAllowed": null,
		"permitAll": false,
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [],
		"hash": "-754435022",
		"inputs": {
                "PATH": [],
                "QUERY": [{"name": "userToken", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "QUERY"}],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/info/lastname",
		"http": "GET",
		"title": null,
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"rolesAllowed": null,
		"permitAll": false,
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [],
		"hash": "1800638963",
		"inputs": {
                "PATH": [],
                "QUERY": [{"name": "userToken", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "QUERY"}],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/info/weight",
		"http": "GET",
		"title": null,
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"rolesAllowed": null,
		"permitAll": false,
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [],
		"hash": "1260284810",
		"inputs": {
                "PATH": [],
                "QUERY": [{"name": "userToken", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "QUERY"}],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/login/getAdminToken/{user}/{password}",
		"http": "GET",
		"title": null,
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"rolesAllowed": null,
		"permitAll": false,
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [],
		"hash": "1001215456",
		"inputs": {
                "PATH": [
                    {"name": "user", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "PATH"},
                    {"name": "password", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	}];
com.qmino.miredot.projectWarnings = [
	{
		"category": "JAVADOC_MISSING_SUMMARY",
		"description": "Missing summary tag",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_SUMMARY",
		"description": "Missing summary tag",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_SUMMARY",
		"description": "Missing summary tag",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_SUMMARY",
		"description": "Missing summary tag",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_SUMMARY",
		"description": "Missing summary tag",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_SUMMARY",
		"description": "Missing summary tag",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_SUMMARY",
		"description": "Missing summary tag",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_SUMMARY",
		"description": "Missing summary tag",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_SUMMARY",
		"description": "Missing summary tag",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_SUMMARY",
		"description": "Missing summary tag",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_SUMMARY",
		"description": "Missing summary tag",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	}];
com.qmino.miredot.processErrors  = [
];

