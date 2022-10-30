package cc.noe.dto;

// 定义返回json的结构，感觉像GO
public class ResponseMessage {

    private int code = 0;
    private String res;
    private String msg = "未知错误";

    public ResponseMessage() {
        super();
    }

    public ResponseMessage(int code, String res, String msg) {
        super();
        this.code = code;
        this.res = res;
        this.msg = msg;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getRes() {
        return res;
    }

    public void setRes(String res) {
        this.res = res;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    @Override
    public String toString() {
        return "ResponseMessage{" +
                "code=" + code +
                ", res='" + res + '\'' +
                ", msg='" + msg + '\'' +
                '}';
    }
}
