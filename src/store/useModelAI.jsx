import { create } from "zustand";

const useAIModel = create((set) => ({
  AIModel: "llama3-8b-8192",
  switchAIModel: (model) => set(() => ({ AIModel: model })),
}));

export default useAIModel;
