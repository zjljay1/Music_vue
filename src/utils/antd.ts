import { ElMessage } from "element-plus";

class Message {
  succeed = (msg: string) => {
    ElMessage({
      showClose: true,
      message: msg,
      type: "success",
    });
  };
  default = (msg: string) => {
    ElMessage({
      showClose: true,
      message: msg,
    });
  };
  warn = (msg: string) => {
    ElMessage({
      showClose: true,
      message: msg,
      type: "warning",
    });
  };
  error = (msg: string) => {
    ElMessage({
      showClose: true,
      message: msg,
      type: "error",
    });
  };
}
export const message = new Message();
