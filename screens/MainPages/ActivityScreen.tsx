"use client"

import { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Dimensions, Image } from "react-native"
import { ChevronLeft, ChevronRight, MapPin, Droplets } from "lucide-react-native"
import Svg, { Path, Circle } from "react-native-svg"

const { width, height } = Dimensions.get("window")

// Componente para o ícone do sapato
const ShoeIcon = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 41 35" fill="none">
    <Path
      d="M6.71284 12.8521H0.103274C0.240974 12.4387 0.422048 12.0471 0.646498 11.6774C0.870948 11.3077 1.1374 10.9462 1.44584 10.593L9.39798 1.46809C9.9832 0.78889 10.7667 0.338254 11.7485 0.116185C12.7303 -0.105885 13.668 -0.00961539 14.5617 0.404993L16.0076 1.02513C16.7305 1.34997 17.2902 1.79293 17.6868 2.35401C18.0834 2.91509 18.281 3.53523 18.2796 4.21443V7.93528L22.1007 7.09366C23.1335 6.85741 24.1318 6.96845 25.0957 7.42676C26.0596 7.88508 26.7137 8.54183 27.0579 9.39704L30.4143 18.079L39.1927 25.6093C39.8812 26.1999 40.3549 26.8348 40.6137 27.514C40.8726 28.1932 41.0014 28.9167 41 29.6845C41 30.7771 40.6557 31.7516 39.9672 32.608C39.2787 33.4644 38.3837 34.0993 37.2821 34.5127L13.8388 15.2884C12.8405 14.4911 11.7389 13.8857 10.534 13.4723C9.32913 13.0588 8.05541 12.8521 6.71284 12.8521ZM24.7859 35C23.7531 35 22.772 34.8376 21.8426 34.5127C20.9131 34.1879 20.0525 33.7302 19.2607 33.1396L2.47859 20.0723C1.82452 19.5703 1.29093 19.0021 0.877833 18.3678C0.464735 17.7335 0.172124 17.0762 0 16.3958H6.71284C7.50462 16.3958 8.27091 16.5139 9.01173 16.7501C9.75256 16.9864 10.4149 17.3555 10.9987 17.8575L31.8602 35H24.7859Z"
      fill={color}
    />
  </Svg>
)

// Componente para o ícone de fogo
const FireIcon = ({ size = 24, color = "#F97316" }) => (
  <Svg width={size} height={size} viewBox="0 0 23 25" fill="none">
    <Path
      d="M8.17835 0.263684C8.5788 -0.0927609 9.2 -0.0878781 9.60045 0.268567C11.0174 1.53322 12.3471 2.89552 13.5895 4.37013C14.1542 3.667 14.796 2.9004 15.4891 2.2754C15.8946 1.91407 16.521 1.91407 16.9266 2.28029C18.7029 3.89161 20.2071 6.02052 21.2647 8.042C22.3069 10.0342 23 12.0703 23 13.5059C23 19.7363 17.8763 25 11.5 25C5.05179 25 0 19.7315 0 13.501C0 11.626 0.913839 9.33595 2.3308 7.07032C3.76317 4.77052 5.78594 2.37306 8.17835 0.263684ZM11.5873 20.3125C12.8862 20.3125 14.0362 19.9707 15.1194 19.2871C17.2808 17.8516 17.8609 14.9805 16.5621 12.7246C16.331 12.2852 15.7406 12.2559 15.4069 12.627L14.1132 14.0576C13.7743 14.4287 13.1634 14.419 12.8451 14.0332C11.998 13.0078 10.4835 11.1768 9.62098 10.1367C9.29754 9.74611 8.68147 9.74122 8.3529 10.1318C6.61763 12.207 5.74487 13.5156 5.74487 14.9854C5.75 18.3301 8.34777 20.3125 11.5873 20.3125Z"
      fill={color}
    />
  </Svg>
)

