import { Pexel_Results } from "./pexel_results";
import { User } from "./user";
import { Video_Data } from "./video_data";

export class Response_Video_Data {
    constructor(
      public user: User,
      public video_Data: Video_Data,
      public pexels_Results: Pexel_Results
    ) {}
  }