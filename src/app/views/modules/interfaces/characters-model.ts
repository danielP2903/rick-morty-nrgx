interface IOrigin {
  name: string;
  url: string;
}

interface ILocation {
  name: string;
  url: string;
}

interface IEpisode {
  [index: number]: string;
}

interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: IEpisode;
  url: string;
  created: string;
  selected?:boolean;
}

export default ICharacter;
