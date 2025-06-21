"use client"

import { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Dimensions, Image } from "react-native"
import { ChevronLeft, Search, Plus } from "lucide-react-native"
import Svg, { Path } from "react-native-svg"

const { width, height } = Dimensions.get("window")

// Ícone de livro/leitura
const BookIcon = ({ size = 20, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M4 19.5C4 18.837 4.263 18.201 4.732 17.732C5.201 17.263 5.837 17 6.5 17H20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.5 2H20V22H6.5C5.837 22 5.201 21.737 4.732 21.268C4.263 20.799 4 20.163 4 19.5V4.5C4 3.837 4.263 3.201 4.732 2.732C5.201 2.263 5.837 2 6.5 2Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default function MentalScreen() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const navigateDate = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate)
    if (direction === "next") {
      newDate.setMonth(currentDate.getMonth() + 1)
    } else {
      newDate.setMonth(currentDate.getMonth() - 1)
    }
    setCurrentDate(newDate)
  }

  const formatMonth = (date: Date) => {
    return date
      .toLocaleDateString("pt-BR", {
        month: "long",
        year: "numeric",
      })
      .replace(/^\w/, (c) => c.toUpperCase())
  }

  const diaryEntries = [
    {
      date: "Hoje, 11 de Junho",
      entries: [
        {
          time: "11:15",
          mood: "Excelente",
          moodColor: "#22C55E",
          icon: require("../../assets/images/mood-excellent.png"),
          activity: "Ler",
          title: "Jambra's Group",
          content:
            "Hoje foi um dia incrível! Consegui terminar a leitura do livro que estava há semanas tentando finalizar. A sensação de conquista é maravilhosa.",
        },
        {
          time: "9:15",
          mood: "Neutro",
          moodColor: "#6B7280",
          icon: require("../../assets/images/mood-neutral.png"),
          activity: "Ler",
          title: "Jambra's Group",
          content:
            "Manhã tranquila, sem muitas emoções. Li algumas páginas do livro enquanto tomava café. Às vezes esses momentos neutros são necessários.",
        },
      ],
    },
    {
      date: "Ontem, 10 de Junho",
      entries: [
        {
          time: "11:15",
          mood: "Excelente",
          moodColor: "#22C55E",
          icon: require("../../assets/images/mood-excellent.png"),
          activity: "Ler",
          title: "Jambra's Group",
          content:
            "Que dia fantástico! Descobri um novo autor que me cativou completamente. Passei horas lendo e me senti renovado mentalmente.",
        },
      ],
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      {/* Header - Mesmo do HealthDashboard */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>A</Text>
        </View>

        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/logosrobomintro.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity style={styles.refreshButton}>
          <Text style={styles.refreshIcon}>↻</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Date Navigation */}
        <View style={styles.dateNavigation}>
          <TouchableOpacity onPress={() => navigateDate("prev")}>
            <ChevronLeft size={24} color="#374151" />
          </TouchableOpacity>

          <Text style={styles.dateText}>{formatMonth(currentDate)}</Text>

          <TouchableOpacity>
            <Search size={24} color="#374151" />
          </TouchableOpacity>
        </View>

        {/* Objetivos Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objetivos</Text>

          <View style={styles.objectiveCard}>
            <View style={styles.objectiveLeft}>
              <View style={styles.checkboxContainer}>
                <Text style={styles.checkmark}>✓</Text>
              </View>
              <BookIcon size={24} color="#374151" />
            </View>
            <View style={styles.objectiveContent}>
              <Text style={styles.objectiveTitle}>Ler</Text>
              <Text style={styles.objectiveSubtitle}>Sequencia de 2 dias</Text>
            </View>
          </View>
        </View>

        {/* Histórico Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Histórico</Text>

          {diaryEntries.map((dayEntry, dayIndex) => (
            <View key={dayIndex} style={styles.daySection}>
              {/* Date Header */}
              <View style={styles.dateHeader}>
                <View style={styles.dateDot} />
                <Text style={styles.dateHeaderText}>{dayEntry.date}</Text>
              </View>

              {/* Timeline */}
              <View style={styles.timelineContainer}>
                {/* Linha pontilhada contínua */}
                <View style={styles.timelineLineContainer}>
                  <View style={styles.continuousTimelineLine} />
                </View>

                {dayEntry.entries.map((entry, entryIndex) => (
                  <View key={entryIndex} style={styles.timelineRow}>
                    {/* Rostinho na linha */}
                    <View style={styles.timelineIconContainer}>
                      <Image source={entry.icon} style={styles.timelineIcon} />

                    </View>

                    {/* Card */}
                    <View style={styles.entryCard}>
                      <View style={styles.entryHeader}>
                        <View style={styles.entryInfo}>
                          <Text style={[styles.moodText, { color: entry.moodColor }]}>{entry.mood}</Text>
                          <View style={styles.activityRow}>
                            <BookIcon size={16} color="#374151" />
                            <Text style={styles.activityText}>{entry.activity}</Text>
                          </View>
                        </View>
                        <Text style={styles.timeText}>{entry.time}</Text>
                      </View>

                      <Text style={styles.entryTitle}>{entry.title}</Text>
                      <Text style={styles.entryContent}>{entry.content}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Plus size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.01,
    backgroundColor: "#86D293",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 10,
    minHeight: height * 0.04,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: Math.min(width * 0.5, 90),
    height: Math.min(width * 0.15, 40),
    resizeMode: "contain",
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#79D457",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  refreshButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  refreshIcon: {
    fontSize: 20,
    color: "#374151",
  },
  content: {
    flex: 1,
    paddingHorizontal: width * 0.05,
  },
  dateNavigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: height * 0.03,
  },
  dateText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#374151",
  },
  section: {
    marginBottom: height * 0.03,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 16,
  },
  objectiveCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  objectiveLeft: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: "#79D457",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  checkmark: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  objectiveContent: {
    flex: 1,
  },
  objectiveTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 4,
  },
  objectiveSubtitle: {
    fontSize: 14,
    color: "#6B7280",
  },
  daySection: {
    marginBottom: 24,
  },
  dateHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  dateDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#374151",
    marginRight: 12,
    position: "relative",
    left: -4,
  },
  dateHeaderText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#374151",
  },
  timelineContainer: {
    position: "relative",
    paddingLeft: 25,
  },
  timelineLineContainer: {
    position: "absolute",
    left: 20,
    top: 0,
    bottom: 0,
    width: 2,
    alignItems: "center",
    marginLeft: -19,
  },
  continuousTimelineLine: {
    width: 2,
    height: "100%",
    borderLeftWidth: 1.5,
    borderLeftColor: "#525252",
    borderStyle: "dashed",
  },
  timelineRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
    position: "relative",
  },
  timelineIconContainer: {
    position: "absolute",
    left: -15,
    top: 0,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  timelineIcon: {
    width: 50,
    height: 50,
  },
 
  entryCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginLeft: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  entryHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  entryInfo: {
    flex: 1,
  },
  moodText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  activityRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  activityText: {
    fontSize: 14,
    color: "#374151",
    marginLeft: 4,
  },
  timeText: {
    fontSize: 14,
    color: "#6B7280",
  },
  entryTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  entryContent: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },
  fab: {
    position: "absolute",
    bottom: 100,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#79D457",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
})
