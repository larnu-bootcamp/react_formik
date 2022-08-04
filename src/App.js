
  import React, { useState } from 'react';
  import { Form, Input, SubmitButton } from 'formik-antd'
  import { Formik } from 'formik'
  import * as Yup from 'yup';
  import './App.css';
  import { AntDesignOutlined } from "@ant-design/icons"

function App() {
    
  const SignupSchema = Yup.object().shape({
    discordId: Yup.string()
      .required('Requerido'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const [loading, setLoading] = useState(false);

  function submit(values) {
    setLoading(true);
    setTimeout(() => {
      console.log(values);
      setLoading(false);
    }, 3000);
  }
 
  return (
    <Formik
      initialValues={{
        discordId: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={submit}
      >
        {({ errors, touched }) => (
         <Form 
         name="basic"
         labelCol={{ span: 8 }}
         wrapperCol={{ span: 16 }}
       >
         {/* every formik-antd component must have the 'name' prop set: */}
         <Form.Item name='discordId'>
           <Input name='discordId' placeholder='Discord Id' />
          </Form.Item>
          <Form.Item name='email'>
            <Input name='email' placeholder='Email' suffix={<span />}/>
          </Form.Item>
          <div className='ant-form-item'>
            <SubmitButton
              justify="end"
              style={{ marginTop: 0 }}
              icon={<AntDesignOutlined />}
              loading={loading}
            >
              Submit
            </SubmitButton>
          </div>
        </Form>
       )}
      </Formik>

  );
}

export default App;
