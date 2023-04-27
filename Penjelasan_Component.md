Catalog
![image](https://user-images.githubusercontent.com/71117478/234890942-302925e2-e94d-491b-95dc-7a7eb46b2edc.png)
Cart
![image](https://user-images.githubusercontent.com/71117478/234892430-709622ef-d30a-441e-a4b9-6a045a5d09a5.png)
Transaction
![image](https://user-images.githubusercontent.com/71117478/234892610-4b2c16d2-d7e4-41cf-b5b9-babb0ecb0474.png)



- Component Catalog, menampilkan barang-barang yang tersedia. Merupakan Component yang dipanggil lewat app-module.ts ketika user klik button "Catalog". Data-data yang ditampilkan berasal dari dummy API yang dibuat di mockachino.
- Component Cart, menampilkan barang-barang yang dipilih. Pada module ini, Cart dibuat hardcode hanya ada 2 items yaitu Bola dan Dumbbell. Ketika user klik "Checkout", maka akan mengirimkan data ke realtime database firebase yang berisi ["Bola", "Dumbbell"].
- Component Transaction, menampilkan barang-barang yang telah dicheckout di Cart. Data yang ditampilkan diambil dari realtime database firebase.  
