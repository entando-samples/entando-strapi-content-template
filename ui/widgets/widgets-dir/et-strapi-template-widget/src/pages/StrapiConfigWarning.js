import { Button } from 'patternfly-react';
import React from 'react';
import { BTN_RELOAD_PAGE, STRAPI_URL } from '../constant/constant';
export default function StrapiConfigWarning() {
    return (
        <div className="well">
            <div>
                <h4><strong><span className="pficon pficon-warning-triangle-o"></span> {STRAPI_URL} can't be reached.
                    Please click <a href={process.env.REACT_APP_STRAPI_CONFIG_FE_URL} target="_blank">here</a> to configure it.</strong>
                </h4>
            </div>
            <div className="mt-2">
                <Button bsStyle="primary" onClick={() => window.location.reload()}>
                    {BTN_RELOAD_PAGE}
                </Button>
            </div>
        </div>
    )
}