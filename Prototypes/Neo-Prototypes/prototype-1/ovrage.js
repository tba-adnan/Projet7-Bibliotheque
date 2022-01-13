class Ouvrage{
    #_id;
    #_titre;

  get id(){
      return this.#_id;
  }
  
  set id(value){
      this.#_id = value;
  }

  get titre(){
      return this.#_titre;
  }

  set titre(value){
      this.#_titre = value;
  }
}