import React from "react";
import Helmet from 'react-helmet';

interface ITitleComponentProps {
    title?: string;
}

interface ITitleComponentState {

}

class TitleComponent extends React.Component<ITitleComponentProps, ITitleComponentState> {
    


    render() {
        const {title} = this.props;

        let defaultTitle = '';
        
        return (
            <Helmet>
                <title>{title ? title : defaultTitle}</title>
            </Helmet>
        );
    }
}

export { TitleComponent };