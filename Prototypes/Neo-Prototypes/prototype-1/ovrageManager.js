class OuvrageManager {
    #ouvrageList = [];
    #compteur = 1;
  
    get ouvrageList(){
        return this.#ouvrageList;
    }
  
    addOuvrage(ouvrage) {
        this.#compteur = this.#compteur + 1
        ouvrage.id = this.#compteur
        this.#ouvrageList.push(ouvrage)
    }
    getItem(id) {
        for (var i = 0; i < this.ouvrageList.length; i++) {
            if (id == this.ouvrageList[i].id) {
                return this.ouvrageList[i]
            }
        }
    }
    getAllItem(){
        return this.#ouvrageList
      
    }
}

// return this.#ouvrageList.sort(function(a,b){
//    return a.titre.localCompare(b.titre)
