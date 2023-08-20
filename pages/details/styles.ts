import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'blue',
    position: 'relative',
    display: 'flex',
    flex: 1,
  },
  backButton: {
    width: 32,
    backgroundColor: 'rgba(245, 245, 245, 0.50)',
    height: 32,
    elevation: 10,
    zIndex: 10,
    margin: 15,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'absolute',
  },
  image: {
    height: 400,
  },
  card: {
    position: 'relative',
    top: 250,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginHorizontal: 32,
    elevation: 10,
    zIndex: 10,
  },
  date: {
    color: '#2E0505',
    // font-family: Nunito;
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 20.8,
  },
  title: {
    color: '#000',
    marginVertical: 4,
    // fontFamily: New York Small;
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.2,
  },
  author: {
    color: 'rgba(46, 5, 5, 1)',
    // font-family: Nunito;
    fontSize: 10,
    fontWeight: '800',
    lineHeight: 10,
    marginVertical: 6,
  },
  newsTextContainer: {
    backgroundColor: '#fff',
    position: 'relative',
    top: 200,
    zIndex: 4,
    paddingTop: 88,
    paddingBottom: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 15,
  },
  fabContainer: {
    elevation: 10,
    zIndex: 10,
    position: 'absolute',
    top: 290,
    right: 0,
    marginRight: 18,
    width: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'rgba(255, 58, 68, 1)',
  },
});

export default styles;
