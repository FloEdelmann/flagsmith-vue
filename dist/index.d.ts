import type { IFlags, IFlagsmithFeature, IFlagsmithTrait, IInitConfig, ITraits, LoadingState, IFlagsmith } from 'flagsmith/types';
import type { ComputedRef, Ref } from 'vue';
export interface FlagsmithHelper<F extends string = string, T extends string = string> {
    flags: Ref<IFlags<F> | undefined>;
    traits: Ref<ITraits<T> | undefined>;
    loadingState: Ref<LoadingState | undefined>;
    setTrait: IFlagsmith<F, T>['setTrait'];
    setTraits: IFlagsmith<F, T>['setTraits'];
}
export declare const useFlagsmith: <F extends string = string, T extends string = string>(options: IInitConfig<F, T>, flagsmithInstance?: IFlagsmith<string, string>) => FlagsmithHelper<F, T>;
type ComputedObject<Key extends string, ComputedValue> = {
    [K in Key]: ComputedRef<ComputedValue>;
};
export declare const useFlags: <F extends string = string, T extends string = string>(flagsToUse: F[], flagsmithHelper?: FlagsmithHelper<F, T>) => ComputedObject<F, IFlagsmithFeature | undefined>;
export declare const useTraits: <F extends string = string, T extends string = string>(traitsToUse: T[], flagsmithHelper?: FlagsmithHelper<F, T>) => ComputedObject<T, IFlagsmithTrait | undefined>;
export declare const useFlagsmithLoading: <F extends string = string, T extends string = string>(flagsmithHelper?: FlagsmithHelper<F, T>) => { [K in keyof LoadingState]: ComputedRef<LoadingState[K]>; };
export {};
