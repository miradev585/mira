import React, { useEffect, useRef, useState } from "react";

const navItems = [
  { id: "about", label: "О проекте" },
  { id: "materials", label: "Промоматериалы" },
  { id: "presentations", label: "Презентации" },
  { id: "contacts", label: "Контакты" },
];

const materials = [
  {
    title: "Строительство сегодня",
    text: "Ключевые вызовы и проблемы отрасли",
    file: "Ситуация в России.png",
    format: "PNG",
    size: "1.4 МБ",
  },
  {
    title: "Строительство потом",
    text: "Цифровая трансформация отрасли",
    file: "Будущее строительства.png",
    format: "PNG",
    size: "1.4 МБ",
  },
  {
    title: "MIRA как проект",
    text: "Концепция и ценностное предложение",
    file: "MIRA промо материал.png",
    format: "PNG",
    size: "2.1 МБ",
  },
  {
    title: "Архитектура системы",
    text: "Структура и компоненты платформы",
    file: "12 месяцев.png",
    format: "PNG",
    size: "1.3 МБ",
  },
  {
    title: "Дашборд директора проекта",
    text: "Аналитика и ключевые метрики проекта",
    file: "Ситуация_в_Мировом_строительстве.png",
    format: "PNG",
    size: "1.6 МБ",
  },
  {
    title: "MIRA сегодня",
    text: "Практический фундамент цифровизации",
    file: "Mira сегодня.png",
    format: "PNG",
    size: "1.4 МБ",
  },
];

const stats = [
  { value: "70%", label: "меньше ошибок и брака" },
  { value: "30%", label: "экономия времени" },
  { value: "25%", label: "оптимизация затрат" },
  { value: "100%", label: "прозрачность контроля" },
];

const BASE_URL = import.meta.env.BASE_URL;

function asset(file) {
  return `${BASE_URL}${encodeURI(file)}`;
}

function Logo({ compact = false }) {
  return (
    <span className={`logo ${compact ? "logoCompact" : ""}`} aria-label="MIRA">
      <img className="logoImage" src={asset("mira-logo.png")} alt="MIRA" />
      {!compact && (
        <span className="logoCaption">Система управления строительством</span>
      )}
    </span>
  );
}

function Icon({ name }) {
  const icons = {
    bulb: (
      <>
        <path d="M22 7v4M22 37v4M7 22H3M41 22h-4M10.2 10.2 7.4 7.4M36.6 36.6l-2.8-2.8M33.8 10.2l2.8-2.8M7.4 36.6l2.8-2.8" />
        <path d="M15 20.5a7 7 0 1 1 11.6 5.3 7 7 0 0 0-2.1 5V32h-5v-1.2a7 7 0 0 0-2.1-5A6.9 6.9 0 0 1 15 20.5Z" />
        <path d="M18.5 37h7" />
      </>
    ),
    shield: (
      <>
        <path d="M22 5 35 10v9.5c0 10.5-5.5 16-13 19.5-7.5-3.5-13-9-13-19.5V10l13-5Z" />
        <path d="m16.5 22.5 4 4 7.5-10" />
      </>
    ),
    eye: (
      <>
        <path d="M4 22s6.7-11 18-11 18 11 18 11-6.7 11-18 11S4 22 4 22Z" />
        <circle cx="22" cy="22" r="5.5" />
      </>
    ),
    chart: (
      <>
        <path d="M7 37h34M11 31l8-8 7 6 11-16" />
        <path d="M32 13h5v5M11 37V27M23 37V28M35 37V20" />
      </>
    ),
    building: (
      <>
        <path d="M5 39h38M9 39V16h9v23M23 39V7h10v32M38 39V22h5v17" />
        <path d="M12 22h3M12 28h3M12 34h3M26 13h4M26 19h4M26 25h4M26 31h4" />
      </>
    ),
    target: (
      <>
        <circle cx="22" cy="22" r="15" />
        <circle cx="22" cy="22" r="5" />
        <path d="M22 4v8M22 34v8M4 22h8M34 22h8" />
      </>
    ),
    cloud: (
      <>
        <path d="M14 32H11a7 7 0 0 1 0-14 10 10 0 0 1 19-2 8 8 0 0 1 1 16h-5" />
        <path d="m18 29 4-4 4 4M22 25v13" />
      </>
    ),
  };

  return (
    <svg className="lineIcon" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        {icons[name]}
      </g>
    </svg>
  );
}

