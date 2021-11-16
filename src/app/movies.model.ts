export class Movie {
    public title: string;
    public description: string;
    public duration: number;
    public rate: number;
    public actors: string[];
    public imageUrl: string;

    constructor(title: string, description: string, duration: number, rate: number, actors: string[], imageUrl: string) {
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.rate = rate;
        this.actors = actors;
        this.imageUrl=imageUrl;
    }


}