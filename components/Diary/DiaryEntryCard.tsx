import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { BookIcon } from '../Icons/BookIcon';

interface DiaryEntryCardProps {
  time: string;
  mood: string;
  moodColor: string;
  iconSource: any;
  activity: string;
  title: string;
  content: string;
}

const DiaryEntryCard: React.FC<DiaryEntryCardProps> = ({
  time,
  mood,
  moodColor,
  iconSource,
  activity,
  title,
  content,
}) => {
  return (
    <View style={styles.timelineRow}>
      <View style={styles.timelineIconContainer}>
        <Image source={iconSource} style={styles.timelineIcon} />
      </View>

      <View style={styles.entryCard}>
        <View style={styles.entryHeader}>
          <View style={styles.entryInfo}>
            <Text style={[styles.moodText, { color: moodColor }]}>{mood}</Text>
            <View style={styles.activityRow}>
              <BookIcon size={16} color="#374151" />
              <Text style={styles.activityText}>{activity}</Text>
            </View>
          </View>
          <Text style={styles.timeText}>{time}</Text>
        </View>

        <Text style={styles.entryTitle}>{title}</Text>
        <Text style={styles.entryContent}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timelineRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    position: 'relative',
  },
  timelineIconContainer: {
    position: 'absolute',
    left: -15,
    top: 0,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  timelineIcon: {
    width: 50,
    height: 50,
  },
  entryCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginLeft: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  entryHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  entryInfo: {
    flex: 1,
  },
  moodText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityText: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 4,
  },
  timeText: {
    fontSize: 14,
    color: '#6B7280',
  },
  entryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  entryContent: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
});

export default DiaryEntryCard;