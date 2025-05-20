import { View, Text, FlatList, StyleSheet } from "react-native";
import { notes } from "@/database/notes";
import { NoteCard } from "@/components/NoteCard";
import Btn from "@/components/Btn";
import { useRouter } from "expo-router";
import ScreenContainer from "@/components/ScreenContainer";

export default function Home() {
  const router = useRouter();

  return (
    <ScreenContainer>
      <View style={styles.container}>
      <Text style={styles.title}>
        Ephemeral Notes
      </Text>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteCard
            note={item}
            onPress={() => router.push(`/note/${item.id}`)}
          />
        )}
      />

      <Btn
        title="Criar uma nova nota"
        onPress={() => router.push("/newNote")}
      />
    </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "serif",
    marginBottom: 12,
    color: "#DCDCDC",
  }
});