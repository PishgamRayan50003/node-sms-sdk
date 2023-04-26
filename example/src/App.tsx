import { Fragment, useCallback, useRef, useState } from "react";
import { Col, Input, InputRef, Modal, Row, notification } from "antd";
import { LockTwoTone } from "@ant-design/icons";
export default function App() {
  const [token, setToken] = useState<string>("");
  const tokenInputRef = useRef<InputRef>(null);

  const modalOkHandler = useCallback(() => {
    const token = tokenInputRef.current?.input?.value;
    if (token) setToken(token);
    else
      notification.error({
        message: "لطفاً توکن را وارد کنید",
        placement: "top",
      });
  }, [token]);

  return (
    <Fragment>
      <Modal
        title={"لطفا توکن مورد را وارد کنید"}
        open={false/*!token*/}
        onOk={modalOkHandler}
        okText="تایید"
        closable={false}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <Input
          size="large"
          placeholder="توکن"
          ref={tokenInputRef}
          prefix={<LockTwoTone />}
        />
      </Modal>
    </Fragment>
  );
}
