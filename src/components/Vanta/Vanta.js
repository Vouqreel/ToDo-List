import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.clouds.min.js";

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
			skyColor: "#502D72",
			cloudColor: "#BE3465",
			cloudShadowColor: 0x4989,
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
