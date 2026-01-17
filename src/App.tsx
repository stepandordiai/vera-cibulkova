import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CustomBtnLink from "./components/CustomBtnLink/CustomBtnLink";
import img from "/01.jpg";
import "./App.scss";
import EmailIcon from "./icons/EmailIcon";
import TelIcon from "./icons/TelIcon";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import AnimatedText from "./components/AnimatedText/AnimatedText";
import qr from "/qr.png";
import logoIcon from "/logo-animal.png";

const servicesData = [
	{
		icon: "/services-icons/01.svg",
		title: "Hypotéky a úvěry",
		desc: "Financování bydlení patří mezi největší rozhodnutí v životě. Pomohu vám zorientovat se v možnostech, porovnám nabídky napříč trhem a pohlídám, aby řešení bylo dlouhodobě udržitelné – nejen dnes, ale i do budoucna. Celým procesem vás provedu krok za krokem tak, abyste se cítili jistě a v klidu.",
	},
	{
		icon: "/services-icons/02.svg",
		title: "Pojištění",
		desc: "Pojištění má smysl jen tehdy, když vás skutečně ochrání. Navrhnu ho tak, aby odpovídalo vaší životní nebo podnikatelské situaci a krylo to, co je skutečně důležité. V případě pojistné události vám pomohu s řešením, abyste na to nebyli sami.",
	},
	{
		icon: "/services-icons/03.svg",
		title: "Finance, investice a spoření",
		desc: "Pomohu vám nastavit finance tak, aby vám dávaly dlouhodobě smysl a vytvářely stabilitu. Společně se podíváme na rezervy, investice i spoření a nastavíme systém, který bude fungovat v reálném životě – nejen na papíře. Vše vysvětluji srozumitelně a bez tlaku.",
	},
	{
		icon: "/services-icons/04.svg",
		title: "Firemní poradenství a firemní úvěry",
		desc: "Podnikání vyžaduje jiný pohled na finance. Pomáhám firmám a podnikatelům s nastavením financování provozu, investic i rozvoje tak, aby řešení obstálo před bankou i v praxi. Díky zkušenostem z bankovního prostředí vím, co banky skutečně sledují – a podle toho připravuji řešení.",
	},
	{
		icon: "/services-icons/05.svg",
		title: "Reality",
		desc: "Finance a reality spolu úzce souvisí. Pomohu vám s financováním i s prodejem nemovitosti tak, aby na sebe jednotlivé kroky navazovaly a celý proces proběhl bez zbytečného stresu.",
	},
];

const whyMeData = [
	{
		title: "Zkušenosti a nadhled",
		desc: "Více než 10 let praxe v bankovnictví mi dává hluboký přehled o financích, produktech i schvalovacích procesech. Navrhuji řešení, která jsou realistická a dlouhodobě funkční.",
	},
	{
		title: "Férový přístup",
		desc: "Zakládám si na otevřené komunikaci a poctivosti. Raději řeknu nepříjemnou pravdu než hezké řešení, které by nefungovalo dlouhodobě.",
	},
	{
		title: "Individuální péče",
		desc: "Každý klient je jiný. Nepracuji se šablonami, ale s lidmi a jejich reálnými potřebami.",
	},
	{
		title: "Dlouhodobá spolupráce",
		desc: "O klienty se starám dlouhodobě. Pomáhám jim lépe se orientovat ve financích, dělat správná rozhodnutí a postupně budovat finanční stabilitu i majetek.",
	},
	{
		title: "VÝZVA K AKCI",
		desc: "	Finance a reality nemusí být složité. Pomohu vám najít řešení, která dávají smysl dnes i do budoucna.",
	},
];

