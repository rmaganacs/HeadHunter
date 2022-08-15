import './App.css';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, CssBaseline, Typography} from '@mui/material';
import ResponsiveAppBar from './components/AppBar';
import Sova from './images/character-banner/sova.png';
import Chamber from './images/character-banner/chamber.png';
import Omen from './images/character-banner/omen.png';
import Jett from './images/character-banner/jett.png';
import Reyna from './images/character-banner/reyna.png';
import Phoenix from './images/character-banner/phoenix.png';
import Brimstone from './images/character-banner/brim.png';
import Astra from './images/character-banner/astra.png';
import KAYO from './images/character-banner/kayo.png';
import Breach from './images/character-banner/breach.png';
import KillJoy from './images/character-banner/kj.png';
import Neon from './images/character-banner/neon.png';
import Raze from './images/character-banner/raze.png';
import Yoru from './images/character-banner/yoru.png';
import Viper from './images/character-banner/viper.png';
import Cypher from './images/character-banner/cypher.png';
import Sage from './images/character-banner/sage.png';
import Fade from './images/character-banner/fade.png';
import Skye from './images/character-banner/skye.png';
import VideoTop from './images/vid.mp4';
import Icon from './images/logo.png';

const theme = createTheme({
  backgroundImage: {
    
  },
  typography: {
    fontFamily: [
      'Oswald',
      'sans-serif'
    ].join(',')
  },
  palette: {
    background: {
      default: '#0d0d0d',
      paper: '#0d0d0d',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <ResponsiveAppBar/>
        <Box // Looping Video on Main Page
          autoPlay
          loop
          muted
          sx={{mt: 0}}
          component="video"
          src={VideoTop}
        />
        <Box // HeadHunter Valorant Logo
          position="relative"
          sx={{ top: "-350px",  width: 1000, height: 220.93}}
          component="img"
          src={Icon}
          />
        {/* Sova */}
        <Box>
          <Box // Sova PNG Render Displayed
            position="relative"
            sx={{mt: -20}}
            component="img"
            src={Sova}
          />
          <Typography // Sova's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "200px"}}
            color={"white"}>
            Hailing from the town of Severomorsk, in Murmansk Oblast, Russia, Sasha Novikov is an archer who became {"\n"}
            an agent for the VALORANT Protocol as its sixth recruit, "Sova". With his right eye replaced with a mechanical {"\n"}
            one after he lost it, Sova primarily serves as the team's scout, gathering information and searching for targets {"\n"}
            using olden methods should technology come up short. Being highly capable and reliable both in the field and with {"\n"}
            his work, whilst also having experience with multiple radianite-related events (having traveled through a rift and {"\n"}
            having met his Omega counterpart), Sova has earned a reputation of being one of the Protocol's most trusted agents, {"\n"}
            especially to the organization's commander, Brimstone. A humble hunter that has taken down man and beast alike, {"\n"}
            Sova works carefully and with precision, scouting around and retrieving information before taking out the enemy. {"\n"}
            As he has told Phoenix, Sova believes in the value of patience and strategic thinking. Being the team player that {"\n"}
            he is, Sova always commends his allies and never hesitates to voice out his vote of confidence in them. He seems to {"\n"}
            value the team to the point of risking his own life, to which Brimstone reminds him that it is equally important {"\n"}
            that he looks out after himself.
          </Typography>
          <Box // Sova's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/OZ76UP-c8Ao'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Chamber */}
        <Box>
          <Box // Chamber PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Chamber}
          />
          <Typography // Chamber's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "-150px"}}
            color={"white"}>
            The Frenchman Vincent Fabron lives his life in search of one necessary goal, willing to sacrifice anything {"\n"}
            that gets in his way of achieving it. He has spent much of his time involved with combat and weapons, having {"\n"}
            worked for the French military before becoming a PMC marksman and then a weapons designer for Kingdom Defense. His {"\n"}
            employment at Kingdom was only a stepping stone for him though, as by this point he was already set on his path in {"\n"}
            pursuit of his sacred truth. One such event that exemplified Fabron's will to continue with his goals no matter the {"\n"}
            cost surrounds his actions at the Everett-Linde Research Facility in Santa Fe, New Mexico, where he traveled to around {"\n"}
            9 AFL and began communicating with employees there. Fabron soon found himself barred from entering facility grounds {"\n"}
            shortly after attempting to access their systems but eventually returned to reinstate his security clearance and obtain {"\n"}
            schematics. However, he was soon forced to make a decision that required him to destroy the facility's Large Radian Collider. {"\n"}
            Having already made contact with his Omega counterpart, together they fired on the LRC on the day the lab's people were {"\n"}
            celebrating its supposed success. The resulting explosion killed many of its employees and the facility was reduced to a husk.
          </Typography>
          <Box // Chamber's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "-330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/FUoqAn5T4h4'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Omen */}
        <Box>
          <Box // Omen PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Omen}
          />
          <Typography // Omen's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "200px"}}
            color={"white"}>
            Omen is a phantom of a man with mysterious origins and many names. He has a limited memory of his past,{"\n"} 
            though he does remember being involved in something that caused him to be ripped apart and killed. All he knows {"\n"}
            that links to who he used to be is a place known as Point Light, a past friendship with Sabine "Viper" Callas, and {"\n"}
            feelings of restoration with every kill he makes. Contributing to the formation of the VALORANT Protocol,{"\n"} 
            Omen would go on to become its third recruit and serve as one of its more experienced agents, all while he {"\n"}
            continues his search for answers about what truly happened to him over a decade ago. A living nightmare, Omen {"\n"}
            takes full advantage of his shadowed physique and will not hesitate to eliminate his enemies using the forces of {"\n"}
            paranoia and fear. He is cynical in nature, which stems from him experiencing extreme pain as he was condemned to {"\n"}
            remain in the state that he is today. If there's one person who wants to know more about his mysterious circumstances, {"\n"}
            it's Omen himself - and quite desperately so. Despite his fearsome nature, Omen shows some friendliness towards people {"\n"}
            he knows well such as Viper, shown by being able to call her by her real name despite her warning other agents to never {"\n"}
            do so. He has been known to knit as a way to help him focus.
          </Typography>
          <Box // Omen's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/_jJdWy6bDj4'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Jett */}
        <Box>
          <Box // Jett PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Jett}
          />
          <Typography // Jett's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "-150px"}}
            color={"white"}>
            Sunwoo Han hails from South Korea, with possible links to the Insa-dong neighborhood in Seoul. As a chef in {"\n"}
            her early life, she was involved in an incident relating to her wind-like radiant powers at the restaurant she worked at,{"\n"}
            causing a "freak storm" that all but destroyed the building. Sunwoo fled the scene soon after.
            Later on, Sunwoo would be {"\n"}recruited by the VALORANT Protocol to become its tenth agent, "Jett". Whilst working
            for the Protocol however,{"\n"} an incident occurred in Venice that destroyed part of the city. When authorities issued warrants
            for the arrests {"\n"}of the perpetrators, one of them was revealed to look exactly identical to Jett. Though Jett herself had nothing
            to do with the{"\n"} mission, the rest of the world now believed that she was now a threat to them. She couldn't explain that it wasn't her {"\n"}
            to those she know outside of VALORANT, unable to even understand what was going on herself, and it left them{"\n"} feeling disgusted, 
            horrified, and ashamed at her, forcing her to go on the run once more.
          </Typography>
          <Box // Jett's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "-330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/-cPLXswVsvc'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Reyna */}
        <Box>
          <Box // Reyna PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Reyna}
          />
          <Typography // Reyna's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "200px"}}
            color={"white"}>
            Reyna takes what she wants when she wants it, no matter who is standing in her way. Savage and{"\n"} 
            almost animalistic, she is not one to hesitate when it comes to eliminating her enemies and getting {"\n"}
            blood on her hands. She has a strong dislike for technology and thrives on the enemy's misery, and loves {"\n"}
            to compete with fellow Radiants to see who is the most powerful. She seems to have a cynical view towards{"\n"}
             the rest of the world due to the pain that she has experienced in order to survive. However, she {"\n"}
             acknowledges that her Earth is still her home, and she resolves to defend it even if it means spilling more blood.
          </Typography>
          <Box // Reyna's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/IzsQNYrq9AM'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Phoenix */}
        <Box>
          <Box // Phoenix PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Phoenix}
          />
          <Typography // Phoenix's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "-150px"}}
            color={"white"}>
            A duelist by role and nature, Phoenix is brash, impulsive, and has a lot of confidence, never hesitating to {"\n"}
            charge into a fight head-on despite not getting a full grasp of the situation, much to the chagrin of his more {"\n"}
            collected teammates. As shown in "RETAKE," if Phoenix gets himself in a sticky situation caused by his own impatience,{"\n"} 
            he is more than capable of quickly adapting to the circumstances and turning the tables around, before rubbing it in the {"\n"}
            faces of teammates who initially doubted him. His lack of patience is only confirmed by Sova, who reminds him to learn {"\n"}
            the virtue before they can enjoy a strategic game of chess. However, Phoenix does take his allies' insights into {"\n"}
            consideration as shown in "WARM UP," wherein he rethinks his strategy after Cypher noted that sacrifice plays for victory's {"\n"}
            sake was initially not the Brit's style. Despite Phoenix's hasty ways, he is known as a prodigy (claiming that it wasn't his {"\n"}
            own words), and he always proves it one way or another.
          </Typography>
          <Box // Phoenix's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "-330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/ttJMFW2wUQM'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Brimstone */}
        <Box>
          <Box // Brimstone PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Brimstone}
          />
          <Typography // Brimstone's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "200px"}}
            color={"white"}>
            Hailing from the United States, Liam Byrne started his adult life as a firefighter for the BFD and then a military soldier {"\n"}
            for a Special Forces squad known as the Ragged Ravens. He served in both professions alongside a close friend who he had {"\n"}
            known since childhood. He also became affiliated with Kingdom Corporation, eventually becoming a veteran of their subsidiary {"\n"}
            K/SEC. After the events of First Light, the secretive VALORANT Protocol was founded, with Byrne being the first agent to join {"\n"}
            them and eventually becoming its leader and commander, "Brimstone". In recent years his position has left him with more of a {"\n"}
            back-line presence, but life behind a desk has never been of interest to Brimstone, and he'll make sure to still be present in {"\n"}
            the field from time to time.
          </Typography>
          <Box // Brimstone's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/7yHnJ_oNxTI'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Astra */}
        <Box>
          <Box // Astra PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Astra}
          />
          <Typography // Astra's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "-150px"}}
            color={"white"}>
            Hailing from Accra, Ghana, Efia Danso is a radiant with powers relating to cosmic energies. She uses {"\n"}
            these in her role as an "astral guardian", ensuring that any universe-altering events do not have {"\n"}
            major consequences. Recruited by the VALORANT Protocol as its 16th agent, "Astra", {"\n"}
            Danso continues to serve as an astral guardian in between her missions for the VP. {"\n"}
            Astra is an energetic and joyful agent who doesn't hold back what she wants to say. She {"\n"}
            is fairly straightforward when it comes to expressing herself and friendly banter is definitely {"\n"}
            her go-to style. She seems to have an affinity for liveliness, and doesn't like it when people {"\n"}
            and places have no 'color' or 'personality' to them.She has stated that her plans and ideas may sometimes {"\n"}
            sound irrational, but this is only because she can see what most cannot due to her cosmic powers.
          </Typography>
          <Box // Astra's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "-330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/-ylVnuPWlJM'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* KAYO */}
        <Box>
          <Box // KAYO PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={KAYO}
          />
          <Typography // KAYO's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "200px"}}
            color={"white"}>
            A robot from an alternate future, KAY/O was created by the humans of that time to fight back against the {"\n"}
            radiants that they were at war with. Using the power of polarized radianite, KAY/O proved effective in {"\n"}
            shutting down radiants' abilities, making them easier to eliminate. The radiant Reyna was of particularly {"\n"}
            high importance to KAY/O for her actions against humanity, and KAY/O was able to eventually eliminate her. {"\n"}
            However, at this point humans had already suffered severe losses. KAY/O would later on travel centuries {"\n"}
            back in time to the present day, arriving on an island near the Caribbean, and would soon be recruited as {"\n"}
            an agent of the VALORANT Protocol. He now fights as an agent in a time where there is harmony between {"\n"}
            humans and radiants, alongside alternate versions of both humans he served with and radiants he fought {"\n"}
            against. However, the scars from KAY/O's previous war remain, from the loses he endured and from the {"\n"}
            pain inflicted by versions of the same radiants he now finds himself working with.
          </Typography>
          <Box // KAYO's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/eU1l7eBy2_Y'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Breach */}
        <Box>
          <Box // Breach PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Breach}
          />
          <Typography // Breach's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "-150px"}}
            color={"white"}>
            A criminal from Sweden, Erik Torsten was set to be convicted along with the rest of his family for their crimes. As {"\n"}
            he was a double congenital amputee however, the judge was pitiful and lenient towards him, giving him a smaller {"\n"}
            sentence that soon allowed Erik to return to his old ways. Building himself his own mechanical arms to use, Erik {"\n"}
            would hit back with his own criminal assignments, becoming so notorious for the terrible things he had done that he {"\n"}
            eventually had to go into hiding and effectively exile himself from his home. During these times, he also encountered {"\n"}
            the young Brazilian Tayane Alves, who worked alongside him for a while and provided some major upgrades to his arms, {"\n"}
            resulting in the carbon-steel titanium-plating version that he uses to this day. Later approached to become a VALORANT {"\n"}
            agent, Torsten accepted the offer though his induction was not a smooth affair. Leaving behind his criminal life in line {"\n"}
            with VP procedure, his records were sealed and he became the Protocol's thirteenth agent, "Breach". Despite now {"\n"}
            serving for the secret organization with more dignified actions however, the consequences of his criminal past forever {"\n"}
            remain, leaving him a man that, for all he does now, can still never truly return home.

          </Typography>
          <Box // Breach's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "-330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/Rux0HjzKQbw'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* KillJoy */}
        <Box>
          <Box // KillJoy PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={KillJoy}
          />
          <Typography // KillJoy's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "200px"}}
            color={"white"}>
            Klara Böhringer is an inventor from Germany who was born to one parent with Germanic ancestry. A nominee {"\n"}
            for the Distinguished Inventor award, Böhringer became the lead for Kingdom's R&D department at the age of 18. {"\n"}
            Incredibly successful, she had many breakthroughs during her time at Kingdom with several of her creations and {"\n"}
            innovations. Böhringer was the fourth agent to join the VALORANT Protocol as "Killjoy". She earned her call sign {"\n"}
            after her team initially used it to compliment her outstanding skills that reduced the amount of work the rest of {"\n"}
            them had to do, with Klara deciding to keep the nickname. Killjoy now continues her innovative work as an agent of {"\n"}
            VALORANT and the protégé of the organization's commander, Brimstone. From inventing spike defusers under pressure of {"\n"}
            an incoming detonation to building teleporters for transportation between worlds, any device the Protocol needs for any {"\n"}
            purpose - with the right tools, Killjoy can make it.
          </Typography>
          <Box // KillJoy's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/ua-iIRQDY8g'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Neon */}
        <Box>
          <Box // Neon PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Neon}
          />
          <Typography // Neon's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "-150px"}}
            color={"white"}>
            Raised in Manila, Philippines, Tala Nicole Dimaapi Valdez is a Radiant empowered by her bioelectricity {"\n"}
            which has enlaced itself with Earth's radianite mesh. A young but former veteran at K/SEC, she was {"\n"}
            recruited by the VALORANT Protocol as part of their Omega Project, specifically to utilize her electric {"\n"}
            abilities as they attempted to power an Alpha-Omega teleporter. Accepting a position there as their nineteenth {"\n"}
            agent, "Neon", Valdez left her home to join the Protocol and now seeks to help establish a stable connection {"\n"}
            that will finally allow the VP to cross over to Omega Earth.With her electrifying speed allowing her to charge {"\n"}
            into the heat of the battle, Neon is not one who can promise her allies that she'll stay out of harm's way. {"\n"}
            While she is confident in her abilities and the value it can bring during gunfights, she can {"\n"}
            sometimes struggle to control her electric powers and thus makes it a point to keep them in check {"\n"}
            at all times.Neon has strong and close ties with her family; as soon as she arrived at the VALORANT {"\n"}
            Protocol headquarters, she made sure to call her parents to update them on the news.
          </Typography>
          <Box // Neon's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "-330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/dtx8CgjRmqE'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Raze */}
        <Box>
          <Box // Raze PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Raze}
          />
          <Typography // Raze's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "200px"}}
            color={"white"}>
            Tayane Alves is an engineer coming from Salvador, Bahia, Brazil, with a strong enthusiasm for explosives and paint - usually {"\n"}
            combined. Holding strong objections towards Kingdom Corporation's operations in Bahia, Alves was involved in driving the {"\n"}
            company out of her home state and forcing them to abandon their sites there, the marks of her tools staining the plots as a {"\n"}
            testament to her victories. Hired since then to work for the VALORANT Protocol as its twelfth agent, "Raze", Alves now sows {"\n"}
            her chaos against bigger threats to Earth. However, as the paint fades from Salvador's walls, Raze cannot afford to leave her {"\n"}
            home completely behind, lest Kingdom look to make its return there. She radiates chaotic energy and creates havoc on the {"\n"}
            battlefield, destroying every obstacle that is blocking her path. According to Sage, she can be impatient and won't stick {"\n"}
            to plans. She is notoriously cheeky, as seen when she earned Cypher's ire after constantly breaking his gadgets.
          </Typography>
          <Box // Raze's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/2-uAL__pp_U'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Yoru */}
        <Box>
          <Box // Yoru PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Yoru}
          />
          <Typography // Yoru's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "-150px"}}
            color={"white"}>
            A radiant from Tokyo, Japan, Ryo Kiritani is a man dedicated to uncovering his past. Specifically interested in his {"\n"}
            ancestors and an ancient order of samurai, Kiritani's search has kept on bringing him to Kingdom's S22 container port. {"\n"}
            On his first visit, he broke into the facility and stole a mask from a set of samurai armor that allowed him to see {"\n"}
            into another dimension. He was later recruited by the VALORANT Protocol as its fifteenth agent, "Yoru", and shortly {"\n"}
            after this his familiarity with S22 saw him returning there on assignment to prevent a spike detonation by hostiles {"\n"}
            from Omega Earth. Still not done with S22 however, Yoru continued to return to the site despite having other missions {"\n"}
            to do for the Protocol and against the advice of his superiors. His research led him to discovering new information {"\n"}
            relating to both radianite and the alternate dimension that he could access and enter with his powers. Finding a part {"\n"}
            of the ship with older dimensional fabric, Yoru suddenly fell through into a space that felt as if he was traveling {"\n"}
            from "now to then". He pushed forward as far as he could and heard a woman's voice calling out to him, one he thought {"\n"}
            he recognized, but before he could answer back, the rift closed.
          </Typography>
          <Box // Yoru's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "-330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/GdOEQv-zQVw'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Viper */}
        <Box>
          <Box // Viper PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Viper}
          />
          <Typography // Viper's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "200px"}}
            color={"white"}>
            Sabine Callas hails from the United States, with possible links to Seattle. Holding a doctorate and awards such as {"\n"}
            the R. Francis Prize and the Denton Outstanding Innovation Award, her previous occupations include roles with Kingdom {"\n"}
            Corporation, eventually becoming its first Chief Scientific Officer on the board of advisors, and influence over the {"\n"}
            conglomerate's ventures in Rabat, Morocco. At some point during her time there however, there was an "incident". {"\n"}
            Little is known about what happened, but everything changed for Callas at that point after all she lost because of it, {"\n"}
            leading her to isolate and dedicate herself to pursuing vengeance instead. After the events of First Light, the {"\n"}
            secretive VALORANT Protocol was founded, with Callas becoming its second agent, "Viper", and one of its founders. {"\n"}
            One of its most active members as well as most experienced, Viper is involved with the recruitment of new agents {"\n"}
            and is active in many of their missions.
          </Typography>
          <Box // Viper's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/9dOSy0EhLfQ'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Cypher */}
        <Box>
          <Box // Cypher PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Cypher}
          />
          <Typography // Cypher's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "-150px"}}
            color={"white"}>
            Amir El Amari (Arabic: اَمير; meaning "prince") hails from Rabat, Morocco. Growing up and living there in poverty at times, {"\n"}
            his city's resources were depleted due to the activities of Kingdom Corporation in the area, with El Amari harboring a {"\n"}
            negative view towards them as a result. An information broker who is constantly gathering intel, El Amari mostly keeps the {"\n"}
            results of his work and his secrets close to his chest - especially those about himself. Going to great lengths to ensure {"\n"}
            no one can gather secrets on the man who knows all the secrets, El Amari has set up multiple safehouses in order to stay {"\n"}
            hidden as well as never going anywhere without wearing his black face-concealing mask. Even once recruited by the secretive {"\n"}
            VALORANT Protocol as its fifth agent, "Cypher", El Amari still keeps his face and identity hidden from his fellow agents. {"\n"}
            For now, nothing is worth the risk of removing his mask - not even for those closest to him.
          </Typography>
          <Box // Cypher's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "-330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/SgbqFtRRgLA'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Sage */}
        <Box>
          <Box // Sage PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Sage}
          />
          <Typography // Sage's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "200px"}}
            color={"white"}>
            Ling Ying Wei is a Radiant monk coming from China. Going on to become an agent for the VALORANT Protocol as its {"\n"}
            seventh recruit, "Sage", Ling was able to work her way quickly up the ranks, becoming the Protocol's second-in-command {"\n"}
            under Brimstone and over more veteran agents. Sage is currently active in VALORANT's radiant agent recruitment and {"\n"}
            training, interacting with multiple new radiants upon recruitment and taking the lead on its radiant training {"\n"}
            program. Described as a stronghold, Sage is an agent who always looks out for her teammates and offers help whenever {"\n"}
            she can. She has fully embraced her powers which give her control of life, and wishes to use them to keep her team {"\n"}
            alive for as long as possible. Calmer and more collected than some of her more energetic allies, Sage always imparts {"\n"}
            encouraging words to rally the team up and guide them to victory.
          </Typography>
          <Box // Sage's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/1aRwM_QsqQI'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Fade */}
        <Box>
          <Box // Fade PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Fade}
          />
          <Typography // Fade's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "-150px"}}
            color={"white"}>
            A Radiant from Turkey, Fade searches for a person of importance to her after he was 'taken from her'. Initially coming {"\n"}
            to suspect that he had been kidnapped by a secret organization she found to be the VALORANT Protocol, Fade decided to {"\n"}
            take them on to make them give him back to her, contacting the Protocol under an anonymous mark. When they appeared to {"\n"}
            only have interest in tracking her down rather than take her seriously, she then contacted each agent personally with a {"\n"}
            dossier about them to show how much she knew about VALORANT's people and what she could expose to the public if they had {"\n"}
            no interest in proving their innocence. VALORANT however still refused to give in and soon sent a strike team to Istanbul {"\n"}
            to apprehend her. Fade attempted to use her Radiant powers to distract them and flee undetected but was spotted just as {"\n"}
            she was making her escape, allowing the Anti-Yield robot KAY/O to jump on her position and take her down with a suppressing {"\n"}
            pulse. Subsequently detained and taken to a VP base, Fade was interrogated there by senior agents. However, it was because {"\n"}
            of these direct, face-to-face meetings that a critical piece of information came to light - VALORANT had no idea who she {"\n"}
            was trying to track down and knew nothing of any kidnapping. Whoever was responsible for the man's disappearance, it wasn't {"\n"}
            the VALORANT Protocol.
          </Typography>
          <Box // Fade's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "-330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/e7VOQ1l20eo'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
        {/* Skye */}
        <Box>
          <Box // Skye PNG Render Displayed
            position="relative"
            sx={{mt: -35}}
            component="img"
            src={Skye}
          />
          <Typography // Skye's Description
            component="pre"
            position="relative"
            style={{ wordWrap: "break-word" }}
            sx={{fontSize: 25, top: "-360px", left: "200px"}}
            color={"white"}>
            A Radiant from Nimbin, Australia, Kirra Foster spent years fighting against Kingdom Corporation's ventures in Eastern {"\n"}
            Australia. Resisting from Sawn Rocks to Kangaroo Valley, her efforts against Kingdom earned her the title of the "Great {"\n"}
            Reclaimer". Later approached by the VALORANT Protocol to become an agent, Foster was initially unsure of joining as she {"\n"}
            didn't want to give up her fight against Kingdom and leave her homeland unprotected. However, when Sage decided to contact {"\n"}
            and direct her to a massive rift in the sky near her home, telling her there were many more like that one across the world, {"\n"}
            Kirra realized that the fight was bigger than just her home territory. Finally answering the call, she now serves as the {"\n"}
            Protocol's fourteenth agent, "Skye". While Skye has said that she was not used to working with other people prior to joining {"\n"}
            VALORANT, she has quickly shown herself to be a team player through and through, guiding and reminding her team to move as {"\n"}
            one unit and work together as they complete their mission. With her affinity to feel and sense the natural world and everything {"\n"}
            else around her, Skye is naturally observant, and will quickly note whenever she senses something unusual with her surroundings.
          </Typography>
          <Box // Skye's Youtube Link
            position="relative"
            sx={{top: "-300px", left: "330px"}}
            >
            <iframe
              src='https://www.youtube.com/embed/C3QTyMXi-WE'
              width="640" height="430"
              frameborder="0"
            />
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
