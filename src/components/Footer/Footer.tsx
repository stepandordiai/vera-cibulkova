import logo from "/logo-white.svg";
import "./Footer.scss";
import AnimatedText from "../AnimatedText/AnimatedText";
import TelIcon from "../../icons/TelIcon";
import EmailIcon from "../../icons/EmailIcon";
import PinIcon from "../../icons/PinIcon";
import PersonIcon from "../../icons/PersonIcon";

const Footer = () => {
	return (
		<footer className="footer">
			<nav className="footer-nav">
				<a href="#hero">
					<img src={logo} width={150} alt="" />
				</a>
				<div className="footer-nav-inner">
					<div className="footer-container">
						<p>Navigovat</p>
						<div className="footer__divider"></div>
						<ul className="footer-nav-list">
							<li>
								<a className="footer-nav__link" href="#hero">
									Úvod
								</a>
							</li>
							<li>
								<a className="footer-nav__link" href="#about-me">
									O mně
								</a>
							</li>
							<li>
								<a className="footer-nav__link" href="#services">
									Služby
								</a>
							</li>
							<li>
								<a className="footer-nav__link" href="#why-me">
									Proč se mnou spolupracovat
								</a>
							</li>
							<li>
								<a className="footer-nav__link" href="#contact">
									Kontakt
								</a>
							</li>
						</ul>
					</div>
					<div className="footer-container">
						<p>Kontaktní údaje</p>
						<div className="footer__divider"></div>
						<ul className="footer-nav-list">
							<li>
								<span
									style={{
										display: "flex",
										justifyContent: "flex-start",
										alignItems: "center",
										gap: 5,
									}}
								>
									<PersonIcon /> <span>Věra Cibulková</span>
								</span>
							</li>
							<li>
								<a
									style={{
										display: "flex",
										justifyContent: "flex-start",
										alignItems: "center",
										gap: 5,
									}}
									href="tel:+420774990731"
								>
									<TelIcon /> <span>774 990 731</span>
								</a>
							</li>
							<li>
								<a
									style={{
										display: "flex",
										justifyContent: "flex-start",
										alignItems: "center",
										gap: 5,
									}}
									href="mailto:vera.cibulkova@edofinance.cz"
								>
									<EmailIcon />
									<span>vera.cibulkova@edofinance.cz</span>
								</a>
							</li>
							<li>
								<a
									style={{
										display: "flex",
										justifyContent: "flex-start",
										alignItems: "center",
										gap: 5,
									}}
									href="https://maps.app.goo.gl/AzfwHGpCEAT1RjGo8"
									target="_blank"
								>
									<PinIcon />
									<span>S.K. Neumanna 1220, 530 02 Pardubice</span>
								</a>
							</li>
						</ul>
					</div>
					<div className="footer-container">
						<p>Provozovatel webu</p>
						<div className="footer__divider"></div>
						<ul className="footer-nav-list">
							<li>
								<span>Provozovatel webu je Věra Cibulková</span>
							</li>
							<li>
								<span>IČ 23413034</span>
							</li>
							<li>
								<span>FO podnikající podle Živnostenského zákona.</span>
							</li>
							<li>
								<a href="https://www.edofinance.cz/cz/gdpr" target="_blank">
									Ochrana osobních údajů
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<AnimatedText>
				<p className="footer__name-logo">Věra Cibulková</p>
			</AnimatedText>
			<div className="footer__divider"></div>
			<div className="footer-bottom">
				<div>
					<p>Všechna práva vyhrazena</p>
					<p>&copy; 2026 www.veracibulkova.cz</p>
				</div>
				<p className="author">
					Website created by{" "}
					<a href="https://www.heeeyooo.studio/" target="_blank">
						heeeyooo studio
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
