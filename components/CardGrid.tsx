import { StyleSheet, View } from 'react-native';
import { ExpandableCard } from './ExpandableCard';

const cardData = [
  { title: 'Tree Planting', content: 'Discover how planting trees can earn you carbon credits.', image: require('@/assets/images/react-logo.png') },
  { title: 'Renewable Energy', content: 'Explore renewable energy options and their carbon credit benefits.', image: require('@/assets/images/react-logo.png') },
];

export function CardGrid() {
  return (
    <View style={styles.grid}>
      {cardData.map((card, index) => (
        <View key={index} style={styles.cardContainer}>
          <ExpandableCard title={card.title} content={card.content} image={card.image} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: -6,
  },
  cardContainer: {
    width: '50%',
    aspectRatio: 1,
  },
});