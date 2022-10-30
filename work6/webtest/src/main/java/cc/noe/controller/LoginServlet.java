package cc.noe.controller;

import cc.noe.service.UserService;
import cc.noe.service.impl.UserServiceImpl;

import com.alibaba.fastjson2.JSONObject;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.ServletException;
import java.io.IOException;
import java.sql.SQLException;

public class LoginServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // super.doGet(req, resp);
        UserService userService = null;
        try {
            userService = new UserServiceImpl();
        } catch (SQLException | ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

//        String acc = req.getParameter("account");
        String name = req.getParameter("username");
        String password = req.getParameter("password");
//        try {
//            if (userService.userLogin(acc, psw)) {
//                ResponseMessage responseMessage = new ResponseMessage(200, "登陆成功", "欢迎使用本系统");
//                resp.getWriter().println(responseMessage.toString());
//            }
//            else {
//                ResponseMessage responseMessage = new ResponseMessage(400, "登陆失败", "请重新输入账号和密码");
//                resp.getWriter().println(responseMessage.toString());
//            }
//        } catch (SQLException | ClassNotFoundException e) {
//            throw new RuntimeException(e);
//        }
        try {
            var msg = userService.login(name, password);
            String res = JSONObject.toJSONString(msg);
            resp.getWriter().println(res);
        } catch (SQLException | ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }



}
