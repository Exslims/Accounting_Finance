package af.home.com;

import org.springframework.boot.autoconfigure.web.WebMvcAutoConfiguration;
import org.springframework.boot.context.embedded.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * Exslims
 * 04.08.2016
 */
@Configuration
@EnableWebMvc
public class WebConfig extends WebMvcAutoConfiguration {
    @Bean
    public FilterRegistrationBean crosFilterReg(){
        FilterRegistrationBean bean = new FilterRegistrationBean();
        bean.setFilter(new CROSFilter());
        return bean;
    }
}
