import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-data-dashboard',
  templateUrl: './data-dashboard.component.html',
  styleUrls: ['./data-dashboard.component.scss'],
})
export class DataDashboardComponent implements OnInit {

	constructor(config: NgbProgressbarConfig) {
		// customize default values of progress bars used by this component tree
		config.max = 100;
		config.striped = true;
		config.animated = true;
		config.showValue = true;
		config.type = 'success';
		config.height = '20px';
    
	}

  ngOnInit(): void {
  }

}
