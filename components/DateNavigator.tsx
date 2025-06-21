// components/DateNavigator.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface DateNavigatorProps {
  currentDateText: string; // Ex: "Hoje", "Ontem", "19 de Junho"
  onPrevPress: () => void;
  onNextPress: () => void;
}

export default function DateNavigator({ currentDateText, onPrevPress, onNextPress }: DateNavigatorProps): React.JSX.Element {
  return (
    <View style={styles.dateNavigatorContainer}>
      <TouchableOpacity onPress={onPrevPress} style={styles.arrowButton}>
        <MaterialCommunityIcons name="chevron-left" size={28} color="#2C3E50" />
      </TouchableOpacity>
      <Text style={styles.dateText}>{currentDateText}</Text>
      <TouchableOpacity onPress={onNextPress} style={styles.arrowButton}>
        <MaterialCommunityIcons name="chevron-right" size={28} color="#2C3E50" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dateNavigatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  dateText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  arrowButton: {
    padding: 5,
  },
});