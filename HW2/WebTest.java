package selenium.tests;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.ChromeDriverManager;

public class WebTest
{
	private static WebDriver driver;
	
	@BeforeClass
	public static void setUp() throws Exception 
	{
		//driver = new HtmlUnitDriver();
		ChromeDriverManager.getInstance().setup();
		driver = new ChromeDriver();
	}
	
	@AfterClass
	public static void  tearDown() throws Exception
	{
		driver.close();
		driver.quit();
	}

	
	@Test
	public void googleExists() throws Exception
	{
		driver.get("http://www.google.com");
        assertEquals("Google", driver.getTitle());		
	}
	

	@Test
	public void closed() throws Exception
	{
		driver.get("http://www.checkbox.io/studies.html");
		
		// http://geekswithblogs.net/Aligned/archive/2014/10/16/selenium-and-timing-issues.aspx
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@class='status']/span[.='CLOSED']")));
		List<WebElement> spans = driver.findElements(By.xpath("//a[@class='status']/span[.='CLOSED']"));

		assertNotNull(spans);
		assertEquals(5, spans.size());
	}
	
	@Test
	public void verify55() throws Exception
	{
		driver.get("http://www.checkbox.io/studies.html");
		
		String path = "//div[@class='span8']//span[.='Frustration of Software Developers']"; 
		
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(path)));
		WebElement element = driver.findElement(By.xpath(path));
		WebElement next = element.findElement(By.xpath("../../following-sibling::div//span[@class='backers']"));
				
		assertNotNull(next);
		assertEquals("55", next.getText());
	}

	@Test
	public void closed5() throws Exception
	{
		driver.get("http://www.checkbox.io/studies.html");
		
		String path = "//a[@class='status']/span[.='CLOSED']";
		
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(path)));
		List<WebElement> elements= driver.findElements(By.xpath(path));
						
		assertNotNull(elements);
		assertEquals(5, elements.size());
	}
	
	private boolean isElementClickable(WebElement element, WebDriverWait wait) {
		try {
			wait.until(ExpectedConditions.elementToBeClickable(element));
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	@Test
	public void canClickParticipate() throws Exception
	{
		driver.get("http://www.checkbox.io/studies.html");
		
		String path = "//a[contains(text(), 'STATUS:')]//span[.='OPEN']";
		
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(path)));
		List<WebElement> elements= driver.findElements(By.xpath(path));
		
		assertNotNull(elements);
		
		for (WebElement element: elements) {
			WebElement participateButton = element.findElement(By.xpath("../following-sibling::div//button[@class='btn btn-info']"));
			assertNotNull(participateButton);
			assertTrue(isElementClickable(participateButton, wait));
		}
		
	}

	@Test
	public void hasAmazonRewardImage() throws Exception
	{
		driver.get("http://www.checkbox.io/studies.html");
		
		String path = "//div[@class='span8']//span[.='Software Changes Survey']"; 
		
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(path)));
		WebElement element= driver.findElement(By.xpath(path));
		WebElement amazonImage = element.findElement(By.xpath("../following-sibling::div[@class='award']//img[@src='/media/amazongc-micro.jpg']"));
		assertNotNull(amazonImage);
		
	}
}
