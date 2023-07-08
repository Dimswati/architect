type Testimonial = {
    id: number;
    testimonial: string;
    imageUrl: string;
    author: string;
    service: string;
}

type Project = {
    id: number;
    title: string;
    tags: string[];
    imageUrl: string;
}

type Client = {
    id: number;
    clientName: string;
    imageUrl: string;
}

type HomeSlider = {
    id: number
    imageUrl: string
    title: string
    subTitle: string
}