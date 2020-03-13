$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "login test scenario 1",
  "description": "",
  "id": "login-feature;login-test-scenario-1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open main login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-feature;login-test-scenario-1;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "login-feature;login-test-scenario-1;;1"
    },
    {
      "cells": [
        "hue",
        "test@123"
      ],
      "line": 12,
      "id": "login-feature;login-test-scenario-1;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5942727100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "login test scenario 1",
  "description": "",
  "id": "login-feature;login-test-scenario-1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open main login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters \"hue\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.i_open_login_page()"
});
formatter.result({
  "duration": 1227573600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hue",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 833135200,
  "status": "passed"
});
formatter.match({
  "location": "TestSetUpDefinition.i_close_the_browser()"
});
formatter.result({
  "duration": 622037900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "login test scenario 2",
  "description": "",
  "id": "login-feature;login-test-scenario-2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I open main login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "login-feature;login-test-scenario-2;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "login-feature;login-test-scenario-2;;1"
    },
    {
      "cells": [
        "henry",
        "test@456"
      ],
      "line": 23,
      "id": "login-feature;login-test-scenario-2;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5107837500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "login test scenario 2",
  "description": "",
  "id": "login-feature;login-test-scenario-2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I open main login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user enters \"henry\" and \"test@456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.i_open_login_page()"
});
formatter.result({
  "duration": 1090287200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "henry",
      "offset": 13
    },
    {
      "val": "test@456",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 782169500,
  "status": "passed"
});
formatter.match({
  "location": "TestSetUpDefinition.i_close_the_browser()"
});
formatter.result({
  "duration": 620554200,
  "status": "passed"
});
});