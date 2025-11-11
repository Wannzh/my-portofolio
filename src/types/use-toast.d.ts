export interface Toast {
  id: string;
  title?: string;
  description?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  [key: string]: string | boolean | ((open: boolean) => void) | undefined;
}

export interface ToastActionElement {
  altText: string;
  action: React.ReactNode;
}

export interface ToastOptions {
  title?: string;
  description?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  [key: string]: string | boolean | ((open: boolean) => void) | undefined;
}

export type ToastActionType = 'ADD_TOAST' | 'UPDATE_TOAST' | 'DISMISS_TOAST' | 'REMOVE_TOAST';

export interface ToastState {
  toasts: Toast[];
}

export interface ToastAction {
  type: ToastActionType;
  toast?: Toast;
  toastId?: string;
}

export interface ToastReturnValue {
  id: string;
  dismiss: () => void;
  update: (props: Partial<Toast>) => void;
}

export function useToast(): {
  toasts: Toast[];
  toast: (options: ToastOptions) => ToastReturnValue;
  dismiss: (toastId?: string) => void;
};

export function toast(options: ToastOptions): ToastReturnValue;

export function reducer(state: ToastState, action: ToastAction): ToastState;

declare module '../hooks/use-toast.js' {
  export { useToast, toast, reducer };
  export type { Toast, ToastActionElement, ToastOptions, ToastActionType, ToastState, ToastAction, ToastReturnValue };
}

