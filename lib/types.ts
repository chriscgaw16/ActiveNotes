export interface Command {
    command: string;
    callback: (...args: any[]) => void;
    matchInterim?: boolean;
}