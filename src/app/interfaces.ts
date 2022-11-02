export interface ISelect {
    value: string;
    viewValue: string;
}

export interface IFormValues {
    rover: string;
    camera: string;
    sol: number;
}

export interface IResponce {
    photos: {
        camera:{ id: number, name: string, rover_id: number, full_name: string};
        earth_date: string;
        id: number;
        img_src: string;
        rover:{ id: number, name: string, landing_date: string, launch_date: string, status: string };
        sol: number
    }[]
}