// Componente para o círculo de progresso
const ProgressCircle = ({
  progress,
  size = 120,
  strokeWidth = 8,
  color = "#9CC9FF",
}: {
  progress: number
  size?: number
  strokeWidth?: number
  color?: string
}) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <Svg width={size} height={size} style={{ transform: [{ rotate: "-90deg" }] }}>
      <Circle cx={size / 2} cy={size / 2} r={radius} stroke="#E5E7EB" strokeWidth={strokeWidth} fill="transparent" />
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
      />
    </Svg>
  )
}

// Componente para a barrinha de progresso
type ProgressBarProps = {
  progress: number
  color?: string
}

const ProgressBar = ({ progress, color = "#9CC9FF" }: ProgressBarProps) => (
  <Svg width={83} height={70} viewBox="0 0 83 70" fill="none">
    <Path
      d="M68.7333 68.7333C69.8995 69.8995 71.7995 69.9062 72.8789 68.6591C77.5752 63.2333 80.796 56.6677 82.2026 49.5962C83.8039 41.546 82.982 33.2018 79.841 25.6186C76.7 18.0355 71.3808 11.5541 64.5562 6.99401C57.7315 2.43393 49.7079 3.75066e-07 41.5 0C33.2921 -3.75066e-07 25.2685 2.43393 18.4438 6.99401C11.6192 11.5541 6.30004 18.0355 3.159 25.6186C0.0179631 33.2018 -0.803876 41.546 0.79741 49.5962C2.20401 56.6677 5.42484 63.2333 10.1211 68.6591C11.2005 69.9062 13.1005 69.8995 14.2667 68.7333C15.4329 67.5671 15.422 65.6838 14.3578 64.4238C10.4889 59.843 7.83131 54.3436 6.65524 48.4311C5.2844 41.5394 5.98797 34.396 8.67695 27.9042C11.3659 21.4125 15.9196 15.8638 21.762 11.96C27.6045 8.05623 34.4733 5.97259 41.5 5.97259C48.5267 5.97259 55.3955 8.05623 61.238 11.96C67.0804 15.8638 71.6341 21.4125 74.3231 27.9042C77.012 34.396 77.7156 41.5394 76.3448 48.4311C75.1687 54.3436 72.5111 59.843 68.6422 64.4238C67.578 65.6838 67.5671 67.5671 68.7333 68.7333Z"
      fill={color}
      fillOpacity={progress / 100}
    />
  </Svg>
)

