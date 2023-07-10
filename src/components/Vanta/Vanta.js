import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min.js";

const Vanta = () => {
	const vantaRef = useRef(null);
	let vantaEffect = null;

	useEffect(() => {
		vantaEffect = WAVES({
			el: vantaRef.current,
			THREE: THREE,
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: 200.0,
			minWidth: 200.0,
			scale: 1.0,
			scaleMobile: 1.0,
			color: 0x50b11,
		});

		return () => {
			if (vantaEffect) {
				vantaEffect.destroy();
			}
		};
	}, []);

	return <div className="vanta-bg" ref={vantaRef}></div>;
};

export default Vanta;
