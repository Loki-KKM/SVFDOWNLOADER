import { ModelDerivativeClient, Region } from '@aps_sdk/model-derivative';
import { IAuthenticationProvider } from '../common/authentication-provider';
export interface IDownloadOptions {
    region?: Region;
    outputDir?: string;
    log?: (message: string) => void;
    failOnMissingAssets?: boolean;
}
export interface IDownloadTask {
    ready: Promise<void>;
    cancel: () => void;
}
export declare class Downloader {
    protected authenticationProvider: IAuthenticationProvider;
    protected readonly modelDerivativeClient: ModelDerivativeClient;
    constructor(authenticationProvider: IAuthenticationProvider);
    download(urn: string, options?: IDownloadOptions): IDownloadTask;
    private _downloadDerivative;
    private _download;
}
//# sourceMappingURL=downloader.d.ts.map