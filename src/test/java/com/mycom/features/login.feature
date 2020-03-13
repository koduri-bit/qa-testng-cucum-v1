Feature: Login Feature

@tag1
Scenario Outline: login test scenario 1

Given I open main login page
Then user enters "<username>" and "<password>"
Then I close the browser

Examples:
	| username | password |
	| hue  | test@123 |

@tag2
Scenario Outline: login test scenario 2

Given I open main login page
Then user enters "<username>" and "<password>"
Then I close the browser

Examples:
	| username | password |
	| henry  | test@456 |
				