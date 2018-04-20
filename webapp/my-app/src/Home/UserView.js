/**
 * Created by Rasmus on 2018-04-13.
 */

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (  ) => {

};

const mapDispatchToProps = (  ) => {


};

class UserView extends React.Component {
    render(){
        return(
            <div>
                <p>
                    hadejhej
                </p>
            </div>
        );
    }

}

export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(UserView));