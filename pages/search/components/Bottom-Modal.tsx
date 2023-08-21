import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';

const filters = [
  {active: true, text: 'Filter'}, 
  {active: false, text: 'Technology'},
  {active: false, text: 'Finance'},
  {active: false, text: 'Arts'},
  {active: false, text: 'Politics'},
  {active: false, text: 'Religion'},
  {active: false, text: 'Sports'}
];

const BottomModal = () => {
	return (
		<View style={styles.bottomModalContainer}>
      <View style={styles.closeButtonContainer}>
        <View style={styles.closeButton}></View>
      </View>
  		<View style={styles.bottomModalHeader}>
  			<Text style={styles.bottomModalHeading}>Filter</Text>

  			<View style={styles.bottomModalResetButton}>
  				<Icon name="trash-o" size={20} color="#000" />
  				<Text>Reset</Text>
  			</View>
  		</View>
      <Text style={styles.sortBy}>Sort By</Text>
  		<View style={styles.bottomFilterContainer}>
       {filters.map((f, index) => (
        <View key={index} style={[
           styles.topic, 
           styles.margin,
           f.text.toLowerCase() === 'filter' ? styles.activeTopic : '', 
           styles.flex, 
           f.text.toLowerCase() === 'filter' ? styles.spaceBetween: ''
         ]}>
           { f.text.toLowerCase() === 'filter' && (<Icon name="filter" color="#fff" size={20} />)}
           <Text style={f.text.toLowerCase() === 'filter' ? styles.activeTopicText: styles.topicText}>{f.text}</Text>
         </View>
        ))}
  		</View>
  		<View style={styles.saveButton}>
        <Text style={styles.saveButtonText}>
          Save
        </Text>
      </View>
		</View>
	);
};

export default BottomModal;
