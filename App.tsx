import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { requireNativeComponent } from 'react-native';

const { width, height } = Dimensions.get('window');

export const LiquidGlassView = requireNativeComponent('NativeLiquidGlassModule');

export const isLiquidGlassSupported = true;

export const LiquidGlassContainerView = ({ children, style, spacing = 0 }) => (
  <View style={[style, { gap: spacing }]}>{children}</View>
);

export default function App() {
  const [colorScheme, setColorScheme] = useState('system');
  const [effect, setEffect] = useState('regular');

  const toggleColorScheme = () => {
    setColorScheme(prev =>
      prev === 'system' ? 'light' : prev === 'light' ? 'dark' : 'system'
    );
  };

  const toggleEffect = () => {
    setEffect(prev => prev === 'regular' ? 'clear' : 'regular');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=800&fit=crop',
        }}
        style={styles.background}
        resizeMode="cover"
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.headerWrapper}>
            <LiquidGlassView
              style={[
                styles.header,
                !isLiquidGlassSupported && styles.fallbackStyle
              ]}
              effect={effect}
              colorScheme={colorScheme}
              interactive
            >
              <Text style={styles.headerTitle}>Liquid Glass Demo</Text>
              <Text style={styles.headerSubtitle}>
                {isLiquidGlassSupported ? 'Supported ✨' : 'Fallback Mode'}
              </Text>
            </LiquidGlassView>
          </View>

          {/* Control Panel */}
          <View style={styles.controlWrapper}>
            <Text style={styles.controlTitle}>Controls</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={toggleColorScheme}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>
                Color Scheme: {colorScheme}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={toggleEffect}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>
                Effect: {effect}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Card Examples */}
          <View style={styles.cardsSection}>
            <Text style={styles.sectionTitle}>Glass Cards</Text>
            <View style={styles.cardsContainer}>
              <LiquidGlassView
                style={[
                  styles.card,
                  !isLiquidGlassSupported && styles.fallbackStyle
                ]}
                interactive
                effect={effect}
                colorScheme={colorScheme}
              >
                <Text style={styles.cardTitle}>Interactive Card</Text>
                <Text style={styles.cardContent}>
                  Tap me! This card has interactive effects enabled.
                </Text>
              </LiquidGlassView>

              <LiquidGlassView
                style={[
                  styles.card,
                  !isLiquidGlassSupported && styles.fallbackStyle
                ]}
                effect="clear"
                colorScheme={colorScheme}
                tintColor="rgba(255, 100, 150, 0.2)"
              >
                <Text style={styles.cardTitle}>Clear Effect</Text>
                <Text style={styles.cardContent}>
                  This card uses the 'clear' effect with a pink tint.
                </Text>
              </LiquidGlassView>
            </View>
          </View>

          {/* Merging Glass Example */}
          <View style={styles.mergingSection}>
            <Text style={styles.sectionTitle}>Merging Glass Elements</Text>

            <View style={styles.mergingContainer}>
              <LiquidGlassView
                style={[
                  styles.circle,
                  !isLiquidGlassSupported && styles.fallbackStyle
                ]}
                effect={effect}
                colorScheme={colorScheme}
                interactive
              >
                <Text style={styles.circleText}>1</Text>
              </LiquidGlassView>

              <LiquidGlassView
                style={[
                  styles.circle,
                  styles.circleOverlap,
                  !isLiquidGlassSupported && styles.fallbackStyle
                ]}
                effect={effect}
                colorScheme={colorScheme}
                tintColor="rgba(100, 255, 100, 0.3)"
                interactive
              >
                <Text style={styles.circleText}>2</Text>
              </LiquidGlassView>

              <LiquidGlassView
                style={[
                  styles.circle,
                  styles.circleOverlap,
                  !isLiquidGlassSupported && styles.fallbackStyle
                ]}
                effect={effect}
                colorScheme={colorScheme}
                tintColor="rgba(255, 100, 100, 0.3)"
                interactive
              >
                <Text style={styles.circleText}>3</Text>
              </LiquidGlassView>
            </View>
          </View>

          {/* Different Shapes */}
          <View style={styles.shapesSection}>
            <Text style={styles.sectionTitle}>Different Shapes</Text>

            <View style={styles.shapesContainer}>
              <LiquidGlassView
                style={[
                  styles.roundedSquare,
                  !isLiquidGlassSupported && styles.fallbackStyle
                ]}
                effect={effect}
                colorScheme={colorScheme}
                interactive
              >
                <Text style={styles.shapeText}>Square</Text>
              </LiquidGlassView>

              <LiquidGlassView
                style={[
                  styles.pill,
                  !isLiquidGlassSupported && styles.fallbackStyle
                ]}
                effect={effect}
                colorScheme={colorScheme}
                tintColor="rgba(255, 200, 0, 0.3)"
                interactive
              >
                <Text style={styles.shapeText}>Pill</Text>
              </LiquidGlassView>
            </View>
          </View>

          {/* Bottom spacing for nav bar */}
          <View style={styles.bottomSpacing} />
        </ScrollView>

        {/* Bottom Navigation Bar */}
        <View style={styles.navBarContainer}>
          <LiquidGlassView
            style={[
              styles.navBar,
              !isLiquidGlassSupported && styles.fallbackStyle
            ]}
            effect={effect}
            colorScheme={colorScheme}
            interactive
          >
            <TouchableOpacity style={styles.navButton} activeOpacity={0.7}>
              <Text style={styles.navIcon}>🏠</Text>
              <Text style={styles.navLabel}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navButton} activeOpacity={0.7}>
              <Text style={styles.navIcon}>⚙️</Text>
              <Text style={styles.navLabel}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navButton} activeOpacity={0.7}>
              <Text style={styles.navIcon}>✨</Text>
              <Text style={styles.navLabel}>Effects</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navButton} activeOpacity={0.7}>
              <Text style={styles.navIcon}>👤</Text>
              <Text style={styles.navLabel}>Profile</Text>
            </TouchableOpacity>
          </LiquidGlassView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },

  // Header Section
  headerWrapper: {
    marginBottom: 24,
  },
  header: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
    textAlign: 'center',
  },

  // Control Panel
  controlWrapper: {
    marginBottom: 32,
    paddingHorizontal: 4,
  },
  controlTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginVertical: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Cards Section
  cardsSection: {
    marginBottom: 32,
  },
  cardsContainer: {
    gap: 16,
  },
  card: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderRadius: 18,
    minHeight: 110,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  cardContent: {
    fontSize: 15,
    color: '#fff',
    opacity: 0.9,
    lineHeight: 20,
  },

  // Merging Section
  mergingSection: {
    marginBottom: 32,
    alignItems: 'center',
  },
  mergingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  circle: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  circleOverlap: {
    marginLeft: -25,
  },
  circleText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  // Shapes Section
  shapesSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  shapesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  roundedSquare: {
    width: (width - 80) / 2,
    height: 90,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  pill: {
    width: (width - 80) / 2,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  shapeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  // Fallback and Utilities
  fallbackStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
  },
  bottomSpacing: {
    height: 100, // Space for bottom nav
  },

  // Bottom Navigation
  navBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: 34, // Safe area padding
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 24,
    overflow: 'hidden',
    minHeight: 70,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    minWidth: 60,
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
  },
});