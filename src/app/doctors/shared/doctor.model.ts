import { Location } from './location.model';

export class Doctor{
    readonly DEFAULT_AVATAR = "../assets/images/avatar.png";
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
            this.image = data.image || this.DEFAULT_AVATAR;
            this.url = data.url;
            this.gender = data.gender;
            data.locations = Array.isArray(data.locations) ? data.locations : [ data.locations ];
            this.locations = data.locations.map(item => {
                return new Location(item);
            });
        }
    }
}