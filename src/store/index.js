import { observable, computed } from "mobx";

class CounterStore {
    @observable count = 0;

    @computed get tenTimes() {
        return this.count * 10;
    }

    constructor(rootStore) {
        this.rootStore = rootStore;
    }
}

class RootStore {
    constructor() {
        this.counterStore = new CounterStore(this);
    }
}

export default new RootStore();