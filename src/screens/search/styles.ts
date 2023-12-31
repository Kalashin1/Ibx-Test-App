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
    width: '98%',
  },
  searchIconContainer: {
    position: 'relative',
    left: -38,
  },
  topicContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
    marginBottom: 16,
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
    fontFamily: 'Nunito',
  },
  activeTopic: {
    backgroundColor: 'rgba(255, 58, 68, 1)',
  },
  activeTopicText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
    fontFamily: 'Nunito',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-evenly',
  },
  headingContainer: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Nunito',
  },
  headingItalics: {
    paddingLeft: 4,
    fontStyle: 'italic',
    fontWeight: '700',
  },
  bottomModalContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 33,
    position: 'relative',
    top: 320,
  },
  bottomModalBackDrop: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'relative',
    top: -752,
  },
  bottomModalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomModalHeading: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Nunito',
  },
  bottomModalResetButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    width: 100,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
  },
  sortBy: {
    fontWeight: '600',
    color: '#041E2F',
    marginTop: 25,
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'Nunito',
  },
  bottomFilterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  margin: {
    margin: 5,
  },
  saveButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 45,
    backgroundColor: 'rgba(255, 58, 68, 1)',
    paddingVertical: 13,
    paddingHorizontal: 151,
    borderRadius: 24,
  },
  saveButtonText: {
    color: '#fff',
    fontFamily: 'Nunito',
  },
  closeButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 19,
    borderRadius: 10,
    position: 'relative',
    top: -10,
  },
  closeButton: {
    width: 72,
    height: 5,
    backgroundColor: '#C5C5C5',
  },
});

export default styles;
