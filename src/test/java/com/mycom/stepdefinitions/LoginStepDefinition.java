package com.mycom.stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import com.mycom.pages.LoginPage;
import com.mycom.runner.TestRunner;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {

	 //WebDriver driver;

	
	 /*@Then("^Close the browser$")
	 public void close_the_browser(){
		 driver.quit();
	 }*/
	
	 private LoginPage loginPage;
	 public WebDriver driver ;
	 
	 @Before
	 public void setLoginInstance() throws Exception {
		 TestSetUpDefinition.initialSetUp();
		 driver = TestSetUpDefinition.getDriver();
		 loginPage = new LoginPage(driver) ;
	 }
	 
	 @Given("^I open main login page$")
	 public void i_open_login_page(){	 
	    //System.setProperty("webdriver.chrome.driver",  System.getProperty("user.dir") + "\\chrome-driver\\chromedriver.exe");
	    loginPage
     		.goToLoginPage();     
	 }
	 
	 @Then("^user enters \"(.*)\" and \"(.*)\"$")
	 public void user_enters_username_and_password(String username, String password){	
		 loginPage
		 	.login("username", "passwd")
		 	.checkSuccess();
	 }
	
	/* @After
	 public void teardown() {
	        driver.quit();
	 }*/
	

}
