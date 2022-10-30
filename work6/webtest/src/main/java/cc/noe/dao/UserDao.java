package cc.noe.dao;

import cc.noe.bean.User;

import java.sql.SQLException;

public interface UserDao {
    /**
     * 根据账号查询用户信息
     * @param account
     * @return
     */
    User selectByAccount (String account) throws SQLException;
    // 返回类型 函数名 参数列表 exception

    User login (String userName, String password) throws SQLException;
    // 返回类型 函数名 参数列表 exception
}
