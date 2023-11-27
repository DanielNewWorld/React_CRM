import Footer from './Footer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
      data: state.firmData
    }
    }
    
    let mapDispatchToProps = (dispatch) => {
      return {
    
      }
    }
    
    const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default FooterContainer;