import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc, 
  deleteDoc
} from '@angular/fire/firestore';
import { Link } from '../models/Link';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinksServiceService {
  dbPath: string = "/links" ;

  constructor(
    private firestore: Firestore
  ) { }

  
  delete(link:Link){
    const placeDocRef = doc(this.firestore, `links/${link.id}`);
    return deleteDoc(placeDocRef);
  }

  async updateLink(id: string, link: Link) {
    const docRef = doc(this.firestore, this.dbPath.concat("/"+ id));  
    return await updateDoc(docRef, { ... link});
  }

  addLink(links: Link) {
    const linkRef = collection(this.firestore, 'links');
    return addDoc(linkRef, links);
  }

  getLinks(): Observable<Link[]> {
    const linkRef = collection(this.firestore, 'links');
    return collectionData(linkRef, { idField: 'id' }) as Observable<
      Link[]
    >;
  }
}
