import { Metric } from "./metric";

export interface Forecast {
    Headline: Headline;
    DailyForecasts: DailyForecast[];
}

export interface DailyForecast {
    Date: string;
    EpochDate: number;
    Temperature: TemperatureRange;
    Day: Day;
    Night: Day;
    Sources: string[];
    MobileLink: string;
    Link: string;
}

export interface Day {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType?: string;
    PrecipitationIntensity?: string;
}

export interface TemperatureRange {
    Minimum: Metric;
    Maximum: Metric;
}



export interface Headline {
    EffectiveDate: string;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: string;
    EndEpochDate: number;
    MobileLink: string;
    Link: string;
}