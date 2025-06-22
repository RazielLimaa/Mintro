import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

interface HeaderProps {
  onAvatarPress: () => void;
  onRefreshPress: () => void;
  avatarChar: string;
  logoSource: any;
}

const { width, height } = Dimensions.get('window');

const Header: React.FC<HeaderProps> = ({
  onAvatarPress,
  onRefreshPress,
  avatarChar,
  logoSource,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.avatarContainer} onPress={onAvatarPress}>
        <Text style={styles.avatarText}>{avatarChar}</Text>
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Image source={logoSource} style={styles.logoImage} resizeMode="contain" />
      </View>

      <TouchableOpacity style={styles.refreshButton} onPress={onRefreshPress}>
        <Text style={styles.refreshIcon}>↻</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.01,
    backgroundColor: '#86D293',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 10,
    minHeight: height * 0.04,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: Math.min(width * 0.5, 90),
    height: Math.min(width * 0.15, 40),
    resizeMode: 'contain',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#79D457',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  refreshButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  refreshIcon: {
    fontSize: 20,
    color: '#374151',
  },
});

export default Header;