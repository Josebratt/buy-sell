import { Component, OnInit } from '@angular/core';

import { fakeListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-listings-pages',
  templateUrl: './listings-pages.component.html',
  styleUrls: ['./listings-pages.component.css']
})
export class ListingsPagesComponent implements OnInit {

  listings: Listing[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listings = fakeListings;
  }

}
