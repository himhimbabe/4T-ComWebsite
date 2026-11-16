// The homepage HTML supplies Traditional Chinese. These arrays supply English and Simplified Chinese.
const translations = {
  skip: ["Skip to content","跳至主要内容"],
  menu: ["Main menu","主菜单"],
  nav: ["Main navigation","主导航"],
  languageLabel: ["Language","选择语言"],
  hardwareNav: ["4S hardware","4S 安全硬件"],
  positioningNav: ["Positioning","定位系统"],
  servicesNav: ["AI & software","AI 与软件"],
  projectsNav: ["Customers","客户"],
  aboutNav: ["About","关于我们"],
  contactNav: ["Contact us","联系我们"],
  heroTitle: ["See more of\nyour worksite","看得更清楚\n工地更安全"],
  heroDescription: ["Smart Site Safety System hardware, EHIGH UWB positioning and custom software for Hong Kong construction and industrial teams.","为香港建筑及工业团队提供智慧工地安全硬件、EHIGH UWB 定位及定制软件。"],
  explore: ["Explore 4S hardware","查看 4S 安全硬件"],
  viewPositioning: ["View UWB positioning","查看 UWB 定位"],
  heroFeature: ["360° Mobile Plant Anti-Collision","360° 移动机械防碰撞系统"],
  hardwareTitle: ["Smart site\nsafety hardware","智慧工地\n安全硬件"],
  hardwareDescription: ["Equip your crew, control access to restricted areas and give plant operators a better view of their surroundings.","为工人配备安全设备，管理限制区域的出入，并协助操作员掌握机械周边情况。"],
  plantCategory: ["Plant and pedestrian safety","机械与行人安全"],
  plantTitle: ["360° Mobile Plant\nAnti-Collision System","360° 移动机械\n防碰撞系统"],
  plantDescription: ["Give operators a view around mobile plant and help them respond when people or obstacles are near the machine.","让操作员掌握移动机械周边情况，在人员或障碍物靠近时及时应对。"],
  plantDetails: ["Explore the 360° system","了解 360° 防碰撞系统"],
  sceneLabel: ["Illustrative view","示意画面"],
  zoneToggle: ["Example alert zone","示例警示区域"],
  watch: ["Smart watch","智能手表"],
  watchDescription: ["A wearable for site teams to support worker monitoring and alerts.","工地人员的穿戴设备，支持人员监测及警示。"],
  watchDetails: ["Explore the smart watch","了解智能手表"],
  lock: ["Smart lock","智能门锁"],
  lockDescription: ["A 4S electronic lock and key solution for controlling access to hazardous areas.","用于危险区域出入管控的 4S 电子锁及钥匙方案。"],
  lockDetails: ["Explore smart access control","了解智能门禁"],
  mewp: ["Scissor lift sensor","剪叉式升降平台传感器"],
  mewpDescription: ["Ultrasonic clearance sensing, warnings and automatic stopping on compatible scissor lifts.","为兼容剪叉式升降平台提供超声波测距、报警及自动停止功能。"],
  mewpDetails: ["Explore the MEWP system","了解 MEWP 安全系统"],
  mewpAlt: ["Illustrative scissor lift with an orange platform and crossed lifting arms","剪叉式升降平台示意图，配有橙色平台和交叉升降臂"],
  hardwarePhotoNote: ["Illustrative scenes show typical applications.","图片为典型应用场景示意。"],
  positioningTitle: ["Precise positioning\nwith EHIGH","EHIGH 恒高\n高精度定位"],
  positioningDescription: ["EHIGH (Everhigh) is ForThink’s UWB positioning brand. It combines location hardware and software to track people, vehicles and assets.","EHIGH 恒高（Everhigh）是 ForThink 旗下的 UWB 定位品牌，结合定位硬件及软件，追踪人员、车辆和资产。"],
  anchorAlt: ["EHIGH positioning anchors in industrial and indoor enclosures","不同外壳的 EHIGH 工业及室内定位基站"],
  tagAlt: ["EHIGH wearable, card and industrial positioning tags","EHIGH 穿戴式、卡片式及工业定位标签"],
  anchors: ["Positioning anchors","定位基站"],
  tags: ["Positioning tags","定位标签"],
  uwbTitle: ["EHIGH UWB positioning","EHIGH UWB 定位"],
  uwbDescription: ["Centimetre-level positioning for people, vehicles and assets using a network of ultra-wideband anchors and tags. Actual accuracy depends on the site and deployment.","通过超宽带基站与标签网络，为人员、车辆及资产提供厘米级定位。实际精度取决于场地和部署。"],
  hybridTitle: ["Hybrid positioning","融合定位"],
  hybridDescription: ["Combine UWB with Bluetooth Angle of Arrival (AoA), or pair UBeacon and iBeacon to match positioning precision to each zone.","结合 UWB 与蓝牙到达角（AoA），或搭配 UBeacon 与 iBeacon，按区域配置所需定位精度。"],
  softwareTitle: ["Mapping and location software","地图及位置软件"],
  softwareDescription: ["EmapEng provides 3D GIS visualisation. Etrack processes location events and supports geofencing and route analysis. Ecloud provides a location IoT platform. easySDK supports integration.","EmapEng 提供三维地理信息可视化。Etrack 处理位置事件，支持电子围栏及路线分析。Ecloud 提供位置物联网平台，easySDK 支持系统集成。"],
  forkliftTitle: ["Forklift anti-collision","叉车防碰撞系统"],
  forkliftDescription: ["Proximity detection and alerts for forklift routes, people and other vehicles in warehouses and industrial facilities.","在仓库及工业设施内，探测叉车附近的人员及其他车辆，并发出接近警示。"],
  everhighLink: ["Visit the Everhigh catalogue","浏览 Everhigh 产品目录"],
  uwbDetails: ["Explore UWB positioning","了解 UWB 定位方案"],
  servicesTitle: ["AI and software development & consultation","AI 及软件开发与咨询服务"],
  servicesDescription: ["Build the tools your teams need to connect site data, automate routine work and turn it into decisions. We help define the problem, prototype a solution and integrate it with your existing systems.","整合工地数据、自动处理日常工作，为团队提供决策依据。我们协助明确需求、制作原型，并接入现有系统。"],
  serviceDetails: ["Explore software services","了解软件服务"],
  servicePhotoAlt: ["Illustrative scene of a software team reviewing a site dashboard","软件团队查看工地仪表板的场景示意"],
  projectsTitle: ["Hong Kong customers and partners","香港客户及合作伙伴"],
  housingAuthority: ["Hong Kong Housing Authority","香港房屋委员会"],
  mtr: ["MTR","港铁"],
  housingSociety: ["Hong Kong Housing Society","香港房屋协会"],
  highwaysDepartment: ["Highways Department","路政署"],
  emsd: ["Electrical and Mechanical Services Department","机电工程署"],
  cedd: ["Civil Engineering and Development Department","土木工程拓展署"],
  universityHongKong: ["The University of Hong Kong","香港大学"],
  gammon: ["Gammon Construction","金门建筑"],
  chunWo: ["Chun Wo Construction","俊和建筑"],
  hipHing: ["Hip Hing Construction","协兴建筑"],
  hkis: ["Hong Kong International School","香港国际学校"],
  aboutTitle: ["About ForThink","关于 ForThink"],
  aboutDescription: ["ForThink (HK) Technology Co., Limited supplies connected safety hardware and custom software for construction and industrial teams. EHIGH, known as Everhigh, is our positioning technology brand, founded in 2014.","四相致新（香港）科技有限公司为建筑及工业团队提供联网安全硬件及定制软件。旗下定位科技品牌 EHIGH 恒高（Everhigh）创立于 2014 年。"],
  contactTitle: ["Talk to us about your project.","与我们谈谈你的项目。"],
  contactDescription: ["Tell us what you need to monitor, automate or build.","欢迎告诉我们您希望监测、自动化或开发哪些工作。"],
  emailCta: ["Email ForThink","邮件联系 ForThink"],
  email: ["Email","电子邮件"],
  scanWhatsApp: ["Scan or tap to chat on WhatsApp","扫码或点击，通过 WhatsApp 联系"],
  company: ["ForThink (HK) Technology Co., Limited","四相致新（香港）科技有限公司"],
  backTop: ["Back to top","返回顶部"],
};

