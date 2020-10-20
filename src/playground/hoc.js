
import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info: </h1>
        <p>This info is: {props.info}</p>
    </div>
)

const AminWarningInfo = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>THis is security info</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props} /> : <p>Dang nhap that bai</p>}
        </div>
    )
}

const AdminInfo = AminWarningInfo(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuth={true} info='Chao mung ban Nam dep zai' />, document.getElementById('app'));