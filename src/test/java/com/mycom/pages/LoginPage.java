package com.mycom.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class LoginPage extends BasePage {

    /**
     * Web Elements
     */
    @FindBy(xpath = "//form[@id='login-form']")
    WebElement loginForm;
    @FindBy(xpath = "//span[contains(text(),'Username*')]/following-sibling::input")
    WebElement usernameField;
    @FindBy(xpath = "//span[contains(text(),'Password*')]/following-sibling::input")
    WebElement passwordField;
    @FindBy(xpath = "//button[contains(text(),'Login')]")
    WebElement loginButton;
    @FindBy(xpath = "//p[contains(text(), 'Logout')]")
    WebElement logoutButton;
    @FindBy(xpath = "//p[contains(text(), 'Invalid username or password!')]")
    WebElement loginError;

    /**
     * Constructor
     */
    public LoginPage(WebDriver driver) {
        super(driver);
        URL = "https://cafetownsend-angular-rails.herokuapp.com/login";
        PageFactory.initElements(driver, this);
    }

    /**
     * Page Methods
     */
 
    public LoginPage goToLoginPage() {
        open(URL);
        return this;
    }

    
    public LoginPage login(String username, String password) {
        waitVisibility(loginForm);
        writeText(usernameField, username);
        writeText(passwordField, password);
        click(loginButton);
        return this;
    }

    public LoginPage checkSuccess() {
        waitVisibility(logoutButton);
        Assert.assertTrue(logoutButton.isDisplayed());
        return this;
    }

    public LoginPage checkError() {
        waitVisibility(loginError);
        Assert.assertTrue(loginError.isDisplayed());
        return this;
    }
}