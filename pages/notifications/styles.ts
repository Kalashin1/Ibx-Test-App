import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15
	},
	image: {
		width: '100%',
		height: 128,
    borderRadius: 10,
	},
  newsCardContainer: {
    marginBottom: 14
  },
  date: {
    color: '#000',
    fontSize: 12,   
    fontWeight: '300',
    lineHeight: 20,
    marginTop: 16,
    paddingVertical: 2
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    lineHeight: 20, 
    marginBottom: 6,
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
  },
  description: {
    color: '#000',
    fontFamily:  'SFPRODISPLAYMEDIUM',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
  link: {
    color: '#0080FF',
    fontFamily:  'SFPRODISPLAYMEDIUM',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
  author: {
    color: 'rgba(46, 5, 5, 1)',
    fontFamily:  'SFPRODISPLAYMEDIUM',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20
  }
})

export default styles;