import { requireNativeComponent, Platform, Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';

const NativeLiquidGlass = Platform.OS === 'ios' && Number(Platform.Version) >= 26
  ? requireNativeComponent('LiquidGlassView')
  : Pressable;

export default function LiquidGlassButton({ title, onPress }) {
  return (
    <NativeLiquidGlass onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </NativeLiquidGlass>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 60,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
