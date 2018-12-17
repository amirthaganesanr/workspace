package com.myproj.demo.persistence.config;

import java.util.Properties;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
public class PersistenceConfig {

	private static final String PACKAGES_TO_SCAN = "com.myproj.demo.dataobjects";

	private DataSource getDataSourceForDB() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName("oracle.jdbc.driver.OracleDriver");
		dataSource.setUrl("jdbc:oracle:thin:@localhost:1521:ganesh");
		dataSource.setUsername("user1");
		dataSource.setPassword("password1");
		return dataSource;
	}

	private JpaVendorAdapter jpaVendorAdapter() {
		return new HibernateJpaVendorAdapter();
	}

	private Properties jpaEnvProperties() {
		Properties props = new Properties();
		props.put("hibernate.dialect", "org.hibernate.dialect.Oracle10gDialect");
		props.put("hibernate.show_sql", "true");
		return props;
	}

	@Bean(name = "userEMF")
	public LocalContainerEntityManagerFactoryBean getEntityManagerFactory() {
		LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
		factory.setPersistenceUnitName("userData");
		factory.setDataSource(getDataSourceForDB());
		factory.setJpaVendorAdapter(jpaVendorAdapter());
		factory.setJpaProperties(jpaEnvProperties());
		factory.setPackagesToScan(new String[] { PACKAGES_TO_SCAN });
		return factory;
	}

	@Bean
	@Autowired
	public PlatformTransactionManager transactionManagerForDB(@Qualifier("userEMF") EntityManagerFactory emf) {
		JpaTransactionManager txMang = new JpaTransactionManager();
		txMang.setEntityManagerFactory(emf);
		return txMang;
	}

}
