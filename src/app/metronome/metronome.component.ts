import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx'

@Component({
  moduleId: module.id,
  selector: 'metronome-app',
  templateUrl: 'metronome.component.html',
  styleUrls: ['metronome.component.css']
})

export class MetronomeAppComponent {
    private audioContext: AudioContext;
    private oscilator: OscillatorNode;
    private isPlaying: boolean;
    private metronome: any;

    frequency: number;
    tempo: number;

    ngOnInit() {
      this.audioContext = new AudioContext();
      this.frequency = 440; 
      this.tempo = 120;
      this.metronome = null;
    }

    ngOnDestory() {
      this.audioContext = null;
    }

    setFrequency(freq) {
      this.frequency = freq;
      if(this.oscilator) {
        this.oscilator.frequency.value = this.frequency;
      }
    }

    setTempo(tempo) {
      this.tempo = tempo;      
    }

    play() {
      this.isPlaying = !this.isPlaying;

      if(this.isPlaying) {
        this.startPlaying();
      } else {
        this.stopPlaying();
      }      
    }

    private createFrequency(frequency: number) {
      let oscilator = this.audioContext.createOscillator();

      oscilator.frequency.value = frequency;
      oscilator.connect(this.audioContext.destination);

      return oscilator;
    }    

    private playSound() {      
        let o = this.audioContext.createOscillator();
        o.connect(this.audioContext.destination);
        o.frequency.value = this.frequency;

        return o;
    }

    private startPlaying() { 
        //this.metronome.start();
        
     
    }

    private createBuffer() {
        let channels = 2;
        
        let frameCount = this.audioContext.sampleRate * (60 / this.tempo);
        let buffer = this.audioContext.createBuffer(channels, frameCount, this.audioContext.sampleRate);

        for(let channel = 0; channel < channels; channel ++) {
            let nowBuffering = buffer.getChannelData(channel);
           
            for(let i=0; i < frameCount; i++) {
                nowBuffering[i] = Math.random() * 2 - 1;
            }
        }

        this.metronome = this.audioContext.createBufferSource();
        
        this.metronome.connect(this.audioContext.destination);
        this.metronome.buffer = buffer;
        this.metronome.loop = true;
    }

    private stopPlaying() {
        //this.metronome.stop();
    }
}