const locales = {
  en: { language: "en-HK", label: "EN", index: 0,
    title: "ForThink Hong Kong | 4S Safety Hardware & UWB Positioning",
    description: "ForThink Hong Kong provides 4S site safety hardware, EHIGH UWB positioning, and AI and software development and consultation." },
  "zh-hant": { language: "zh-Hant-HK", label: "繁中" },
  "zh-hans": { language: "zh-Hans", label: "简中", index: 1,
    title: "ForThink 香港｜4S 安全硬件、UWB 定位及 AI 软件",
    description: "四相致新为香港建筑及工业团队提供智慧工地安全硬件、EHIGH UWB 定位及 AI 软件开发咨询服务。" },
};

const detailLocale = document.documentElement.dataset.locale;
const requestedLocale = detailLocale || new URLSearchParams(location.search).get("lang");
const currentLocale = Object.hasOwn(locales, requestedLocale) ? requestedLocale : "zh-hant";
const locale = locales[currentLocale];
const languageMenu = document.querySelector(".language-menu");

document.documentElement.lang = locale.language;
document.querySelector("[data-active-language]").textContent = locale.label;

if (!detailLocale && locale.index !== undefined) {
  document.title = locale.title;
  document.querySelector('meta[name="description"]').content = locale.description;
  document.querySelector('meta[property="og:title"]').content = locale.title;
  document.querySelector('meta[property="og:description"]').content = locale.description;

  for (const node of document.querySelectorAll("[data-i18n]")) {
    const lines = translations[node.dataset.i18n][locale.index].split("\n");
    node.replaceChildren(...lines.flatMap((line, index) => index
      ? [document.createElement("br"), document.createTextNode(line)]
      : [document.createTextNode(line)]));
  }

  for (const node of document.querySelectorAll("[data-i18n-label]")) {
    node.setAttribute("aria-label", translations[node.dataset.i18nLabel][locale.index]);
  }
  for (const node of document.querySelectorAll("[data-i18n-alt]")) {
    node.alt = translations[node.dataset.i18nAlt][locale.index];
  }
}

