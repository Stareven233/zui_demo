# 第六节 servlet

## 开发工具

1. idea
2. eclipse

## Eclipse 配置

1. Eclipse 下载（EE版）不是SE

2. Tomcat下载压缩版放到指定目录

3. Eclipse + Tomcat 配置

   1. prenfence->server->runtime
   2. winow->show view->other

4. 下面server 配置：

   1. server location
      1. use Tomcat installation
      2. deploy path：webapps

5. 编码配置：

   1. perfeneces
   2. 搜encod
      1. General->workspace->other->UTF8

6. 自动提示：

   1. prefences->java->editor->content ASSit->

      .<=:abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789

## 新建项目

1. file-》new-》web-》Dynamic Web project
   1. next-->next
   2. 勾选Generate web.xml
   3. 右键点击项目属性web project setting 改为 /

2. hello world

   1.  在webcontent 目录下建立 index.html
   2. 打出你好世界！！
   3. 右键点击项目 run as-》run on server
   4. 在浏览器中查看 http://localhost:8080/ 
   5. ctrl+f5 强制刷新浏览器

3. 整合我们的前端项目

   1. 在webCotent->show in->system expoler
   2. 把我们前面做的前端项目放进这个目录
   3. 再通过浏览器 http://localhost:8080/login.html 查看

4. 测试servlet能不能用

   1. java Resource 目录-》src目录 

   2. 右键新建package-》com.cyzyedu.controller

   3. 在com.cyzyedu.controller新建LoginServlet类

   4. 继承HttpServlet

      1. 可能找不到
      2. 右键点项目
         1. build path-》config build path
         2. add library
         3. server runtime

   5. 类中敲入doGet回车

   6. @Override
      	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      		// TODO Auto-generated method stub
      	resp.getWriter().println("登录成功！！");

      	}

   7. 在webContent->WEB-INF

      1. web.xml 配置servlet

           <servlet>
           	<servlet-name>loginServlet</servlet-name>
           	<servlet-class>com.cyzyedu.controller.LoginServlet</servlet-class>
           </servlet>
           <servlet-mapping>
           	<servlet-name>loginServlet</servlet-name>
           	<url-pattern>/login.action</url-pattern>
           </servlet-mapping>

      2. 测试http://localhost:8080/login.action 出现乱码

         1. 解决方式加filter

         2. 代码

            @Override
            	public void destroy() {
            		// TODO Auto-generated method stub
            		
            	}
            	
            	@Override
            	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            			throws IOException, ServletException {
            		// TODO Auto-generated method stub
            		HttpServletRequest req =(HttpServletRequest)request;
            		HttpServletResponse resp=(HttpServletResponse)response;
            		req.setCharacterEncoding("utf-8");
            		resp.setCharacterEncoding("utf-8");
            		chain.doFilter(req, resp);
            		
            	}
            	
            	@Override
            	public void init(FilterConfig filterConfig) throws ServletException {
            		// TODO Auto-generated method stub
            		
            	}

         3. web.xml 进行filter的配置

            <filter>
              	<filter-name>actionFilter</filter-name>
              	<filter-class>com.cyzyedu.filter.ActionFilter</filter-class>
              </filter>
              <filter-mapping>
              	<filter-name>actionFilter</filter-name>
              	<url-pattern>*.action</url-pattern>
              </filter-mapping>

         4. 重启服务器

      3. 构建我们的MVC流程

      4. 导入jar包

         1. webContent->WEB-INF->lib目录下面

## 作业：

1.  尝试装一遍EClipse
2.  新建一个项目
3. a.写一个hello world 运行成功 b.将原有项目整合到新的项目
4. servlet的中文你好世界，不要乱码
5. 实现mvc整个流程与我们前端代码对接