import React from 'react';
import {View, Text, Image} from 'react-native';


const Topics: React.FC = () => {
	return (
	  <View>
	    <View>
	    <Image 
	    	source={require('../../assets/images/christian-buehner-Irh2teUibVE-unsplash.jpg')}
	    />	
	    </View>
	    <View>
	    	<Text>
	    		5 things to know about the 'conundrum' of lupus
	    	</Text>
	    	<Text>
	    		Matt Villano
	    	</Text>
	    	<Text>
	    		Sunday, 9 May 2021
	    	</Text>
	    </View>
	  </View>
	);
};

export default Topics;