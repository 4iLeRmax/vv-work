import type { Partner } from "../types";

export const partners: Partner[] = [
  {
    id: "p-1",
    slug: "budmaster-polska",
    name: "BudMaster Polska",
    logoUrl: "/logos/budmaster-polska.svg",
    industry: "Будівництво",
    location: { city: "Варшава", country: "Польща", countryCode: "PL" },
    description:
      "Будівельна компанія повного циклу: житлові комплекси, комерційна нерухомість, реконструкція.",
    about:
      "BudMaster Polska працює на ринку Польщі понад 12 років і реалізувала більше 40 проєктів у Варшаві, Кракові та Вроцлаві. Ми регулярно наймаємо бригади з України та Білорусі, надаємо офіційне працевлаштування за B1/B2-візою, житло та трансфер на об’єкт.",
    employeesCount: 340,
    foundedYear: 2012,
    website: "https://budmaster-polska.example.com",
    perks: [
      "Оплачуване житло",
      "Офіційне працевлаштування",
      "Медстраховка",
      "Компенсація проїзду",
    ],
    verified: true,
  },
  {
    id: "p-2",
    slug: "techflow-solutions",
    name: "TechFlow Solutions",
    logoUrl: "/logos/techflow-solutions.svg",
    industry: "IT",
    location: { city: "Берлін", country: "Німеччина", countryCode: "DE" },
    description:
      "Продуктова IT-компанія, розробляє SaaS-рішення для логістики та рітейлу.",
    about:
      "TechFlow Solutions — команда з 90 інженерів у Берліні та Кракові. Ми будуємо продукти для великих логістичних операторів Європи, активно наймаємо віддалено і релокуємо спеціалістів до Німеччини з повним пакетом підтримки.",
    employeesCount: 90,
    foundedYear: 2017,
    website: "https://techflow-solutions.example.com",
    perks: [
      "Релокаційний пакет",
      "Гнучкий графік",
      "Бюджет на навчання",
      "Опційна віддалена робота",
    ],
    verified: true,
  },
  {
    id: "p-3",
    slug: "eurologistics-group",
    name: "EuroLogistics Group",
    logoUrl: "/logos/eurologistics-group.svg",
    industry: "Логістика",
    location: { city: "Прага", country: "Чехія", countryCode: "CZ" },
    description:
      "Логістичний оператор: складські комплекси та вантажоперевезення по ЄС.",
    about:
      "EuroLogistics Group керує 6 складськими хабами в Чехії та Словаччині й обслуговує маршрути по всьому Шенгену. Компанія пропонує стабільний графік, навчання на місці та кар’єрний розвиток від комплектувальника до керівника зміни.",
    employeesCount: 520,
    foundedYear: 2009,
    website: "https://eurologistics-group.example.com",
    perks: [
      "Оплачувані понаднормові",
      "Спецодяг за рахунок компанії",
      "Безкоштовне харчування у зміну",
    ],
    verified: true,
  },
  {
    id: "p-4",
    slug: "grand-hotel-alpina",
    name: "Grand Hotel Alpina",
    logoUrl: "/logos/grand-hotel-alpina.svg",
    industry: "Готельно-ресторанна сфера",
    location: { city: "Інсбрук", country: "Австрія", countryCode: "AT" },
    description: "Чотиризірковий готель в Альпах із рестораном та spa-центром.",
    about:
      "Grand Hotel Alpina приймає гостей цілий рік — гірськолижний сезон взимку та трекінг влітку. Наша команда з 150 співробітників — 30 національностей. Пропонуємо сезонні та постійні контракти з проживанням на території готелю.",
    employeesCount: 150,
    foundedYear: 1998,
    website: "https://grand-hotel-alpina.example.com",
    perks: [
      "Проживання на території",
      "Харчування 3 рази на день",
      "Знижки на spa",
      "Сезонні бонуси",
    ],
    verified: true,
  },
  {
    id: "p-5",
    slug: "freshfood-manufacturing",
    name: "FreshFood Manufacturing",
    logoUrl: "/logos/freshfood-manufacturing.svg",
    industry: "Виробництво",
    location: { city: "Роттердам", country: "Нідерланди", countryCode: "NL" },
    description:
      "Харчове виробництво повного циклу: пакування та дистрибуція по Бенілюксу.",
    about:
      "FreshFood Manufacturing — один з найбільших виробників заморожених напівфабрикатів у Нідерландах. Завод працює у 3 зміни, є вакансії для операторів ліній без досвіду з навчанням на місці протягом першого тижня.",
    employeesCount: 410,
    foundedYear: 2005,
    website: "https://freshfood-manufacturing.example.com",
    perks: [
      "Навчання з нуля",
      "Доплата за нічні зміни",
      "Транспорт від житла до заводу",
    ],
    verified: true,
  },
  {
    id: "p-6",
    slug: "transeuro-cargo",
    name: "TransEuro Cargo",
    logoUrl: "/logos/transeuro-cargo.svg",
    industry: "Водії",
    location: { city: "Катовіце", country: "Польща", countryCode: "PL" },
    description: "Міжнародні вантажоперевезення категорії C+E по маршрутах ЄС.",
    about:
      "TransEuro Cargo — транспортна компанія з власним автопарком з 85 тягачів (Scania, Volvo, MAN). Наймаємо водіїв категорії C+E з досвідом міжнародних рейсів від 1 року, надаємо службовий транспорт та картку палива.",
    employeesCount: 130,
    foundedYear: 2011,
    website: "https://transeuro-cargo.example.com",
    perks: [
      "Новий автопарк",
      "Картка палива",
      "Оплата простою",
      "Щотижневі виплати",
    ],
    verified: true,
  },
  {
    id: "p-7",
    slug: "cleancity-services",
    name: "CleanCity Services",
    logoUrl: "/logos/cleancity-services.svg",
    industry: "Інші",
    location: { city: "Мюнхен", country: "Німеччина", countryCode: "DE" },
    description:
      "Клінінгові та фасилітаційні послуги для бізнес-центрів і торгових мереж.",
    about:
      "CleanCity Services обслуговує понад 200 об’єктів у Мюнхені та окрузі: офіси, ТРЦ, склади. Гнучкий графік підходить для суміщення з навчанням, є вакансії з частковою зайнятістю.",
    employeesCount: 610,
    foundedYear: 2014,
    website: "https://cleancity-services.example.com",
    perks: [
      "Гнучкий графік",
      "Робота біля дому",
      "Офіційний договір з першого дня",
    ],
    verified: false,
  },
];