function App() {
	return (
		<>
			<Header />
			<main className="home">
				<section className="hero" id="hero">
					<div className="hero-container">
						<AnimatedText>
							<h1 className="hero__title">
								Finance a reality nemusí být složité.
							</h1>
						</AnimatedText>
						<AnimatedText>
							<p className="hero__subtitle">
								Pomohu vám dělat rozhodnutí, která dávají smysl dnes i do
								budoucna - s klidem, pochopením a dlouhodobou péčí.
							</p>
						</AnimatedText>
						<CustomBtnLink path="#contact" name="Nezávazná konzultace" />
						<div className="hero__divider"></div>
						<a className="hero__link" href="#about-me">
							<span>Posuňte se dolů</span>
							<span className="hero__link-container">
								<span className="hero__link-container-inner">
									<ArrowDownIcon />
									<ArrowDownIcon />
								</span>
							</span>
						</a>
					</div>
				</section>
				<section className="about-me" id="about-me">
					<h2>
						<span>O MNĚ</span>
					</h2>

					<div className="about-me-container">
						<AnimatedText>
							<img className="about-me__img" src={img} alt="" />
						</AnimatedText>
						<div>
							<AnimatedText>
								<p>
									Jmenuji se Věra Cibulková a financím se věnuji více než deset
									let. Zkušenosti jsem získala v bankovním prostředí, kde jsem
									pracovala s fyzickými osobami i firemními klienty a poznala
									finance z pohledu produktů i schvalovacích procesů.
								</p>
							</AnimatedText>
							<br />

							<AnimatedText>
								<p>
									Dnes navrhuji řešení napříč trhem s nadhledem a důrazem na to,
									aby finance dávaly smysl konkrétním lidem, ne jen číslům.
									Působím v oblasti financí a realit pod odborným zázemím
									společnosti EDO FINANCE a pomáhám klientům s důležitými
									finančními rozhodnutími v osobním i podnikatelském životě.
								</p>
							</AnimatedText>

							<br />
							<AnimatedText>
								<p>
									Můj přístup je založený na důvěře, otevřenosti a dlouhodobé
									spolupráci. Záleží mi na tom, aby klient odcházel nejen s
									dobře nastaveným řešením, ale i s pocitem jistoty a klidu.
									Největší odměnou je pro mě doporučení - když mě klient svěří
									svým nejbližším, vím, že má práce dává smysl.
								</p>
							</AnimatedText>
							<AnimatedText>
								<p className="about-me__sign">Věra Cibulková</p>
							</AnimatedText>
						</div>
					</div>
				</section>
				<section className="services" id="services">
					<h2>
						<span>SLUŽBY</span>
					</h2>
					<ul className="services-list">
						{servicesData.map((service, i) => {
							return (
								<li key={i} className="services-item">
									<img
										className="services-item__icon"
										src={service.icon}
										alt=""
									/>
									<AnimatedText>
										<h3>{service.title}</h3>
									</AnimatedText>
									<AnimatedText>
										<p>{service.desc}</p>
									</AnimatedText>
									<div className="services-item__bg-icon-wrapper">
										<AnimatedText>
											<img
												className="services-item__bg-icon"
												src={service.icon}
												alt=""
											/>
										</AnimatedText>
									</div>
								</li>
							);
						})}
					</ul>
				</section>
				<section className="why-me" id="why-me">
					<h2>
						<span>PROČ SE MNOU SPOLUPRACOVAT</span>
					</h2>
					<ul className="why-me-list">
						{whyMeData.map((whyMe, i) => {
							return (
								<li key={i} className="why-me-item">
									<AnimatedText>
										<h3>{whyMe.title}</h3>
									</AnimatedText>
									<div className="footer__divider"></div>
									<AnimatedText>
										<p>{whyMe.desc}</p>
									</AnimatedText>
									<img className="why-me-item__icon" src={logoIcon} alt="" />
								</li>
							);
						})}
					</ul>
				</section>
				<section className="contact" id="contact">
					<h2>
						<span>KONTAKT</span>
					</h2>
					<div className="contact-container">
						<div className="contact-container-inner">
							<div style={{ display: "flex" }}>
								<span className="contact__icon-wrapper">
									<TelIcon size={20} />
								</span>
								<CustomBtnLink path="tel:+420774990731" name="774 990 731" />
							</div>
							<div style={{ display: "flex" }}>
								<span className="contact__icon-wrapper">
									<EmailIcon size={20} />
								</span>
								<CustomBtnLink
									path="mailto:vera.cibulkova@edofinance.cz"
									name="vera.cibulkova@edofinance.cz"
								/>
							</div>
							<div style={{ display: "flex" }}>
								<span className="contact__icon-wrapper">
									<EmailIcon size={20} />
								</span>
								<CustomBtnLink
									path="https://maps.app.goo.gl/aJocQodtv79KDSyf7"
									name="S.K. Neumanna 1220, 530 02 Pardubice"
									target="_blank"
								/>
							</div>
							<img style={{ margin: "auto 0" }} src={qr} width={150} alt="" />
						</div>
						<iframe
							className="contact__map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.748386863162!2d15.775960311998487!3d50.030243617411955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470dcc91d914e045%3A0x8e8920c9ebba8835!2sS.%20K.%20Neumanna%201220%2C%20530%2002%20Pardubice%20V-Zelen%C3%A9%20P%C5%99edm%C4%9Bst%C3%AD!5e1!3m2!1sen!2scz!4v1768481888847!5m2!1sen!2scz"
							// style="border:0;"
							// allowfullscreen=""
							// loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default App;
