import { Location } from './location.model';

export class Doctor{
    public fullName: string;
    public lastName: string;
    public specialties: string[];
    public image: string;
    public url: string;
    public gender: string;
    public locations: Location[];

    constructor(data?){
        if(data){
            this.fullName = data.fullName;
            this.lastName = data.lastName;
            this.specialties = Array.isArray(data.specialties) ? data.specialties : [ data.specialties ];
            this.image = data.image;
            this.url = data.url;
            this.gender = data.gender;
            this.locations = [];
            for(let l of data.locations){
                this.locations.push(new Location(l));
            }
        }
    }
}