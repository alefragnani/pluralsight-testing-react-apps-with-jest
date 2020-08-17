import { mapStateToProps } from '../QuestionDetail';

describe('The Question Detail Component', () => {

    describe('The Question Element', () => {
      describe('mapStateToProps', () => {
        it('should map the state to props correctly', () => {
          const appState = {};
          const ownProps = {};
          const component = mapStateToProps(appState, ownProps);
        });
      });
    });

    it('Should not regress', () => {
        
    })
})