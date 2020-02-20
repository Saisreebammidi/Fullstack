import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetchdata',
  templateUrl: './fetchdata.component.html',
  styleUrls: ['./fetchdata.component.css']
})
export class FetchdataComponent implements OnInit {
  public Details: object = [];  
    public Header = [{ name: '--All--' }, { name: 'Freezing'}, { name: 'Bracing' },
    { name: 'chilly' },{ name: 'cool' },{ name: 'mild' },{ name: 'Warm' },{ name: 'balmy' },
    { name: 'hot' },{ name: 'Sweltering' },{ name: 'Scorching' },];  
    public Details1 = [  
        {Name:'Freezing', Date: '11/17/17', Tempc: '11', Tempf: '10', summary: 'Freezing' },  
        {Name:'Freezing', Date: '11/18/17', Tempc: '54', Tempf: '129', summary: 'Hot' }, 
        {Name:'Freezing', Date: '11/19/17', Tempc: '20', Tempf: '10', summary: 'Chilly' },  
        {Name:'Freezing', Date: '11/20/17', Tempc: '54', Tempf: '51', summary: 'Hot' },  
        {Name:'Bracing', Date: '11/18/17', Tempc: '54', Tempf: '129', summary: 'Hot' }, 
        {Name:'chilly', Date: '11/19/17', Tempc: '20', Tempf: '10', summary: 'Chilly' },  
        {Name:'cool', Date: '11/20/17', Tempc: '14', Tempf: '11', summary: 'cool' }, 
        {Name:'Bracing', Date: '11/17/17', Tempc: '11', Tempf: '10', summary: 'Freezing' }, 
        {Name:'mild', Date: '11/19/17', Tempc: '20', Tempf: '10', summary: 'Chilly' },  
        {Name:'mild', Date: '11/20/17', Tempc: '54', Tempf: '51', summary: 'Hot' }, 
        {Name:'Bracing', Date: '11/17/17', Tempc: '11', Tempf: '10', summary: 'Freezing' },   
        {Name:'Warm', Date: '11/18/17', Tempc: '54', Tempf: '129', summary: 'Hot' }, 
        {Name:'Warm', Date: '11/19/17', Tempc: '20', Tempf: '10', summary: 'Chilly' },  
        {Name:'cool', Date: '11/20/17', Tempc: '14', Tempf: '12', summary: 'cool' },  
        {Name:'chilly', Date: '11/19/17', Tempc: '20', Tempf: '10', summary: 'Chilly' },  
        {Name:'balmy', Date: '11/20/17', Tempc: '54', Tempf: '51', summary: 'Hot' }, 
  
        
       ];  
  
    constructor() {  
      
        this.getProducts();  
    }  
    ngOnInit()
    {

    }
    getProducts() {  
        
        return this.Header;  
    }  
    Search(name: string) {  
  
        let obj = this.Details1.filter(m => m.Name == name);  
        this.Details = obj;  
        return this.Details;  
    }  

}
