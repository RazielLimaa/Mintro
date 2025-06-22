import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Dimensions, Alert, Text } from 'react-native'; // Importe Alert

import MentalScreenHeader from '@/components/Header';
import MentalDateNavigation from '@/components/DateNavigation';
import ObjectiveDisplayCard from '@/components/ObjectiveCard';
import DiaryDayHistory from '@/components/Diary/DiaryDayHistory';
import FloatingActionButton from '@/components/Diary/DiaryFloatingButton'; 
import { router } from 'expo-router';

export default function MentalScreen() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const navigateDate = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'next') {
      newDate.setMonth(currentDate.getMonth() + 1);
    } else {
      newDate.setMonth(currentDate.getMonth() - 1);
    }
    setCurrentDate(newDate);
  };

  const formatMonth = (date: Date) => {
    return date
      .toLocaleDateString('pt-BR', {
        month: 'long',
        year: 'numeric',
      })
      .replace(/^\w/, (c) => c.toUpperCase());
  };

  const diaryEntries = [
    {
      date: 'Hoje, 11 de Junho',
      entries: [
        {
          time: '11:15',
          mood: 'Excelente',
          moodColor: '#22C55E',
          icon: require('../../assets/images/mood-excellent.png'),
          activity: 'Ler',
          title: "Jambra's Group",
          content: 'Hoje foi um dia incrível! Consegui terminar a leitura do livro que estava há semanas tentando finalizar. A sensação de conquista é maravilhosa.',
        },
        {
          time: '9:15',
          mood: 'Neutro',
          moodColor: '#6B7280',
          icon: require('../../assets/images/mood-neutral.png'),
          activity: 'Ler',
          title: "Jambra's Group",
          content: 'Manhã tranquila, sem muitas emoções. Li algumas páginas do livro enquanto tomava café. Às vezes esses momentos neutros são necessários.',
        },
      ],
    },
    {
      date: 'Ontem, 10 de Junho',
      entries: [
        {
          time: '11:15',
          mood: 'Excelente',
          moodColor: '#22C55E',
          icon: require('../../assets/images/mood-excellent.png'),
          activity: 'Ler',
          title: "Jambra's Group",
          content: 'Que dia fantástico! Descobri um novo autor que me cativou completamente. Passei horas lendo e me senti renovado mentalmente.',
        },
      ],
    },
  ];

  const handleCreateDiary = () => {
    router.push('/creatediary')
  };

  const handleCreateObjective = () => {
    router.push('/createobjective')
  };

  return (
    <SafeAreaView style={styles.container}>
      <MentalScreenHeader
        onAvatarPress={() => console.log('Avatar pressionado')}
        onRefreshPress={() => console.log('Botão de refresh pressionado')}
        avatarChar="A"
        logoSource={require('../../assets/images/logosrobomintro.png')}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <MentalDateNavigation
          currentPeriodText={formatMonth(currentDate)}
          onPrevPress={() => navigateDate('prev')}
          onSearchPress={() => console.log('Botão de busca pressionado')}
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objetivos</Text>
          <ObjectiveDisplayCard
            objectiveTitle="Ler"
            objectiveSubtitle="Sequencia de 2 dias"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Histórico</Text>
          {diaryEntries.map((dayEntry, dayIndex) => (
            <DiaryDayHistory date={dayEntry.date} entries={dayEntry.entries} />
          ))}
        </View>
      </ScrollView>

      <FloatingActionButton
        onPressCreateDiary={handleCreateDiary}
        onPressCreateObjective={handleCreateObjective}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  content: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: Dimensions.get('window').width * 0.05,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 16,
  },
});