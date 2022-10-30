package cc.noe.utils;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class DBUtil {

    static Properties properties = new Properties();
    static {
        try {
            properties.load(DBUtil.class.getClassLoader().getResourceAsStream("jdbc.properties"));
        } catch (IOException e) {
            e.printStackTrace();
//            throw new RuntimeException(e);
        }
    }

    public static Connection getConn () throws ClassNotFoundException, SQLException {
//        现在的版本都不需要注册
        Class.forName(properties.getProperty("jdbc.driver"));
        return DriverManager.getConnection(properties.getProperty("jdbc.url"), properties.getProperty("jdbc.username"), properties.getProperty("jdbc.password"));
    }

}
