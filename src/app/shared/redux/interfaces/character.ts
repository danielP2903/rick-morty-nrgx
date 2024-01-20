import ICharacter from "src/app/views/modules/interfaces/characters-model";

export interface ICharacterByIdState {
  loaded:boolean;
  character:ICharacter | {}
}