export default function HealthDashboard() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const formatDate = (date: Date) => {
    return date
      .toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
      .replace(/^\w/, (c) => c.toUpperCase())
  }

  const navigateDate = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate)
    newDate.setDate(currentDate.getDate() + (direction === "next" ? 1 : -1))
    setCurrentDate(newDate)
  }

  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]
  const exerciseDays = [false, false, false, false, true, false, false] // Apenas quinta-feira marcada
  const mindfulnessDays = [false, true, true, true, true, true, true] // Todos os dias exceto domingo

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>A</Text>
        </View>

        <View style={styles.logoContainer}>
          <Image source={require("../../assets/images/logosrobomintro.png")} style={styles.logoImage} resizeMode="contain" />
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

          <Text style={styles.dateText}>Hoje</Text>

          <TouchableOpacity onPress={() => navigateDate("next")}>
            <ChevronRight size={24} color="#374151" />
          </TouchableOpacity>
        </View>
        {/* Main Stats */}
        <View style={styles.mainStats}>
          {/* Distance */}
          <View style={styles.sideStatItem}>
            <View style={styles.progressContainer}>
              <ProgressCircle progress={53} size={width * 0.18} color="#9CC9FF" />
              <View style={styles.progressContent}>
                <MapPin size={16} color="#3B82F6" />
              </View>
            </View>
            <Text style={styles.sideStatValue}>5,31</Text>
            <Text style={styles.sideStatLabel}>km</Text>
          </View>

          {/* Steps - Centro */}
          <View style={styles.mainStatItem}>
            <View style={styles.progressContainer}>
              <ProgressCircle progress={65} size={width * 0.25} color="#9CC9FF" />
              <View style={styles.progressContent}>
                <ShoeIcon size={24} color="#000" />
              </View>
            </View>
            <Text style={styles.mainStatValue}>6.565</Text>
            <Text style={styles.mainStatLabel}>passos</Text>
          </View>

          {/* Calories */}
          <View style={styles.sideStatItem}>
            <View style={styles.progressContainer}>
              <ProgressCircle progress={44} size={width * 0.18} color="#9CC9FF" />
              <View style={styles.progressContent}>
                <FireIcon size={16} color="#F97316" />
              </View>
            </View>
            <Text style={styles.sideStatValue}>2.203</Text>
            <Text style={styles.sideStatLabel}>kcal</Text>
          </View>
        </View>

        {/* Hydration Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardTitle}>Hidratação</Text>
              <Text style={styles.cardValue}>750 ml</Text>
              <Text style={styles.cardSubtitle}>Hoje</Text>
            </View>
            <View style={styles.hydrationProgress}>
              <ProgressBar progress={75} color="#9CC9FF" />
              <View style={styles.hydrationIcon}>
                <Droplets size={20} color="#3B82F6" />
              </View>
            </View>
          </View>
        </View>

        {/* Exercise Days Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardLeft}>
              <Text style={styles.cardTitle}>Dias com Exercício</Text>
              <Text style={styles.cardValue}>1 de 5</Text>
              <Text style={styles.cardSubtitle}>Esta semana</Text>
            </View>
            <View style={styles.weekProgress}>
              <View style={styles.weekDays}>
                {weekDays.map((day, index) => (
                  <View key={index} style={styles.dayContainer}>
                    <Text style={styles.dayLabel}>{day}</Text>
                    <View style={[styles.dayIndicator, exerciseDays[index] && styles.dayIndicatorActive]}>
                      {exerciseDays[index] && <Text style={styles.checkmark}>✓</Text>}
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* Mindfulness Days Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardLeft}>
              <Text style={styles.cardTitle}>Dias com Mindfulness</Text>
              <Text style={styles.cardValue}>1 de 5</Text>
              <Text style={styles.cardSubtitle}>Esta semana</Text>
            </View>
            <View style={styles.weekProgress}>
              <View style={styles.weekDays}>
                {weekDays.map((day, index) => (
                  <View key={index} style={styles.dayContainer}>
                    <Text style={styles.dayLabel}>{day}</Text>
                    <View style={[styles.dayIndicator, mindfulnessDays[index] && styles.dayIndicatorActive]}>
                      {mindfulnessDays[index] && <Text style={styles.checkmark}>✓</Text>}
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
  mainStats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: height * 0.03,
  },
  mainStatItem: {
    alignItems: "center",
    flex: 1,
  },
  sideStatItem: {
    alignItems: "center",
    flex: 0.8,
  },
  progressContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  progressContent: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  mainStatValue: {
    fontSize: 28,
    fontWeight: "700",
    color: "#374151",
    marginBottom: 4,
  },
  mainStatLabel: {
    fontSize: 14,
    color: "#6B7280",
    fontWeight: "500",
  },
  sideStatValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#374151",
    marginBottom: 4,
  },
  sideStatLabel: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "500",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: width * 0.05,
    marginBottom: height * 0.02,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardLeft: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    color: "#6B7280",
    fontWeight: "500",
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#374151",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#9CA3AF",
    fontWeight: "400",
  },
  hydrationProgress: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  hydrationIcon: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  weekProgress: {
    alignItems: "flex-end",
  },
  weekDays: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dayContainer: {
    alignItems: "center",
    gap: 4,
  },
  dayLabel: {
    fontSize: 12,
    color: "#9CA3AF",
    fontWeight: "500",
  },
  dayIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
  },
  dayIndicatorActive: {
    backgroundColor: "#79D457",
  },
  checkmark: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
})
