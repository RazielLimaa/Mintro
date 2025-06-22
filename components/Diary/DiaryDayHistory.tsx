import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DiaryEntryCard from './DiaryEntryCard'; // Certifique-se do caminho relativo correto

interface DiaryEntryData {
  time: string;
  mood: string;
  moodColor: string;
  icon: any;
  activity: string;
  title: string;
  content: string;
}

interface DiaryDayHistoryProps {
  date: string;
  entries: DiaryEntryData[];
}

const DiaryDayHistory: React.FC<DiaryDayHistoryProps> = ({ date, entries }) => {
  return (
    <View style={styles.daySection}>
      <View style={styles.dateHeader}>
        <View style={styles.dateDot} />
        <Text style={styles.dateHeaderText}>{date}</Text>
      </View>

      <View style={styles.timelineContainer}>
        <View style={styles.timelineLineContainer}>
          <View style={styles.continuousTimelineLine} />
        </View>

        {entries.map((entry, entryIndex) => (
          <DiaryEntryCard
            time={entry.time}
            mood={entry.mood}
            moodColor={entry.moodColor}
            iconSource={entry.icon}
            activity={entry.activity}
            title={entry.title}
            content={entry.content}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  daySection: {
    marginBottom: 24,
  },
  dateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dateDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#374151',
    marginRight: 12,
    position: 'relative',
    left: -4,
  },
  dateHeaderText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
  },
  timelineContainer: {
    position: 'relative',
    paddingLeft: 25,
  },
  timelineLineContainer: {
    position: 'absolute',
    left: 20,
    top: 0,
    bottom: 0,
    width: 2,
    alignItems: 'center',
    marginLeft: -19,
  },
  continuousTimelineLine: {
    width: 2,
    height: '100%',
    borderLeftWidth: 1.5,
    borderLeftColor: '#525252',
    borderStyle: 'dashed',
  },
});

export default DiaryDayHistory;