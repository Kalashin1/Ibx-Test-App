import {View, Text} from 'react-native';
import React from 'react';
import Topics from './Topics';
import Icon from 'react-native-vector-icons/FontAwesome'

const BottomModal = () => {
	return (
		<View>
		<View>
			<Text>Filter</Text>

			<View>
				<Icon name="trash-o" size={20} color="#000" />
				<Text>Reset</Text>
			</View>
		</View>
		<View>
			<Topics />
		</View>
		<View><Text>Save</Text></View>
		</View>
	);
};

export default BottomModal;
