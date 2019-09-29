import { Component, OnInit} from '@angular/core';
import { BusinessService } from '../business.service';
import Business from '../model/business_model';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  // styleUrls: ['./gst-get.component.css']
})

export class GstGetComponent implements OnInit {
  business: Business[];
  constructor(private bs: BusinessService) { }
  // bs nama variabel untuk memanggil BusinessService, terserah, tapi ada ketetapannya seperti penulisan 2 kata: businessService

  refresh() {
    location.reload();
  }

  deleteBusiness(data) {
    this.bs.deleteBusiness(data).subscribe(response => {
      console.log('deleted', response);
      this.ngOnInit(); // agar data yg dihapus dan data yg tersisa sinkron
    });
    // console.log('berjalan', data);
  }


  ngOnInit() {
    this.bs.getBusiness().subscribe((data: Business[]) => {
    this.business = data;
    // console.log(data); // untuk menguji apakah fungsi get berfungsi
    });
  }
}