function Header({ activeSection }) {
  return (
    <header className="siteHeader">
      <a className="brandLink" href="#top">
        <Logo />
      </a>
      <nav className="desktopNav" aria-label="Основная навигация">
        {navItems.map((item) => (
          <a key={item.id} className={activeSection === item.id ? "active" : ""} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="about" className="hero sectionObserve">
      <div className="heroScene" aria-hidden="true">
        <img src={asset("MIRA промо материал.png")} alt="" />
      </div>
      <div className="heroSlice" aria-hidden="true" />

      <div className="heroCopy">
        <span className="eyebrow">MIRA</span>
        <h1>
          Monitoring
          <br />
          Intelligent
          <br />
          Reality Assistant
        </h1>
        <p>Интеллектуальный цифровой помощник для мониторинга строительной реальности</p>

        <div className="benefits" aria-label="Преимущества">
          <Benefit icon="bulb" title="Инновации" text="Внедрение передовых технологий" />
          <Benefit icon="shield" title="Надежность" text="Безопасность и качество" />
          <Benefit icon="eye" title="Прозрачность" text="Объективные данные и контроль" />
          <Benefit icon="chart" title="Развитие" text="Постоянное совершенствование" />
        </div>
      </div>

    </section>
  );
}

function Benefit({ icon, title, text }) {
  return (
    <article className="benefit">
      <Icon name={icon} />
      <strong>{title}</strong>
      <span>{text}</span>
    </article>
  );
}

function Materials() {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    rowRef.current?.scrollBy({
      left: direction * Math.min(430, window.innerWidth * 0.8),
      behavior: "smooth",
    });
  };

  return (
    <section id="materials" className="materials sectionObserve">
      <div className="sectionHead">
        <div>
          <h2>Промоматериалы для скачивания</h2>
          <p>Презентации, инфографика и материалы о системе MIRA</p>
        </div>
        <button className="textArrow" type="button" onClick={() => scroll(1)}>
          Смотреть все промоматериалы <ArrowRightIcon />
        </button>
      </div>

      <div className="carouselShell">
        <button className="roundNav left" type="button" onClick={() => scroll(-1)} aria-label="Прокрутить влево">
          <ChevronLeftIcon />
        </button>
        <div className="materialRow" ref={rowRef}>
          {materials.map((item, index) => (
            <MaterialCard item={item} index={index} key={item.file} />
          ))}
        </div>
        <button className="roundNav right" type="button" onClick={() => scroll(1)} aria-label="Прокрутить вправо">
          <ChevronRightIcon />
        </button>
      </div>
    </section>
  );
}

function MaterialCard({ item, index }) {
  const handleDownload = () => {
    window.ym?.(109600551, "reachGoal", "download_material", {
      file: item.file,
      title: item.title,
      format: item.format,
    });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "download_material",
      file: item.file,
      title: item.title,
      format: item.format,
    });
  };

  return (
    <article className="materialCard" style={{ "--delay": `${index * 70}ms` }}>
      <div className="preview">
        <img src={asset(item.file)} alt={item.title} loading="lazy" />
      </div>
      <div className="cardBody">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <div className="cardMeta">
          <span>{item.format}</span>
          <span>{item.size}</span>
        </div>
        <a className="downloadButton" href={asset(item.file)} download={item.file} onClick={handleDownload} aria-label={`Скачать ${item.title}`}>
          <DownloadIcon />
        </a>
      </div>
    </article>
  );
}

