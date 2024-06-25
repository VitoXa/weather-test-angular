export interface LocationInfo {
    Version: number;
    Key: string;
    Type: string;
    Rank: number;
    LocalizedName: string;
    Country: Country;
    AdministrativeArea: Country;
  }
  
  export interface Country {
    ID: string;
    LocalizedName: string;
  }