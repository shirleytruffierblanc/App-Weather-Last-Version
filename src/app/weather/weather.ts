export class Weather{
  constructor(
              public city: string, 
              public description: string,
              public temperature: number,
              public  date:number    ){
                    this.city = city;
                    this.description = description;
                    this.temperature = temperature;
                    this.date = date;
                    
              } 
}