import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Book {
  title: string;
  Description: string;
  Author: string;
  rating: number[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public index = 0;

  public tempDescription;
  public tempAuthor;

  @Input() currentRating: number = 0;

  public ratingValues = [1, 2, 3, 4, 5];
  
  public videoLinkCollection: Book[] = [
    {
      title: 'The Silent Waters',
      Description: 'A poignant tale of love, loss, and redemption set against the backdrop of a picturesque small town. Follow the journey of two souls as they navigate the tumultuous waters of life, finding solace and healing in unexpected places.',
      Author:'Brittainy C. Cherry', 
      rating:[]
    },
    {
      title: 'The Night Circus',
      Description: 'Step into a mesmerizing world of magic and mystery where a clandestine competition unfolds within the confines of a fantastical circus. Delve into the intricacies of love, rivalry, and destiny as the circus becomes a stage for extraordinary feats and fateful encounters.',
      Author:'Erin Morgenstern',
      rating:[]
    },
    {
      title: 'The Goldfinch',
      Description: 'A gripping narrative of survival and resilience following a young boy journey through tragedy and triumph. Against the backdrop of the art world, witness the transformative power of a stolen painting and the profound impact it has on one life.',
      Author:'Donna Tartt',
      rating:[]
    },
    {
      title: 'Educated',
      Description: 'An inspiring memoir of self-discovery and education against all odds. Follow the author journey from a childhood of isolation and ignorance in rural Idaho to the halls of academia, where she discovers the power of knowledge to shape her own destiny.',
      Author:'Tara Westover',
      rating:[]
    }
  ];

  public processPrevClip() {

    this.index--;

    if (this.index < 0) {
      this.index = this.videoLinkCollection.length - 1;
    }

  }
  public avRate():number{
    if (!this.videoLinkCollection[this.index].rating.length) return 0;
    let avRate=0;
    for (let index = 0; index < this.videoLinkCollection[this.index].rating.length; index++) {
      avRate+= this.videoLinkCollection[this.index].rating[index];
      console.log(avRate);
    }
    return avRate/this.videoLinkCollection[this.index].rating.length;
  
  }


  public rateBook(currentRating: number):void {
    this.currentRating=currentRating;  
    this.videoLinkCollection[this.index].rating.push(this.currentRating);
    console.log('html maistor', this.videoLinkCollection) ;

    this.index++;

    if (this.index >= this.videoLinkCollection.length) {
      this.index = 0;
    }
  }

  public processNextClip() {

    this.index++;

    if (this.index >= this.videoLinkCollection.length) {
      this.index = 0;
    }
  }

  public processInputVideoNote(input) {
    this.tempDescription = input.target;
  }

  public processInputVideoTitle(input) {

    this.tempAuthor = input.target;
  }


  public processSaveVideoData():void {
    this.videoLinkCollection[this.index].Description = this.tempDescription.value;
    this.videoLinkCollection[this.index].Author = this.tempAuthor.value;
  }
}