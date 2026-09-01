import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "pt" | "en" | "es";

export const languageOptions: Array<{ code: Language; flag: string; label: string }> = [
  { code: "pt", flag: "🇧🇷", label: "Português" },
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
];

const translations = {
  pt: {
    locale: "pt-BR",
    pageTitle: "Rancho Sagrada Família | Mangas premium",
    languageSelector: "Selecionar idioma",
    languageMenu: "Idiomas disponíveis",
    nav: [
      { label: "Início", href: "#inicio" },
      { label: "Quem Somos", href: "#quem-somos" },
      { label: "Produtos", href: "#produtos" },
      { label: "Qualidade", href: "#qualidade" },
      { label: "Exportação", href: "#exportacao" },
      { label: "Contato", href: "#contato" },
    ],
    header: {
      homeLabel: "Rancho Sagrada Família - início",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      contact: "Fale conosco",
    },
    hero: {
      eyebrow: "Agricultura familiar · Juazeiro, Bahia",
      titleLead: "Mangas premium do",
      titleAccent: "Vale do São Francisco",
      description: "Da nossa família para a sua mesa: mangas cultivadas com cuidado, rastreabilidade e padrão para mercados nacionais e internacionais.",
      productsCta: "Conheça nossos produtos",
      contactCta: "Fale conosco",
      trustLabel: "Selos e atuação",
      export: "Exportação",
    },
    about: {
      imageAlt: "Produtor analisando uma manga no pomar",
      eyebrow: "Nossa história",
      title: "Tradição familiar com visão global",
      paragraph1: "No Rancho Sagrada Família, o conhecimento sobre a terra passa de geração em geração. A família acompanha de perto o pomar, a equipe e cada decisão que define a qualidade da colheita.",
      paragraph2: "Essa presença diária se une à tecnologia, ao manejo sustentável e à rastreabilidade para levar mangas do Vale do São Francisco a mercados exigentes, sem perder a proximidade de quem vive a produção.",
      traceable: "Rastreável",
      exportStandard: "Padrão Exportação",
      sustainable: "Cultivo Sustentável",
    },
    history: {
      eyebrow: "Nossa trajetória",
      title: "Uma história cultivada em família",
      intro: "Nossas raízes estão na agricultura familiar. O que começou com a coragem dos nossos pais cresceu com trabalho diário, respeito à terra e o desejo de construir algo para as próximas gerações.",
      milestones: [
        { year: "1975", text: "A família chegou ao Projeto Mandacaru e iniciou sua trajetória cultivando sorgo, alho, cebola, melão e tomate. Foi ali que começou a implantação das primeiras áreas de manga." },
        { year: "2010", text: "O Rancho iniciou uma nova fase de modernização administrativa e produtiva, implantando sua primeira área de produção no Projeto Salitre, reconhecido pela qualidade dos solos para o cultivo de mangas." },
        { year: "Hoje", text: "Mantemos uma cultura de melhoria contínua, com foco em produtividade, qualidade e certificações que preparam nossa produção para a comercialização global." },
      ],
      mainImageAlt: "Registro da família reunida no Rancho Sagrada Família",
      photoAlts: [
        "Equipe do Rancho Sagrada Família reunida no pomar durante a colheita",
        "Dois integrantes do Rancho Sagrada Família caminhando entre mangueiras carregadas",
        "Trabalhadores colhendo mangas e acomodando os frutos em caixas no pomar",
        "Trabalhador colhendo manga diretamente da árvore no pomar",
        "Mangas colhidas sendo organizadas para transporte dentro da fazenda",
        "Produtor do Rancho Sagrada Família segurando um cacho de mangas no pomar",
      ],
    },
    fieldCommitment: {
      eyebrow: "Nossa essência",
      title: "Compromisso no Campo",
      items: [
        { title: "Sustentabilidade", text: "A água é usada com precisão, respeitando o solo e o ritmo de cada pomar.", imageAlt: "Sistema de irrigação por gotejamento levando água diretamente ao solo" },
        { title: "Pessoas", text: "A família e a equipe compartilham o cuidado diário que acompanha cada colheita.", imageAlt: "Trabalhadores realizando a colheita de mangas no pomar" },
        { title: "Qualidade", text: "Seleção atenta, fruta bem cuidada e padrão consistente do campo à expedição.", imageAlt: "Manga madura oval, saudável e centralizada" },
      ],
    },
    products: {
      months: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      title: "Variedades Produzidas",
      intro: "Do pomar à expedição, cada cultivar recebe um manejo próprio para expressar sabor, conservação e desempenho comercial.",
      brandEyebrow: "Sagrada Fruta · Linha premium",
      brandTitle: "Excelência brasileira para mercados de alto padrão",
      brandText: "A Sagrada Fruta é a marca de seleção premium do Rancho Sagrada Família, concebida para o segmento premium da exportação. Reúne mangas selecionadas por BRIX, CALIBRE, COLORAÇÃO, FIRMEZA e RASTREABILIDADE, com apresentação preparada para importadores e distribuidores exigentes.",
      varieties: [
        {
          name: "Palmer", tag: "Exportação", imageAlt: "Mangas Palmer do Rancho Sagrada Família, inteiras e cortadas",
          specifications: [
            { label: "Perfil de sabor", value: "Aroma agradável e doçura delicada, em um conjunto equilibrado." },
            { label: "Polpa", value: "Consistente, macia ao amadurecer e com presença mínima de fibras." },
            { label: "Aparência", value: "A casca combina nuances púrpuras, vermelhas e amarelas; o interior é alaranjado." },
            { label: "Formato", value: "Silhueta alongada e semente proporcionalmente pequena." },
          ],
          ripening: "Próxima do ponto, intensifica a tonalidade avermelhada e cede suavemente ao toque.",
        },
        {
          name: "Tommy Atkins", tag: "Alta resistência", imageAlt: "Mangas Tommy Atkins do Rancho Sagrada Família, inteiras e cortadas",
          specifications: [
            { label: "Perfil de sabor", value: "Doçura agradável e sabor suave." },
            { label: "Polpa", value: "Estrutura firme, característica que favorece o manuseio e o transporte." },
            { label: "Aparência", value: "Mistura de verde e amarelo com uma cobertura avermelhada marcante." },
            { label: "Formato", value: "Fruto robusto, ovalado e levemente alongado." },
          ],
          ripening: "A cor nem sempre revela o ponto; confirme pela leve maciez junto ao pedúnculo.",
        },
        {
          name: "Keitt", tag: "Safra estratégica", imageAlt: "Manga Keitt inteira e cortada, com polpa amarela exposta",
          specifications: [
            { label: "Perfil de sabor", value: "Doçura limpa e equilibrada, de perfil suave." },
            { label: "Polpa", value: "Abundante, firme e bastante suculenta, com baixa presença de fibras." },
            { label: "Aparência", value: "Predomínio de verde mesmo madura, podendo apresentar discreto tom rosado." },
            { label: "Formato", value: "Grande, oval e com excelente rendimento de polpa." },
          ],
          ripening: "Como permanece verde, o melhor sinal é ceder suavemente à pressão sem perder firmeza.",
        },
        {
          name: "Kent", tag: "Perfil premium", imageAlt: "Mangas Kent maduras abertas para mostrar a qualidade da polpa",
          specifications: [
            { label: "Perfil de sabor", value: "Doçura intensa, aroma agradável e sabor encorpado." },
            { label: "Polpa", value: "Macia e suculenta, praticamente livre de fibras." },
            { label: "Aparência", value: "Base verde com áreas avermelhadas e nuances douradas à medida que amadurece." },
            { label: "Formato", value: "Grande, ovalado e com ótimo aproveitamento de polpa." },
          ],
          ripening: "O surgimento de tons dourados e a leve maciez indicam que está pronta para o consumo.",
        },
      ],
      ripeningTitle: "Como reconhecer o ponto de maturação",
      calendarPrefix: "Calendário da",
      productionMonths: "Meses de produção",
      calendarAria: "Meses de produção da manga",
      inProduction: "em produção",
      outOfSeason: "fora da safra",
      logistics: "Logística",
      packagingTitle: "Embalagens para cada mercado",
      packagingText: "Acondicionamos as frutas conforme o destino e o modal de transporte, preservando apresentação e qualidade durante a viagem.",
      box: "Caixa",
      packaging: [
        { market: "Mercado de exportação", transport: "Transporte marítimo", details: ["Calibres 6 ao 14", "252 caixas por pallet", "5.712 caixas por contêiner"], imageAlt: "Caixa de 4 kg para exportação com mangas selecionadas e proteção individual" },
        { market: "Mercado interno", transport: "Transporte rodoviário", details: ["Calibres 8 ao 16", "60 caixas por pallet", "14 a 22 pallets por caminhão"], imageAlt: "Caixa de 18 kg para mercado interno com mangas selecionadas" },
      ],
    },
    process: {
      title: "Do Campo à Expedição",
      text: "Cada etapa segue controle técnico para garantir segurança alimentar, rastreabilidade e qualidade até a entrega final.",
      steps: [
        { title: "Cultivo", text: "Preparo do solo, mudas certificadas e condução técnica." },
        { title: "Manejo", text: "Nutrição, irrigação e monitoramento de pragas e doenças." },
        { title: "Colheita", text: "Ponto ideal de maturação e coloração." },
        { title: "Seleção", text: "Classificação rigorosa por calibre." },
        { title: "Transporte", text: "Logística com temperatura monitorada." },
        { title: "Expedição", text: "Envio para os principais portos." },
      ],
    },
    capacity: {
      eyebrow: "Safra e estrutura",
      title: "Produção e Capacidade",
      metrics: [
        { value: "1.000", label: "toneladas/ano", text: "Capacidade produtiva aproximada" },
        { value: "4", label: "variedades", text: "Palmer, Tommy Atkins, Keitt e Kent" },
        { value: "Mar-Nov", label: "período produtivo", text: "Fornecimento em meses estratégicos" },
        { value: "Exportação", label: "mercados exigentes", text: "Estados Unidos, Europa, Coreia e Mercosul" },
      ],
    },
    certifications: {
      title: "Certificações e Conformidade",
      text: "Produção conduzida com rastreabilidade, boas práticas agrícolas e atenção aos padrões exigidos por mercados internacionais.",
      seal: "Selo",
      items: ["Boas práticas agrícolas", "Responsabilidade social"],
    },
    markets: {
      title: "Mercados Atendidos",
      text: "Do Vale do São Francisco para o mundo.",
      cardTitle: "Frutas selecionadas para mercados exigentes",
      cardText: "Atendemos mercados nacionais e internacionais com frutas selecionadas, rastreabilidade e padrão de exportação.",
      imageAlt: "Mapa de mercados atendidos pelo Rancho Sagrada Família",
    },
    location: {
      eyebrow: "Juazeiro, Bahia",
      title: "Localização Estratégica",
      text: "Localizado em Juazeiro, Bahia, no Vale do São Francisco, o Rancho Sagrada Família está inserido em uma das regiões mais importantes da fruticultura irrigada do Brasil.",
      address: "Lote 190 - EB 301-20",
      addressLine2: "Projeto Salitre, Juazeiro-BA",
      mapLink: "Ver localização no Google Maps",
      imageAlt: "Vista aérea dos pomares do Rancho Sagrada Família no Projeto Salitre, em Juazeiro, Bahia",
      mapTitle: "Localização do Rancho Sagrada Família",
    },
    contact: {
      eyebrow: "Contato comercial",
      title: "Fale direto com o produtor",
      text: "Converse com quem acompanha a produção de perto. Estamos disponíveis para falar sobre safra, fornecimento, embalagens e oportunidades comerciais.",
      name: "Nome", namePlaceholder: "Seu nome",
      company: "Empresa", companyPlaceholder: "Nome da empresa",
      email: "E-mail", emailPlaceholder: "seu@email.com",
      phone: "Telefone/WhatsApp", phonePlaceholder: "+55 (00) 00000-0000",
      message: "Mensagem", messagePlaceholder: "Como podemos ajudar?",
      consent: "Ao enviar, você concorda que seus dados sejam utilizados para retorno do contato solicitado.",
      submit: "Enviar mensagem",
    },
    footer: {
      logoAlt: "Logo Rancho Sagrada Família",
      description: "Uma história familiar cultivando mangas com responsabilidade no Vale do São Francisco.",
      navigation: "Navegação",
      information: "Informações",
      contact: "Contato",
      quality: "Qualidade",
      export: "Exportação",
      rights: "© 2026 Rancho Sagrada Família. Todos os direitos reservados.",
      developedBy: "Desenvolvido por Guilherme Emetério Designer",
    },
    backToTop: { label: "Voltar ao início da página", title: "Voltar ao início" },
  },
  en: {
    locale: "en-US",
    pageTitle: "Rancho Sagrada Família | Premium mangoes",
    languageSelector: "Select language",
    languageMenu: "Available languages",
    nav: [
      { label: "Home", href: "#inicio" },
      { label: "About Us", href: "#quem-somos" },
      { label: "Products", href: "#produtos" },
      { label: "Quality", href: "#qualidade" },
      { label: "Exports", href: "#exportacao" },
      { label: "Contact", href: "#contato" },
    ],
    header: { homeLabel: "Rancho Sagrada Família - home", openMenu: "Open menu", closeMenu: "Close menu", contact: "Contact us" },
    hero: {
      eyebrow: "Family farming · Juazeiro, Bahia",
      titleLead: "Premium mangoes from the",
      titleAccent: "São Francisco Valley",
      description: "From our family to your table: mangoes grown with care, traceability, and the standards required by domestic and international markets.",
      productsCta: "Explore our products", contactCta: "Contact us", trustLabel: "Certifications and reach", export: "Exports",
    },
    about: {
      imageAlt: "Grower inspecting a mango in the orchard", eyebrow: "Our story", title: "Family tradition with a global vision",
      paragraph1: "At Rancho Sagrada Família, knowledge of the land is passed down from generation to generation. The family closely follows the orchard, the team, and every decision that shapes harvest quality.",
      paragraph2: "This daily presence combines with technology, sustainable farming, and traceability to bring mangoes from the São Francisco Valley to demanding markets while preserving the closeness of those who live the production every day.",
      traceable: "Traceable", exportStandard: "Export Standard", sustainable: "Sustainable Farming",
    },
    history: {
      eyebrow: "Our journey", title: "A family-grown story", intro: "Our roots are in family farming. What began with our parents' courage grew through daily work, respect for the land, and the desire to build something for future generations.",
      milestones: [
        { year: "1975", text: "The family arrived at the Mandacaru Project and began growing sorghum, garlic, onions, melons, and tomatoes. It was there that the first mango areas began to take shape." },
        { year: "2010", text: "The ranch entered a new phase of administrative and production modernization, establishing its first growing area in the Salitre Project, recognized for the quality of its soils for mango cultivation." },
        { year: "Today", text: "We maintain a culture of continuous improvement focused on productivity, quality, and certifications that prepare our production for global markets." },
      ],
      mainImageAlt: "The family gathered at Rancho Sagrada Família",
      photoAlts: [
        "Rancho Sagrada Família team gathered in the orchard during harvest", "Two Rancho Sagrada Família team members walking among loaded mango trees", "Workers harvesting mangoes and placing the fruit in orchard crates", "Worker picking a mango directly from the tree", "Harvested mangoes being organized for transport on the farm", "Rancho Sagrada Família grower holding a cluster of mangoes in the orchard",
      ],
    },
    fieldCommitment: {
      eyebrow: "Our essence", title: "Commitment in the Field",
      items: [
        { title: "Sustainability", text: "Water is used precisely, respecting the soil and the rhythm of each orchard.", imageAlt: "Drip irrigation system delivering water directly to the soil" },
        { title: "People", text: "The family and the team share the daily care that accompanies every harvest.", imageAlt: "Workers harvesting mangoes in the orchard" },
        { title: "Quality", text: "Careful selection, well-tended fruit, and consistent standards from field to shipment.", imageAlt: "Healthy, ripe oval mango centered in the image" },
      ],
    },
    products: {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      title: "Our Mango Varieties", intro: "From orchard to shipment, each cultivar receives tailored care to express its flavor, shelf life, and commercial performance.",
      brandEyebrow: "Sagrada Fruta · Premium line", brandTitle: "Brazilian excellence for premium markets",
      brandText: "Sagrada Fruta is Rancho Sagrada Família's premium selection brand, created for the premium export segment. It brings together mangoes selected for BRIX, SIZE, COLOR, FIRMNESS, and TRACEABILITY, with presentation designed for demanding importers and distributors.",
      varieties: [
        { name: "Palmer", tag: "Export", imageAlt: "Whole and cut Palmer mangoes from Rancho Sagrada Família", specifications: [
          { label: "Flavor profile", value: "Pleasant aroma and delicate sweetness in a balanced combination." }, { label: "Flesh", value: "Firm, soft when ripe, and with minimal fiber." }, { label: "Appearance", value: "The skin combines purple, red, and yellow tones; the flesh is orange." }, { label: "Shape", value: "Elongated silhouette with a proportionally small seed." },
        ], ripening: "As it approaches ripeness, its red color deepens and the fruit yields gently to the touch." },
        { name: "Tommy Atkins", tag: "High durability", imageAlt: "Whole and cut Tommy Atkins mangoes from Rancho Sagrada Família", specifications: [
          { label: "Flavor profile", value: "Pleasant sweetness and a mild flavor." }, { label: "Flesh", value: "Firm structure that supports handling and transportation." }, { label: "Appearance", value: "A blend of green and yellow with a striking red blush." }, { label: "Shape", value: "Robust, oval, and slightly elongated fruit." },
        ], ripening: "Color does not always reveal ripeness; check for slight softness near the stem." },
        { name: "Keitt", tag: "Strategic season", imageAlt: "Whole and cut Keitt mango with exposed yellow flesh", specifications: [
          { label: "Flavor profile", value: "Clean, balanced sweetness with a mild profile." }, { label: "Flesh", value: "Abundant, firm, very juicy, and low in fiber." }, { label: "Appearance", value: "Mostly green even when ripe, sometimes with a subtle pink blush." }, { label: "Shape", value: "Large, oval, and with an excellent flesh yield." },
        ], ripening: "Because it stays green, the best sign is a gentle yield to pressure without losing firmness." },
        { name: "Kent", tag: "Premium profile", imageAlt: "Ripe Kent mangoes opened to show flesh quality", specifications: [
          { label: "Flavor profile", value: "Intense sweetness, pleasant aroma, and full-bodied flavor." }, { label: "Flesh", value: "Soft, juicy, and virtually fiberless." }, { label: "Appearance", value: "Green base with red areas and golden tones as it ripens." }, { label: "Shape", value: "Large, oval, and with excellent flesh yield." },
        ], ripening: "Golden tones and slight softness indicate that it is ready to eat." },
      ],
      ripeningTitle: "How to identify ripeness", calendarPrefix: "Production calendar:", productionMonths: "Production months", calendarAria: "Production months for", inProduction: "in production", outOfSeason: "out of season",
      logistics: "Logistics", packagingTitle: "Packaging for every market", packagingText: "We pack the fruit according to its destination and transport mode, preserving presentation and quality throughout the journey.", box: "Box",
      packaging: [
        { market: "Export market", transport: "Sea freight", details: ["Sizes 6 to 14", "252 boxes per pallet", "5,712 boxes per container"], imageAlt: "4 kg export box with selected mangoes and individual protection" },
        { market: "Domestic market", transport: "Road transport", details: ["Sizes 8 to 16", "60 boxes per pallet", "14 to 22 pallets per truck"], imageAlt: "18 kg box for the domestic market with selected mangoes" },
      ],
    },
    process: { title: "From Field to Shipment", text: "Every stage follows technical controls to ensure food safety, traceability, and quality through final delivery.", steps: [
      { title: "Cultivation", text: "Soil preparation, certified seedlings, and technical crop management." }, { title: "Crop care", text: "Nutrition, irrigation, and pest and disease monitoring." }, { title: "Harvest", text: "Ideal maturity and color." }, { title: "Selection", text: "Strict grading by size." }, { title: "Transport", text: "Temperature-monitored logistics." }, { title: "Shipment", text: "Delivery to major ports." },
    ] },
    capacity: { eyebrow: "Season and facilities", title: "Production and Capacity", metrics: [
      { value: "1,000", label: "tons/year", text: "Approximate production capacity" }, { value: "4", label: "varieties", text: "Palmer, Tommy Atkins, Keitt, and Kent" }, { value: "Mar-Nov", label: "production season", text: "Supply during strategic months" }, { value: "Exports", label: "demanding markets", text: "United States, Europe, Korea, and Mercosur" },
    ] },
    certifications: { title: "Certifications and Compliance", text: "Production guided by traceability, good agricultural practices, and attention to the standards required by international markets.", seal: "Certification", items: ["Good agricultural practices", "Social responsibility"] },
    markets: { title: "Markets We Serve", text: "From the São Francisco Valley to the world.", cardTitle: "Selected fruit for demanding markets", cardText: "We serve domestic and international markets with selected fruit, traceability, and export standards.", imageAlt: "Map of markets served by Rancho Sagrada Família" },
    location: { eyebrow: "Juazeiro, Bahia", title: "Strategic Location", text: "Located in Juazeiro, Bahia, in the São Francisco Valley, Rancho Sagrada Família operates in one of Brazil's most important irrigated fruit-growing regions.", address: "Lot 190 - EB 301-20", addressLine2: "Salitre Project, Juazeiro-BA", mapLink: "View location on Google Maps", imageAlt: "Aerial view of Rancho Sagrada Família orchards in the Salitre Project, Juazeiro, Bahia", mapTitle: "Rancho Sagrada Família location" },
    contact: { eyebrow: "Commercial contact", title: "Talk directly to the producer", text: "Speak with the people who closely follow production. We are available to discuss harvests, supply, packaging, and business opportunities.", name: "Name", namePlaceholder: "Your name", company: "Company", companyPlaceholder: "Company name", email: "Email", emailPlaceholder: "you@email.com", phone: "Phone/WhatsApp", phonePlaceholder: "+55 (00) 00000-0000", message: "Message", messagePlaceholder: "How can we help?", consent: "By submitting, you agree that your data may be used to respond to your contact request.", submit: "Send message" },
    footer: { logoAlt: "Rancho Sagrada Família logo", description: "A family story of responsibly growing mangoes in the São Francisco Valley.", navigation: "Navigation", information: "Information", contact: "Contact", quality: "Quality", export: "Exports", rights: "© 2026 Rancho Sagrada Família. All rights reserved.", developedBy: "Designed by Guilherme Emetério Designer" },
    backToTop: { label: "Back to the top of the page", title: "Back to top" },
  },
  es: {
    locale: "es-ES",
    pageTitle: "Rancho Sagrada Família | Mangos premium",
    languageSelector: "Seleccionar idioma",
    languageMenu: "Idiomas disponibles",
    nav: [
      { label: "Inicio", href: "#inicio" }, { label: "Quiénes Somos", href: "#quem-somos" }, { label: "Productos", href: "#produtos" }, { label: "Calidad", href: "#qualidade" }, { label: "Exportación", href: "#exportacao" }, { label: "Contacto", href: "#contato" },
    ],
    header: { homeLabel: "Rancho Sagrada Família - inicio", openMenu: "Abrir menú", closeMenu: "Cerrar menú", contact: "Contáctenos" },
    hero: { eyebrow: "Agricultura familiar · Juazeiro, Bahía", titleLead: "Mangos premium del", titleAccent: "Valle del São Francisco", description: "De nuestra familia a su mesa: mangos cultivados con cuidado, trazabilidad y el estándar exigido por los mercados nacionales e internacionales.", productsCta: "Conozca nuestros productos", contactCta: "Contáctenos", trustLabel: "Certificaciones y alcance", export: "Exportación" },
    about: { imageAlt: "Productor examinando un mango en el huerto", eyebrow: "Nuestra historia", title: "Tradición familiar con visión global", paragraph1: "En Rancho Sagrada Família, el conocimiento de la tierra pasa de generación en generación. La familia acompaña de cerca el huerto, el equipo y cada decisión que define la calidad de la cosecha.", paragraph2: "Esta presencia diaria se une a la tecnología, el manejo sostenible y la trazabilidad para llevar mangos del Valle del São Francisco a mercados exigentes, sin perder la cercanía de quienes viven la producción.", traceable: "Trazable", exportStandard: "Estándar de Exportación", sustainable: "Cultivo Sostenible" },
    history: { eyebrow: "Nuestra trayectoria", title: "Una historia cultivada en familia", intro: "Nuestras raíces están en la agricultura familiar. Lo que comenzó con el valor de nuestros padres creció con trabajo diario, respeto por la tierra y el deseo de construir algo para las próximas generaciones.", milestones: [
      { year: "1975", text: "La familia llegó al Proyecto Mandacaru y comenzó su trayectoria cultivando sorgo, ajo, cebolla, melón y tomate. Allí se iniciaron las primeras áreas de mango." },
      { year: "2010", text: "El Rancho inició una nueva etapa de modernización administrativa y productiva, implantando su primera área de producción en el Proyecto Salitre, reconocido por la calidad de sus suelos para el cultivo de mangos." },
      { year: "Hoy", text: "Mantenemos una cultura de mejora continua, enfocada en productividad, calidad y certificaciones que preparan nuestra producción para la comercialización global." },
    ], mainImageAlt: "La familia reunida en Rancho Sagrada Família", photoAlts: ["Equipo de Rancho Sagrada Família reunido en el huerto durante la cosecha", "Dos integrantes de Rancho Sagrada Família caminando entre árboles de mango cargados", "Trabajadores cosechando mangos y colocándolos en cajas en el huerto", "Trabajador recogiendo un mango directamente del árbol", "Mangos cosechados organizados para el transporte dentro de la finca", "Productor de Rancho Sagrada Família sosteniendo un racimo de mangos en el huerto"] },
    fieldCommitment: { eyebrow: "Nuestra esencia", title: "Compromiso en el Campo", items: [
      { title: "Sostenibilidad", text: "El agua se utiliza con precisión, respetando el suelo y el ritmo de cada huerto.", imageAlt: "Sistema de riego por goteo que lleva agua directamente al suelo" }, { title: "Personas", text: "La familia y el equipo comparten el cuidado diario que acompaña cada cosecha.", imageAlt: "Trabajadores cosechando mangos en el huerto" }, { title: "Calidad", text: "Selección cuidadosa, fruta bien atendida y un estándar consistente del campo al despacho.", imageAlt: "Mango maduro, ovalado y saludable en el centro de la imagen" },
    ] },
    products: {
      months: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"], title: "Variedades Producidas", intro: "Del huerto al despacho, cada variedad recibe un manejo propio para expresar sabor, conservación y desempeño comercial.", brandEyebrow: "Sagrada Fruta · Línea premium", brandTitle: "Excelencia brasileña para mercados de alto nivel", brandText: "Sagrada Fruta es la marca de selección premium de Rancho Sagrada Família, creada para el segmento premium de exportación. Reúne mangos seleccionados por BRIX, CALIBRE, COLORACIÓN, FIRMEZA y TRAZABILIDAD, con una presentación preparada para importadores y distribuidores exigentes.",
      varieties: [
        { name: "Palmer", tag: "Exportación", imageAlt: "Mangos Palmer enteros y cortados de Rancho Sagrada Família", specifications: [{ label: "Perfil de sabor", value: "Aroma agradable y dulzor delicado en un conjunto equilibrado." }, { label: "Pulpa", value: "Consistente, suave al madurar y con presencia mínima de fibras." }, { label: "Apariencia", value: "La cáscara combina tonos púrpura, rojo y amarillo; el interior es anaranjado." }, { label: "Formato", value: "Silueta alargada y semilla proporcionalmente pequeña." }], ripening: "Cerca de su punto, intensifica el tono rojizo y cede suavemente al tacto." },
        { name: "Tommy Atkins", tag: "Alta resistencia", imageAlt: "Mangos Tommy Atkins enteros y cortados de Rancho Sagrada Família", specifications: [{ label: "Perfil de sabor", value: "Dulzor agradable y sabor suave." }, { label: "Pulpa", value: "Estructura firme que favorece el manejo y el transporte." }, { label: "Apariencia", value: "Mezcla de verde y amarillo con una marcada cobertura rojiza." }, { label: "Formato", value: "Fruto robusto, ovalado y ligeramente alargado." }], ripening: "El color no siempre revela el punto; compruebe la ligera suavidad junto al pedúnculo." },
        { name: "Keitt", tag: "Temporada estratégica", imageAlt: "Mango Keitt entero y cortado, con la pulpa amarilla expuesta", specifications: [{ label: "Perfil de sabor", value: "Dulzor limpio y equilibrado, de perfil suave." }, { label: "Pulpa", value: "Abundante, firme, muy jugosa y con poca fibra." }, { label: "Apariencia", value: "Predominio del verde incluso madura, con posible tono rosado discreto." }, { label: "Formato", value: "Grande, ovalado y con excelente rendimiento de pulpa." }], ripening: "Como permanece verde, la mejor señal es que ceda suavemente a la presión sin perder firmeza." },
        { name: "Kent", tag: "Perfil premium", imageAlt: "Mangos Kent maduros abiertos para mostrar la calidad de la pulpa", specifications: [{ label: "Perfil de sabor", value: "Dulzor intenso, aroma agradable y sabor con cuerpo." }, { label: "Pulpa", value: "Suave, jugosa y prácticamente sin fibras." }, { label: "Apariencia", value: "Base verde con zonas rojizas y tonos dorados al madurar." }, { label: "Formato", value: "Grande, ovalado y con excelente aprovechamiento de pulpa." }], ripening: "La aparición de tonos dorados y la ligera suavidad indican que está listo para consumir." },
      ],
      ripeningTitle: "Cómo reconocer el punto de maduración", calendarPrefix: "Calendario de", productionMonths: "Meses de producción", calendarAria: "Meses de producción del mango", inProduction: "en producción", outOfSeason: "fuera de temporada", logistics: "Logística", packagingTitle: "Embalajes para cada mercado", packagingText: "Acondicionamos las frutas según el destino y el medio de transporte, preservando su presentación y calidad durante el viaje.", box: "Caja", packaging: [
        { market: "Mercado de exportación", transport: "Transporte marítimo", details: ["Calibres 6 a 14", "252 cajas por pallet", "5.712 cajas por contenedor"], imageAlt: "Caja de 4 kg para exportación con mangos seleccionados y protección individual" }, { market: "Mercado interno", transport: "Transporte por carretera", details: ["Calibres 8 a 16", "60 cajas por pallet", "14 a 22 pallets por camión"], imageAlt: "Caja de 18 kg para el mercado interno con mangos seleccionados" },
      ],
    },
    process: { title: "Del Campo al Despacho", text: "Cada etapa sigue controles técnicos para garantizar seguridad alimentaria, trazabilidad y calidad hasta la entrega final.", steps: [{ title: "Cultivo", text: "Preparación del suelo, plantones certificados y conducción técnica." }, { title: "Manejo", text: "Nutrición, riego y seguimiento de plagas y enfermedades." }, { title: "Cosecha", text: "Punto ideal de maduración y coloración." }, { title: "Selección", text: "Clasificación rigurosa por calibre." }, { title: "Transporte", text: "Logística con temperatura controlada." }, { title: "Despacho", text: "Envío a los principales puertos." }] },
    capacity: { eyebrow: "Cosecha y estructura", title: "Producción y Capacidad", metrics: [{ value: "1.000", label: "toneladas/año", text: "Capacidad productiva aproximada" }, { value: "4", label: "variedades", text: "Palmer, Tommy Atkins, Keitt y Kent" }, { value: "Mar-Nov", label: "período productivo", text: "Suministro en meses estratégicos" }, { value: "Exportación", label: "mercados exigentes", text: "Estados Unidos, Europa, Corea y Mercosur" }] },
    certifications: { title: "Certificaciones y Conformidad", text: "Producción realizada con trazabilidad, buenas prácticas agrícolas y atención a los estándares exigidos por los mercados internacionales.", seal: "Sello", items: ["Buenas prácticas agrícolas", "Responsabilidad social"] },
    markets: { title: "Mercados Atendidos", text: "Del Valle del São Francisco al mundo.", cardTitle: "Frutas seleccionadas para mercados exigentes", cardText: "Atendemos mercados nacionales e internacionales con frutas seleccionadas, trazabilidad y estándar de exportación.", imageAlt: "Mapa de los mercados atendidos por Rancho Sagrada Família" },
    location: { eyebrow: "Juazeiro, Bahía", title: "Ubicación Estratégica", text: "Ubicado en Juazeiro, Bahía, en el Valle del São Francisco, Rancho Sagrada Família se encuentra en una de las regiones más importantes de la fruticultura irrigada de Brasil.", address: "Lote 190 - EB 301-20", addressLine2: "Proyecto Salitre, Juazeiro-BA", mapLink: "Ver ubicación en Google Maps", imageAlt: "Vista aérea de los huertos de Rancho Sagrada Família en el Proyecto Salitre, Juazeiro, Bahía", mapTitle: "Ubicación de Rancho Sagrada Família" },
    contact: { eyebrow: "Contacto comercial", title: "Hable directamente con el productor", text: "Converse con quienes acompañan de cerca la producción. Estamos disponibles para hablar sobre cosecha, suministro, embalajes y oportunidades comerciales.", name: "Nombre", namePlaceholder: "Su nombre", company: "Empresa", companyPlaceholder: "Nombre de la empresa", email: "Correo electrónico", emailPlaceholder: "usted@email.com", phone: "Teléfono/WhatsApp", phonePlaceholder: "+55 (00) 00000-0000", message: "Mensaje", messagePlaceholder: "¿Cómo podemos ayudar?", consent: "Al enviar, acepta que sus datos sean utilizados para responder a la solicitud de contacto.", submit: "Enviar mensaje" },
    footer: { logoAlt: "Logotipo de Rancho Sagrada Família", description: "Una historia familiar cultivando mangos con responsabilidad en el Valle del São Francisco.", navigation: "Navegación", information: "Información", contact: "Contacto", quality: "Calidad", export: "Exportación", rights: "© 2026 Rancho Sagrada Família. Todos los derechos reservados.", developedBy: "Diseñado por Guilherme Emetério Designer" },
    backToTop: { label: "Volver al inicio de la página", title: "Volver arriba" },
  },
} as const;

type Translation = (typeof translations)[Language];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  copy: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return value === "pt" || value === "en" || value === "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = window.localStorage.getItem("rancho-language");
    return isLanguage(savedLanguage) ? savedLanguage : "pt";
  });

  const copy = translations[language];

  useEffect(() => {
    window.localStorage.setItem("rancho-language", language);
    document.documentElement.lang = copy.locale;
    document.title = copy.pageTitle;
  }, [copy.locale, copy.pageTitle, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, copy }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
