import React from "react";
import { AsyncTrunk }  from 'mobx-sync';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserStore from "./user.store";
import NoteStore from "./note.store";

class RootStore {
    constructor() {
        this.userStore = new UserStore(this)
        this.noteStore = new NoteStore(this)
    }
}

export const rootStore = new RootStore();
export const trunk = new AsyncTrunk(rootStore, {storage: AsyncStorage})
export const StoresContext = React.createContext(rootStore);
export const StoreProvider = StoresContext.Provider;
export const useStores = () => React.useContext(StoresContext);