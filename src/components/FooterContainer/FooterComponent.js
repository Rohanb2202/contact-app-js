import React from 'react';
import { Layout } from 'antd';
var { Footer } = Layout;

const FooterComponent = () => {

    const antdFooterLayoutCSS = {
        borderRadius: 0,
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100%',
    };

    const antdFooterCSS = {
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        backgroundColor: 'black',
        opacity: '0.6',
        width: '100vw',
        height: '0vh',
        bottom: '0',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%'


    };

    return (
        <>

            <div className='footerLayout'>
                <Layout style={antdFooterLayoutCSS}>
                    <Footer style={antdFooterCSS}>Footer</Footer>
                </Layout>
            </div>

        </>
    );

};

export default FooterComponent;