import { View, StyleSheet} from 'react-native'
import { ReactNode } from 'react'

export default function ScreenContainer({children}: {children: ReactNode}) {
  return (
      <View style={styles.container}>{children}</View>
  )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1C1C1C",
        gap: 10,
        padding: 16,
        height: "100%"
    }
});