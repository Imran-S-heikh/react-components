import React, { ReactElement } from 'react';
import './infinite-slide.style.scss';

interface Props {
    
}

function InfiniteSlide({}: Props): ReactElement {
    return (
        <div className="container">
            <div className="view">
                <div className="lane">
                    <div className="item red">
                        red
                    </div>
                    <div className="item orange">
                        orange
                    </div>
                    <div className="item orangered">
                        orangered
                    </div>
                    <div className="item purple">
                        purple
                    </div>

                    <div className="item red">
                        red
                    </div>
                    <div className="item orange">
                        orange
                    </div>
                    <div className="item orangered">
                        orangered
                    </div>
                    <div className="item purple">
                        purple
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfiniteSlide
