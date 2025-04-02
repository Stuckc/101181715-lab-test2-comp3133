import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { SpacexService } from '../../services/spacex.service';
import { Mission } from '../../models/mission';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private spacex: SpacexService, private router: Router) {}

  ngOnInit(): void {
    this.spacex.getAllMissions().subscribe(data => {
      this.missions = data;
    });
  }

  goToDetails(flightNumber: number) {
    this.router.navigate(['/details', flightNumber]);
  }
}
