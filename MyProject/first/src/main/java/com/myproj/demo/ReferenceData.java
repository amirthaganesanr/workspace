package com.myproj.demo;

import javax.servlet.Servlet;
import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.myproj.demo.cache.LookupsLoader;

/**
 * Servlet implementation class ReferenceData
 */
public class ReferenceData extends HttpServlet implements Servlet, ApplicationListener<ContextRefreshedEvent> {
	private static final long serialVersionUID = 1L;

	public void init(ServletConfig config) throws ServletException {
		super.init(config);
		System.out.println("Init Method for Servlet Reference Data");
		ServletContext servletContext = this.getServletContext();
		ApplicationContext applicationContext = WebApplicationContextUtils
				.getRequiredWebApplicationContext(servletContext);
		LookupsLoader loader = applicationContext.getBean(LookupsLoader.class);
		loader.getData();
	}

	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		// TODO Auto-generated method stub
		
	}

}
