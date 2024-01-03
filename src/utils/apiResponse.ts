type Location = {
 country: string;
 region: string;
 city: string;
 lat: number;
 lng: number;
 postalCode: string;
 timezone: string;
 geonameId: number;
};

type As = {
 asn: number;
 name: string;
 route: string;
 domain: string;
 type: string;
};

export type ApiResponse = {
 ip: string;
 location: Location;
 domains: string[];
 as: As[];
 isp: string;
};
