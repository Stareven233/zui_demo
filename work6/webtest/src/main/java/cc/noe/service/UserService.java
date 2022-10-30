package cc.noe.service;

import cc.noe.bean.User;
import cc.noe.dto.ResponseMessage;

import java.sql.SQLException;

public interface UserService {

    /**
     * 用户登录
     * @param account
     * @param psw
     * @return
     */
    boolean userLogin (String account, String psw) throws SQLException, ClassNotFoundException;
    ResponseMessage login (String username, String password) throws SQLException, ClassNotFoundException;

}
