import create from "zustand";

export const useUuidStore = create((set) => ({
  uuid: "",
  setUuid: (uuid) => set(() => ({ uuid })),
}));

export const useNoteStore = create((set) => ({
  note: "",
  isEditing: false,
  isSaving: false,
  doesSavedNoteExists: false,
  setNote: (note) => set(() => ({ note })),
  setIsEditing: (isEditing) => set(() => ({ isEditing })),
  setIsSaving: (isSaving) => set(() => ({ isSaving })),
  setDoesSavedNoteExists: (doesSavedNoteExists) => set(() => ({ doesSavedNoteExists })),
}));
