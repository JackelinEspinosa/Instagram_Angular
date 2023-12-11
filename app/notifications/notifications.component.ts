import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications: any[]; //tipo real de tus notificaciones

  constructor() {
    // Simula datos de notificaciones
    this.notifications = [
      { sender: { username: 'Alejandra_19', profileImage: 'assets/notification-profiles/profile1.jpg' }, message: 'te ha mencionado en un comentario.', time: new Date() },
      { sender: { username: 'Favio_Eder', profileImage: 'assets/notification-profiles/profile2.jpg' }, message: 'a quien quizas conoscas, esta en instagram.', time: new Date() },
      { sender: { username: 'Franco_Brenda', profileImage: 'assets/notification-profiles/profile3.jpg' }, message: 'le gusto tu publicacion.', time: new Date() },
      
    ];
  }

  ngOnInit(): void {
    
  }

  handleImageError(event: any, notification: any) {
  
    event.target.src = 'assets/notification-profiles/default-profile.jpg';
    notification.sender.profileImage = 'assets/notification-profiles/default-profile.jpg'; 
  }
}
