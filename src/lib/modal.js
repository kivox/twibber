import { writable } from 'svelte/store';

export const modalStore = writable({ modal: '', data: null });

export const setModal = (modal, data) => {
    modalStore.set({ modal, data });
};

export const hideModal = () => {
    modalStore.set({ modal: '', data: null });
};