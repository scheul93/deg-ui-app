export class Location{
    public name: string;
    public url: string;
    public streetAddress: string;
    public cityStateZip: string;
    public lat: number;
    public lng: number;
    public distance: number;
    public phone: string;
    public image: string;
    public availability: string; 

    constructor(data?){
        if(data){
            this.name = data.name;
            this.url = data.url;
            this.streetAddress = data.streetAddress;
            this.cityStateZip = data.cityStateZip;
            this.lat = data.lat && Number(data.lat);
            this.lng = data.lng && Number(data.lng);
            this.distance = data.distance && Number(data.distance);
            this.phone = data.phone;
            this.image = data.image;
            this.availability = data.availability;
        }
    }
}