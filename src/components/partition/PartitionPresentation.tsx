import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface IPartitionPresentationProps {
  Numbers: Array<number> | undefined,
  StepName: string | undefined,
  HI: number | undefined,
  LO: number | undefined,
  ICount: number | undefined,
  JCount: number | undefined,
  Pivot: number | undefined,
  PartitionNumber: number | undefined,
  StepForward: () => void,
  StepBackward: () => void,
}

function PartitionPresentation (props: IPartitionPresentationProps) {

  return (
    <View style={styles.container}>
      {props.Numbers !== undefined &&
        <View>
          <Text>Not undefined.</Text>
          <View style={styles.numbersContainer}>
          {props.Numbers.map((element, index) => {
            return <Text 
              key={index}
              style={styles.instructions}>{element}</Text>
          })}
          </View>
          <Text>{props.Numbers.length}</Text>
        </View>
      }
      <Text>HI: {props.HI}</Text>
      <Text>LO: {props.LO}</Text>
      <Text>Pivot: {props.Pivot}</Text>
      <Text>ICount: {props.ICount}</Text>
      <Text>JCount: {props.JCount}</Text>
      <Text>PartitionIndex: {props.PartitionNumber}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.StepBackward()}
      >
        <Text>Backward</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.StepForward()}
      >
        <Text>Forward</Text>
      </TouchableOpacity>
      <Text>Step name: {props.StepName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numbersContainer: {
    flex: 1,
    maxHeight: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 3,
    paddingRight: 4,
    marginBottom: 3,
  },
  button: {
    backgroundColor: '#999',
    padding: 5,
    margin: 5,
  }
});

export { PartitionPresentation };