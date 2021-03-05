/* Create a menu app as seen in this week’s video. What you create is up 
to you as long as it meets the following requirements.
	•	Use at least one array.
	•	Use at least two classes.
	•	Your menu should have the options to create, view, and delete elements.
*/

/*I'm creating a program that allows you to add artists, view one artist
(and their songs), rename the artist, delete the artist, and view all 
the artists. Within an artist selection you have the option the add a 
song, rename a song, and delete a song */

class Artist {
  constructor(artist) {
    this.artist = artist;
    this.songs = [];
  }
}

class Menu {
  constructor() {
    this.artists = [];
    this.selectedArtist = null;
  }

  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case '1':
          this.addArtist();
          break;
        case '2':
          this.viewArtist();
          break;
        case '3':
          this.renameArtist();
          break;
        case '4':
          this.deleteArtist();
          break;
        case '5':
          this.displayArtists();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }
    alert('Until next time!');
  }

  showMainMenuOptions() {
    return prompt(`
    0| Exit
    1| Add Artist
    2| View Artist
    3| Rename Artist
    4| Delete Artist
    5| Display All Artists
    `);
  }

  showArtistMenuOptions(artistInfo) {
    return prompt(`
    0| Back
    1| Add Song
    2| Rename Song
    3| Delete Song
    ----------------------
    ${artistInfo}`);
  }

  displayArtists() {
    let artistString = '';
    for (let i = 0; i < this.artists.length; i++) {
      artistString += i + '| ' + this.artists[i].artist + '\n';
    }
    alert(artistString);
  }

  addArtist() {
    let artist = prompt('Enter the artist name:');
    this.artists.push(new Artist(artist));
  }

  viewArtist() {
    let index = prompt('Enter the index of the artist you wish to view:');
    if (index > -1 && index < this.artists.length) {
      this.selectedArtist = this.artists[index];
      let description =
        'Artist: ' + this.selectedArtist.artist + '\n' + 'Songs: ' + '\n';
      // We use if statements in this case to make sure the user enters a valid response
      for (let i = 0; i < this.selectedArtist.songs.length; i++) {
        description += i + '| ' + this.selectedArtist.songs[i] + '\n';
      }

      let selection = this.showArtistMenuOptions(description);
      switch (selection) {
        case '1':
          this.addSong();
          break;
        case '2':
          this.renameSong();
          break;
        case '3':
          this.deleteSong();
      }
    }
  }

  renameArtist() {
    let index = prompt(`Enter the index of the artist you wish to rename:`);
    if (index > -1 && index < this.artists.length) {
      this.selectedArtist = this.artists[index];
      let newName = prompt(`Enter the new name:`);
      this.artists[index].artist = newName;
    }
  }
  deleteArtist() {
    let index = prompt(`Enter the index of the artist you wish to delete:`);
    if (index > -1 && index < this.artists.length) {
      this.artists.splice(index, 1);
    }
  }

  addSong() {
    let name = prompt(`Enter the name of the song you would like to add:`);
    this.selectedArtist.songs.push(name);
  }

  renameSong() {
    let index = prompt(`Enter the index of the song you wish to rename`);
    if (index > -1 && index < this.selectedArtist.songs.length) {
      this.selectedArtist.songs[index];
      let newName = prompt(`Enter the new song name:`);
      this.selectedArtist.songs[index] = newName;
    }
  }

  deleteSong() {
    let index = prompt(`Enter the index of the song you wish to remove:`);
    if (index > -1 && index < this.selectedArtist.songs.length) {
      this.selectedArtist.songs.splice(index, 1);
    }
  }
}

let menu = new Menu();
menu.start();