for (const link of document.querySelectorAll("[data-solution]")) {
  const folder = currentLocale === "en" ? "" : currentLocale + "/";
  link.href = "./solutions/" + folder + link.dataset.solution + ".html";
}

for (const link of languageMenu.querySelectorAll("[data-language]")) {
  if (link.dataset.language === currentLocale) {
    link.setAttribute("aria-current", "true");
  } else {
    link.removeAttribute("aria-current");
  }

  const updateLanguageLink = () => {
    link.hash = location.hash;
  };
  updateLanguageLink();
  window.addEventListener("hashchange", updateLanguageLink);
}
languageMenu.hidden = false;

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const mobileMenu = window.matchMedia("(max-width: 719px)");

function setMenuOpen(open) {
  navigation.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
}

document.documentElement.classList.add("enhanced");
menuToggle.hidden = false;
menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") === "false");
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});
mobileMenu.addEventListener("change", () => setMenuOpen(false));

document.addEventListener("click", (event) => {
  if (languageMenu.open && !languageMenu.contains(event.target)) languageMenu.open = false;
  if (!menuToggle.contains(event.target) && !navigation.contains(event.target)) {
    setMenuOpen(false);
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (languageMenu.open) {
    languageMenu.open = false;
    languageMenu.querySelector("summary").focus();
  } else if (mobileMenu.matches && navigation.classList.contains("is-open")) {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

const scene = document.querySelector("#plant-scene");
const sceneToggle = document.querySelector("[data-scene-toggle]");
if (scene && sceneToggle) {
  sceneToggle.hidden = false;
  sceneToggle.addEventListener("click", () => {
    const showZone = sceneToggle.getAttribute("aria-pressed") === "false";
    sceneToggle.setAttribute("aria-pressed", String(showZone));
    scene.classList.toggle("plant-zone-off", !showZone);
  });
}
