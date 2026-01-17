import logo from "/logo-white.svg";
import "./Footer.scss";
import AnimatedText from "../AnimatedText/AnimatedText";

const Footer = () => {
	return (
		<footer className="footer">
			<nav className="footer-nav">
				<a href="#hero">
					<img src={logo} width={150} alt="" />
				</a>
				<div className="footer-nav-inner">
					<div className="footer-container">
						<p>Navigation</p>
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
						<ul className="footer-nav-list">
							<li>
								<span>Věra Cibulková</span>
							</li>
							<li>
								<a href="tel:+420774990731">774 990 731</a>
							</li>
							<li>
								<a href="mailto:vera.cibulkova@edofinance.cz">
									vera.cibulkova@edofinance.cz
								</a>
							</li>
							<li>
								<a
									href="https://maps.app.goo.gl/AzfwHGpCEAT1RjGo8"
									target="_blank"
								>
									S.K. Neumanna 1220, 530 02 Pardubice
								</a>
							</li>
						</ul>
					</div>
					<div className="footer-container">
						<p>Provozovatel webu</p>
						<ul className="footer-nav-list">
							<li>
								<span>Provozovatel webu je Věra Cibulková, IČ 23413034</span>
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
				<p>Všechna práva vyhrazena</p>
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
