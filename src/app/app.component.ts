import { error } from '@angular/compiler/src/util';
import {
  Component,
  ElementRef,
  OnInit,
  VERSION,
  ViewChild,
} from '@angular/core';
import { DataServiceService } from './data-service.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  details: any;
  @ViewChild('card', { static: true }) card: ElementRef;
  constructor(private dataService: DataServiceService) {
    this.details = [];
  }

  ngOnInit() {
    this.dataService.getDetails().subscribe((data) => {
      // console.log('data',data)
      // this.details =Object.keys(data);
      // this.details = data;
      for (let key in data) {
        // this.details.push({ name: data[key].name, url: data[key].img });
        this.details.push(data[key]);
      }
      console.log('details', this.details);
    });
    console.log('card', this.card);
  }
}
/**
 * 
 * [{"id":1,"name":"Daltfresh","location":"Changmao","openAt":"4:40 PM","img":"https://cdn.britannica.com/42/91642-050-332E5C66/Keukenhof-Gardens-Lisse-Netherlands.jpg"},{"id":2,"name":"Span","location":"Dębno","openAt":"2:42 AM","img":"https://upload.wikimedia.org/wikipedia/commons/9/9d/Autumn_Colours_-_Stourhead_-_geograph.org.uk_-_1044997.jpg"},{"id":3,"name":"Cookley","location":"Jiangduo","openAt":"5:46 AM","img":"https://i.insider.com/5a61087d55ac562d008b4794?width=700"},{"id":4,"name":"Cardify","location":"Mushie","openAt":"5:55 AM","img":"https://i.insider.com/5ccb188f93a15212af7d5695?width=700"},{"id":5,"name":"Andalax","location":"Dongling","openAt":"9:16 PM","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2AW93JpVy6SIhp21z7FVz00PXrNZkU27OQ\u0026usqp=CAU"},{"id":6,"name":"Konklab","location":"Ust-Maya","openAt":"5:24 PM","img":"https://img.staticmb.com/mbcontent//images/uploads/2020/12/garden%20landscape%20design.jpg"},{"id":7,"name":"Sonair","location":"Palapye","openAt":"11:00 AM","img":"https://cdn.britannica.com/42/91642-050-332E5C66/Keukenhof-Gardens-Lisse-Netherlands.jpg"},{"id":8,"name":"Regrant","location":"Santa Fe","openAt":"7:24 AM","img":"https://upload.wikimedia.org/wikipedia/commons/9/9d/Autumn_Colours_-_Stourhead_-_geograph.org.uk_-_1044997.jpg"},{"id":9,"name":"Keylex","location":"Don Tan","openAt":"2:53 AM","img":"https://i.insider.com/5a61087d55ac562d008b4794?width=700"},{"id":10,"name":"Y-find","location":"Suzëmka","openAt":"10:11 PM","img":"https://i.insider.com/5ccb188f93a15212af7d5695?width=700"}]
 */