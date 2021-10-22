// import { ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';
import React, { MouseEvent, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import Hide from '../../molecules/Hide.mole';
import './drop-down.style.scss';
import ButtonRipple from '../button-ripple/ButtonRipple.component';
import ClickAwayListener from '../click-away-listener/ClickAwayListener.component';
import Popper from '../popper/Popper.component';


interface Props {
    label?: string,
    options: (string | number)[],
    style?: React.CSSProperties,
    startIcon?: any,
    btnStyle?: React.CSSProperties
}

function DropDown({ label, options, style, startIcon,btnStyle }: Props): ReactElement {

    const [anchorEl, setAnchorEL] = useState<HTMLDivElement | null>(null);
    const [active, setActive] = useState(options[0]);
    const popperRef = useRef<HTMLDivElement | null>(null);
    // const currentElRef = useRef<HTMLButtonElement | null>(null);
    // const optionsContainerRef = useRef<HTMLDivElement | null>(null);


    const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
        if (anchorEl) {
            setAnchorEL(null)
        } else {
            setAnchorEL(event.currentTarget);
        }
    }

    const handleState = () => {

    }

    useEffect(() => {
        // handleRef();
    }, [anchorEl]);

    // const handleRef = () => {
    //     setTimeout(() => {
    //         if (popperRef.current) {
    //             popperRef.current.style.willChange = 'auto'
    //         }
    //     }, 50);
    // }

    const handleItemClick = (selected: string | number) => {
        setAnchorEL(null);
        setActive(selected);
    }

    const handleCurrentItemRef = (ref: HTMLButtonElement | null, item: string | number) => {
        if (active === item && ref) {
            setTimeout(() => {
                ref.scrollIntoView({
                    behavior: 'smooth',
                    block: "center"
                });
            }, 50);
        }
    }


    return ( 
        <ClickAwayListener onClickAway={() => setAnchorEL(null)}>
            <div className="dropdown" style={style}>

                <Hide open={Boolean(label)}>
                    <p className="subtitle-2 text-c mb-1">{label}</p>
                </Hide>
                <ButtonRipple className={clsx('W(100%) Bdrs(1rem)')} >
                    <div className="dropdown__btn" onClick={handleOpen}>
                        <Hide open={Boolean(startIcon)}>
                            {startIcon}
                        </Hide>
                        <p className="subtitle-2 flex-1">{active}</p>
                        {/* <ExpandMore className="icon" /> */}
                    </div>
                </ButtonRipple>
                <Popper ref={popperRef} open={Boolean(anchorEl)} anchorEl={anchorEl} placement="bottom-end">

                    <div className="dropdown__items" >
                        {options.map((item, i) =>
                            <ButtonRipple key={item} ref={(ref: HTMLButtonElement) => handleCurrentItemRef(ref, item)} onClick={(event: MouseEvent<HTMLButtonElement>) => handleItemClick(item)} >
                                <div className={clsx('dropdown__item', active === item && 'active')} >
                                    {item}
                                </div>
                            </ButtonRipple>
                        )}
                    </div>
                </Popper>
            </div>
        </ClickAwayListener>
    )
}

export default DropDown
