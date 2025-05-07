import { InlineCode } from "@/once-ui/components";

const company = {
  companyName: "PROFI MAKAČ s.r.o.",
  get name() {
    return `${this.companyName}`;
  },
  role: "Stavební firma",
  avatar: "",
  location: "Europe/Praha",
  languages: ["English", "Český"],
};

const newsletter = {
  display: true,
  title: <>Spojte se s nami</>,
  description: <>Vyplňte náš formulář níže a my se vám co nejdříve ozveme.</>,
};

const social = [
  {
    name: "Email",
    icon: "email",
    link: "mailto:profi-makach@seznam.cz",
  },
  {
    name: "+420774116719",
    icon: "phone",
    link: "tel:+420774116719",
  },
];

const home = {
  label: "Home",
  title: `PROFI MAKAČ s.r.o.`,
  description: `${company.role}`,
  headline: <>Vaše spokojenost je naší prioritou</>,
  subline: (
    <>
      Stavební a developerská firma{" "}
      <InlineCode>Praha, Středočeský kraj a ČR</InlineCode>
    </>
  ),
};

const about = {
  label: "O nas",
  title: "O nas",
  description: ``,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: true,
    link: "https://cal.com/profimakac/30min",
  },
  location: {
    display: true,
    link: "https://maps.app.goo.gl/f3LAhU1cBcHyALso9",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <>
          Jsme rodinná stavební firma s dlouholetou tradicí, která se
          specializuje na výstavbu vysoce kvalitních staveb.
        </>
        <br />
        <br />
        <>
          Naše společnost se pyšní pečlivým přístupem k detailům a osobním
          nasazením, což nám umožňuje poskytovat služby na nejvyšší úrovni.
          Každý projekt realizujeme s maximální pečlivostí a důrazem na kvalitu,
          což zajišťuje spokojenost našich klientů. <br />
          <br /> Naše rodinné hodnoty se promítají do každé fáze stavebního
          procesu, od návrhu až po dokončení, a zaručují spolehlivost a důvěru v
          naše služby. Nejlepším ukazatelem naší kvality je skutečnost, že se k
          nám naši zákazníci neustále vracejí
        </>
      </>
    ),
  },
  work: {
    display: true,
    title: "Naše služby",
    services: [
      {
        serviceName: "Rekonstrukce bytů",
        achievements: [
          <>Specializujeme se na kompletní rekonstrukce bytů na klíč.</>,
          <>
            Nabízíme profesionální přístup, kvalitní řemeslné práce, moderní
            řešení a osobní dohled nad každou zakázkou.
          </>,
          <>
            Zajistíme vše od návrhu po předání – spolehlivě, včas a podle vašich
            představ.
          </>,
        ],
        images: [
          {
            src: "/images/projects/random-project/photo_2.jpeg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
        icon: "🏢",
      },
      {
        serviceName: "Rekonstrukce domů",
        achievements: [
          <>
            Specializujeme se na výstavbu rodinných domů na klíč s kompletním
            servisem od prvotního návrhu až po předání hotového domu.
          </>,
          <>
            Naši odborníci zajišťují všechny aspekty výstavby, včetně
            projektování, získání stavebního povolení, výběru kvalitních
            materiálů a samotné realizace.
          </>,
          <>
            Díky důrazu na vysokou kvalitu práce a využívání moderních
            technologií splníme všechny vaše představy a požadavky, aby váš nový
            domov byl přesně takový, jaký si přejete.
          </>,
        ],
        images: [
          {
            src: "/images/projects/random-project/photo_5.jpeg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
        icon: "🏡",
      },
      {
        serviceName: "Výstavba RD",
        achievements: [
          <>
            Naše společnost se specializuje na profesionální vedení projektů,
            které zahrnuje komplexní řízení všech fází stavebního procesu.
          </>,
          <>
            Od úvodního plánování a návrhu, přes koordinaci stavebních prací, až
            po závěrečnou kontrolu a předání hotového díla.
          </>,
          <>
            Pečlivě dbáme na dodržování stanovených termínů, rozpočtu a vysokých
            standardů kvality, což zajišťuje úspěšnou realizaci projektů a
            maximální spokojenost našich klientů.
          </>,
        ],
        images: [
          {
            src: "/images/projects/work-1/photo_2.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
        icon: "🧱",
      },
      ,
      {
        serviceName: "Výškové a výkopové práce, fasády, rekonstrukce",
        achievements: [
          <>
            Nabízíme široké spektrum služeb v oblasti stavebnictví, včetně
            výškových prací, renovací fasád, výkopových prací a rekonstrukcí.
          </>,
          <>
            Naše zkušená a odborně vyškolená pracovní síla zajišťuje bezpečnost
            a kvalitu ve všech fázích projektu.
          </>,
          <>
            Používáme moderní technologie a osvědčené postupy, abychom dosáhli
            vynikajících výsledků. S námi můžete počítat s precizním provedením
            a dlouhodobou spolehlivostí našich stavebních řešení.
          </>,
        ],
        images: [
          {
            src: "/images/projects/work-2/photo_4.jpeg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
        icon: "🏗️",
      },
      ,
      {
        serviceName: "Voda, topeni, kanalizace, plyn, elektřina",
        achievements: [
          <>
            Poskytujeme komplexní služby v oblasti architektonických,
            stavebních, odborných inženýrských a rozpočtářských prací.
          </>,
          <>
            Náš zkušený tým odborníků zajišťuje pečlivé plánování a realizaci
            každého projektu, od návrhu až po dokončení.
          </>,
          <>
            Používáme moderní technologie a osvědčené postupy, abychom dosáhli
            vysoké kvality a spokojenosti klientů.
          </>,
          <>
            S námi získáte profesionální přístup a spolehlivá řešení pro všechny
            vaše stavební potřeby.
          </>,
        ],
        images: [
          {
            src: "/images/projects/work-2/photo_1.jpeg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
        icon: "🦺",
      },
      {
        serviceName:
          "Poradenské služby, dodání materiálu, zahradnické práce, zavlažovací systém, odborné vedení",
        achievements: [
          <>
            Naše firma je vaším partnerem od začátku až do konce projektu,
            přičemž se zaměřujeme na individuální potřeby a požadavky každého
            klienta.
          </>,
          <>
            Nabízíme široké spektrum stavebních materiálů a komplexní řízení
            projektů, abychom zajistili úspěšnou a efektivní realizaci vašich
            stavebních plánů.
          </>,
          <>
            Poskytujeme komplexní poradenské služby v oblasti stavebnictví,
            včetně dodávky materiálu a odborného vedení.
          </>,
        ],
        images: [
          {
            src: "/images/projects/work-1/photo_6.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 12,
          },
        ],
        icon: "👷🏻‍♂️",
      },
      ,
      {
        serviceName: "Výkopové práce, geodetické zaměření, bourací práce",
        achievements: [
          <>
            S pečlivostí a zkušenostmi provádíme rozsáhlé výkopové práce pro
            různé typy staveb a projekty.
          </>,
          <>
            Naše geodetické služby zahrnují přesné měření a zaměření pozemků,
            což je klíčové pro správné plánování a realizaci stavebních
            projektů.
          </>,
          <>
            Bourací práce provádíme s ohledem na bezpečnost a životní prostředí,
            abychom zajistili efektivní a bezproblémové odstranění stávajících
            struktur.
          </>,
        ],
        images: [],
        icon: "🛠️",
      },
    ],
  },
  studies: {
    display: false,
    title: "",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Naše realizace",
    skills: [
      {
        title: "",
        description: "",
        images: [
          {
            src: "/images/projects/work-3/photo_1.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/work-3/photo_3.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/work-1/photo_5.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/work-4/photo_7.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Naše rady pro úspešné realizace vašich objektu",
  description: `Read what ${company.companyName} has been up to recently`,
};

const work = {
  label: "Realizace",
  title: "Realizace",
  description: `Design and dev projects by ${company.companyName}`,
};

const gallery = {
  label: "Galerie",
  title: "Galerie",
  description: `A photo collection by ${company.companyName}`,
  images: [
    {
      src: "/images/projects/random-project/photo_1.jpg",
      alt: "image1",
      orientation: "vertical",
    },
    {
      src: "/images/projects/work-2/photo_6.jpg",
      alt: "image2",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/random-project/photo_3.jpg",
      alt: "image3",
      orientation: "vertical",
    },
    {
      src: "/images/projects/random-project/photo_4.jpg",
      alt: "image4",
      orientation: "vertical",
    },
    {
      src: "/images/projects/work-2/photo_5.jpg",
      alt: "image5",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/work-2/photo_7.jpg",
      alt: "image6",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/random-project/photo_2.jpeg",
      alt: "image7",
      orientation: "vertical",
    },
    {
      src: "/images/projects/work-1/photo_1.jpg",
      alt: "image8",
      orientation: "vertical",
    },
    {
      src: "/images/projects/work-1/photo_2.jpg",
      alt: "image9",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/work-1/photo_3.jpg",
      alt: "image10",
      orientation: "vertical",
    },
    {
      src: "/images/projects/work-1/photo_4.jpg",
      alt: "image11",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/work-1/photo_5.jpg",
      alt: "image12",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/work-1/photo_6.jpg",
      alt: "image13",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/work-1/photo_7.jpg",
      alt: "image14",
      orientation: "vertical",
    },
  ],
};

export { company, social, newsletter, home, about, blog, work, gallery };
