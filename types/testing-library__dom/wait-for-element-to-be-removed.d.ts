export function waitForElementToBeRemoved<T>(
    callback: (() => T) | T,
    options?: {
        container?: HTMLElement;
        timeout?: number;
        interval?: number;
        mutationObserverOptions?: MutationObserverInit;
    },
): Promise<T>;
