import { useEffect, useState } from "react";
import CustomBtnLink from "../CustomBtnLink/CustomBtnLink";
import logo from "/logo-white.svg";
import "./Header.scss";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [headerHidden, setHeaderHidden] = useState(false);

	useEffect(() => {
		let prevScrollY = 0;

		const handleHeader = () => {
			const scrollY = window.scrollY;

			setHeaderHidden(scrollY > prevScrollY);
			prevScrollY = scrollY;
		};

		window.addEventListener("scroll", handleHeader);

		return () => window.removeEventListener("scroll", handleHeader);
	}, []);

	function toggleMenu() {
		setMenuOpen((prev) => !prev);
	}

	return (
		<header className={`header ${headerHidden ? "header--hidden" : ""}`.trim()}>
			<div className="header-inner">
				<a className="header__logo" href="">
					<img src={logo} alt="" />
				</a>
				<nav className="header-nav">
					<a className="header-nav__link header-nav__link--active" href="#hero">
						Úvod
					</a>
					<a className="header-nav__link" href="#about-me">
						O mně
					</a>
					<a className="header-nav__link" href="#services">
						Služby
					</a>
					<a className="header-nav__link" href="#why-me">
						Proč se mnou spolupracovat
					</a>
					<a className="header-nav__link" href="#contact">
						Kontakt
					</a>
				</nav>
				<div className="header-link-container">
					<CustomBtnLink path="#contact" name="Nezávazná konzultace" />
				</div>
				<button
					onClick={toggleMenu}
					className={`menu-btn ${menuOpen ? "menu-btn--active" : ""}`.trim()}
				>
					<span
						className={`menu-btn__center-line ${
							menuOpen ? "menu-btn__center-line--active" : ""
						}`.trim()}
					></span>
				</button>
			</div>
			<div className={`menu ${menuOpen ? "menu--open" : ""}`}>
				<nav className="menu-nav">
					<a
						className={`menu-nav__link menu-nav__link--active ${
							menuOpen ? "menu-nav__link--visible" : ""
						}`}
						href="#hero"
					>
						Úvod
					</a>
					<a
						className={`menu-nav__link ${
							menuOpen ? "menu-nav__link--visible" : ""
						}`}
						href="#about-me"
					>
						O mně
					</a>
					<a
						className={`menu-nav__link ${
							menuOpen ? "menu-nav__link--visible" : ""
						}`}
						href="#services"
					>
						Služby
					</a>
					<a
						className={`menu-nav__link ${
							menuOpen ? "menu-nav__link--visible" : ""
						}`}
						href="#why-me"
					>
						Proč se mnou spolupracovat
					</a>
					<a
						className={`menu-nav__link ${
							menuOpen ? "menu-nav__link--visible" : ""
						}`}
						href="#contact"
					>
						Kontakt
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
