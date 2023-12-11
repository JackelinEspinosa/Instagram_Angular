// reels.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-reels',
  templateUrl: './reels.component.html',
  styleUrls: ['./reels.component.scss']
})
export class ReelsComponent {
  reelsData: any[] = [];

  constructor() {
    // Simulamos la carga de datos 
    this.loadReelsData();
  }

  private loadReelsData() {
    // Simulamos datos de reels (puedes reemplazar esto con datos reales)
    this.reelsData = [
      { id: 'reel3.mp4', description: 'Video corto 1' },
      { id: 'reel1.mp4', description: 'Video corto 2' },
      { id: 'reel2.mp4', description: 'Video corto 3' },
      
    ];
  }

  togglePlayback(videoPlayer: HTMLVideoElement) {

    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  }

  getVideoUrl(videoId: string): string {
    return `assets/${videoId}`;
  }
}
