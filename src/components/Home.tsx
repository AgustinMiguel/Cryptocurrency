import React from "react";
import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>();
  
  const onFinish = (values: any) => {
    setName(values.username);
    dispatch({ type: "add", payload: name });
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          onClick={() => {
            onFinish();
          }}
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Home;
