interface PlayerStore {
    ids: string[];
    activId: string;
    setId: (id: string) => void;
    setIds: (ids: string[]) => void;
    reset: () => void;
}