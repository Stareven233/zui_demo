package cc.noe.service.impl;

import cc.noe.bean.User;
import cc.noe.dao.UserDao;
import cc.noe.dao.impl.UserDaoImpl;
import cc.noe.dto.ResponseMessage;
import cc.noe.service.UserService;

import java.sql.SQLException;

public class UserServiceImpl implements UserService {

    // 接口代替类，更灵活
    UserDao userDao = new UserDaoImpl();

    public UserServiceImpl() throws SQLException, ClassNotFoundException {
    }

    @Override
    public boolean userLogin (String account, String psw) throws SQLException {
        User user = userDao.selectByAccount(account);
        return user != null && psw.equals(user.getPassword());
    }

    @Override
    public ResponseMessage login(String username, String password) throws SQLException, ClassNotFoundException {
        User user = userDao.login(username, password);
//        System.out.println(user);
//        http://localhost:8080/login.action?username=noe&password=cc
        var resp = new ResponseMessage();
        if (user == null || !password.equals(user.getPassword())) {
            resp.setCode(-1);
            resp.setRes("登陆失败");
            resp.setMsg("请重新尝试登录");
        } else {
            resp.setCode(1);
            resp.setRes("登陆成功");
            resp.setMsg("欢迎" + user.getUsername());
        }
        return resp;
    }
}
