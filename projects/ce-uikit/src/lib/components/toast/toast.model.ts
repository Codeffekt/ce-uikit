export type CeToastType = 'success' | 'error' | 'info';

export interface CeToastData {
    message: string;
    type: CeToastType;
}
