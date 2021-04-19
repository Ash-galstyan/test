import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  //TODO This would ideally get the tracks array from the back end, I had problems connecting with the API provided.
  tracks = [
    {
      trackName: 'Com Truise',
      userName: 'Reed',
      audioSrc: './src/assets/tom_cruise.mp3',
      likes: 0
    },
    {
      trackName: 'Claude Debussy - Clair de Lune',
      userName: 'Reed',
      audioSrc: './src/assets/claire_de_lune.mp3',
      likes: 0
    },
    {
      trackName: 'Culture Shock - Troglodyte',
      userName: 'Doug',
      audioSrc: './src/assets/troglodyte.mp3',
      likes: 0
    }
  ];
  filteredTracks = [];
  model;

  constructor() { }

  ngOnInit(): void {
    this.filteredTracks = this.tracks;
  }

  onAddLike(index: number): void {
    this.tracks[index].likes ++;
  }

  search(data): any {
    if (data && data.length > 0) {
      this.filteredTracks = this.tracks.filter((track) => {
        return track.userName.toLowerCase().includes(data);
      });
    } else {
      this.filteredTracks = this.tracks;
    }
  }

}
