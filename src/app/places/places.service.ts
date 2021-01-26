import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      "p1",
      "Manhattan Mansion",
      "In the heart of New York",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXzK50q24vzvtwqWmGB2mT5mUiAv2UmoYIw&usqp=CAU",
      149.99
    ),
    new Place(
      "p2",
      "Mama Timo Estate",
      "Makongeni, Jogoo Road",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRhjBULpqQldoN4v0PGVdPeUy0uVhRUejvjA&usqp=CAU",
      75.0
    ),
    new Place(
      "p3",
      "Ruth Kandali Estate",
      "Kabati-Kitui",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKDgyVZRelfk7xeDUf2bfqRBrHSU8Iv7jYg&usqp=CAU",
      120.99
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}

  getPlace(id: string) {
    return { ...this._places.find((p) => p.id === id) };
  }
}
