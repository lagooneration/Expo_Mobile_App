import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Animated, Image, ImageSourcePropType } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

type ExpandableCardProps = {
  title: string;
  content: string;
  image: ImageSourcePropType;
};

export function ExpandableCard({ title, content, image }: ExpandableCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <TouchableOpacity
        onPress={() => setIsExpanded(!isExpanded)}
        activeOpacity={0.7}
        style={[
          styles.card,
          isExpanded && styles.expandedCard
        ]}>
        <ThemedView style={styles.cardContent}>
          {!isExpanded ? (
            <>
              <Image source={image} style={styles.image} />
              <ThemedText type="defaultSemiBold" style={styles.imageTitle}>
                {title}
              </ThemedText>
            </>
          ) : (
            <>
              <ThemedText type="defaultSemiBold">{title}</ThemedText>
              <ThemedText style={styles.content}>{content}</ThemedText>
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}>
                <IconSymbol name="chevron.right" size={24} color="#687076" />
              </TouchableOpacity>
            </>
          )}
        </ThemedView>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    card: {
      flex: 1,
      margin: 6,
      height: 100,
      borderRadius: 12,
      backgroundColor: '#f5f5f5',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      overflow: 'hidden',
    },
    expandedCard: {
      position: 'absolute',
      top: 20,
      left: 20,
      right: 20,
      height: 'auto',
      minHeight: 200,
      zIndex: 999,
    },
    cardContent: {
      flex: 1,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    imageTitle: {
      position: 'absolute',
      bottom: 8,
      left: 8,
      right: 8,
      color: '#fff',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: 0, height: 1 },
      textShadowRadius: 3,
    },
    content: {
      marginTop: 12,
      padding: 16,
    },
    closeButton: {
      position: 'absolute',
      top: 12,
      right: 12,
    },
  });