import { Resolution } from "./resolution";

export class Video_Data {
    constructor(
      public id: number,
      public quality: string,
      public file_type: string,
      public fps: number,
      public link: string,
      public resolution: Resolution
    ) {}
  }