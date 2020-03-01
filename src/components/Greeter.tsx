import React from 'react'
import { Text } from 'react-native';

type GreeterProps = { name: string };

export const Greeter = ({
  name
} : GreeterProps) => {
  return (
    <Text>Hello, {name}!</Text>
  )
}
