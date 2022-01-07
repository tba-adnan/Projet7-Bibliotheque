class WorkBLO {
    workList = [];
    counter = 0;

    addWork(work) {
        this.workList.push(work)
    }

    editWork(work) {
        for (var i = 0; i < this.workList.length; i++) {
            if (work.id == this.workList[i].id) {
                this.workList[i] = work
                return work
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
}