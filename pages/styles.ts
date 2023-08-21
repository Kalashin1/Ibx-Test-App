import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 15,
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#F0F1FA',
    backgroundColor: '#FFF',
    borderRadius: 16,
    marginVertical: 16,
    paddingHorizontal: 16,
    width: '80%',
  },
  searchIconContainer: {
    position: 'relative',
    left: -50,
  },
  notificationIconContainer: {
    backgroundColor: 'rgba(255, 58, 68, 1)',
    height: 40,
    width: 40,
    position: 'relative',
    left: -10,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderContainer: {
    paddingHorizontal: 15,
  },
  sliderTextContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderHeading: {
    // font-family: New York Small;
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 20.8,
  },
  seeAll: {
    color: '#0080FF',
    // font-family: Nunito;
    fontSize: 12,
    fontWeight: '600',
    marginRight: 10
  },
  sliderInnerContainer: {
    marginVertical: 16,
  },
  sliderCard: {
    fontWeight: '800',
    position: 'relative',
    top: -160,
    marginLeft: 16
  },
  sliderImage: {
    height: 240,
    width: '110%',
    borderRadius: 8
  },
  sliderAuthor: {
    color: '#FFF',
    // font-family: Nunito;
    fontSize: 10,
    fontWeight: '800',
  },
  sliderTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 8,
    paddingRight: 10,
  },
  sliderQuote: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '400',
    marginTop: 38,
    paddingRight: 20,
  },
  topicContainer: {
    // flexDirection: 'row',
    marginTop: 24,
    paddingHorizontal: 16,
    marginBottom: 16,
    // borderWidth: 2,
  },
  topic: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F0F1FA',
  },
  topicText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 12,
  },
  activeTopic: {
    backgroundColor: 'rgba(255, 58, 68, 1)'
  },
  activeTopicText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  cardsContainer: {
    paddingHorizontal: 16,
    height: 139,
  },
  cardsImage: {
    height: 128,
    width: 345,
    borderRadius: 8,
  },
  cardTextContainer: {
    position: 'relative',
    top: -122,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  cardTextTitle: {
    color: '#FFF',
    // fontFamily: New York Small;
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20.8,
  },
  cardTextFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 49,
  },
  cardTextAuthor: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 20.8,
  },
  cardTextDate: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 20.8,
    marginRight: 16,
  },
  footerContainer: {
    marginHorizontal: 43,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#0000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    position: 'relative',
    top: -100,
    borderRadius: 32,
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 40,
  },
  footerNavItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
