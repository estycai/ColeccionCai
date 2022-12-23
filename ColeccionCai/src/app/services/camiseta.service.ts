import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc 
} from '@angular/fire/firestore';
import { Camiseta } from '../models/Camiseta';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { deleteDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class CamisetaService {
  private dbPath = '/camisetas';

  camisetasRef!: AngularFirestoreCollection<Camiseta>;

  constructor(
    private firestore: Firestore,
    private db: AngularFirestore
  ) {
    this.camisetasRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Camiseta> {
    return this.camisetasRef;
  }

  create(camiseta: Camiseta): any {
    return this.camisetasRef.add({ ...camiseta });
  }

  update(id: string, data: any): Promise<void> {
    return this.camisetasRef.doc(id).update(data);
  }

  delete(camiseta:Camiseta){
    const placeDocRef = doc(this.firestore, `camisetas/${camiseta.id}`);
    return deleteDoc(placeDocRef);
  }

  async updateCamiseta(id: string, camiseta: Camiseta) {
    const docRef = doc(this.firestore, this.dbPath.concat("/"+ id));  
    return await updateDoc(docRef, { ... camiseta});
  }

  addCamiseta(camiseta: Camiseta) {
    const camisetaRef = collection(this.firestore, 'camisetas');
    return addDoc(camisetaRef, camiseta);
  }

  getCamisetas(): Observable<Camiseta[]> {
    const camisetaRef = collection(this.firestore, 'camisetas');
    return collectionData(camisetaRef, { idField: 'id' }) as Observable<
      Camiseta[]
    >;
  }

  getCamisetaById(id: string): Observable<any> {
    return this.db
      .collection('camisetas')
      .doc(id)
      .snapshotChanges();
  }
}
