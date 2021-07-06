import React, { ReactElement, useEffect, useRef } from 'react'

interface Props {
	width?: string,
	height?: string,
	fill?: string,
	className?: string
}

function SuccessIcon(props: Props): ReactElement {
	const circleref = useRef<SVGCircleElement | null>(null);
	const doneRef = useRef<SVGPathElement | null>(null);

	useEffect(() => {
		console.log(circleref.current?.getTotalLength())
		console.log(doneRef.current?.getTotalLength())
	}, []);

	return (
		<svg className="success" viewBox="0 0 455.11 455.11" {...props}>
			<defs>
				<clipPath id="clip-path" transform="translate(0)">
					<rect fill="none" width="455.11" height="455.11" />
				</clipPath>
			</defs>

			<g clipPath="url(#clip-path)">
				{/* <path fill="none" d="M-49.71,79.13" transform="translate(0)" /> */}
				{/* <path stroke="red" strokeWidth="10px" strokeMiterlimit="10px" d="M-216.11,187.22" transform="translate(0)" /> */}
				<circle className="circle" ref={circleref} stroke="#fff" strokeWidth="30px" fill="none" cx="227.56" cy="227.56" r="212.56" transform="translate(-94.26 227.56) rotate(-45)" />
				<path className="inner-circle" fill="#7437af" d="M227.56,0C353.23,0,455.11,101.88,455.11,227.56S353.23,455.11,227.56,455.11,0,353.23,0,227.56,101.88,0,227.56,0" transform="translate(0)" />
				<path className="inner-circle" fill="#4e2b7f" d="M455.11,227.56c0,125.15-102.4,227.55-227.55,227.55C155,455.11,91,422.4,49.78,369.78,88.18,401.07,138,419.56,192,419.56c125.16,0,227.55-102.4,227.55-227.56,0-54-18.48-103.82-49.77-142.22C422.4,91,455.11,155,455.11,227.56" transform="translate(0)" />
				<path className="inner-circle" stroke="#fff" stroke-linecap="round" stroke-width="30px" fill="none" d="M351.29,142.22,203.38,304.36a24.31,24.31,0,0,1-37,0l-62.58-69.69" transform="translate(0)" />
				<path className="done" ref={doneRef} stroke="#fff" stroke-linecap="round" stroke-width="30px" fill="none" d="M351.29,142.22,203.38,304.36a24.31,24.31,0,0,1-37,0l-62.58-69.69" transform="translate(0)" />
			</g>
		</svg>

	)
}

export default SuccessIcon;