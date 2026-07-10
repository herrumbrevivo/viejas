import { useState } from 'react';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

type Language = 'es' | 'en' | 'de' | 'fr';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('es');

  const heroImageUrl = 'https://turismofuencalientedelapalma.com/wp-content/uploads/2021/04/DSC_6930.jpg';
  const authorImageUrl = 'https://res.cloudinary.com/dzcvq5lkp/image/upload/v1781784949/1650539730192_zvyvo0.jpg';

  const mapCoords = '28.493116,-17.8570308';

  const content = {
    es: {
      aboutLabel: 'Sobre la obra',
      locationLabel: 'Ubicación',
      locationAddress: 'Plaza de Los Quemados, Fuencaliente de La Palma',
      openMapsBtn: 'Abrir en Google Maps',
      poiLabel: 'Puntos de interés cercanos',
      backBtn: 'Ver todas las obras',
      authorLabel: 'El artista',
      authorName: 'Gustavo Díaz',
      authorRole: 'Artista del reciclado · Activista medioambiental · Gestor de residuos',
      authorBio: 'Natural de Fuencaliente, La Palma, Gustavo Díaz crea bajo la marca Herrumbre Vivo proyectos que combinan arte, sostenibilidad, identidad cultural y participación ciudadana. Transforma materiales en desuso en esculturas e instalaciones que ponen en valor las tradiciones y el patrimonio de Canarias.',
      authorBio2: 'Impulsor del movimiento #SomosUnaOla, una iniciativa de voluntariado para la limpieza y conservación de espacios naturales que ha movilizado a cientos de personas en favor del medio ambiente.',
      description: [
        'Las Viejas Solteronas nacen en el barrio de Los Quemados, en Fuencaliente, en 1966, cuando un grupo de jóvenes recuperó una danza muy antigua vinculada a la emigración. Con la marcha masiva de los hombres de la isla hacia Cuba y Venezuela, las mujeres que se quedaban solteras asumían las tareas del campo y del hogar. Para sobrellevar la soledad, bailaban y cantaban con tono burlesco un estribillo en el que se lamentaban de su suerte.',
        'Hoy, la Agrupación Cultural Las Viejas Solteronas de Los Quemados sigue actuando en las Fiestas de la Vendimia y en los grandes actos festivos de La Palma, con unas diez mujeres irreconocibles bajo su vestimenta de época. Esta escultura de Herrumbre Vivo rinde homenaje a esa memoria viva: a las mujeres que sostuvieron Fuencaliente cuando otros se fueron, y a quienes llevan décadas manteniendo encendida esa llama.',
      ]
    },
    en: {
      aboutLabel: 'About the artwork',
      locationLabel: 'Location',
      locationAddress: 'Plaza de Los Quemados, Fuencaliente de La Palma',
      openMapsBtn: 'Open in Google Maps',
      poiLabel: 'Nearby points of interest',
      backBtn: 'View all works',
      authorLabel: 'The artist',
      authorName: 'Gustavo Díaz',
      authorRole: 'Recycling artist · Environmental activist · Waste manager',
      authorBio: 'Born in Fuencaliente, La Palma, Gustavo Díaz works under the Herrumbre Vivo brand, developing projects that combine art, sustainability, cultural identity and citizen participation. He transforms discarded materials into sculptures and installations that celebrate the traditions and heritage of the Canary Islands.',
      authorBio2: 'He is the driving force behind the #SomosUnaOla socio-environmental movement, a volunteering initiative focused on the clean-up and conservation of natural spaces that has mobilised hundreds of people in favour of the environment.',
      description: [
        'Las Viejas Solteronas — the Old Spinsters — were born in the Los Quemados neighbourhood of Fuencaliente in 1966, when a group of young people revived an ancient dance tied to the island\'s history of emigration. As men left in droves for Cuba and Venezuela, the women who stayed behind took on the fields and the household. To endure the solitude, they danced and sang with ironic humour, lamenting their fate in verse.',
        'Today, the Agrupación Cultural Las Viejas Solteronas de Los Quemados still performs at the Vendimia harvest festival and La Palma\'s major celebrations, with around ten women unrecognisable beneath their period costumes. This Herrumbre Vivo sculpture honours that living memory: the women who kept Fuencaliente going when others left, and those who have kept that flame burning for decades since.',
      ]
    },
    de: {
      aboutLabel: 'Über das Kunstwerk',
      locationLabel: 'Standort',
      locationAddress: 'Plaza de Los Quemados, Fuencaliente de La Palma',
      openMapsBtn: 'In Google Maps öffnen',
      poiLabel: 'Sehenswürdigkeiten in der Nähe',
      backBtn: 'Alle Werke anzeigen',
      authorLabel: 'Der Künstler',
      authorName: 'Gustavo Díaz',
      authorRole: 'Recycling-Künstler · Umweltaktivist · Abfallmanager',
      authorBio: 'Gustavo Díaz, geboren in Fuencaliente, La Palma, schafft unter der Marke Herrumbre Vivo Projekte, die Kunst, Nachhaltigkeit, kulturelle Identität und Bürgerbeteiligung verbinden. Er verwandelt Altmaterialien in Skulpturen und Installationen, die die Traditionen und das Erbe der Kanarischen Inseln würdigen.',
      authorBio2: 'Er ist der Initiator der sozio-ökologischen Bewegung #SomosUnaOla, einer Freiwilligeninitiative zur Säuberung und Erhaltung von Naturräumen, die Hunderte von Menschen für den Umweltschutz mobilisiert hat.',
      description: [
        'Las Viejas Solteronas entstanden 1966 im Barrio Los Quemados in Fuencaliente, als eine Gruppe junger Menschen einen uralten Tanz wiederentdeckte, der mit der Emigrationsgeschichte der Insel verbunden ist. Als die Männer massenhaft nach Kuba und Venezuela aufbrachen, übernahmen die zurückgebliebenen Frauen Felder und Haushalt. Um die Einsamkeit zu ertragen, tanzten und sangen sie mit beißendem Humor, ihr Schicksal in spöttischen Versen beklagend.',
        'Heute tritt die Agrupación Cultural Las Viejas Solteronas de Los Quemados noch immer beim Weinlesefest und den großen Festen La Palmas auf, mit rund zehn Frauen, die unter ihrer historischen Kostümierung unkenntlich sind. Diese Skulptur von Herrumbre Vivo ehrt dieses lebendige Gedächtnis: die Frauen, die Fuencaliente am Laufen hielten, als andere gingen, und jene, die diese Flamme seit Jahrzehnten am Brennen halten.',
      ]
    },
    fr: {
      aboutLabel: 'À propos de l\'œuvre',
      locationLabel: 'Localisation',
      locationAddress: 'Plaza de Los Quemados, Fuencaliente de La Palma',
      openMapsBtn: 'Ouvrir dans Google Maps',
      poiLabel: 'Points d\'intérêt à proximité',
      backBtn: 'Voir toutes les œuvres',
      authorLabel: 'L\'artiste',
      authorName: 'Gustavo Díaz',
      authorRole: 'Artiste du recyclage · Activiste environnemental · Gestionnaire de déchets',
      authorBio: 'Originaire de Fuencaliente, La Palma, Gustavo Díaz crée sous la marque Herrumbre Vivo des projets qui combinent art, durabilité, identité culturelle et participation citoyenne. Il transforme des matériaux usagés en sculptures et installations qui mettent en valeur les traditions et le patrimoine des Îles Canaries.',
      authorBio2: 'Il est le promoteur du mouvement socio-environnemental #SomosUnaOla, une initiative de bénévolat dédiée au nettoyage et à la conservation des espaces naturels, qui a mobilisé des centaines de personnes en faveur de l\'environnement.',
      description: [
        'Las Viejas Solteronas sont nées en 1966 dans le quartier de Los Quemados, à Fuencaliente, lorsqu\'un groupe de jeunes a ressuscité une danse ancienne liée à l\'histoire migratoire de l\'île. Quand les hommes partaient en masse vers Cuba et le Venezuela, les femmes restées au pays assumaient les travaux des champs et du foyer. Pour supporter la solitude, elles dansaient et chantaient avec une ironie mordante, se lamentant de leur sort en vers piquants.',
        'Aujourd\'hui, l\'Agrupación Cultural Las Viejas Solteronas de Los Quemados continue de se produire lors de la fête des vendanges et des grandes célébrations de La Palma, avec une dizaine de femmes méconnaissables sous leur costume d\'époque. Cette sculpture de Herrumbre Vivo rend hommage à cette mémoire vivante : aux femmes qui ont maintenu Fuencaliente debout quand d\'autres sont partis, et à celles qui entretiennent cette flamme depuis des décennies.',
      ]
    }
  };

  const pois = [
    { name: 'Oficina de Turismo de Fuencaliente', category: 'Información turística', url: 'https://turismofuencalientedelapalma.com' },
    { name: 'El Lagar · Herrumbre Vivo', category: 'Obra de arte · CaminArte', url: 'https://www.google.com/maps?q=28.4946788,-17.8444804' },
    { name: 'El Pez de Puntalarga · Herrumbre Vivo', category: 'Obra de arte · CaminArte', url: 'https://www.google.com/maps?q=28.4829767,-17.8682005' },
    { name: 'Volcán de San Antonio', category: 'Centro de visitantes', url: 'https://turismofuencalientedelapalma.com/fuencaliente/centro-volcan-san-antonio/' },
    { name: 'Faro de Fuencaliente', category: 'Patrimonio · Mirador', url: 'https://turismofuencalientedelapalma.com/fuencaliente/faro-de-fuencaliente/' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F0] max-w-[480px] mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Header */}
      <header className="bg-[#2C1A0E] px-[18px] py-[10px] flex items-center gap-2 sticky top-0 z-50 border-b-[3px] border-[#C8A84B]">
        <div className="flex-1 text-[13px] text-[#D4B96A] whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontFamily: "'Playfair Display', serif" }}>
          Viejas Solteronas
        </div>
        <div className="text-[9px] tracking-[0.12em] uppercase text-[#C8A84B] font-medium flex-shrink-0">
          Herrumbre Vivo
        </div>
      </header>

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[340px] overflow-hidden bg-[#1a1a1a]">
        {heroImageUrl ? (
          <img src={heroImageUrl} alt="Viejas Solteronas" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a]">
            <div className="text-[#C8A84B] text-[11px] tracking-[0.12em] uppercase opacity-50">Imagen próximamente</div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[rgba(20,10,5,0.95)] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 px-[22px] pt-[26px] pb-[22px]">
          <div className="inline-block text-[9px] tracking-[0.13em] uppercase text-[#D4B96A] bg-[rgba(44,26,14,0.6)] border border-[rgba(212,185,106,0.3)] px-[9px] py-[3px] rounded-[3px] mb-[9px]">
            Herrumbre Vivo · Fuencaliente · La Palma
          </div>
          <h1 className="text-[2.3rem] text-white leading-[1.05] mb-[5px]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Viejas Solteronas
          </h1>
          <p className="text-[12px] text-[#D4B96A] font-light">
            Gustavo Díaz · Herrumbre Vivo · 2026
          </p>
        </div>
      </div>

      {/* Language Bar */}
      <div className="bg-[#2C1A0E] px-[18px] py-[12px] flex gap-[7px] overflow-x-auto border-t border-[rgba(212,185,106,0.15)] scrollbar-hide">
        {(['es', 'en', 'de', 'fr'] as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => setCurrentLang(lang)}
            className={`flex-shrink-0 px-[15px] py-[6px] rounded-[20px] border text-[12px] transition-all ${
              currentLang === lang
                ? 'bg-[#C8A84B] border-[#C8A84B] text-[#1a1a1a]'
                : 'bg-transparent border-[rgba(212,185,106,0.25)] text-[#D4B96A]'
            }`}
          >
            {lang === 'es' ? 'Español' : lang === 'en' ? 'English' : lang === 'de' ? 'Deutsch' : 'Français'}
          </button>
        ))}
      </div>

      {/* About */}
      <section className="px-[22px] py-[24px] border-b border-[rgba(120,100,80,0.12)]">
        <div className="flex items-center gap-[7px] text-[9px] tracking-[0.14em] uppercase text-[#7A6A5A] mb-[12px]">
          <div className="w-4 h-[1px] bg-[#C8A84B]" />
          {content[currentLang].aboutLabel}
        </div>
        <div className="text-[14.5px] leading-[1.74] text-[#2a2a2a] font-light">
          {content[currentLang].description.map((paragraph, i) => (
            <p key={i} className={i > 0 ? 'mt-[13px]' : ''}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="px-[22px] py-[24px] border-b border-[rgba(120,100,80,0.12)]">
        <div className="flex items-center gap-[7px] text-[9px] tracking-[0.14em] uppercase text-[#7A6A5A] mb-[12px]">
          <div className="w-4 h-[1px] bg-[#C8A84B]" />
          {content[currentLang].locationLabel}
        </div>
        <p className="text-[13.5px] text-[#7A6A5A] mb-[13px]">
          {content[currentLang].locationAddress}
        </p>
        <iframe
          src={`https://maps.google.com/maps?q=${mapCoords}&z=16&output=embed`}
          className="w-full h-[190px] border-none rounded-lg my-[13px]"
          allowFullScreen
          loading="lazy"
        />
        <a
          href={`https://www.google.com/maps?q=${mapCoords}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-[13px] py-[13px] bg-[#8B1A1A] text-white rounded-lg transition-colors hover:bg-[#6B1212]"
        >
          <MapPin size={16} />
          {content[currentLang].openMapsBtn}
        </a>
      </section>

      {/* POIs */}
      <section className="px-[22px] py-[24px] border-b border-[rgba(120,100,80,0.12)]">
        <div className="flex items-center gap-[7px] text-[9px] tracking-[0.14em] uppercase text-[#7A6A5A] mb-[12px]">
          <div className="w-4 h-[1px] bg-[#C8A84B]" />
          {content[currentLang].poiLabel}
        </div>
        <div className="flex flex-col gap-[9px] mt-1">
          {pois.map((poi, i) => (
            <a
              key={i}
              href={poi.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-[15px] py-[13px] border border-[rgba(120,100,80,0.2)] rounded-[10px] gap-[11px] transition-all hover:border-[#C8A84B] hover:bg-[rgba(200,168,75,0.06)]"
            >
              <div className="flex-1">
                <div className="text-[13.5px] font-medium mb-[2px]">{poi.name}</div>
                <div className="text-[11.5px] text-[#7A6A5A]">{poi.category}</div>
              </div>
              <span className="text-[12.5px] text-[#7A6A5A] mr-[6px] whitespace-nowrap">{poi.distance}</span>
              <ChevronRight size={17} className="text-[#7A6A5A]" />
            </a>
          ))}
        </div>
      </section>

      {/* Author */}
      <section className="px-[22px] py-[24px] border-b border-[rgba(120,100,80,0.12)] bg-[rgba(44,26,14,0.03)]">
        <div className="flex items-center gap-[7px] text-[9px] tracking-[0.14em] uppercase text-[#7A6A5A] mb-[16px]">
          <div className="w-4 h-[1px] bg-[#C8A84B]" />
          {content[currentLang].authorLabel}
        </div>
        <div className="flex items-center gap-[14px] mb-[16px]">
          <div className="flex-shrink-0 w-[72px] h-[72px] rounded-full overflow-hidden bg-[#2C1A0E] border-2 border-[rgba(200,168,75,0.4)]">
            {authorImageUrl ? (
              <img src={authorImageUrl} alt="Gustavo Díaz" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-[#C8A84B] text-[22px]" style={{ fontFamily: "'Playfair Display', serif" }}>G</span>
              </div>
            )}
          </div>
          <div>
            <div className="text-[16px] mb-[3px]" style={{ fontFamily: "'Playfair Display', serif" }}>
              {content[currentLang].authorName}
            </div>
            <div className="text-[11px] text-[#7A6A5A] leading-[1.5]">
              {content[currentLang].authorRole}
            </div>
          </div>
        </div>
        <div className="text-[13.5px] leading-[1.72] text-[#2a2a2a] font-light">
          <p>{content[currentLang].authorBio}</p>
          <p className="mt-[11px]">{content[currentLang].authorBio2}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1008] px-[22px] py-[24px] flex flex-col items-center gap-[12px] border-t-[3px] border-[#C8A84B]">
        <div className="flex justify-center">
          <a href="https://herrumbrevivoarte.com" target="_blank" rel="noopener noreferrer">
            <div className="h-14 flex items-center text-[#D4B96A] text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Herrumbre Vivo
            </div>
          </a>
        </div>
        <a href="https://herrumbrevivoarte.com" target="_blank" rel="noopener noreferrer" className="text-[rgba(212,185,106,0.6)] text-[10.5px] no-underline">
          herrumbrevivoarte.com
        </a>
      </footer>

    </div>
  );
}
