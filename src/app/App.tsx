import { IntroMaison } from '../components/invitation/IntroMaison/IntroMaison';
import { HeroCouple } from '../components/invitation/HeroCouple/HeroCouple';
import { SilkBand } from '../components/invitation/SilkBand/SilkBand';
import { PresentationCard } from '../components/invitation/PresentationCard/PresentationCard';
import { EditorialBanner } from '../components/invitation/EditorialBanner/EditorialBanner';
import { HandsSection } from '../components/invitation/HandsSection/HandsSection';
import { CountdownSection } from '../components/invitation/CountdownSection/CountdownSection';
import { BibleVerse } from '../components/invitation/BibleVerse/BibleVerse';
import { SectionCover } from '../components/invitation/SectionCover/SectionCover';
import { LesLieux } from '../components/invitation/LesLieux/LesLieux';
import { StorySection } from '../components/invitation/StorySection/StorySection';
import { CelebrationsIntro } from '../components/invitation/CelebrationsIntro/CelebrationsIntro';
import { VenueSection } from '../components/invitation/VenueSection/VenueSection';
import { CivilVenueIcon, ReceptionVenueIcon } from '../components/invitation/VenueSection/VenueIcons';
import { ProgramSection } from '../components/invitation/ProgramSection/ProgramSection';
import { DressCodeSection } from '../components/invitation/DressCodeSection/DressCodeSection';
import { GiftsSection } from '../components/invitation/GiftsSection/GiftsSection';
import { MemoriesSection } from '../components/invitation/MemoriesSection/MemoriesSection';
import { PlaylistSection } from '../components/invitation/PlaylistSection/PlaylistSection';
import { LiveAlbumSection } from '../components/invitation/LiveAlbumSection/LiveAlbumSection';
import { VoiceBookSection } from '../components/invitation/VoiceBookSection/VoiceBookSection';
import { RsvpSection } from '../components/invitation/RsvpSection/RsvpSection';
import { SeatingPlanSection } from '../components/invitation/SeatingPlanSection/SeatingPlanSection';
import { FinalScene } from '../components/invitation/FinalScene/FinalScene';
import { useClient } from '../context/ClientContext';

// Passe à true pour réafficher tout le reste du parcours (Notre histoire, lieux, RSVP...).
const SHOW_SECTIONS_AFTER_HERO = false;

export function App() {
  const { venuesConfig, invitationConfig, mediaConfig, storyConfig } = useClient();
  const hasSecondVerse = invitationConfig.verses.length > 1;

  return (
    <main>
      <IntroMaison />
      <HeroCouple />
      <SilkBand
        src={mediaConfig.hero.veilTop}
        monogramSrc={mediaConfig.brand.monogram}
        monogramAlt={invitationConfig.brand.monogramAlt}
        edgeLines
      >
        <PresentationCard />
      </SilkBand>
      <HandsSection />
      <CountdownSection />
      <BibleVerse verseIndex={0} />
      <SectionCover
        id="notre-histoire"
        src={mediaConfig.story.cover}
        kicker={invitationConfig.story.surtitle}
        title={storyConfig.title}
        fadeTop
      />
      <LesLieux />
      <SectionCover
        id="le-programme"
        src={mediaConfig.program.cover}
        kicker={invitationConfig.program.surtitle}
        title={invitationConfig.program.title}
      />
      <DressCodeSection />
      {SHOW_SECTIONS_AFTER_HERO && (
        <>
          <EditorialBanner />
          <StorySection />
          <CelebrationsIntro />
          <VenueSection id="ceremonie-civile" venue={venuesConfig.civil} icon={<CivilVenueIcon />} tone="ivory" />
          <VenueSection id="benediction-reception" venue={venuesConfig.blessing} icon={<ReceptionVenueIcon />} tone="navy" />
          <ProgramSection />
          <GiftsSection />
          <MemoriesSection />
          <PlaylistSection />
          <LiveAlbumSection />
          <VoiceBookSection />
          <RsvpSection />
          {hasSecondVerse && <BibleVerse verseIndex={1} />}
          <SeatingPlanSection />
        </>
      )}
      <FinalScene />
    </main>
  );
}
