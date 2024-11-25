const musicJobs = [
  {
    title: "Merry F***ing Christmas (TV Special)",
    description: "Contributing composer: Leon Schuster 'Frank and Fearless",
    link: "https://www.imdb.com/title/tt16424106/",
    ytUrl:
      "https://www.youtube.com/watch?v=pkmWkcH_7Qc&list=PLuqUikzY1o5XWKR-oattHw_Atq9FLOhm1",
  },
  {
    title: "Film & TV music",
    description: "Contributing composer: Leon Schuster 'Frank and Fearless",
    link: "https://youtu.be/_8slPqV-16w",
    ytUrl:
      "https://www.youtube.com/watch?v=pkmWkcH_7Qc&list=PLuqUikzY1o5XWKR-oattHw_Atq9FLOhm1",
  },
  {
    title: "Jingle & theme music",
    description: "Composer: Mēmotiv",
    link: "https://www.linkedin.com/company/memotiv/",
    audioUrl: "https://johnbartmann.com/site-audio-smp/spdwrk-jingle-02.wav",
  },
  {
    title: "Commercial electro-jazz",
    description: "Composition/production: 'Night And Day' by Pravda",
    link: "http://pravdaofficial.com/music/",
    ytUrl: "https://www.youtube.com/watch?v=lOygAQEQ5To",
  },
  // {
  //   title: "Commercial electro-jazz",
  //   description: "Composition/production: 'Wooden Wendy' by Pravda",
  //   link: "http://pravdaofficial.com/music/",
  //   ytUrl: "https://www.youtube.com/watch?v=mX1SgwsDNS8",
  // },
  {
    title: "Creative Commons music",
    description: "Royalty-free music for YouTube and games",
    link: "http://youtube.com/johnbartmannmusic/",
    ytUrl:
      "https://www.youtube.com/watch?v=pkmWkcH_7Qc&list=PLuqUikzY1o5XWKR-oattHw_Atq9FLOhm1",
  },
  {
    title: "90s sitcom parody music",
    description: "Custom retro music for brands and channels",
    link: "https://youtu.be/1DAoz6e3JG8",
    ytUrl: "https://youtu.be/1DAoz6e3JG8",
  },
  {
    title: "Themed library music",
    description: "Composition/production: DNA Muzik / Minds and Music",
    link: "https://dnamusik.sourceaudio.com/album/3646849",
    audioUrl: "https://johnbartmann.com/site-audio-smp/just-trolling-along.mp3",
  },
];

return (
  <div className="single-page-container">
    <h1>MUSIC</h1>
    {/*
            {musicJobs.map((job) => {
              return Card(
                job.title,
                job.description,
                job.link,
                job.audioUrl,
                job.ytUrl
              );
            })}
      
                 <h3>
              Royalty-free music theme pack production (
              <a
                href="https://www.youtube.com/watch?v=pkmWkcH_7Qc&list=PLuqUikzY1o5XWKR-oattHw_Atq9FLOhm1"
                target="_blank"
              >
                view all
              </a>{" "}
              |{" "}
              <a
                href="https://docs.google.com/spreadsheets/d/1lSEnqwGfV7shU5GsO8Cf6FSbFAf73gCFOlyzhbLuamo/edit#gid=1537321504"
                target="_blank"
              >
                view metadata
              </a>
              )
            </h3>
            <h4>
              <div className="gallery-container">
                <div className="gallery-item-container">
                  <ReactPlayer
                    url="https://youtu.be/v3xt1u3C1M8"
                    width="18rem"
                    height="auto"
                  />
                  90s TV Sitcom Themes
                </div>
                <div className="gallery-item-container">
                  <ReactPlayer
                    url="https://youtu.be/1DAoz6e3JG8"
                    width="18rem"
                    height="auto"
                  />
                  Machine Learning
                </div>
                <div className="gallery-item-container">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=kXXxEqZu7eI"
                    width="18rem"
                    height="auto"
                  />
                  Underwater Wonders
                </div>
              </div>
            </h4>
      
       <h3>Narrative scoring & film/TV soundtrack music production</h3>
            <h4>
              Film music (contributing) composition (Leon Schuster 'Frank & Fearless'){" "}
            </h4>
            <h4>
              {" "}
              <ReactPlayer
                url="https://youtu.be/_8slPqV-16w"
                width="18rem"
                height="auto"
              />
            </h4>
            <h3>Jingle & meme music production</h3>
            <h4>
              90s-themed parody jingle music for{" "}
              <a href="https://www.linkedin.com/company/memotiv/" target="_blank">
                Mēmotiv
              </a>
            </h4>
            <h4>
              <audio
                controls
                src="https://johnbartmann.com/site-audio-smp/spdwrk-jingle-02.wav"
              ></audio>
            </h4>
      
            <h3>Library music production</h3>
            <h4>
              {" "}
              Fantasy-themed album{" "}
              <a
                href="https://dnamusik.sourceaudio.com/album/3646849."
                target="_blank"
              >
                'Fairytales and Fantasy' - DNA Muzik
              </a>
            </h4>
            <h4>
              <audio
                controls
                src="https://johnbartmann.com/site-audio-smp/just-trolling-along.mp3"
              ></audio>
            </h4>
      
            <h3>Live music performance aliases</h3>
            <h4>
              {" "}
              <a href="https://getjohnnyjazz.com/" target="_blank">
                JohnnyJazz - electronic jazz outfit
              </a>
            </h4>
            <h4>
              <a href="https://pravdaofficial.com" target="_blank">
                Pravda - original lyrical songwriting
              </a>
            </h4>
            <h4>
              <a
                href="https://www.capetownswing.co.za/the-pebble-shakers/"
                target="_blank"
              >
                The Pebble Shakers - South African jazz
              </a>
            </h4>
            <h4>
              <a href="https://thegreatgatsbys.com" target="_blank">
                The Great Gatsbys - swing jazz
              </a>
            </h4>
            <h4>
              <a href="https://dukesofnote.com/" target="_blank">
                The Dukes of Note - carnival rock
              </a>
            </h4> */}
  </div>
);
