package com.mycom.stepdefinitions;


import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;

import com.mycom.runner.TestRunner;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.testng.TestNGCucumberRunner;

public class TestSetUpDefinition {
	
   public static WebDriver driver;
   public static Properties prop;
	    
   public static WebDriver getDriver() {
	        return driver;
   }	
  
   public static void initialSetUp() throws Exception {	    	
	 try{
	    	prop = new Properties();
	 		FileInputStream configPropFile = new FileInputStream(System.getProperty("user.dir")+ "\\src\\test\\java\\com\\mycom\\config\\config.properties");
	 		prop.load(configPropFile);
	 	} catch (FileNotFoundException e) {
	 		e.printStackTrace();
	 	} catch (IOException e) {
	 		e.printStackTrace();
	 	}
	         
	 String browserName = prop.getProperty("browser");
	 if(browserName.equals("chrome")){
	     	System.setProperty("webdriver.chrome.driver",  System.getProperty("user.dir") + "\\chrome-driver\\chromedriver.exe");	
	 	    driver = new ChromeDriver();
	   }
   }
	 
   @Then("^I close the browser$")
   public void i_close_the_browser() {
	     driver.quit();
   }

}
