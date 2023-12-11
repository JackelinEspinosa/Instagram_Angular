import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: any[]; // tipo real de tus mensajes

  constructor() {
    // Simula datos de mensajes
    this.messages = [
      { sender: { username: 'Favio_Eder', profileImage: 'assets/message-profiles/profile2.jpg' }, content: 'Hola, ¿cómo estás?🙌', time: new Date(), connected: true },
      { sender: { username: 'Laura', profileImage: 'assets/message-profiles/profile5.jpg' }, content: 'Activo(a)', time: new Date(), connected: true },
      { sender: { username: 'Miyer', profileImage: 'assets/message-profiles/profile4.jpg' }, content: 'Envio un reel de rokerosforeveroficial', time: new Date(), connected: true },
      { sender: { username: 'Dani', profileImage: 'assets/message-profiles/profile2.jpg' }, content: 'visto', time: new Date(), connected: false },
      { sender: { username: 'Andrhea', profileImage: 'assets/message-profiles/profile7.jpg' }, content: 'naa🤣🤣🤣', time: new Date(), connected: false },
      { sender: { username: 'Franco_Brenda', profileImage: 'assets/message-profiles/profile3.jpg' }, content: 'si somos jajaj🤣', time: new Date(), connected: true },
      { sender: { username: 'Javier', profileImage: 'assets/message-profiles/profile6,jpg.jpeg' }, content: 'Hola, ¿cómo vas?', time: new Date(), connected: true },
      { sender: { username: 'Alejandra_19', profileImage: 'assets/message-profiles/profile1.jpg' }, content: 'mañana😒', time: new Date(), connected: false },
      { sender: { username: 'Hamilton', profileImage: 'assets/message-profiles/profile8.jpg' }, content: 'tal vez', time: new Date(), connected: true },
      { sender: { username: 'Esteffany', profileImage: 'assets/message-profiles/profile9.jpg' }, content: 'ok👌', time: new Date(), connected: false },
    ];
  }

  ngOnInit(): void {
   
  }
}
