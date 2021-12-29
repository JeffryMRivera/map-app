
export interface PlacesResponse {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:            string;
    type:          string;
    place_type:    string[];
    relevance:     number;
    properties:    Properties;
    text_es:       string;
    language_es?:  Language;
    place_name_es: string;
    text:          string;
    language?:     Language;
    place_name:    string;
    bbox?:         number[];
    center:        number[];
    geometry:      Geometry;
    context:       Context[];
}

export interface Context {
    id:          ID;
    wikidata:    Wikidata;
    short_code?: ShortCode;
    text_es:     Text;
    language_es: Language;
    text:        Text;
    language:    Language;
}

export enum ID {
    Country12227578366646840 = "country.12227578366646840",
    Place5287418057664750 = "place.5287418057664750",
    Region10251429849665300 = "region.10251429849665300",
    Region13405464894043390 = "region.13405464894043390",
}

export enum Language {
    Es = "es",
}

export enum ShortCode {
    Co = "co",
    CoCau = "CO-CAU",
    CoVac = "CO-VAC",
}

export enum Text {
    Cali = "Cali",
    Cauca = "Cauca",
    Colombia = "Colombia",
    ValleDelCauca = "Valle del Cauca",
}

export enum Wikidata {
    Q13990 = "Q13990",
    Q230602 = "Q230602",
    Q51103 = "Q51103",
    Q739 = "Q739",
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface Properties {
    wikidata?:   string;
    foursquare?: string;
    landmark?:   boolean;
    address?:    string;
    category?:   string;
    maki?:       string;
}
