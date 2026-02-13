import ArrowUpRightIcon from "../../icons/ArrowUpRightIcon";
import "./CustomBtnLink.scss";

type CustomBtnLinkProps = {
	path: string;
	name: string;
	target?: string;
	customWidth?: string;
};

const CustomBtnLink = ({
	path,
	name,
	target = "_self",
	customWidth,
}: CustomBtnLinkProps) => {
	return (
		// TODO: learn this
		<a
			style={{ width: customWidth }}
			className="header__link"
			href={path}
			target={target}
		>
			<span>{name}</span>
			<span
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: 30,
					height: 30,
				}}
			>
				<span className="icon-container-wrapper">
					<span className="icon-container">
						<span>
							<ArrowUpRightIcon />
						</span>
						<span>
							<ArrowUpRightIcon />
						</span>
					</span>
				</span>
			</span>
		</a>
	);
};

export default CustomBtnLink;
