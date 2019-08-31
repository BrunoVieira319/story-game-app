import React from 'react'

const containerProvider = (Container, Component) =>
    class Wrapper extends React.Component {
        render = () => (
            <Container.Provider>
                <Component {...this.props}/>
            </Container.Provider>
        )
    };

export default containerProvider