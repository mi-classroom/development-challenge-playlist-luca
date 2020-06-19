class Playlist {
  constructor(playlist) {
    this.playlist = playlist;
    this.tracks = playlist.querySelectorAll('.playlist__track');

    this.init();
  }

  init() {
    this.tracks.forEach((track, i) => {
      track = new Howl({
        src: [track.getAttribute('data-js-track-src')],
      });

      track.addEventListener('click', () => {
        this.play(i);
      });
    });
  }

  play(index) {
    //Alle anderen stoppen
    this.tracks.forEach((track, id) => {
      this.stop(id);
    });
    //Angeklickten abspielen
    this.tracks[index].play();
  }

  stop(index) {
    this.tracks[index].stop();
  }
}

const playlist = new Playlist(document.querySelector('.playlist'));