function InfoStrip() {
  const items = [
    {
      icon: "building",
      label: "Для кого",
      title: "Девелоперы, EPC, заказчики, инвесторы",
      text: "Компании любого масштаба",
    },
    {
      icon: "target",
      label: "Наша цель",
      title: "Объективная картина строительной реальности",
      text: "Данные, аналитика, решения",
    },
    {
      icon: "chart",
      label: "Эффект",
      title: "Прозрачность, контроль, эффективность",
      text: "Снижение рисков и затрат",
    },
    {
      icon: "cloud",
      label: "Технологии",
      title: "AI, BIM, IoT, Big Data, облачные сервисы",
      text: "Современный технологический стек",
    },
  ];

  return (
    <section id="presentations" className="infoStrip sectionObserve">
      {items.map((item) => (
        <article className="infoItem" key={item.label}>
          <Icon name={item.icon} />
          <div>
            <span>{item.label}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

function TechSection() {
  return (
    <section id="technologies" className="tech sectionObserve">
      <div className="techCopy">
        <span className="eyebrow">Единый цифровой контур</span>
        <h2>От строительной площадки до управленческого решения</h2>
        <p>
          MIRA соединяет BIM, AI, мобильные сценарии и данные строительного контроля в один прозрачный
          операционный слой для команды проекта.
        </p>
      </div>
      <div className="statsGrid">
        {stats.map((item) => (
          <article className="statCard" key={item.value}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactsSection() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = () => {
    setFormStatus("Отправляем заявку...");
    window.ym?.(109600551, "reachGoal", "contact_form_submit");
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "contact_form_submit" });
    window.setTimeout(() => {
      setFormStatus("Заявка отправлена. Мы свяжемся с вами в ближайшее время.");
    }, 1200);
  };

  return (
    <section id="contacts" className="contacts sectionObserve">
      <div className="contactsInfo">
        <span className="eyebrow">Контакты</span>
        <h2>Обратная связь</h2>
        <p>
          Оставьте заявку через форму, и команда MIRA свяжется с вами. Для прямого обращения:
          {" "}
          <a href="mailto:miradev585@gmail.com">miradev585@gmail.com</a>
        </p>
      </div>
      <div className="formShell">
        <form
          className="leadForm"
          action="https://forms.yandex.ru/u/6a1f1b9702848f393ce44e85/"
          method="get"
          target="ya-form-submit"
          onSubmit={handleSubmit}
        >
          <div className="leadFormHead">
            <span>mira.request</span>
            <strong>Заявка на связь</strong>
          </div>
          <label>
            <span>Ваше ФИО</span>
            <input name="answer_short_text_9008979678324636" type="text" required autoComplete="name" />
          </label>
          <label>
            <span>Какую компанию вы представляете?</span>
            <input name="answer_short_text_9008979678355752" type="text" required autoComplete="organization" />
          </label>
          <label>
            <span>Как можно с вами связаться?</span>
            <input name="answer_short_text_9008979678517988" type="text" required autoComplete="email" />
          </label>
          <label>
            <span>Ваш вопрос или предложение</span>
            <textarea name="answer_short_text_9008979678578786" rows="4" required />
          </label>
          <input type="hidden" name="iframe" value="1" />
          <div className="leadFormFooter">
            <button type="submit">Отправить</button>
            <p>{formStatus || "Данные будут отправлены через Яндекс Форму."}</p>
          </div>
        </form>
        <iframe className="hiddenSubmitFrame" name="ya-form-submit" title="Отправка формы MIRA" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footerBrand">
        <Logo compact />
        <span>© 2026 MIRA. Все права защищены.</span>
      </div>
      <nav aria-label="Навигация в подвале">
        {navItems.map((item) => (
          <a href={`#${item.id}`} key={item.id}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="footerMail" href="mailto:miradev585@gmail.com">miradev585@gmail.com</a>
    </footer>
  );
}

function useActiveSection() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".sectionObserve"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.08, 0.22, 0.45] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function App() {
  const activeSection = useActiveSection();

  return (
    <>
      <Header activeSection={activeSection} />
      <main id="top">
        <Hero />
        <Materials />
        <InfoStrip />
        <TechSection />
        <ContactsSection />
      </main>
      <Footer />
    </>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m15 5-7 7 7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
