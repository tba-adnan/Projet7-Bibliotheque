class WorkManager {
    #workList = [];
    #counter = 0;

    get workList(){
        return this.#workList;
    }

    addWork(work) {
        this.open()
        this.#counter = this.#counter + 1
        work.id = this.#counter
        this.#workList.push(work)
        this.save()
   
    }

    editWork(work) {
        this.open()
        for (var i = 0; i < this.#workList.length; i++) {
            if (work.id == this.#workList[i].id) {
                this.#workList[i] = work
                this.save()
            }
        }
    }


    getItem(id) {
        for (var i = 0; i < this.workList.length; i++) {
            if (id == this.workList[i].id) {
                return this.workList[i]
            }
        }
    }

    deleteWork(id) {
       this.#workList =  this.#workList.filter(function(work){
            return work.id != id
        })
        this.save()
    }


    getAllItems() {
        this.open()
        return this.#workList.sort(function(a, b) {
            return a.title.localeCompare(b.title)
        })
        
   
    }

    save(){

        var stringList = JSON.stringify(this.#workList)

        localStorage.setItem('workList', stringList)
        console.log(JSON.parse(localStorage.getItem("workList")))


        localStorage.setItem('counter', this.#counter)
    }

    open(){
       this.#workList =  JSON.parse(localStorage.getItem("workList")  || "[]")
       this.#counter = parseInt(localStorage.getItem('counter') || 0)
       console.log(this.#workList)
       console.log(localStorage.getItem("workList"))

    }
}