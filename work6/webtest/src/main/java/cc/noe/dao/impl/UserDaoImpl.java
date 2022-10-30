package cc.noe.dao.impl;

import cc.noe.dao.UserDao;
import cc.noe.bean.User;
import cc.noe.utils.DBUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDaoImpl implements UserDao {

    Connection conn = DBUtil.getConn();

    public UserDaoImpl() throws SQLException, ClassNotFoundException {
    }

    @Override
    public User selectByAccount(String account) throws SQLException {
        String sql = "select * from user where account=?";
        PreparedStatement preparedStatement = conn.prepareStatement(sql);
        preparedStatement.setString(1, account);
        ResultSet resultSet = preparedStatement.executeQuery();
        if (resultSet.next()) {
            return new User(
                    resultSet.getInt("id"),
                    resultSet.getString("account"),
                    resultSet.getString("password"),
                    resultSet.getShort("status")
            );
        }
        return null;
    }

    @Override
    public User login(String userName, String password) throws SQLException {
        String sql = "select * from user where username=? and password=?";
//        select * from user where username="noe" and password="cc"
        PreparedStatement pstm = conn.prepareStatement(sql);
        pstm.setString(1, userName);
        pstm.setString(2, password);
        ResultSet resultSet = pstm.executeQuery();
        if (resultSet.next()) {
            return new User(
                    resultSet.getInt("id"),
                    resultSet.getString("username"),
                    resultSet.getString("password"),
                    resultSet.getShort("status")
            );
        }
        return null;
    }
}
