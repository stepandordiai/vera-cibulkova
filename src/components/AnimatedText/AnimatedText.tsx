import { useEffect, useRef, useState } from "react";
import "./AnimatedText.scss";

type AnimatedTextProps = {
	children: React.ReactNode;
};

const AnimatedText = ({ children }: AnimatedTextProps) => {
	const textRef = useRef<HTMLDivElement | null>(null);

	const [animateText, setAnimateText] = useState(false);

	useEffect(() => {
		if (!textRef.current) return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setAnimateText(true);
					}
				});
			},
			{ threshold: 0.5 },
		);

		if (textRef.current) observer.observe(textRef.current);

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={textRef}
			className={`text ${animateText ? "text--animate" : ""}`.trim()}
		>
			{children}
		</div>
	);
};

export default AnimatedText;
