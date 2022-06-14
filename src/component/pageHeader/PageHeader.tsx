import { ReactComponent as LoginIcon } from "../../assets/login.svg";

import './PageHeader.scss';
import PageHeaderNav from "./pageHeaderNav/PageHeaderNav";

const PageHeader = () => {

    return (
        <div className="page-header-wrap">
            <div className="container">
                <a href="/" className="logo-icon" />
                <div className="page-header-auth">
                    <LoginIcon className="page-header-auth-icon" />
                    <span className="page-header-auth-text">Login</span>
                </div>
                <PageHeaderNav />
            </div>
        </div>
    )
}


export default PageHeader;