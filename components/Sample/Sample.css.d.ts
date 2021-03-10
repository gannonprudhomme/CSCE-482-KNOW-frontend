declare namespace SampleCssNamespace {
  export interface ISampleCss {
    test: string;
  }
}

declare const SampleCssModule: SampleCssNamespace.ISampleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SampleCssNamespace.ISampleCss;
};

export = SampleCssModule;
