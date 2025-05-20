import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1C1C1C',
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="note/[id]"
        options={{
          title: 'Minhas notas: ',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="list-alt" color={color} />,
        }}
      />
      <Tabs.Screen
        name="newNote"
        options={{
          title: 'Nova nota: ',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus-square" color={color} />,
        }}
      />
    </Tabs>
  );
}