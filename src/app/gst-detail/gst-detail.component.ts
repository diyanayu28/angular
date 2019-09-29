import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import Business from '../model/business_model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gst-detail',
  templateUrl: './gst-detail.component.html',
  styleUrls: ['./gst-detail.component.css']
})

export class GstDetailComponent implements OnInit {
  business: any;
  id: string;
  constructor(private det: BusinessService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }
  // bs nama variabel untuk memanggil BusinessService, terserah, tapi ada ketetapannya seperti penulisan 2 kata: businessService

  detailBusiness(data) {
    this.det.detailBusiness(data).subscribe(response => {
      //console.log('detail', response);
      this.business = response;
      console.log(this.business);
      // this.ngOnInit(); // agar data sinkron
    });
    // console.log('berjalan', data);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params._id);
      this.detailBusiness(params._id);
    }) 
  }

}
