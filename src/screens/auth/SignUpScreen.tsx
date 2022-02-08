import React, {useCallback} from 'react';
import {Box, Heading, VStack, HStack, Input, Button, Link, Center, Text} from 'native-base';

import {useNavigation} from '@react-navigation/core';
import {Formik, FormikHelpers} from 'formik';
import * as yup from 'yup';
import {supabase} from '../../utils/supabase';
import {useDispatch} from 'react-redux';
import {setProfile, setSession} from '../../stores/userSlice';
import {Profile} from '../../types/Profile';

export const SignUpScreen = () => {
  const navigation = useNavigation<any>();
  const user = supabase.auth.user();
  const dispatch = useDispatch();

  const loginValidationSchema = yup.object().shape({
    username: yup.string().min(4, ({min}) => `Name must be at least ${min} characters`),
    name: yup.string().min(8, ({min}) => `Name must be at least ${min} characters`),
    email: yup.string().email('Please enter valid email').required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  console.log(user);
  const handleSignup = async (
    value: {email: any; password: any},
    actions: FormikHelpers<{username: string; name: string; email: string; password: string}>,
  ) => {
    const {email, password} = value;
    try {
      const {user, session, error} = await supabase.auth.signUp({email: email, password: password});
      console.log(error);
      console.log(user);
      dispatch(setSession(session));
    } catch (error) {
      actions.setFieldError('general', error.message);
    }
  };

  return (
    <Center flex={1} px="3">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: 'warmGray.200',
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack mt={4} space={3}>
          <Formik
            initialValues={{username: '', name: '', email: '', password: ''}}
            onSubmit={(value, actions) => {
              handleSignup(value, actions);
            }}
            validationSchema={loginValidationSchema}
          >
            {({errors, handleChange, handleBlur, handleSubmit, isValid, touched, values}) => (
              <VStack space={3}>
                <Input
                  // name="email"
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && (
                  <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
                )}
                <Input
                  // name="password"
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && touched.password && (
                  <Text style={{fontSize: 10, color: 'red'}}>{errors.password}</Text>
                )}
                <Text style={{color: 'red'}}>{errors.general}</Text>
                <Button
                  mt="2"
                  colorScheme="indigo"
                  onPress={() => handleSubmit()}
                  // disabled={!isValid}
                >
                  Sign Up
                </Button>
              </VStack>
            )}
          </Formik>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
            >
              Already have an account ?{' '}
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              onPress={() => navigation.navigate('LogIn')}
            >
              LogIn
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default SignUpScreen;
