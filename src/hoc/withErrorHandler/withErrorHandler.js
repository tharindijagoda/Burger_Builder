import React,{ Component,Fragment } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent,axios) =>{
    return class extends Component{
        state={
            error:null
        }
        componentDidMount(){
            this.reqInterceptor = axios.interceptors.request.use(req=>{
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res=>res,error=>{
                this.setState({error: error});
            });
        }
        componentWillUnmount(){
            console.log('Will Unmount', this.reqInterceptor,this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        errorComfirmedHandler = () =>{
            this.setState({error:null})
        }

        render(){
            return(
                <Fragment>
                    <Modal  show={this.state.error}
                            modalClosed={this.errorComfirmedHandler}>                                           
                            {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>
            );
        }
    }
}

export default withErrorHandler;