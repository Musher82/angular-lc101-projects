import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'The Internet Was Built On Cats';
  image1 = 'https://filmdaily.co/wp-content/uploads/2020/07/if-it-fits-lede-1300x1123.jpg';
  image2 = 'https://www.zenrooms.com/blog/wp-content/uploads/2020/05/funny-cats-2-1280x720.jpg';
  image3 = 'https://i1.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg';

  constructor() { }

  ngOnInit() {
  }

}