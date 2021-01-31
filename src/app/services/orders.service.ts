import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  constructor(private firestore: AngularFirestore) { }

  createCoffeeOrder(data) {
    return this.firestore.collection("coffeeOrders")
      .add(data)
      .then(res => { }, err => console.log(err));
  };

  getCoffeeOrders() {
    return this.firestore.collection("coffeeOrders").snapshotChanges();
  }

  updateCoffeeOrder(data) {
    return this.firestore.collection("coffeeOrders")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  deleteCoffeeOrder(data) {
    return this.firestore.collection("coffeeOrders").doc(data.payload.doc.id).delete();
  }
}
