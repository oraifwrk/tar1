import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBar from '../../components/TopBar';

type AIAgent = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

const aiAgents: AIAgent[] = [
  {
    id: '1',
    name: 'Assistant',
    description: 'General purpose AI assistant',
    icon: '🤖',
  },
  {
    id: '2',
    name: 'Writer',
    description: 'Helps with writing and content creation',
    icon: '✍️',
  },
  {
    id: '3',
    name: 'Coder',
    description: 'Assists with programming and code review',
    icon: '👨‍💻',
  },
  {
    id: '4',
    name: 'Designer',
    description: 'Helps with design ideas and feedback',
    icon: '🎨',
  },
  {
    id: '5',
    name: 'Researcher',
    description: 'Helps with research and information gathering',
    icon: '🔍',
  },
];

export default function AgentsScreen() {
  const renderAgentItem = ({ item }: { item: AIAgent }) => (
    <TouchableOpacity style={styles.agentItem}>
      <View style={styles.agentIconContainer}>
        <Text style={styles.agentIcon}>{item.icon}</Text>
      </View>
      <View style={styles.agentInfo}>
        <Text style={styles.agentName}>{item.name}</Text>
        <Text style={styles.agentDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopBar title="AI Agents" />
      
      <View style={styles.content}>
        <FlatList
          data={aiAgents}
          renderItem={renderAgentItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listContent: {
    paddingTop: 16,
    paddingBottom: 24,
  },
  agentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  agentIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  agentIcon: {
    fontSize: 24,
  },
  agentInfo: {
    flex: 1,
  },
  agentName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  agentDescription: {
    fontSize: 14,
    color: '#666',
  },
});
